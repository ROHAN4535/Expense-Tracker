import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import AuthProvider from "./Store/AuthProvider";
import Profile from "./Components/UpdateProfile/Profile";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="updateprofile" element={<UpdateProfile/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
