import React from 'react';
import { Link } from 'react-router-dom';

const formatPrice = (n) => `$${Number(n).toLocaleString()}`;

const CartIndexItem = ({ cartItem, deleteCartItem }) => (
    <li className="cart-row">
        <Link to={`/sneakers/${cartItem.sneakerId}`} className="cart-row__media">
            {cartItem.photoUrl
                ? <img src={cartItem.photoUrl} alt={cartItem.sneakerName} />
                : <div className="cart-row__placeholder" />}
        </Link>

        <div className="cart-row__body">
            <Link to={`/sneakers/${cartItem.sneakerId}`} className="cart-row__name">
                {cartItem.sneakerName}
            </Link>
            <dl className="cart-row__meta">
                <div>
                    <dt>SKU</dt>
                    <dd>{cartItem.sku}</dd>
                </div>
                <div>
                    <dt>Size</dt>
                    <dd>US {cartItem.size}</dd>
                </div>
            </dl>
        </div>

        <div className="cart-row__right">
            <span className="cart-row__price">{formatPrice(cartItem.price)}</span>
            <button
                type="button"
                className="cart-row__remove"
                onClick={() => deleteCartItem(cartItem.id)}
                aria-label={`Remove ${cartItem.sneakerName} from cart`}
            >
                Remove
            </button>
        </div>
    </li>
);

export default CartIndexItem;
