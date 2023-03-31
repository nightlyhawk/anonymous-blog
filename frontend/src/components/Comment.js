import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { CSRFToken } from "./Cookie";

const Comment = () => {
    const [name, setName] = useState('@Anonymous')
    const [body, setBody] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      const comments = [name, body]
        e.preventDefault();
        // setIsPending(true);
    
        fetch('http://localhost:8000/api/complaint/${complaint/idi}/comments', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comments)
        }).then(() => {
          console.log('sent');
          navigate('/issues');
        //   setIsPending(false);
        //   history.go(-1);
        //   history.push('/')
        })
    
    
    
      }

    return(
        <div>
            <h3 className="comH">Please be nice in the comments, provide solutions not problems</h3>
            <header>Comment<strong>?</strong></header>
            <form action="" onSubmit={handleSubmit}>
            <CSRFToken />
            <input type='username' value={name} onClick={(e) => setName('')} onChange={(e) => setName(e.target.value)} className="user" required />
            <textarea required value={body} onChange={(e) => setBody(e.target.value)} cols="45" rows="20" className="comBox"></textarea>
            <input type="submit" value="Send" id="comBtn" className="input" />
            </form>
        </div>
        
    );
}



export default Comment;