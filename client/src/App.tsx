import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Search from '@components/Search';
import { AppProvider } from '@contexts/AppContext';
import HomePage from '@pages/HomePage';
import ItemDetails from '@pages/ItemDetails';
import ItemsResult from '@pages/ItemResult';
import GlobalStyle from '@styles/GlobalStyle';

const App: FC = (): JSX.Element => {
  return (
    <AppProvider>
      <Router>
        <GlobalStyle />
        <Search />

        <Routes>
          <Route path="/items" element={<ItemsResult />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
