import React, { useState} from 'react'
import axios from "axios";
import { Redirect } from 'react-router';
function Updatecourse() {


    const [courseid, setCourseid] = useState("");
    const [name,setName]=useState("");
    const [start_date,setStart_date]=useState("");
    const [end_date,setEnd_date]=useState("");
    const [teacherId,setteacherId]=useState("");
    
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
     function handlestratchange(e) {
       if (end_date === '') {
         setStart_date(e.target.value);
       } else {
         let g1 = new Date(e.target.value);
         let g2 = new Date(end_date);
         if (g1.getTime() < g2.getTime()) {
           setStart_date(e.target.value);
         } else {
           alert('Start date must be smaller than End date');
          setStart_date("");
          }
       }
     }
     function handleendchange(e) {
       if (start_date === '') {
         setEnd_date(e.target.value);
       } else {
         let g1 = new Date(e.target.value);
         let g2 = new Date(end_date);
         if (g1.getTime() > g2.getTime()) {
           setEnd_date(e.target.value);
         } else {
           alert('Start date must be smaller than End date');
         setEnd_date("")
          }
       }
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

    
    return (
      <div className="create_Couse_bg">
        
        <div className='inner_model_container'>
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
          <button className='update_btn' onClick={createCourse}>
            create
          </button>
        </div >
        {redirect ? <Redirect to='/' /> : null}
      </div>
    );
}

export default Updatecourse
