import React from 'react';
import { AppBar, IconButton, Toolbar, Slide, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import pokeball from '../images/pokeball.png';
import pokemonLogo from '../images/pokemon_logo.png'

const useStyles = makeStyles({
  header: {
    backgroundColor: 'red',
    textAlign: 'center',
    borderTop: '3px solid black',
    borderBottom: '3px solid black',
    fontFamily: 'Courier New'

  },
  pokeball: {
    maxHeight: '50px',
    height: '50px',
    marginRight: '20px',
  },
  pokemonLogo: {
    height: '50px',
    marginLeft: 'auto',
  },
});


export default function PokedexHeader () {
    const trigger = useScrollTrigger();
    const classes = useStyles();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={classes.header}>
          <Toolbar>
          <IconButton edge="start">
            <img src={pokeball} className={classes.pokeball}/><img/>
          </IconButton>
            <Typography variant="h6">
              GraphQL Pokedex
            </Typography>
            <img src={pokemonLogo} className={classes.pokemonLogo}/><img/>
          </Toolbar>
        </AppBar>
      </Slide>
    )
}