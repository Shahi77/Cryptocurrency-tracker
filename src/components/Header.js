import { AppBar, Container, MenuItem, Select, Toolbar, Typography, createTheme } from '@material-ui/core';
import React from 'react'
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}))
function Header() {
    const classes = useStyles();
    const navigate = useNavigate();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate('/')}
                            variant="h5"
                            className={classes.title}
                        >
                            Crypto Hunter
                        </Typography>
                        <Select variant='outlined' style={{
                            width: 100,
                            height: 40,
                            marginRight: 15,
                        }}>
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'INR'}>INR</MenuItem>
                        </Select>
                    </Toolbar>

                </Container>

            </AppBar>
        </ThemeProvider>
    )
}

export default Header;