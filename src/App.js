import './App.css';
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route path="/create">
                <Create></Create>
            </Route>
            <Route path="/blogs/:id">
                <BlogDetails></BlogDetails>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch> 
        </div>
      </div>
    </Router>
  );
}

export default App;