import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cadastro_PoloDigital from "./pages/Cadastro_PoloDigital";
import FomStep1 from "./pages/Registration/FormStep1";
import FormStep2 from "./pages/Registration/FormStep2";
import FormStep3 from "./pages/Registration/FormStep3";
import FormStep4 from "./pages/Registration/FormStep4";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { isAuthenticated } from "./services/auth";

//import { GlobalStyle } from "./styles/global";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{ pathname: "/login", state: { from: props.location } }}
//         />
//       )
//     }
//   />
// );

const Routes = () => (
  <BrowserRouter>
    {/* <GlobalStyle /> */}
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/cadastro" component={Cadastro_PoloDigital} />

      <Route path="/step1" component={FormStep2} />
      {/* <Route path="/step2" component={FormStep2} />
      <Route path="/step3" component={FormStep3} />
      <Route path="/step4" component={FormStep4} /> */}

      {/* <PrivateRoute path="/" component={() => <h1>Hello World</h1>} /> */}

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;