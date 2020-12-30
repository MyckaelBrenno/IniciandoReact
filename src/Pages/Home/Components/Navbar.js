import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2), //= 8 * 2
        width: 275,
        marginRight: theme.spacing(2),
    },
    Button: {
        width: '100%',
    }
}));

const tags = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'reactjs' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'materialUI' },
    { id: 6, name: 'node.js' },
]

function Navbar() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.Button}>Registre-se Grátis</Button>
            <ListSubheader>Tags em Alta</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}> {/* mapeando a lista */}
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
    )
}

export default Navbar;