import { Box } from '@mui/material';

//import context provider component
import DataProvider from './Context/DataProvider';

//components
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import DetailView from './Components/Detail/DetailView';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <DataProvider>
      <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
    </DataProvider>
  );
}

export default App;
