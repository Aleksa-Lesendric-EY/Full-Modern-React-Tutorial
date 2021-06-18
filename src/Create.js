import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const history = useHistory()


    const handleSubmit = (event) => {
        event.preventDefault()

        const blog = {title, body, author}

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        })
        .then(history.push("/"))
    }

    return(
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} reduired></input>
                <label>Blog body</label>
                <textarea value={body} onChange={(event) => setBody(event.target.value)} required></textarea>
                <label>Blog author</label>
                <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option>Mario</option>
                    <option>Yoshi</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
    );
}

export default Create