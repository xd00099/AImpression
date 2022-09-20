import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {

    return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/auth' exact element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
    )
};

export default App;