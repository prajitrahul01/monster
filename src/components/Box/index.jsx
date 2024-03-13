import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './index.css';
import LoginPage from '../Login';
import SignUp from '../Signup';
import { styled } from '@mui/material/styles';

export const Box1 = (props) => {

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '150ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }} minHeight="200px">
                <Grid item xs={12} sm={6}>
                    {/* xs={12} makes the component take full width on small screens, sm={6} makes it take half width on medium screens and above */}
                    <LoginPage />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignUp />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Box1;
