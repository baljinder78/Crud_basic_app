import React, { useState,useEffect } from 'react'
import Modal from "react-modal"
import axios from 'axios';
import "./Modelpopup.css";
function ModelPopup({open_modal,model_open,course}) {



     const [courseid, setCourseid] = useState(course.couseId);
     const [name, setName] = useState(course.name);
     const [start_date, setStart_date] = useState(course.start_date);
     const [end_date, setEnd_date] = useState(course.end_date);
     const [teacherId, setteacherId] = useState(course.teacherId);


     function handlecidchange(e) {
       setCourseid(e.target.value);
     }
     function handleteacheridchange(e) {
       setteacherId(e.target.value);
     }

     function handlenamechange(e) {
       setName(e.target.value);
     }
     function handlestratchange(e) {
         if(end_date==="")
         {

             setStart_date(e.target.value);
         }
         else{
        let g1 = new Date(e.target.value);
        let g2 = new Date(end_date);
        if (g1.getTime() < g2.getTime()){
            setStart_date(e.target.value);
        }
        else{
            alert("Start date must be smaller than End date")
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
         }
       }

     }
     async function changeUpdate() {
       const course_data = {
         couseId: courseid,
         name: name,
         start_date: start_date,
         end_date: end_date,
         teacherId: teacherId,
       };
    //    console.log(course_data);
       const { data } = await axios.patch(
         `http://localhost:8080/updatecourse/${course._id}`,
         course_data
       );
       if (data === 'false') {
         alert('Something went wrong');
       } else {
         model_open();
       }
     }


    return (
      <>
        <Modal
            className="modal_container"
          isOpen={open_modal}
          ariaHideApp={false}
          onRequestClose={model_open}>
          <div className="inner_model_container">
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
            <button className='update_btn' onClick={changeUpdate}>
              Update
            </button>
          </div>

          {/* <h1>{course.couseId}</h1> */}
        </Modal>
      </>
    );
}

export default ModelPopup
