import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ResetCss from "./styles/ResetCss";
import Plans from "./components/Plans"
import Premium from "./components/Premium";


render(
  <BrowserRouter>
  <ResetCss />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="plans" element={<Plans/>}/>
        <Route path="premium" element={<Premium/>}/>
        <Route path="*" element={<NoRoute/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);