import React from 'react';

export const PaginationContext = React.createContext([{}, () => {}]);
export const TotalItemsContext = React.createContext([{}, () => {}]);

export default PaginationContext;
