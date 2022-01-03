
import {useState} from 'react';
import BlogList from './Bloglist';
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Shubhang', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Sharma', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Vergados', id: 3 }
    ]);

    return ( 
        <div className="home">
            <BlogList  blogs = {blogs} title="All Blogs!"/>
        </div>
     );
}
 
export default Home;
