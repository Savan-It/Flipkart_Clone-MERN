import { Box } from '@mui/material';

//import context provider component
import DataProvider from './Context/DataProvider';

//components
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <DataProvider>
      <Header />  
      <Box style={{marginTop: 55}}>
        <Home/>
      </Box>    
    </DataProvider>
  );
}

export default App;
