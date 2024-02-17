import  Component from './Component';
import './App.css';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient= new QueryClient();
function App() {

   
  return(
    <QueryClientProvider client= {queryClient}>
      <Component/>
    </QueryClientProvider>
    
    
  )
    
  
}

export default App;
