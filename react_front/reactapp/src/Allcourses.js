import "./styles.css";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllCourses({ updatetheCourse }) {
  const [courses, setCourses] = useState([]);
  const [rerender,setrender]=useState(false);

  useEffect(() => {
    async function getallcourses() {
      const { data } = await axios.get('http://localhost:8080/getallcourses');
      console.log(data);
      setCourses(data);
    }
    getallcourses();
  }, [rerender]);


  async function deletecourse(e){

    const { data } = axios.delete(
      `http://localhost:8080/deletecourse/${e}`
    );
    if(data==="false")
    {
      alert("Something went wrong can't delete")
    }
    else{
      setrender(!rerender);
    }

  }

  return (
    <div className='App'>
      <Link to='/update'>
        <button className='btn-warning '>CREATE Course</button>
      </Link>
      {courses.map((course, i) => (
        <div>
          <h1>{course.name}</h1>
          <p>
            Start-date:- <span>{course.start_date}</span>
          </p>
          <p>
            End-date:- <span>{course.end_date}</span>
          </p>
          <button className='btn-danger' onClick={() => deletecourse(course._id)}>
            Delete
          </button>
          <Link to='/update'>
            <button
              className='btn-success'
              onClick={() => updatetheCourse(courses[i])}>
              Edit
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
