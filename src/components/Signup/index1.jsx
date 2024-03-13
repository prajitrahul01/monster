import * as React from 'react';
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));;
class Signup extends Component {
    constructor() {
        super()
        this.state = {
            user_id: "",
            username: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleSubmit(event) {
        event.preventDefault()
        const { user_id, username, email, password } = this.state
        try {
            const body = {
                "user_id": user_id,
                "username": username,
                "email": email,
                "password": password,
            }
           
            const { signUpResponse } = axios.post('http://localhost:8085/user/registration', {
                user_id,
                username,
                email,
                password
            })
            console.log(signUpResponse);
            alert("sucessfully registered")
        } catch (error) {
            console.log(error)
            alert("registration failed pls try again")
        }
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Grid item xs={6} style={{ paddingRight: '40px', paddingBottom: '40px' }}>
                        <Grid item xs={12}>
                            <Item>
                                <TextField id="user-id" label="User Id" variant="outlined" name="user_id" onChange={this.handleChange} value={this.state.user_id}/>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <TextField id="user-name" label="User Name" variant="outlined" name="username" onChange={this.handleChange} value={this.state.username}/>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <TextField id="email" label="Email" variant="outlined" name="email" onChange={this.handleChange} value={this.state.email}/>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <TextField id="password" label="Password" variant="outlined" name="password" onChange={this.handleChange} value={this.state.password}/>
                            </Item>
                        </Grid>
                        <Item>
                            <Button variant="contained" type='submit'>Signup</Button>
                        </Item>
                    </Grid>
                </form>
            </>
        )
    }
}
export default Signup