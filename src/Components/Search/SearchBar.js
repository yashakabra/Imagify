import React from "react";

const SearchBar = (props) => {
    return (
            <div class="input-group rounded w-75">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
    );
}

export default SearchBar;