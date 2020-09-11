import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Context/Authentication';

const PrivateRoute = ({ component: RouteComponent, children, ...rest }) => {
    const { user } = useContext(AuthContext);
    return (
        <Route exact path="/"
            {...rest}
            render={
                routeProps =>
                    user ?
                        <RouteComponent {...routeProps} /> :
                        <Redirect to={'/'} />
            }
        />
    )
}

export default PrivateRoute;
