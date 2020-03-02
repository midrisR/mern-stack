import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import App from '../App'
import Login from '../Login'
import { Hooks } from '../Hooks'
import { GlobalProvider } from '../context/GlobalState'




const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}




export const Routes = () => {
    return (
        <Router>
            <GlobalProvider>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <PrivateRoute path="/home" component={App} />
                    <Route path="/hooks" component={Hooks} />
                </Switch>
            </GlobalProvider>
        </Router>
    )
}




