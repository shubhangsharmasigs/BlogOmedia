import { useEffect, useState } from 'react';
import { db } from './firebase'

function Home() {
    const [blog,setBlog] = useState([]);
    useEffect(() => {

        db.collection('Blogs').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                setBlog(blog=>[...blog,doc.data()])
                

           })

       })

    },[setBlog])
    
    return (

        <div className='home'>
            <h1>Make Your Own Blogs In New Blog Section</h1>
            <div id='displayTable'>
                {blog.map((item,index) => {
                    return (<div key ={index}><p className='displayUser'>{item.User}</p>
                                  <p className='displayTitle'>{item.Title}</p>
                                  <p className='displayBody'>{item.Body}</p>
                    
                    </div>
                            
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home
