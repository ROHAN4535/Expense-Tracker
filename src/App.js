import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Welcome from "./Components/Welcome/Welcome";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import AuthProvider from "./Store/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="updateprofile" element={<UpdateProfile/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
