import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <BrowserRouter>
        <Navbar />
            <Container maxWidth='xl'>
                <Routes>
                    <Route path="/" exact element={<Navigate to="/auth" />} />
                    <Route path="/posts" exact element={<Home />} />
                    <Route path="/posts/search" exact element={<Home />} />
                    <Route path="/posts/:id" exact element={<PostDetails />} />
                    <Route path='/creators/:name' exact element={<CreatorOrTag />} />
                    <Route path='/tags/:name' exact element={<CreatorOrTag />} />
                    <Route path="/auth" exact element={!user ? <Auth /> : <Navigate to="/posts"/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
    )
};

export default App;