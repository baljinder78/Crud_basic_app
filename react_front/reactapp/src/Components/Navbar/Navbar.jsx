import React,{useState} from 'react'
import "./Navbar.css"
import axios from "axios";
import { Link } from 'react-router-dom'
import ModelPopup from './ModelPopup';
function Navbar() {

const [c_list,setc_List]=useState([]);
const [ddopen,setDDopen]=useState(false);
const [open_modal,setopen_modal]=useState(false);
const [course_update,setcourse_update]=useState({})


 async function deletecourse(e) {
   const { data } = axios.delete(`http://localhost:8080/deletecourse/${e}`);
   if (data === 'false') {
     alert("Something went wrong can't delete");
   } else {
     getallcourse();
   }
 }


  async function getallcourse()
  {
          const { data } = await axios.get(
            'http://localhost:8080/getallcourses'
          );
          console.log(data);
          setc_List(data);
       
  }

  function course_list(){
      setDDopen(!ddopen)
      getallcourse();
  }

  function changecolor(e)
  {
    let src=e.target.src;
    src=src.replace("000000", "50b167");
    e.target.src=src;
  }
function changeback(e) {
  let src = e.target.src;
  src = src.replace('50b167', '000000');
  e.target.src = src;
}
function model_open(e)
{
  if(e&&e._id){
  setopen_modal(!open_modal);
  // console.log(e);
  setcourse_update(e);
  }
  else{
    setopen_modal(false);
    getallcourse(e);
  }
  // alert("e");
}
    

    return (
      <>
        <div className='Navbar_Container'>
          <div>
            <svg
              version='1.1'
              width='100px'
              height='31px'
              className='svg-fw'
              viewBox='0 0 383 105'>
              <path d='M47.7 35L47.7 29.4 61 29.4 61 75.9C61 92.1 50.5 102 33.9 102 25.9 102 17.5 99.9 11.9 95.9L16.8 84.8C21.8 88.1 27.4 90 33.4 90 41.8 90 47.7 85.3 47.7 76.6L47.7 73C44.3 77.2 39.1 79.8 32.2 79.8 19.9 79.8 9 69.5 9 53.9 9 38.3 19.9 28 32.2 28 39 28 44.2 30.7 47.7 35ZM22.8 53.9C22.8 61.2 27.8 67.3 35.4 67.3 43 67.3 48.1 61.5 48.1 53.9 48.1 46.3 43 40.6 35.4 40.6 27.7 40.6 22.8 46.5 22.8 53.9Z'></path>
              <path d='M103 29.1L101 42.6C98.8 41.6 95.4 41 92.6 41 86.2 41 81.8 44.9 81.8 52.4L81.8 80 68 80 68 29.4 81.4 29.4 81.4 34.9C84.6 30.1 89.4 28 95.8 28 98.8 28 101.1 28.5 103 29.1Z'></path>
              <path d='M154 79.7L140.7 79.7 140.7 74.1C137.4 78.2 132.5 81 125.5 81 111.6 81 101 69.6 101 54.5 101 39.4 111.6 28 125.5 28 132.5 28 137.4 30.8 140.7 34.9L140.7 29.3 154 29.3 154 79.7ZM114.9 54.5C114.9 62.2 120 68.3 128.1 68.3 135.9 68.3 141.2 62.4 141.2 54.5 141.2 46.5 135.9 40.7 128.1 40.7 120 40.6 114.9 46.7 114.9 54.5Z'></path>
              <path d='M198.4 35.1L198.4 5 212 5 212 80.7 198.7 80.7 198.7 75.1C195.4 79.2 190.5 82 183.5 82 169.6 82 159 70.5 159 55.2 159 39.9 169.6 28.5 183.5 28.5 190.3 28.4 195.1 31.1 198.4 35.1ZM172.9 55.2C172.9 63 178 69.2 186.1 69.2 193.9 69.2 199.2 63.2 199.2 55.2 199.2 47.2 193.9 41.2 186.1 41.2 177.9 41.1 172.9 47.4 172.9 55.2Z'></path>
              <path d='M268 54.5C268 56 267.9 57.8 267.7 59L232 59C233.5 66.3 238.6 69.5 244.9 69.5 249.3 69.5 254 67.7 257.7 64.6L265.6 73.3C259.9 78.6 252.6 81 244.1 81 228.7 81 218 70.5 218 54.6 218 38.8 228.3 28 243.4 28 258.1 28 267.9 38.7 268 54.5ZM232.1 49.8L254.4 49.8C253.1 43.3 249.2 39.7 243.4 39.7 237.1 39.7 233.3 43.6 232.1 49.8Z'></path>
              <path d='M322 59.1C322 75.1 310.7 82 298.1 82 285.3 82 274 75.1 274 59.1L274 30 287.6 30 287.6 57.9C287.6 66 292 69.3 297.9 69.3 303.9 69.3 308.3 66 308.3 57.9L308.3 30 321.9 30 321.9 59.1 322 59.1Z'></path>
              <path d='M381 54.7C381 69.9 370.4 81.3 356.5 81.3 349.7 81.3 344.9 78.6 341.6 74.7L341.6 101 328 101 328 29.3 341.3 29.3 341.3 34.9C344.6 30.8 349.4 28 356.4 28 370.5 27.9 381 39.4 381 54.7ZM340.9 54.7C340.9 62.7 346.2 68.6 353.9 68.6 361.9 68.6 367 62.4 367 54.7 367 47 362 40.7 353.9 40.7 346.2 40.6 340.9 46.7 340.9 54.7Z'></path>
            </svg>
          </div>
          <div className='Navbar_options'>
            <Link to='/update'>
              <p className="link_title">Create course</p>
            </Link>
            <button className='dropdown_btn' onClick={() => course_list()}>
              Course List
              {ddopen ? (
                <img
                  alt='close'
                  src='https://img.icons8.com/ios-filled/20/50b167/collapse-arrow.png'
                />
              ) : (
                <img
                  alt='open'
                  src='https://img.icons8.com/ios-filled/20/50b167/expand-arrow--v1.png'
                />
              )}
            </button>
          </div>
        </div>
        {ddopen && (
          <ul className='courses_list_area'>
            {c_list.map((course, i) => (
              <li className='course_area'>
                <p className='course_title'>{course.name}</p>

                <img
                  alt='edit'
                  onMouseOver={changecolor}
                  onMouseOut={changeback}
                  onClick={()=>model_open(course)}
                  src='https://img.icons8.com/ios-glyphs/25/000000/edit-property.png'
                />
                <img
                  onClick={() => deletecourse(course._id)}
                  alt='delete'
                  onMouseOver={changecolor}
                  onMouseOut={changeback}
                  src='https://img.icons8.com/ios-glyphs/25/000000/filled-trash.png'
                />
              </li>
            ))}
          </ul>
        )}
        {open_modal&&<ModelPopup open_modal={open_modal} model_open={model_open} course={course_update}/>
}</>
    );
}

export default Navbar
