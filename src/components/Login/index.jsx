// LoginPage.jsx
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Link,
  } from '@mui/material';
import './index.css'; 
const LoginPage = () => {
    return (
        
      <Paper elevation={3} className="login-paper" >
        <Typography variant="h5" align="center" gutterBottom className="formTitle">
          Login
        </Typography>
            <TextField id="user_email" label="Email" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <br /><br/>
            <Button variant="contained">Login</Button>
        </Paper>
        
        
    );
 
}
export default LoginPage;


