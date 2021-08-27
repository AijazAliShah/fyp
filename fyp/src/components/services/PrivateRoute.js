import React from 'react';
import { Route } from 'react-router-dom';
import AuthRedirect from './AuthRedirect';

const PrivateRoute = ({component: Component, authEd, ...rest}) => {
    // console.log("sd",authEd)
    // alert(JSON.stringify(authEd))
    return (
        <Route {...rest}  render={props => (
            !isEmpty(authEd) ? (
            //  props.match.path === "/" ? (
            //   authEd && authEd.type === "Customer" ? (
            //     <DashboardCustomer {...props} />
            //    ) : (
            //     <DashBoardServiceProvider {...props} />
            //    )
            //  ):
                <Component {...props} /> 
            )
            : <AuthRedirect authEd={authEd} />
        )} />
    ); 
}; 
 
function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

export default PrivateRoute;