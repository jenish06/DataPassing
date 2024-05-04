import './App.css';
// import React, { createRef,PureComponent } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Params from './Components/Params';
import Filter from './Components/Filter';
import Contact from './Components/Contact';
import Company from './Components/Company';
import Channel from './Components/Channel';
import Other from './Components/Other';
import Login from './Components/Login';
import Protected from './Components/Protected';
import ErrorPage from './Components/ErrorPage';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/about" element={<Protected Component={About} />}/>
          <Route path="*" element={<ErrorPage />}/>
          {/* <Route path="*" element={<Navigate to="/" />}/> */}
          <Route path="/params/:name" element={<Protected Component={Params} />}/>
          <Route path="/filter" element={<Protected Component={Filter} />}/>
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Protected Component={Other} />} />
            </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App





