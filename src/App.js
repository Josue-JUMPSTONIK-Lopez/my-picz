import { Container} from '@mui/material';
import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import { Main } from './containers/Main';
import { SignIn } from './containers/SingIn';
import { SignUp } from './containers/SignUp';
import { Home } from './containers/Home';

//#FFD2BF
//#FFD2BC


// #FFD5EC
// #FFD8E9

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='/update' element={<UpdateUser/>}/> */}
      </Routes>
      
    </Container>
  );
}

export default App;
