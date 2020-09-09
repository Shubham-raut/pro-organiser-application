import React,{useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {AuthContext} from './Context/Authentication';

const PrivateRoute=({component:RouteComponent,children,...rest})=> {
    const{user}=useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={
                routeProps=>
                user?(
                    <RouteComponent {...routeProps}/>
                ):(
                    <Redirect to={'/login'}/>
                )                
            }
        />
    )
}

export default PrivateRoute;
