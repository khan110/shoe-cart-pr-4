import React from 'react';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './About';
import Productitem from './Productitem';
import Product from './product';
import Navbar from './Navbar';


function RouteConfig() {

    return(

        <div>
          <Router>
              <Navbar />
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/Product" component={Product}/>
                  <Route path="/product/:id" component={Productitem}/>
                  <Route path="*" component={()=><h2>404 Not Found</h2>}/>
              </Switch>
          </Router>

        </div>
    );
}
export default RouteConfig;