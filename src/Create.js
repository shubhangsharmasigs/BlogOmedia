import { useState } from "react";

const Create = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [author,setAuthor] = useState('shubhang');
    const [isPending,setIsPending] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog ={title,content,author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs' , {
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="create">
                <h2>Add a New Blog</h2>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Content:</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="shubhang">shubhang</option>
                    <option value="sharma">sharma</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Adding Blog...</button>}
                
            </div>
        </form>
     );
}
 
export default Create;