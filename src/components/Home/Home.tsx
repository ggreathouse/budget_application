import React from 'react';
import { styled } from '@mui/system';
import { Copyright, CopyrightOutlined, CopyrightRounded } from '@mui/icons-material';
import { Button, Typography, Box, BoxProps, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import header_img from '../../assets/images/header-img.jpg';
import budget_img from '../../assets/images/budget-image.jpeg';
import flask_img from '../../assets/images/flask-image.png';
import postgresql_img from '../../assets/images/postgresql-image.png';
import react_img from '../../assets/images/react-logo.png';
import github_img from '../../assets/images/github-image.jpg'


interface Props{
    title: string
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(40,44,52)',
    
    
})

const LogoNavigation = styled('ul')({
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex',
    listStyle: 'none',
    
})

const NavA = styled(Link)({
    display: 'block',
    padding: '0.5em',
    margin: 20,
    color: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    border: '1px solid white',
    textDecoration: 'none'

})

const Header = styled('div')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${header_img})`,
    width: '100%',
    height: '60%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})

const AppText = styled(Item)({
    textAlign: 'center',
    margin: '5%',
    width: '40%',
    lineHeight: 2
})

const BudgetImage = styled(Item)({
    backgroundImage: `url(${budget_img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 612,
    height: 408

})

const GithubText = styled(Item)({
    textAlign: 'center',
    margin: '5%',
    width: '40%',
    lineHeight: 2
})

const GithubImage = styled(Item)({
    backgroundImage: `url(${github_img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 600,
    height: 392
})

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '300',
          ...sx,
        }}
        {...other}
      />
    );
  }


export const Home = ( props:Props ) => {
    return (
        <Root>
            <NavbarContainer>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/signup'>Sign Up</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>Sign In</NavA>
                    </li> 
                    <li>
                        <NavA to='/profile'>Profile</NavA>
                    </li>
                    
                </LogoNavigation>
            </NavbarContainer>
            <Header>
                <Button sx ={{backgroundColor: 'rgb(255,255,255, .7)',
                              color: 'black', 
                              border: '1px solid white',
                              borderRadius: 20,
                              padding: '0.5em',
                              top: '30%',
                              left: '38%'}} 
                variant="contained" component={Link} to="/signup">Sign Up</Button>

                <Button sx={{ backgroundColor: 'rgb(255,255,255, .7)',
                              color:'black', 
                              border: '1px solid white',
                              borderRadius: 20,
                              padding: '0.5em',
                              top: '30%',
                              left: '40%'}}
                variant="contained" color='success' component={Link} to="/profile">Make A Budget</Button>
            </Header>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 5,
                borderRadius: 1,
                marginTop: 50
                }}
            >
                <BudgetImage />
                <AppText>
                    <Typography align='center' variant='h5' style={{paddingBottom:10}}>Budget Application</Typography>
                    <Typography>Take control of your finances with this budget application! Each monthly budget is securely connected to your bank account.
                        Allocate a purchase to the correct budget item. The application will then deduct every purchase from that item forever. 
                        All you need to do is get started!
                    </Typography>
                </AppText>
            </Box>
            <Typography align="center" variant="h4" sx={{marginTop: 10}}>Tech Stack</Typography>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-around',
                p: 1,
                m: 5,
                borderRadius: 1,
                }}
            >
    
                <Card sx={{ maxWidth: 245 }}>
                
                        <CardMedia
                        component="img"
                        height="140"
                        image={flask_img}
                        alt="flask logo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Flask
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Flask side handles all api calls necessary for creating, updating, retrieving, and deleting budgets. 
                                It also generates a user token for authenticating users.
                            </Typography>
                        </CardContent>
                    
                </Card>
                <Card sx={{ maxWidth: 245 }}>
                
                        <CardMedia
                        component="img"
                        height="170"
                        image={postgresql_img}
                        alt="postgresql logo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                PostgreSQL
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This relational database is responsible for storing all users and thier budgets. Each budget is connected to a user by an id.
                            </Typography>
                        </CardContent>
                    
                </Card>
                <Card sx={{ maxWidth: 245 }}>
                
                        <CardMedia
                        component="img"
                        height="140"
                        image={react_img}
                        alt="react logo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                React
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                React is what brings you this magic to your eyeballs! 
                                Responsible for styling each page while also making request to the PostgreSQL database to allow users to play with thier budgets.
                            </Typography>
                        </CardContent>
                    
                </Card>
                
            </Box>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                borderRadius: 1,
                }}
            >
                <GithubText>
                    <Typography align='center' variant='h5' style={{paddingBottom:10}}>View on Github</Typography>
                    <Typography align='left'>If you are interested on how this project was developed, view it on Github!</Typography>
                    <Button sx={{ 
                              backgroundColor: 'rgb(0,0,0, .7)',
                              color: 'white', 
                              borderRadius: 20,
                              padding: '0.5em',}}
                              variant='contained' href='#' >See the Code</Button>
                </GithubText>
                <GithubImage />
            </Box>
            
            
            
        </Root>
    )
}
