//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Pages/Signin';
import Home from './Pages/Home';
import theme from './theme';

function App() {
  // console.log(window.location.href);
  // const url = window.location.href;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1> NOT FOUND </h1>} />
        </Routes>
      </BrowserRouter>
      {/* {
        url === 'http://localhost:3000/'
          ? <Home />
          : <SignIn />
      } */}
    </ThemeProvider>
  );
}

export default App;
