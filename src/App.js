import './App.css';
import React, {useState} from 'react';

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from './graphql/graphql-client.js';
import PokeContainer from './components/PokeContainer';
import PokedexHeader from './components/PokedexHeader';
import PokedexFooter from './components/PokedexFooter';
import PaginationContext, {TotalItemsContext} from './contexts/PaginationContext';

function App() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);

  return (
    <ApolloProvider client={client}>
      <PaginationContext.Provider value={[page, setPage]}>
        <TotalItemsContext.Provider value={[total, setTotal]}>
          <PokedexHeader />
          <PokeContainer />
          <PokedexFooter /> 
        </TotalItemsContext.Provider>
      </PaginationContext.Provider>
    </ApolloProvider>
  );
}

export default App;
