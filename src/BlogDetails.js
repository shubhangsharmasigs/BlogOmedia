import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


const BlogDetails = () => {

    
    const history = useHistory();

    const handleDelete = () => {
        
    }


    return ( 
        <div className="blog-details">
           
            
                <article>
                    
                    <button onClick={handleDelete}>Delete</button>
                </article>
            
        </div>
     );
}
 
export default BlogDetails;