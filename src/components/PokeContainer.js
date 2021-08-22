import React, {useContext} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemon.js';
import Pokemon from '../components/Pokemon'
import { makeStyles } from '@material-ui/core/styles';
import PaginationContext, {TotalItemsContext} from '../contexts/PaginationContext';

const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: 'white',
      minWidth: '250px',
      width: '100%',
      paddingTop: '90px',
      paddingBottom: '60px',
    },
});
  
export default function PokeContainer (props) {
    const classes = useStyles();
    const [page] = useContext(PaginationContext);
    const [total, setTotal] = useContext(TotalItemsContext);

    const offset = 9 * ( page - 1)
    const { loading, error, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS,  {
        context: {
            headers: {
                "Content-Type": "application/json",
            }
        },
        variables: {
            limit: 9,
            offset: offset
        },
    });
   if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    setTotal(pokemons.count);
    return (
        <div className={classes.container}>
            {pokemons.results && pokemons.results.map( pokemon => 
                <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
        </div>
    )
}