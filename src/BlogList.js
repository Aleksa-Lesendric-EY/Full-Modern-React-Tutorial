import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    
    return(
        <div className="blog=list">
            {blogs.map((el) => (<div className="blog-preview" key={el.id}>
                <Link to={`/blogs/${el.id}`}>
                    <h2>{el.title}</h2>
                    <p>Written by {el.author}</p>
                </Link>
            </div>))}
        </div>
    )
}

export default BlogList;