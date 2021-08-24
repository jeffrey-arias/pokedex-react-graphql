import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pokemonContainer: {
      backgroundColor: 'lightgray',
      border: '1px solid black',
      borderRadius: '15px',
      width: 'calc((100%/3) - 22px)',
      minWidth: '300px',
      margin: '10px',
      cursor: 'pointer',
    },
    pokemonImage: {
      maxHeight: '200px',
      height: '200px',
      marginTop: '5px',
    } ,
    label : {
      textTransform: 'capitalize',
      color: 'black',
      fontFamily: 'Courier New',
      fontStyle: 'bold',
      fontSize: '20px',
      fontWeight: 'bold',
    }
  });
  
export default function Pokemon ({pokemon, handleOpen}) {
    const classes = useStyles();

    return(
        <div className={classes.pokemonContainer} onClick={handleOpen}>
            <center>
                <div >
                    <img src={pokemon.artwork} alt={pokemon.name} className={classes.pokemonImage} />
                </div>
                <p className={classes.label}>{pokemon.name}</p>
                    
            </center>
        </div>

    )
}
