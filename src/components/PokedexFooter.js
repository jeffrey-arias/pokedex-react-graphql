import React, {useContext} from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import PaginationContext, {TotalItemsContext} from '../contexts/PaginationContext';

const useStyles = makeStyles({
    footer: {
        backgroundColor: 'red',
        textAlign: 'center',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        top: 'auto',
        bottom: 0,
      },
    pagination: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
    },
});

export default function PokedexFooter () {
    const classes = useStyles();
    const [page, setPage] = useContext(PaginationContext);
    const [total, setTotal] = useContext(TotalItemsContext);
    const pageCount = Math.floor(total / 9);

    const handleChange = (event, value) => {
      setPage(value);
    };
  
    return (
        <AppBar className={classes.footer} >
          <Toolbar variant="dense">
              <Pagination count={pageCount} className={classes.pagination} 
                          color="default" onChange={handleChange} 
                          siblingCount={2}/>
          </Toolbar>
        </AppBar>
    )
}