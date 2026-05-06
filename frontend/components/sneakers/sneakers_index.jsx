import React from 'react';
import SneakerIndexItem from './sneakers_index_item';

const uniqueValues = (sneakers, key) => {
    const seen = new Set();
    sneakers.forEach((s) => {
        if (s[key]) seen.add(s[key]);
    });
    return Array.from(seen).sort();
};

class SneakerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            brands: new Set(),
            silhouettes: new Set(),
            sort: 'featured',
        };
        this.onSearch = this.onSearch.bind(this);
        this.toggleFacet = this.toggleFacet.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchSneakers();
        window.scrollTo(0, 0);
    }

    onSearch(e) {
        this.setState({ search: e.target.value });
    }

    onSortChange(e) {
        this.setState({ sort: e.target.value });
    }

    toggleFacet(facet, value) {
        return () => {
            const next = new Set(this.state[facet]);
            if (next.has(value)) next.delete(value); else next.add(value);
            this.setState({ [facet]: next });
        };
    }

    clearFilters() {
        this.setState({ brands: new Set(), silhouettes: new Set(), search: '' });
    }

    applyFilters(sneakers) {
        const { search, brands, silhouettes, sort } = this.state;
        const q = search.trim().toLowerCase();

        const filtered = sneakers.filter((s) => {
            if (q && s.name.toLowerCase().indexOf(q) === -1) return false;
            if (brands.size > 0 && !brands.has(s.brand)) return false;
            if (silhouettes.size > 0 && !silhouettes.has(s.silhouette)) return false;
            return true;
        });

        if (sort === 'price-asc') {
            return filtered.slice().sort((a, b) => (a.minPrice || Infinity) - (b.minPrice || Infinity));
        }
        if (sort === 'price-desc') {
            return filtered.slice().sort((a, b) => (b.minPrice || -Infinity) - (a.minPrice || -Infinity));
        }
        if (sort === 'name') {
            return filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
        }
        return filtered;
    }

    renderFacet(label, key, options) {
        const selected = this.state[key];
        return (
            <div className="facet">
                <h3 className="facet__title">{label}</h3>
                <ul className="facet__list">
                    {options.map((opt) => (
                        <li key={opt} className="facet__item">
                            <label className="facet__label">
                                <input
                                    type="checkbox"
                                    checked={selected.has(opt)}
                                    onChange={this.toggleFacet(key, opt)}
                                />
                                <span>{opt}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        const { sneakers } = this.props;
        if (!sneakers) return null;

        const brandOptions = uniqueValues(sneakers, 'brand');
        const silhouetteOptions = uniqueValues(sneakers, 'silhouette');
        const visible = this.applyFilters(sneakers);
        const { search, brands, silhouettes, sort } = this.state;
        const hasFilters = brands.size > 0 || silhouettes.size > 0 || search;

        return (
            <div className="shop">
                <header className="shop__header">
                    <div className="shop__title-row">
                        <h1 className="shop__title">Shop All</h1>
                        <span className="shop__count">{visible.length} results</span>
                    </div>
                    <div className="shop__controls">
                        <input
                            type="text"
                            className="shop__search"
                            placeholder="Search sneakers"
                            value={search}
                            onChange={this.onSearch}
                        />
                        <select className="shop__sort" value={sort} onChange={this.onSortChange}>
                            <option value="featured">Featured</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name">Name: A–Z</option>
                        </select>
                    </div>
                </header>

                <div className="shop__layout">
                    <aside className="shop__filters">
                        <div className="shop__filters-head">
                            <span>Filters</span>
                            {hasFilters && (
                                <button type="button" className="shop__clear" onClick={this.clearFilters}>
                                    Clear
                                </button>
                            )}
                        </div>
                        {this.renderFacet('Brand', 'brands', brandOptions)}
                        {this.renderFacet('Silhouette', 'silhouettes', silhouetteOptions)}
                    </aside>

                    <section className="shop__grid">
                        {visible.length === 0 ? (
                            <div className="shop__empty">No sneakers match your filters.</div>
                        ) : (
                            visible.map((sneaker) => (
                                <SneakerIndexItem key={sneaker.id} sneaker={sneaker} />
                            ))
                        )}
                    </section>
                </div>
            </div>
        );
    }
}

export default SneakerIndex;
