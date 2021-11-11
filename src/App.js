// import logo from './logo.svg';
import './App.css';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import Details from './containers/dashboard/Details';
import CreateProduct from './containers/dashboard/createProduct';

import Header from './components/header';

//put in router link
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";


function App() {
  return (
    <>
    
    <Router className="App" basename = {process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        
        <Route path="/dashboard/:id" component={Details} />
        <Route path="/dashboard" component={Dashboard} />
        
        <Route path="/create" component={CreateProduct} />
        
        <Route path="/" exact component={Login} />
          
      </Switch>

     
     
    </Router>
    </>
  );
}

export default App;
