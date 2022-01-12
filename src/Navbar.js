import {Link} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
const Navbar = () => {
    const [{user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return ( 
        <nav className="navbar">
            <h1>BlogOmedia</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New Blog</Link>
                <Link onClick ={handleAuthentication} to='/SignIn'>{user? 'SignOut': 'Sign In'}</Link>
             </div>
            <div className="username">Hello {user?.email}</div>
        </nav>
     );
}
 
export default Navbar;
