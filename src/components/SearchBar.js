import React from "react";

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <form className="d-flex my-3">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search product"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
        </form>
    );
};

export default SearchBar;