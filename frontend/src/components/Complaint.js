import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSRFToken } from "./Cookie";
// import { Link } from "react-router-dom";

const Complaint = () => {
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('if yes, tell us');
    const[status, setStatus] = useState('SEND');
    const navigate = useNavigate();
    const extract = () => {
        let theTitle = body.slice(0, 10) + ".....";
        setTitle(theTitle)
}

    const handleSubmit = (e) => {
        e.preventDefault();
        const complaint = { title, body };

        setStatus('SENDING....');

        fetch("http://localhost:8000/api/complaints/", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(complaint)
        }).then(() => {
            setTimeout(() => {
                setStatus('SENT')
            }, 4000);
            navigate('/Sent');
            setStatus('SEND');

            console.log('sent')
        
        })
    }

 
 return(
        <div className="comContainer">
            <h3>Are you alright?</h3>
            <h4>{ title }</h4>
            <form action="" onSubmit={handleSubmit}>
            <CSRFToken />
            <textarea required value= { body } onClick={(e) => setBody('')} onChange={(e) => setBody(e.target.value)} cols="45" rows="20" className="comBox">
            </textarea> 
            <input type="submit" value= {status} id="comBtn" className="input" onClick={ extract } />
            </form>
        </div>
    )
}

export default Complaint;