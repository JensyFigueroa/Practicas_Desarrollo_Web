// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import React, {component} from 'react';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
// import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import NosotrosPage from "./page/NosotrosPage";
import RecetasPage from "./page/RecetasPage";
import DesayunosPage from "./page/DesayunosPage";
import AlmuerzosPage from "./page/AlmuerzosPage";
import CenasPage from "./page/CenasPage";
import PostresPage from "./page/PostresPage";
import GaleriaPage from "./page/GaleriaPage";
import NovedadesPage from "./page/NovedadesPage";
import ContactoPage from "./page/ContactoPage";


function App() {
  return (
       <Router>
          <Header/>
          <Nav/>
          <Switch>
            <Route path="/" exact component={HomePage} />;
            <Route path="/nosotros" exact component={NosotrosPage} />;
            {/* <Route path="/" exact component={RecetasPage} /> */};
            <Route path="/desayunos" exact component={DesayunosPage}/>;
            <Route path="/almuerzos" exact component={AlmuerzosPage}/>;
            <Route path="/cenas" exact component={CenasPage}/>;
            <Route path="/postres" exact component={PostresPage}/>;
            <Route path="/galerias" exact component={GaleriaPage} />;
            <Route path="/novedades" exact component={NovedadesPage} />;
            <Route path="/contacto" exact component={ContactoPage} />;
          </Switch>
          <Footer/>
        </Router>
  );
}

export default App;
