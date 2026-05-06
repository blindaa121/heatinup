# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

HEAT is a sneaker e-commerce SPA: a Rails 5.2 JSON API backend (Ruby 2.5.1, PostgreSQL, ActiveStorage on S3) serving a React 16 / Redux / redux-thunk frontend bundled by Webpack 4. There is no Yarn lockfile or Babel config file — Webpack's `babel-loader` configures `@babel/env` and `@babel/react` inline in `webpack.config.js`. AJAX is done via jQuery's `$.ajax` (provided by `jquery-rails`), not `fetch`/`axios`.

## Commands

Frontend (Webpack):
- `npm start` — `webpack --watch --mode=development`, outputs `app/assets/javascripts/bundle.js`
- `npm run lint` — ESLint with `--fix` (airbnb + react/recommended; rules block in `.eslintrc.json` is empty)
- `npm install` runs `webpack` via `postinstall`

Rails:
- `bin/setup` — `bundle install` + `rails db:setup` + clear logs/tmp + restart
- `rails s` — start backend (Puma)
- `rails db:setup` / `rails db:migrate` / `rails db:seed` — seed file destroys and reseeds `Sneaker` records and pulls images from `https://sneaker-photos.s3-us-west-1.amazonaws.com/` keyed off SKU
- `rails test` — default Rails 5 minitest; single file: `rails test test/models/user_test.rb`; single test: `rails test test/models/user_test.rb -n test_name`

Local dev expects two processes running concurrently: `npm start` (rebuilds `bundle.js`) + `rails s`. Postgres databases are `heat_development` and `heat_test`.

## Architecture

### Single mount point, hash routing
The backend renders only one HTML page: `app/views/static_pages/root.html.erb`, which contains `<main id="root">` and a `window.currentUser` hydration script (rendered from `api/users/user.json.jbuilder` when signed in). Every URL except `/api/*` falls through to `static_pages#root` (see `config/routes.rb`). Client routing is `HashRouter` (`frontend/components/root.jsx`), so URLs look like `/#/sneakers/:id`. The deployed app is at `https://heat-check.herokuapp.com/#/`.

### API surface
All API endpoints live under `/api` and return JSON via JBuilder views in `app/views/api/`. Routes are nested: listings and reviews are scoped under `sneakers`. `application_controller.rb` calls `skip_before_action :verify_authenticity_token` globally, exposes `current_user`, `signed_in?`, `require_signed_in` as `helper_method`s, and implements custom session-token auth (BCrypt + `SecureRandom.base64` token stored in `session[:session_token]`) — no Devise.

### Redux state shape
Defined in `frontend/reducers/root_reducer.js` and `entities_reducer.js`:

```
{
  entities: { users, sneakers, listings, cartItems, reviews },
  session:  { currentUserId },
  errors:   { ... }
}
```

Action types are exported as string constants from the `frontend/actions/*_actions.js` files (alongside the thunks themselves). `frontend/index.jsx` checks `window.currentUser` and pre-populates `entities.users` + `session.currentUserId` before mounting; it also exposes `store`, `getState`, `dispatch`, and most action creators on `window` for in-browser debugging.

### Auth flow on the frontend
`frontend/util/route_utl.jsx` (note the typo — `route_utl`, not `route_util`) exports `AuthRoute` and `ProtectedRoute` HOCs that gate pages on `state.session.currentUserId`. `App.jsx` wires these into the route table; e.g. `/cart` is `ProtectedRoute`, `/login` and `/signup` are `AuthRoute`.

### Models and relationships
- `User` has many `listings` (as seller via `user_id`), `cart_items`, `reviews`. Auth via `password_digest` + `session_token`.
- `Sneaker` `has_one_attached :photo` (ActiveStorage), `has_many :listings`, `has_many :reviews`. SKU is unique.
- `Listing` belongs_to `:sneaker` and `:seller` (`User` via `user_id`); has size + price.
- `CartItem` joins `User` ↔ `Listing`.
- `Review` belongs to a user and a sneaker (no model file; controller exists).

JBuilder views in `app/views/api/sneakers/index.json.jbuilder` key the response by sneaker id (i.e. `{ "1": {...}, "2": {...} }`), not an array — reducers normalize accordingly.

### Asset/image plumbing
`app/views/layouts/application.html.erb` injects ~25 `window.<name> = "<%= image_url(...) %>"` globals for hero/styles imagery. Frontend components reference these globals directly. New static images added under `app/assets/images/` need a corresponding `window.*` line in the layout to be visible to React.

## Conventions and gotchas

- **One frontend bundle**: `webpack.config.js` outputs to `app/assets/javascripts/bundle.js`, which is included via Sprockets (`javascript_include_tag 'application'` → `app/assets/javascripts/application.js`). The bundle is gitignored — running `npm install` or `npm start` is required after a fresh checkout.
- **Action creators import their own constants**: `import * as SneakerAPIUtil from ...` patterns are used; new entity reducers must be added to `entities_reducer.js`.
- **API controllers use JBuilder partials**: `render :show` resolves to `app/views/api/<resource>/show.json.jbuilder`. Don't add `respond_to`/`format.json` blocks; the namespace already defaults to `format: :json`.
- **CSRF is disabled site-wide** for the API (skip in `ApplicationController`). Sessions use cookie-based session tokens, not JWT.
- **Known typo in code**: `Api::CartItemsController#update` references `@report.errors.full_messages` in its 422 branch — that's a bug (should be `@cart_item`). Don't propagate it; fix when touching that path.
- **Ruby 2.5.1 + Rails 5.2.3** are pinned. Modern syntax (`pattern matching`, `endless methods`, `Hash#except`) is unavailable.
- **`static_pages.coffee` and the `coffee-rails` gem** are leftover Rails defaults and unused.

## Branch policy for Claude

Develop on the assigned feature branch (`claude/add-claude-documentation-JJLm1` for this task). Create the branch locally if missing, commit with descriptive messages, push to that same branch, and never push to a different branch without explicit permission.
