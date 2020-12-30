import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxheight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    }
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" className={classes.img}></img>
                <div className={classes.grow}></div>
                <div className={classes.userSection}></div>
                <Button color="primary" variant="contained" className={classes.button}>Novo Post</Button>
                <SvgIcon className={classes.bell}>
                    <Bell/>
                </SvgIcon>
                <Avatar alt="Myckael Brenno" src="/" />
                {/* <div className="">
                    <a href> Conecta Dev</a>
                </div>
                <div className="">
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}
export default Header;