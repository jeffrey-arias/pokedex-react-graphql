import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '../graphql/get-pokemon-stat.js';

const useStyles = makeStyles({
    pokemonStat : {
      height: '290px',
      width: '50vw',
      backgroundColor: 'red',
      position: 'absolute',
      left: '25%',
      top: '25%',
      borderRadius: '0 0 0 40px',
      border: '5px solid black',
    },
    border : {
      backgroundColor: 'lightgray',
      border: '2px solid darkgray',
      margin:  '20px',
      height: 'auto',
      borderRadius: '0 0 0 30px'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      backgroundColor: 'lightgray',
      height: '100%',
      borderRadius: '0 0 0 30px'
    },
    itemLeft: {
      backgroundColor: 'white',
      margin: '20px',
      border: '1px solid black',

    },
    itemRight: {
      backgroundColor: '#9ACD32',
      margin: '20px 20px 20px 0',
      border: '1px solid black',
      padding: '10px',
      textTransform: 'capitalize',
      color: 'black',
      fontFamily: 'Courier New',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    pokemonImage: {
      maxHeight: '200px',
      height: '200px',
      marginTop: '5px',
    },
    label : {
    },
  });

  export default function PokeStatModal ({pokemonName, image, show, handleClose}) {
    const classes = useStyles();

    const { loading, error, data: { pokemon = [] } = {}  } = useQuery(GET_POKEMON,  {
      context: {
          headers: {
              "Content-Type": "application/json",
          }
      },
      variables: {
          name: pokemonName,
      },
  });

  const getHeightInM = (height) => {
    return height/10;
  }

  const getWeightInKg = (weight) => {
    return weight/10;
  }

  const getTypeAsString = (type) => {
    return String(type);
  }
    const body = (
      <div className={classes.pokemonStat}>
          <div className={classes.border} >
            <div className={classes.content}> 
              <div className={classes.itemLeft}>
                <center>
                    <img src={image} alt={pokemonName} className={classes.pokemonImage} />
                </center>
              </div>
              <div className={classes.itemRight}>
                <p># {pokemon.id}</p>
                <p>{pokemonName}</p>
                {pokemon.types && pokemon.types.length > 0 &&
                <p>Types: { pokemon.types.map ( types => 
                  types.type.name+' '
                )}</p>}
                <p>Height: {getHeightInM(pokemon.height)}m</p>
                <p>Weight: {getWeightInKg(pokemon.weight)}kg</p>
                {pokemon.stats && pokemon.stats.length > 0 && 
                  <>
                  <p>Base HP: {pokemon.stats[0].base_stat}</p>
                  <p>Base ATK: {pokemon.stats[1].base_stat}</p>
                  <p>Base DEF: {pokemon.stats[2].base_stat}</p>
                  <p>Base SPD: {pokemon.stats[5].base_stat}</p>
                  </>
                }
                {pokemon.moves && pokemon.moves.length > 0 && 
                  <>
                  <p>Moves: {pokemon.moves[0].move.name}, {pokemon.moves[1].move.name}</p>
                  </>
                }
                {pokemon.abilities && pokemon.abilities.length > 1 && 
                  <>
                  <p>Abilities: {pokemon.abilities[0].ability.name}, {pokemon.abilities[1].ability.name}</p>
                  </>
                }
              </div>
            </div>
          </div>    
      </div>
    );
    
    return (
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      > 
        {body}
     </Modal>
    )
  }