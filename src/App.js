import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SignIn from './SignIn';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [{},dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS>>>>", authUser);
      if(authUser){

        dispatch({
          type: "SET_USER",
          user:authUser
        })

      }else{

        dispatch({
          type:"SET_USER",
          user:null
        })
        
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/SignIn">
              <SignIn />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>  
          
        </div>
      </div>
    </Router>
  );
}

export default App;
