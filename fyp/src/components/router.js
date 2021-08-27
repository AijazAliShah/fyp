import React from "react";
import { Route } from "react-router-dom";
import CreateAccount from "../components/CreateAccount";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import BasicInfo from "../components/BasicInfo";
import BasicInfoStep2 from "../components/BasicInfoStep2";
import BasicInfoStep3 from "../components/BasicInfoStep3";
import Blog from "../components/Blog";
import HowItsWorks from "../components/HowItsWorks";
import '../i18n';
import AboutUs from "../components/AboutUs";
import ProjectDetail from "../components/ProjectDetail";
import ProfileDashboard from "../components/ProfileDashboard";
import NewProjectWizardStep1 from "../components/NewProjectWizardStep1";
import NewProjectWizardStep2 from "../components/NewProjectWizardStep2";
import NewProjectWizardStep3 from "../components/NewProjectWizardStep3";
import NewProjectWizardBasicInfo1 from "../components/NewProjectWizardBasicInfo1";
import NewProjectWizardBasicInfo2 from "../components/NewProjectWizardBasicInfo2";
import NewProjectWizardBasicInfo3 from "../components/NewProjectWizardBasicInfo3";
import NewProjectWizardBasicInfo4 from "../components/NewProjectWizardBasicInfo4";
import NewProjectWizardBasicInfo5 from "../components/NewProjectWizardBasicInfo5";
import NewProjectWizardBasicInfo6 from "../components/NewProjectWizardBasicInfo6";
import NewProjectWizardBasicInfo7 from "../components/NewProjectWizardBasicInfo7";
import OngoingProjectDetialsCustomerEnd from "../components/OngoingProjectDetialsCustomerEnd";
import DashboardCustomer from "../components/DashboardCustomer";
import DashBoardServiceProvider from "../components/DashBoardServiceProvider";
import NewProjectWizardBasicInfo8 from "../components/NewProjectWizardBasicInfo8";
import CompletedProjects from "../components/CompletedProjects";
import CustomerView from "../components/CustomerView";
import ServiceProviderView from "../components/ServiceProviderView";
import ForgotPassword1 from "../components/ForgotPassword1";
import ForgotPassword2 from "../components/ForgotPassword2";
import Login from "../components/Login";
import DirectAccess from "../components/directAccess";
import ProjectTracker from "../components/ProjectTracker";
import Bids from "../components/Bids";
import Settings from "../components/Settings";
import ReviewServiceProvider from "../components/ReviewServiceProvider";
import ServiceProviderProjectsDetails from "../components/ServiceProviderProjectsDetails";
import ReviewCustomer from "../components/ReviewCustomer";
import Notifications from "../components/Notifications";
import DraftPage1 from "../components/DraftPage1";
import OngoingProjectDetialsServiceProviderEnd from "../components/OngoingProjectDetialsServiceProviderEnd";
import Chat from "../components/Chat";
import Projects from "../components/Projects";
import CustomRoute from "./CustomRoute";
import PrivateRoute from "../services/PrivateRoute";
import authActions from "../Store/actions/userActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"; 
import AllProjects from "../components/AllProjects";
import BidPlaces from "../components/BidPlaces";
import CommingSoon from "../components/CommingSoon";
import ProjectDetailUser from "../components/ProjectDetailUser";
import NewScreen from "../components/NewScreen";
import ServiceProviderDetailsUser from "../components/ServiceProviderDetailsUser";
import ServiceProviderDetailsUser2 from "../components/ServiceProviderDetailsUser2";
import Planner from "../components/Planner";
import { reactLocalStorage } from 'reactjs-localstorage';
import i18n from "../i18n";

// window.OneSignal = window.OneSignal || [];
window.OneSignal = window.OneSignal || [];
const OneSignal = window.OneSignal;


OneSignal.push(function () {
  OneSignal.init({
    appId: "3b4b588c-0dc0-4626-8c03-049ee8281bc5",
    notifyButton: {
      enable: true,
    },
    subdomainName: "shs-builders",
  });
});

class ReactRouter extends React.Component {

  async componentDidMount() {
     
      if (this.props.lang !== i18n.language) {
        i18n.changeLanguage(this.props.lang)
         
      }
      // var lang = await api.getLanguage();
  

    await OneSignal.push(function () {
      /* These examples are all valid */
      var isPushSupported = OneSignal.isPushNotificationsSupported();
      if (isPushSupported) {
        // Push notifications are supported
        console.log("supported");
        OneSignal.isPushNotificationsEnabled(function (isEnabled) {
          console.log("sssssss");
          if (isEnabled) {
            console.log("Push notifications are enabled!");
            OneSignal.getUserId(function (userId) {
              console.log("OneSignal User ID123:", userId);
              reactLocalStorage.setObject('playerID', { 'playerID': userId });

              // (Output) OneSignal User ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316    
            });
          }
          else {
            console.log("Push notifications are not enabled yet.");
            OneSignal.push(function () {
              OneSignal.showSlidedownPrompt();
            });
          }
        });
      } else {
        // Push notifications are not supported
        console.log("not supported");

      }
    });

    // OneSignal.push(()=> {
    //   OneSignal.init(
    //     {
    //       appId: "3b4b588c-0dc0-4626-8c03-049ee8281bc5", //STEP 9
    //       promptOptions: {
    //         slidedown: {
    //           enabled: true,
    //           actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
    //           acceptButtonText: "OMG YEEEEESS!",
    //           cancelButtonText: "NAHHH",
    //           categories: {
    //               tags: [
    //                   {
    //                       tag: "react",
    //                       label: "ReactJS",
    //                   },
    //                   {
    //                     tag: "angular",
    //                     label: "Angular",
    //                   },
    //                   {
    //                     tag: "vue",
    //                     label: "VueJS",
    //                   },
    //                   {
    //                     tag: "js",
    //                     label: "JavaScript",
    //                   }
    //               ]
    //           }     
    //       } 
    //     },
    //     welcomeNotification: {
    //       "title": "One Signal",
    //       "message": "Thanks for subscribing!",
    //     } 
    //   },
    //     //Automatically subscribe to the new_app_version tag
    //     OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
    //       // Callback called when tag has finished sending
    //       console.log('new_app_version TAG SENT', tagsSent);
    //     })

    //   );
    //   console.log("OneSignal",OneSignal);

    // });
  }

  isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
  componentDidUpdate(prevprops) {
    if (prevprops.lang !== this.props.lang) {
      this.forceUpdate()
    }
  }
  render() {
    console.log(this.props);
    console.log(localStorage, "3333333333333333333333333");
    return (
      <React.Fragment>
        {/* <PrivateRoute local exact path="/" component={Home} /> */}
        <Route exact path="/">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <Home />}
        </Route>
        <Route exact path="/Home">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <Home />}
        </Route>
        <Route exact path="/Login">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <Login />}
        </Route>
        <Route exact path="/SignUp">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <SignUp />}
        </Route>
        {/* <Route exact path="/ProjectDetail/:id">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <ProjectDetail />}
        </Route> */}
        <Route exact path="/CreateAccount">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <CreateAccount />}
        </Route>
        <Route exact path="/BasicInfo">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <BasicInfo />}
        </Route>
        <Route exact path="/BasicInfoStep2">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <BasicInfoStep2 />}
        </Route>
        <Route exact path="/BasicInfoStep3">
          {!this.isEmpty(this.props.user) ? (this.props.user.type === "Customer" ? <Redirect to="/DashboardCustomer" /> : <Redirect to="/DashBoardServiceProvider" />) : <BasicInfoStep3 />}
        </Route>
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/HowItsWorks" component={HowItsWorks} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/CommingSoon" component={CommingSoon} />

        <Route exact path="/marketplace" component={NewScreen} />
        <Route exact path="/ProjectDetailUser/:id" component={ProjectDetailUser} />
        <Route exact path="/ProjectDetail/:id" component={ProjectDetail} />
        <Route exact path="/ServiceProviderDetailsUser/:id" component={ServiceProviderDetailsUser} />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardStep1"
          component={NewProjectWizardStep1}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="ServiceProviderDetailsUser2/:id"
          component={ServiceProviderDetailsUser2}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/Planner"
          component={Planner}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardStep2/:id"
          component={NewProjectWizardStep2}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardStep3/:id"
          component={NewProjectWizardStep3}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/ProjectTracker"
          component={ProjectTracker}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardBasicInfo1/:id"
          component={NewProjectWizardBasicInfo1}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardBasicInfo2/:id"
          component={NewProjectWizardBasicInfo2}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardBasicInfo3/:id"
          component={NewProjectWizardBasicInfo3}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardBasicInfo4/:id"
          component={NewProjectWizardBasicInfo4}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardBasicInfo5/:id"
          component={NewProjectWizardBasicInfo5}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardBasicInfo6/:id"
          component={NewProjectWizardBasicInfo6}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardBasicInfo7/:id"
          component={NewProjectWizardBasicInfo7}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/NewProjectWizardBasicInfo8/:id"
          component={NewProjectWizardBasicInfo8}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/CompletedProjects"
          component={CompletedProjects}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/Bids"
          component={Bids}
        />
        <Route
          authEd={this.props.user}
          exact
          path="/ServiceProviderView/:id"
          component={ServiceProviderView}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/ServiceProviderProjectsDetails"
          component={ServiceProviderProjectsDetails}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/CustomerView"
          component={CustomerView}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/DashboardCustomer"
          component={DashboardCustomer}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/DashBoardServiceProvider"
          component={DashBoardServiceProvider}
        />
        <Route exact path="/ForgotPassword1" component={ForgotPassword1} />
        <Route exact path="/ForgotPassword2/:email" component={ForgotPassword2} />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/Notifications"
          component={Notifications}
        />
        <Route exact path="/DirectAccess/:id" component={DirectAccess} />
        {/* this is new screens  */}
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/Settings"
          component={Settings}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/ReviewCustomer/:id/:uid"
          component={ReviewCustomer}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/ReviewServiceProvider/:id/:uid"
          component={ReviewServiceProvider}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/OngoingProjectDetialsCustomerEnd/:id"
          component={OngoingProjectDetialsCustomerEnd}
        />
        {/* <PrivateRoute
          authEd={this.props.user}
          exact
          path="/ServiceProviderProjectsDetails"
          component={ServiceProviderProjectsDetails}
        /> */}
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/Chat"
          component={Chat}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/Projects"
          component={Projects}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/ProfileDashboard"
          component={ProfileDashboard}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/Allprojects"
          component={AllProjects}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/BidPlaces"
          component={BidPlaces}
        />
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/draftPage/:id"
          component={DraftPage1}
        />
        {/* working on  */}
        <PrivateRoute
          authEd={this.props.user}
          exact
          path="/OngoingProjectDetialsServiceProviderEnd/:id"
          component={OngoingProjectDetialsServiceProviderEnd}
        />
      </React.Fragment>
    );
  }
}

// export default ;

const mapStateToProps = (state) => ({
  user: state.createUser.user,
  lang: state.setLang.lang,
});

const mapDispatchToProps = (dispatch) => ({
  addSignUpUser: (dt) => dispatch(authActions.addSignUpUser(dt)),
  removeSignUpUser: (dt) => dispatch(authActions.removeSignUpUser(dt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactRouter);
