// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { Container } from "./components/Container";

// function App() {
//   return (
//     <div className="App">
//       <Container />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";

import FriendsList from "./components/FriendsList";

function App() {
  // const [formValues, setFormValues] = useState({
  //   username: "",
  //   password: ""
  // });
  // const valueChange = e => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };

  // const loginUser = e => {
  //   e.preventDefault();
  //   console.log("form values", formValues);
  // };
  return (
    // <div className="App">
    //   Hello from App!
    //   <Login />
    //   <PrivateRoute />
    //   <Login
    //     loginUser={loginUser}
    //     formValues={formValues}
    //     valueChange={valueChange}
    //   />
    //   <PrivateRoute />
    // </div>

    <div className="App">
      Hello from App!
      <Route exact path="/" render={props => <Login {...props} />} />
      <PrivateRoute
        exact
        path="/friends"
        render={props => <FriendsList {...props} />}
      />
    </div>
  );
}

export default App;
