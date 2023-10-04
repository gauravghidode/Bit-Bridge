import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'

const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use(cors());
app.get('/', (req, res)=>{
    res.send("This is a bitBridge app API");
});

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://alokverma73762:4qsRQIJAiHdk1CdK@bitbridge.h76aqik.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> {console.log(`server running on port ${PORT}`);}))
    .catch((err) =>{console.log(err.message);})