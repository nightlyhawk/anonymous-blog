import profile from "../assets/images/profile.png";
import { Link, useParams } from 'react-router-dom';
import useFetch from "./usefetch";

const CompList = () => {
  const { id } = useParams();
  const { data: complaints, IsPending, error } = useFetch(
    "http://localhost:8000/api/complaints/"
  );
  const { data: comments } = useFetch(
    "http://localhost:8000/api/complaint/${complaint.id}/comments"
  );

  function close() {
    document.getElementsByClassName("close").style.display = "none";
  }
  function open() {
    document.getElementsByClassName("view").style.display = "block";
  }
  return (
    <div>
        { error && <div>{ error }</div> }
          { IsPending && <div>Loading...</div> }
      <h3 className="comH">
        Please be nice in the comments, provide solutions not problems
      </h3>
      {complaints && complaints.map((complaint) =>(
        <div key={complaint.id} className="postbox">
          <img src={profile} alt="profile" />
          <p id="title">@Anonymous</p>
          <h3 className="post">{complaint.title}</h3>
          <p className="post">{complaint.body}</p>
          <p className="bottoms"><span>{complaint.number_of_comments} replies</span></p> 
          <Link to='/replies'><input type="text" placeholder="Reply" className="bottoms" id="replies" /></Link>
          {/* <p>{comments.body}</p> */}
          <button className="views" onClick={open}>
            view replies
          </button>
          <div className="replies">
            <button className="close" onClick={close}>
              ×
            </button>
            <img src={profile} alt="profile" />
            <p>{comments.name}</p>
            <p>{comments.body}</p>
          </div>
        </div>
        ))}
    </div>
  );
};

export default CompList;
