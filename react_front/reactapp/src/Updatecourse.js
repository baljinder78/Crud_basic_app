import React, { useState ,useEffect} from 'react'
import axios from "axios";
import { Redirect } from 'react-router';
function Updatecourse({course}) {

    useEffect(() => {
    
          console.log(
            
          );
        
    }, [])

    const [courseid, setCourseid] = useState(course.couseId);
    const [name,setName]=useState(course.name);
    const [start_date,setStart_date]=useState(course.start_date);
    const [end_date,setEnd_date]=useState(course.end_date);
    const [teacherId,setteacherId]=useState(course.teacherId);
    
    const [redirect,setredirect]=useState(false);
    function handlecidchange(e) {
      setCourseid(e.target.value);
    }
    function handleteacheridchange(e) {
      setteacherId(e.target.value);
    }

    function handlenamechange(e){
        setName(e.target.value);
    }
    function handlestratchange(e){
        setStart_date(e.target.value);
    }
    function handleendchange(e){
        setEnd_date(e.target.value);
    }

    async function createCourse()
    {
        const course_data = {
          "couseId": courseid,
          "name": name,
          "start_date": start_date,
          "end_date": end_date,
          "teacherId": teacherId,
        };

        const {data} =await axios.post('http://localhost:8080/createcourse',course_data);
        if(data==="false")
        {
            alert("Something went wrong")
        }
        else{
            setredirect(true);
        }


    }

    async function changeUpdate()
    {
        const course_data = {
          couseId: courseid,
          name: name,
          start_date: start_date,
          end_date: end_date,
          teacherId: teacherId,
        };
        console.log(course_data)
        const { data } = await axios.patch(
          `http://localhost:8080/updatecourse/${course._id}`,
          course_data
        );
        if (data === 'false') {
          alert('Something went wrong');
        } else {
          setredirect(true);
        }
    }
    return (
      <>
        {!(Object.keys(course).length === 0) ? (
          <div>
            <label>Course Id</label>
            <input type='text' onChange={handlecidchange} value={courseid} />
            <br />
            <label>Teacher Id</label>
            <input
              type='text'
              onChange={handleteacheridchange}
              value={teacherId}
            />
            <br />
            <label>Course name</label>
            <input type='text' onChange={handlenamechange} value={name} />
            <br />
            <label>Start Date</label>
            <input
              type='date'
              onChange={handlestratchange}
              value={start_date}
            />
            <br />
            <label>End Date</label>
            <input type='date' onChange={handleendchange} value={end_date} />
            <br />
            <button className='btn-success' onClick={changeUpdate}>
              Update
            </button>
          </div>
        ) : (
          <div>
            <label>Course Id</label>
            <input
              type='text'
              onChange={handlecidchange}
              placeholder='course id'
            />
            <br />
            <label>Teacher Id</label>
            <input
              type='text'
              onChange={handleteacheridchange}
              placeholder='teacherId'
            />
            <br />
            <label>Course name</label>
            <input
              type='text'
              onChange={handlenamechange}
              placeholder='course name'
            />
            <br />
            <label>Start Date</label>
            <input type='date' onChange={handlestratchange} />
            <br />
            <label>End Date</label>
            <input type='date' onChange={handleendchange} />
            <br />
            <button className='btn-success' onClick={createCourse}>
              create
            </button>
          </div>
        )}
        {redirect ? <Redirect to='/' /> : null}
      </>
    );
}

export default Updatecourse
