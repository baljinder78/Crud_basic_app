import React, { useState } from 'react'
import AllCourses from './Allcourses'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Updatecourse from './Updatecourse';
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
            <AllCourses updatetheCourse={updatetheCourse} />
          </Route>
          <Route exact path='/update'>
            <Updatecourse course={course} />
          </Route>
        </Switch>
      </Router>
    );
}

export default App
