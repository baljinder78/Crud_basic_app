import React, { useState } from 'react'
// import AllCourses from './Allcourses'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Updatecourse from './Updatecourse';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

    const [course,setCourse]=useState({});

    function updatetheCourse(c){
        setCourse(c);
        console.log(c)
    }

    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            {/* <AllCourses updatetheCourse={updatetheCourse} /> */}
            <Navbar/>
          </Route>
          <Route exact path='/update'>
            <Updatecourse course={course} />
          </Route>
        </Switch>
      </Router>
    );
}

export default App
