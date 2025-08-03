import './App.css'
import CardList from './component/card-list/card-list.component'
import { useState, useEffect, ChangeEvent } from 'react'
import  SearchBox from './component/search-box/search-box.component'
import { getData } from './utils/data.utils'

export type Monster = {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=> {
    const fetchUsers = async() => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='app-container'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={ onSearchChange } placeholder='search monsters'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App
