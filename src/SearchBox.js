import "./SearchBox.css";

const SearchBox = (props) => {
    return(
        <div className="search-container">
            <input 
                className="search-container__placeholder"   
                type="search" 
                placeholder="Search robots..." 
                onChange={props.searchChange}
            />
        </div>
    );
}

export default SearchBox;