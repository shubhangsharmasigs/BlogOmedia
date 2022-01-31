import { useEffect, useState } from 'react';
import { db } from './firebase';
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from './StateProvider';


function Home() {
    const [blog,setBlog] = useState([]);
    const [{user}, dispatch] = useStateValue();
    useEffect(() => {

        
    db.collection("Blogs").onSnapshot(snapshot => {
        setBlog(snapshot.docs.map(doc => ({
            id:doc.id,
            blog:doc.data()})));
    })
},[]);
 console.log(blog);
 

// db.collection('Blogs').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         setBlog(blog=>[...blog,doc.data()])
        

//    })

// })
    
    return (

        <div className='home'>
            
            {user?<h1 className='home-heading'>Make Your Own Blogs In New Blog Section</h1>:<h1 className='home-heading'>SignIn to make new blogs</h1>}
            <div id='displayTable'>
                {blog.map((item,id) => {
                    console.log(item);
                    return (<div  className='displayUser' key ={item.id}><div><Avatar /><p className='dispUser'>{item.blog.User}</p></div>
                                  
                                  <div> <p className='displayTitle'>{item.blog.Title}</p> </div>
                                  <div><p className='displayBody'>{item.blog.Body}</p></div>
                    
                                  
                    
                    </div>
                    
                   
                    )
                    
                })}
                
                 
            </div>
            
        </div>
    )
}

export default Home
