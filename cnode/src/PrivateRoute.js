import React from 'react'
import { Route,Redirect} from 'react-router-dom'
import authStore from './store/auth'
{/* <PrivateRoute path="./collect" component={Collect} /> */}
// import React from 'react';
// function PrivateRoute(){

// }

function PrivateRoute(props) {
//    auth
    const isLogin = authStore.isLogin;
    // react-router
    // <Route />
    const { path ,component} = props;
    if(!isLogin){
        return<Redirect to= "/login" />
    }
    // return(
    //     // <Route path ={""} component={} />
    // )
}

export default PrivateRoute
