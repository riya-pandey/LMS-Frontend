import { Component } from 'react';
import Register from './register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login'
import UserDetails from './userdetails'
import Dashboard from './dashboard';
import AddProduct from './addproduct';
import ViewProduct from './viewproduct';
import UpdateProduct from './updateproduct';
import Subscriber from './subscribers';
import ViewProductDetails from './viewproductdetails';

class Container extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                   
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                 
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/subscribers" component={Subscriber}/>

                    <Route exact path="/addproduct" component={AddProduct}/>
                    <Route exact path="/viewproduct" component={ViewProduct}/>
                    <Route exact path="/userdetails" component={UserDetails}/>
                    <Route exact path="/updateproduct/:id" component={UpdateProduct}/>
                    <Route exact path="/viewproductdetails/:id" component={ViewProductDetails}/>
                  
                    

                    

                    
                    
                </Switch>
                </BrowserRouter>

            </div>





        )
    }
}

export default Container;