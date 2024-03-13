
import {
  Paper,
  TextField,
  Button,
  Typography
} from '@mui/material';
import './index.css';
import {  useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [user_id, setUser_id] = useState(0)
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeUserId = (event) => {
    setUser_id(event.target.value)
  }
  const handleChangeUsername = (event) => {
    setname(event.target.value)
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // const { user_id, username, email, password } = this.state;
    try {
      const { signup } = axios.post('http://localhost:8085/user/registration', {
        user_id,
        name,
        email,
        password
      }
      )
      alert("Successfully registered")
    }
    catch (error) {
      console.log(error);
      alert("Registeraton failed pls try again");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Paper id="signup-form" elevation={3} className="login-paper">

          <Typography variant="h5" align="center" gutterBottom className="formTitle">
            Registration
          </Typography>
          <TextField onChange={handleChangeUserId} id="user_id" label="User Id" variant="outlined" name='user_id' />
          <TextField onChange={handleChangeUsername} id="name" label="Username" variant="outlined" name='name' />
          <TextField onChange={handleChangeEmail} id="email" label="Email" variant="outlined" name='email' />
          <TextField onChange={handleChangePassword} id="password" label="Password" variant="outlined" name='password' />
          <br /> <br />
          <Button variant="contained" type='submit'>Signup</Button>
        </Paper>
      </form>
    </>

  );
}
export default SignUp;


