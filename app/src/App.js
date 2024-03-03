import './App.css';
import { ThemeProvider } from './contextStore/themeContext';
import Navbar from './layout/navbar';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
    <Navbar/>
    </div>
    </ThemeProvider>
  );
}

export default App;
