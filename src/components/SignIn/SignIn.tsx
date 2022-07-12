import React, {useState} from 'react';
import axios from 'axios';
import { Avatar, Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container } from '@mui/material';
import {Person} from '@mui/icons-material'
import { theme } from '../../Theme/themes'

const signinStyles={
    containerStyle:{
        maxWidth: "50%"
    },
    typographyStyle:{
        textAlign: 'center',
        fontSize:'2em'
    },
    formStyle:{
        display: 'block',
        justifyContent: 'center',
    },
    avatarStyle:{
        m: 1,
        bgcolor: theme.palette.secondary.main
    },
    
}


export const SignIn = () => {
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const signInUser = async () => {    
        try{
            const response = await axios.post('/signin',{
                username,
                password
            })
            if (response.status == 200){
                window.location.href = '/profile'
            };
        } catch (error: any){
            if (error.response.status == 401){
                alert('Invalid credentials')
            }         
    }
    
}
    return (
        
            <Container component='main' sx={signinStyles.containerStyle}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={signinStyles.avatarStyle}>
                        <Person />
                    </Avatar>
                    <Typography component='h1' variant='h4'>Sign In</Typography>
                    <Box component = 'form' sx={{mt:3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name = 'username'
                                    required
                                    fullWidth
                                    label= 'Username'
                                    autoFocus
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name = 'password'
                                    type = 'password'
                                    required
                                    fullWidth
                                    label= 'Password'
                                    autoFocus
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Button onClick={() => signInUser()}
                                    type ='button'
                                    fullWidth
                                    variant='contained'
                                    sx={{mt:3, mb:2}}>
                                    Sign In
                            </Button>
                            <Grid container justifyContent='flex-center'>
                                <Grid item>
                                    <Link href='/signup'>Don't have an account? Sign up here</Link>
                                </Grid>
                            </Grid>
                        </Grid>                    
                    </Box>      
                </Box>
            </Container>
            
    )
}