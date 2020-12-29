const express = require ('express')
const bodyparser = require ('body-parser')
const cors = require ('cors')
const mongoose = require ('mongoose')
const course_controller = require ('./controllers/courses_controller')
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors())

mongoose.connect('mongodb+srv://root:toor@cluster0.qmrlp.mongodb.net/edukall?retryWrites=true&w=majority',
{useNewUrlParser: true},
 {useUnifiedTopology: true})
app.use('/courses', course_controller)
//app.use('/school-classes',classes_controller)
//app.use('/students',students_controller)
app.listen(4201)
