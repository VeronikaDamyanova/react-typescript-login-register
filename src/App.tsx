import { Route, Routes } from "react-router-dom";
import "./App.scss"
import Login from "./components/Forms/Login/Login";
import Register from "./components/Forms/Register/Register";
import TermsOfService from "./components/Forms/TermsOfService/TermsOfService";
import Profile from "./components/Profile/Profile";

function App() {
  return (

    <div className="App">
      <div className="authentication-container">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signUp" element={<Register />}/>
          <Route path="/termsOfService" element={<TermsOfService />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
