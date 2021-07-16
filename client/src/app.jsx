import './app.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/views/landingPage/landingPage';
import LoginPage from './components/views/loginPage/loginPage';
import RegisterPage from './components/views/registerPage/registerPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
