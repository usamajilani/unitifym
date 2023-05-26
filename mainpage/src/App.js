import logo from './logo.svg';
import './App.css';
import MAINCARDS from './components/MAINCARDS';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <div>

      <BrowserRouter>

<Routes>


<Route path="/main" element={     <MAINCARDS /> } />

<Route path="/" element={ <SignIn/>  } />
<Route path="/signup" element={ <SignUp/>  } />

</Routes>

</BrowserRouter>
  
      </div>
    </div>
  );
}

export default App;
