import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar.jsx";
import Sidebar from "./components/Toolbar/Sidebar.jsx";
import Home from "./components/home";
// import HomePage from "./components/homePage/homePage";
import Completion from "./components/Completion";
import "./app.scss";
import LoginForm from "./components/loginForm";
import UserForm from "./components/signUpForm/UserForm";
import Orders from "./components/YourOrders";
import CurrentOrders from "./components/CurrentOrders";
import Profile from "./components/Profile";
import DriverOrders from "./components/DriverOrders";
import DriverOrd from "./components/DriverOrd";
import NavBar from "./components/Toolbar/Toolbar.jsx";

import NavbarUser from "./components/Toolbar/NavbarUser";

import { BrowserRouter, Route } from "react-router-dom";
import DrawerIcon from "./components/Toolbar/Drawer";

import Settings from "./components/Settings";
import About from "./components/About";
import SocialFollow from './components/SocialFollow';
import ContactForm from './components/contactForm/ContactForm';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Sidebar /> */}
        <NavBar />
        {/* <DrawerIcon /> */}
        <main >
        
        </main>
        
        
        <Route exact path={"/LoginForm"} component={LoginForm} />
        <Route
          exact
          path={"/UserForm"}
          component={UserForm}
          className="signUp"
        />
        {/* <NavBar /> */}
        {/* <DrawerIcon /> */}
        <main></main>
        <Route exact path={"/NavbarUser"} component={NavbarUser} />
        <Route exact path={"/DrawerIcon"} component={DrawerIcon} />
        {/* <Route exact path={"/LoginForm"} component={LoginForm} /> */}
        {/* <Route
          exact
          path={"/UserForm"}
          component={UserForm}
          className="signUp"
        /> */}
        <Route exact path={"/Home"} component={Home} />
        {/* <Route exact path={"/HomePage"} component={HomePage} /> */}
        <Route exact path={"/Completion"} component={Completion} />
        <Route exact path={"/Orders"} component={Orders} />
        <Route exact path={"/DriverOrd"} component={DriverOrd} />
        <Route exact path={"/CurrentOrders"} component={CurrentOrders} />
        <Route exact path={"/Settings"} component={Settings} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/SocialFollow"} component={SocialFollow} />
        <Route exact path={"/ContactForm"} component={ContactForm} />

      
        {/* <Profile />
        <DriverOrders /> */}
      </div>
     
    </BrowserRouter>
  );
};
export default App;
