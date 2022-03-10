import { AppRouter } from '../../router/AppRouter';
import { Navbar } from '../Navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}


export default App;
