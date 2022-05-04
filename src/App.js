import { Container} from '@mui/material';
import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import { Main } from './containers/Main';
import { SignIn } from './containers/SingIn';
import { SignUp } from './containers/SignUp';
import { Home } from './containers/Home';
import { Photos } from './containers/Photos';
import { Albums } from './containers/Albums';
import { UserUpdate} from './containers/UserUpdate'
import { Posts} from './containers/Posts'
import { Settings} from './containers/Settings'
import { PasswordChange } from './containers/PasswordChange'
import { Creates } from './containers/Creates';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/home' element={<Home/>}>
            <Route path="photos" element={<Photos/>} />
            <Route path="albums" element={<Albums/>} />
            <Route path="posts/:id" element={<Posts/>} />
        </Route>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/settings/edit' element={<UserUpdate/>}/>
        <Route path='/settings/password' element={<PasswordChange/>}/>
        <Route path='/creates' element={<Creates/>}/>
        <Route path='/creates/photo' element={<UserUpdate/>}/>
        <Route path='/creates/album' element={<PasswordChange/>}/>
      </Routes>
      
    </Container>
  );
}

export default App;
