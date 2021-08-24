import React, {useContext, useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons.js';
import Pokemon from '../components/Pokemon'
import PokeStatModal from '../components/PokeStatsModal'
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
    loadingMessage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: `calc(100vh - 150px)`,
        fontFamily: 'Courier New',
        fontWeight: 'bold'
    }
});
  
export default function PokeContainer (props) {
    const classes = useStyles();
    const [page] = useContext(PaginationContext);
    const [total, setTotal] = useContext(TotalItemsContext);
    const [open1, setOpen1] = useState(false);

    const handleOpen1 = () => {
        setOpen1(true);
    };
    
    const handleClose1 = () => {
        setOpen1(false);
    };

    const [open2, setOpen2] = useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };

    const [open3, setOpen3] = useState(false);

    const handleOpen3 = () => {
        setOpen3(true);
    };
    
    const handleClose3 = () => {
        setOpen3(false);
    };

    const [open4, setOpen4] = useState(false);

    const handleOpen4 = () => {
        setOpen4(true);
    };
    
    const handleClose4 = () => {
        setOpen4(false);
    };

    const [open5, setOpen5] = useState(false);

    const handleOpen5 = () => {
        setOpen5(true);
    };
    
    const handleClose5 = () => {
        setOpen5(false);
    };

    const [open6, setOpen6] = useState(false);

    const handleOpen6 = () => {
        setOpen6(true);
    };
    
    const handleClose6 = () => {
        setOpen6(false);
    };

    const [open7, setOpen7] = useState(false);

    const handleOpen7 = () => {
        setOpen7(true);
    };
    
    const handleClose7 = () => {
        setOpen7(false);
    };

    const [open8, setOpen8] = useState(false);

    const handleOpen8 = () => {
        setOpen8(true);
    };
    
    const handleClose8 = () => {
        setOpen8(false);
    };

    const [open9, setOpen9] = useState(false);

    const handleOpen9 = () => {
        setOpen9(true);
    };
    
    const handleClose9 = () => {
        setOpen9(false);
    };

    const returnShow = (index) => {
        switch(index) {
            case 0:
                return open1;
            case 1:
                return open2;
            case 2:
                return open3;
            case 3:
                return open4;
            case 4:
                return open5;
            case 5:
                return open6;
            case 6:
                return open7;
            case 7:
                return open8;
            case 8:
                return open9;
            default:
                return false;
        }
    }

    const returnHandleOpen = (index) => {
        switch(index) {
            case 0:
                return handleOpen1;
            case 1:
                return handleOpen2;
            case 2:
                return handleOpen3;
            case 3:
                return handleOpen4;
            case 4:
                return handleOpen5;
            case 5:
                return handleOpen6;
            case 6:
                return handleOpen7;
            case 7:
                return handleOpen8;
            case 8:
                return handleOpen9;
            default:
                return null;
        }
    }

    const returnHandleClose = (index) => {
        switch(index) {
            case 0:
                return handleClose1;
            case 1:
                return handleClose2;
            case 2:
                return handleClose3;
            case 3:
                return handleClose4;
            case 4:
                return handleClose5;
            case 5:
                return handleClose6;
            case 6:
                return handleClose7;
            case 7:
                return handleClose8;
            case 8:
                return handleClose9;
            default:
                return null;
        }
    }

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
    if (loading) return(
        <div className={classes.container}>
            <div className={classes.loadingMessage}><h2>Loading Pokemons...</h2></div>
        </div>)
    if (error) return (
        <div className={classes.container}>
            <div className={classes.loadingMessage}><h2>Error Loading Pokemons!</h2></div>
        </div>)
    setTotal(pokemons.count);
    return (
        <div className={classes.container}>
            {pokemons.results && pokemons.results.map( (pokemon, index) =>
                <>  
                    <Pokemon pokemon={pokemon} key={pokemon.id} 
                        handleOpen={returnHandleOpen(index)}
                        />
                    <PokeStatModal pokemonName={pokemon.name} 
                        image={pokemon.artwork}
                        show={returnShow(index)} 
                        handleClose={returnHandleClose(index)}
                             key={pokemon.name}/>
                </>)
            }
        </div>
    )
}