import { forwardRef } from "react";
import luLogo from "../../assets/luLogo.jpg";
import "../../styles/Cover.css";

const Cover = forwardRef((props, ref) => (
  <div id="cover-result" ref={ref}>
    <img id="luLogo" src={luLogo} alt="" />
    <h1 id="university">{props.coverData?.university}</h1>
    <h3 id="title">{props.coverData?.title}</h3>
    <h3 id="courseTitle">Course Title : {props.coverData?.courseTitle}</h3>
    <h3 id="courseCode">Course Code : {props.coverData?.courseCode}</h3>
    <h2 id="to">Submitted To</h2>
    <h3 className="name"> {props.coverData?.submittedTo}</h3>
    <p className="small-text">{props.coverData?.designation}</p>
    <p className="small-text">{props.coverData?.teacherDept}</p>
    <p className="small-text">{props.coverData?.university}</p>

    <h2 id="by">Submitted By</h2>
    <h3 className="name"> {props.coverData?.submittedBy}</h3>
    <p className="small-text">ID : {props.coverData?.studentID}</p>
    <p className="small-text">Batch : {props.coverData?.batch}th</p>
    <p className="small-text">Section : {props.coverData?.section}</p>
    <p className="small-text">{props.coverData?.studentDept}</p>
    <p className="small-text">{props.coverData?.university}</p>
    <h2 id="submissionDate">Date of Submission : {props.coverData?.submissionDate}</h2>
  </div>
));
export default Cover;
