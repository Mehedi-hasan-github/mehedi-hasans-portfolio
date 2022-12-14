
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';




function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='header' element={<Header></Header>}></Route>
       <Route path='services' element={<Services></Services>}></Route>
       <Route path='about' element={<About></About>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='profile' element={<Profile></Profile>}></Route>
       <Route path='login' element={<Login></Login>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
