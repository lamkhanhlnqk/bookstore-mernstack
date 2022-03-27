import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route index element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/signin' element={<Signin/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </main>
  </BrowserRouter>
);
export default App;
// return(<div className="App"><p>bbbbbbbbbbbbbbbb</p></div>);