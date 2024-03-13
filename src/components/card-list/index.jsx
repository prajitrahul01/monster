
import { Component } from 'react';
import './index.css';
import Card from '../card';

// class CardList extends Component{
//     constructor(){
//         super();
//         this.state = {
//             monsters:[]
//         }
//         // this.componentDidMount = this.componentDidMount.bind(this);
//     }
//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(users => this.setState({
//             monsters: users
//         }));
//     }

//     render(){
//         return (
//         <div className="card-list">
//            {this.state.monsters.map(monster => (
//                <Card monster={monster} />
//          ))}
//        </div>)
//     }

// }
// export default CardList;
const CardList = (props) => (
    <div className="card-list">
        {props.monsters.map((monster, index) => (
            <Card key={index} monster={monster} />
        ))}
    </div>
)
export default CardList;
