const express = require('express')
const mongoose = require('mongoose');
const bodyparser=require("body-parser");
const Courses=require("./Couses");
var crossOrigin = require('cross-origin');

const port =8080
const app = express()

app.use(bodyparser.json())
var urlencodedParser = bodyparser.text();

app.use(crossOrigin);

// GET ALL courses
app.get('/getallcourses',async (req, res) =>{ 
    
    const courses=await Courses.find();
    res.send(courses);
    
})


// create a course
app.post("/createcourse",urlencodedParser,async (req,res)=>
{
    let res_data=req.body;
    const course = new Courses({
      couseId: res_data.couseId,
      name: res_data.name,
      start_date: res_data.start_date,
      end_date: res_data.end_date,
      teacherId: res_data.teacherId,
    });
    try {
      await course.save();
      res.send("true");
    } catch (err) {
      res.send("false");
    }

}
)


// delete course
app.delete("/deletecourse/:id",async (req,res)=>{
    const c_id=req.params["id"];
    try{
    await Courses.deleteOne({_id:c_id})
    res.send("true");
    }
    catch(err)
    {
        res.send("false");
    }
})

// update course
app.patch("/updatecourse/:id",async (req,res)=>
{
    const c_id=req.params["id"];
    let res_data=req.body;
    
    try{
        await Courses.updateOne({_id:c_id},{$set:
            {
      couseId: res_data.couseId,
      name: res_data.name,
      start_date: res_data.start_date,
      end_date: res_data.end_date,
      teacherId: res_data.teacherId,
        }
        })

        res.send("true");
    }
    catch(err)
    {
        res.send("false");
    }
})





mongoose.connect(
  'mongodb+srv://admin:admin@123@data.p6amf.mongodb.net/gradeup?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  () => console.log('Connected')
);



app.listen(port, () => console.log(`port=${port}`))