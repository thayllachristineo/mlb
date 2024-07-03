import React, { FC, PropsWithChildren, useState } from 'react';

import ContextType, { Data, Products } from './AppContext.types';

const DATA_INITIAL_VALUE: Data = {
  products: [],
  breadcrumbs: [],
};

const CONTEXT_INITIAL_VALUE: ContextType = {
  data: {
    products: [],
    breadcrumbs: [''],
  },
  setSearchResult: () => null,
};

const AppContext = React.createContext<ContextType>(CONTEXT_INITIAL_VALUE);

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<Data>(DATA_INITIAL_VALUE);

  const setSearchResult = (
    breadcrumbs: Array<string> | [],
    products: Products[],
  ): void => {
    setData({ ...data, breadcrumbs, products });
  };

  return (
    <AppContext.Provider value={{ data, setSearchResult }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
