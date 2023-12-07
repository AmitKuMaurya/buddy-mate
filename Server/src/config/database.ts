import mongoose from 'mongoose';

export const dbConnection = async () => {
    await mongoose.connect('mongodb://amit69maurya69:amit69maurya69@ac-fjka5df-shard-00-00.mxtkvc3.mongodb.net:27017,ac-fjka5df-shard-00-01.mxtkvc3.mongodb.net:27017,ac-fjka5df-shard-00-02.mxtkvc3.mongodb.net:27017/?ssl=true&replicaSet=atlas-gu4b7d-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(()=>{
        console.log({DB : "DataBase Connected Successfully 🌼"})
    })
    .catch((err)=>{
        console.log({err : err});
        process.exit(1);
    })
}