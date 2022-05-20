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
import {LockOutlined} from '@mui/icons-material'
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

export const SignUp = () => {
    const [firstName, setFirstName] = useState<String>('');
    const [lastName, setLastName] = useState<String>('');
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const signUpUser = async () => {    
        try{
            const response = await axios.post('/signup',{
                firstName,
                lastName,
                username,
                password
            })
            if (response.status == 200){
                window.location.href = '/signin'
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
                        <LockOutlined />
                    </Avatar>
                    <Typography component='h1' variant='h4'>Sign Up</Typography>
                    <Box component = 'form' sx={{mt:3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name = 'first_name'
                                    required
                                    fullWidth
                                    label= 'First Name'
                                    autoFocus
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name = 'last_name'
                                    required
                                    fullWidth
                                    label= 'Last Name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name = 'username'
                                    required
                                    fullWidth
                                    label= 'Username'
                                    autoFocus
                                    value={username}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Button onClick={() => signUpUser()}
                                    type ='button'
                                    fullWidth
                                    variant='contained'
                                    sx={{mt:3, mb:2}}>
                                    Sign Up
                            </Button>
                            <Grid container justifyContent='flex-center'>
                                <Grid item>
                                    <Link href='/signin'>Already have an account? Sign in here</Link>
                                </Grid>
                            </Grid>
                        </Grid>                    
                    </Box>      
                </Box>
            </Container>
            
    )
}