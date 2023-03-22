import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import '../style/global.css';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import ProductList from "../containers/ProductList";
import Home from "@pages/Home";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import useInitialState from "../hooks/useInitialState";
import AppContext from "@context/AppContext";


const App = () => {

    const initialState = useInitialState();

    return (

   
        <AppContext.Provider value={initialState}>       
         <BrowserRouter>
        <Header/>
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />		
                <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                <Route exact path="/product-list" element={<ProductList />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    </BrowserRouter> 
    </AppContext.Provider>

    );



}

export default App;