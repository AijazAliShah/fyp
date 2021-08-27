import React, { useEffect } from "react";
import PrivateRoute from "../services/PrivateRoute";
import authActions from '../Store/actions/userActions';
import '../i18n'

import { connect } from 'react-redux';

const CustomRoute = (props) => {
  console.log("PRO12S",props)
  const route = ['/', '/Home', '/SignUp','/CreateAccount', '/BasicInfo', '/BasicInfoStep2','/Blog', '/BasicInfoStep3', '/HowItsWorks','/AboutUs', '/ForgotPassword1', '/ForgotPassword2','/Login'];
  console.log(route.includes(props.path),"ss");

    return (
      <PrivateRoute
        path={props.path}
        exact={props.exact}
        authEd={props.user}
        component={() => (
            <props.component />
        )}
      />
    );
  };
  
  // export default App;
  
  
  const mapStateToProps = (state) => ({
    user: state.createUser.user, 
  });
  
  const mapDispatchToProps = (dispatch) => ({
    addSignUpUser: (dt) => dispatch(authActions.addSignUpUser(dt)),
    removeSignUpUser: (dt) => dispatch(authActions.removeSignUpUser(dt)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomRoute);
  
  