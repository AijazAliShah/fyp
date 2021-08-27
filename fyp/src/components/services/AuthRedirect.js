  
import React from "react";

// import { bindActionCreators } from "redux";
// import { authModalAsync, historyAsync } from "../../store/actions";
// import { connect } from "react-redux";
// import { reactLocalStorage } from "reactjs-localstorage";

export default class AuthRedirect extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {};
  }
  async componentWillMount() {
    console.log("a111111111111111111111111111sd",this.props);

    if (this.isEmpty(this.props.authEd)) {
      window.location = '/'
    }
  } 

  isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

  render() {
    return <div></div>;
  }
}


// const mapStateToProps = state => ({ user: state.getUser.user });
// const mapDispatchToProps = (dispatch, ownProps) =>
//   bindActionCreators(                                     
//     {
//       authModalAsync,
//       historyAsync
//     },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirect);