import { useEffect, useState } from "react"
import './index.css'
import { signupUser } from "../../redux/action/signup.action"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import SearchInput from "../../components/search-input"
import CardList from "../../components/card-list"
import { searchUser } from "../../redux/action/search.action"
import { fetchData } from "../../redux/action/action"
const Home = () => {
    // const [searchField,setSearchField]=useState("")

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    const monsters = useSelector(state => state.fetchUser.monsters);
    console.log("Monster: ",monsters)
    const isLoading = useSelector(state => state.fetchUser.isLoading)
    const error = useSelector(state => state.fetchUser.error)

    const handleChange = (event) => {
        const { value } = event.target;
        // setSearchField(value)
        dispatch(searchUser(value))
        console.log("search: ",event);
    }
    const searchField = useSelector(state => state.user.searchData)
    // const filterMonsters = monsters.filter(
    //     monster =>
    //         monster.name.toLowerCase().includes(searchField.toLowerCase())
    // )
    const filterMonsters = monsters
    .filter(
        monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        <p>Error: {error}</p>
    }

    console.log("Check: ", monsters);
    
    console.log("filterMonster: ", filterMonsters);
    
    
    return (
        <div className="App">
            <h1>Monster App</h1>
            <SearchInput handleChange={handleChange} /> 
            <CardList monsters={filterMonsters} />
        </div>
    )
}
export default Home;