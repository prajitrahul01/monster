import './index.css';
const SearchInput = ({handleChange}) => {
    return (
        <div>
            <input
                className="search-box"
                type='search'
                name="search"
                placeholder="search monster"
                onChange={handleChange}
            />

        </div>
    );
}

export default SearchInput;