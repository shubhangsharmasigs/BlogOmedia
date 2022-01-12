import { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

const Create = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [author,setAuthor] = useState('shubhang');
    const addBlog = document.querySelector('#add-blog');
    const [{user}, dispatch ] = useStateValue();
    const history = useHistory();
    
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        db.collection('Blogs').add({
            Title:addBlog.title.value,
            Body:addBlog.content.value,
            User:addBlog.author.value
            
        })
        history.replace('/');
        addBlog.reset();
    }

    return ( 
        <form  id='add-blog'>
            <div className="create">
                <h2>Add a New Blog</h2>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Content:</label>
                <textarea
                    required
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label>Author</label>
                {/* <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="shubhang">shubhang</option>
                    <option value="sharma">sharma</option>
                </select> */}
                <input 
                    type='text'
                    required
                    name="author"
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button onClick={handleSubmit}>Add Blog</button>
               
                
            </div>
        </form>
     );
}
 
export default Create;