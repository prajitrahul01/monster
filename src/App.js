import { Component } from 'react';
import './App.css';
import SearchInput from './components/search-input';
import CardList from './components/card-list';
import axios from 'axios';
import Box1 from './components/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import RegistrationPage from './components/Signup/index1';
import LoginPage from './components/Login';
import Home from './container/Home';
import { Provider } from 'react-redux';
import store from './redux';
class App extends Component {
    // constructor(){
    //             super();
    //             this.state = {
    //                 monsters:[],
    //                 searchField: ""
    //             }
    //             // this.componentDidMount = this.componentDidMount.bind(this);
    //         }
    //         componentDidMount(){
    //             fetch('http://localhost:8085/user/getAll')
    //             .then(res => res.json())
    //             .then(users => this.setState({
    //                 monsters: users
    //             }));
    //         }
    // handleChange = event => {
    //     console.log(event);
    //     const {name, value} = event.target
    //     this.setState({searchField:value}); 
    // }
    render() {
        // const {monsters, searchField} = this.state;
        // const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(
        //     searchField.toLowerCase()
        // ))
        return (
            // <div className='App'>
            //     <h1>Monster App</h1>
            //     <Box1/>
            //     <SearchInput handleChange={this.handleChange}/>
            //     <CardList monsters={filteredMonsters}/>
            // </div>
            <Provider store={store}>
            <Router>
            <Routes>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
            </Router>
            </Provider>
        )
    };
}
export default App;
