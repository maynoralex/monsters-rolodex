import { ChangeEventHandler } from 'react';
import './search-box.styles.css'

type SearchBoxProps = {
    placeholder?: string,
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) =>  {
    return(
        <input type='search' className = 'search-box' 
        placeholder={placeholder} 
        onChange={ onChangeHandler } />
    );
}

export default SearchBox;