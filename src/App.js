import { Container} from '@mui/material';
import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Main } from './containers/Main';
import { SignIn } from './containers/SingIn';
import { SignUp } from './containers/SignUp';

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
      </Routes>
      
    </Container>
  );
}

export default App;
