import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SignIn from './SignIn';
import { useEffect } from 'react';
import { auth, db } from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  // const blogList = document.querySelector('#display-blogs');

  // function renderBlogs(doc) {
  //   let li = document.createElement('li');
  //   let title = document.createElement('span');
  //   let author = document.createElement('span');

  //   li.setAttribute('data-id', doc.id);
  //   title.textContent = doc.data().Title;
  //   author.textContent = doc.data().Author;

  //   li.appendChild(title);
  //   li.appendChild(author);

  //   blogList.appendChild(li);
  // }


  // const displayTable = document.querySelector('#displayTable');
  // function renderBlogs(doc){
  //   const data1 = doc?.data().Title;
  //   const data2 = doc?.data().Author;
  //   displayTable.innerHTML =data1 +" written by "+ data2 ;
  //   console.log(doc?.data());
  // }

 


  const [{},dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("THE USER IS>>>>", authUser);
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
