import "./index.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import './index.css';
import axios from 'axios';
import {  useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editOpenUser } from "../../redux/action/editOpen.action";

const Card = (props) => {
  // const [open, setOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: props.monster.name,
  //   email: props.monster.email,
  //   user_id: props.monster.user_id,
  //   password: props.monster.password
  // });

  const [user_id, setUser_id] = useState(props.monster.user_id)
  const [name, setName] = useState(props.monster.name)
  const [email, setEmail] = useState(props.monster.email)
  const [password, setPassword] = useState(props.monster.password)
  const dispatch=useDispatch();
  // React.useEffect(() => {
  //   dispatch(editUser(props.monster));
  // }, [dispatch, props.monster]);
  // const monster = useSelector(state=>state.user.monster);
  const handleDelete = async () => {
    const id =props.monster.id;
    await axios.delete(`http://localhost:8085/user/delete/${id}`);
    window.location.reload(false);
   }
  
  const handleOpen = () => {dispatch(editOpenUser(true))};
  const handleClose = () =>{ dispatch(editOpenUser(false))};

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // }

  const handleChangeUserId = (event) => {
    setUser_id(event.target.value)
    // dispatch(editUser({user_id: event.target.value}));
  }
  const handleChangeUsername = (event) => {
    setName(event.target.value)
    // dispatch(editUser({name: event.target.value}));
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
    // dispatch(editUser({email: event.target.value}));
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
    // dispatch(editUser({password: event.target.value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const signup = await axios.post('http://localhost:8085/user/registration', {
        id: props.monster.id,
        name: name,
        password: password,
        user_id: user_id,
        email: email
      });
  
      dispatch(editOpenUser(false));
  
      alert("Successfully registered");
    } catch (error) {
      console.log(error);
      alert("Registration failed, please try again");
    }
  }
    const open = useSelector(state=>state.user.open);
    return (
        <div className="card-container">
            <img alt="monster image" src={`https://robohash.org/${props.monster.id + 10}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
            <div class="container">
                <div class="edit button-85" onClick={handleOpen}><EditIcon /></div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <div className="modal-content">
                        <h2>Edit Monster</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Id:</label>
                            <input type="number" value={user_id} onChange={handleChangeUserId}/>
                            <label>Email:</label>
                            <input type="email" value={email} onChange={handleChangeEmail}/>
                            <label>Username:</label>
                            <input type="text" value={name} onChange={handleChangeUsername} />
                            <label>Password:</label>
                            <input type="text" value={password} onChange={handleChangePassword}/>
                            {/* Add more form fields as needed */}
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                </Modal>
                <div class="delete button-85" onClick={handleDelete}><DeleteIcon /></div>
            </div>

        </div>
    )
}
export default Card;