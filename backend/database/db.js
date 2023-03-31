import mongoose from 'mongoose';

const Connection = async(username, password) => {

    const URL=`mongodb+srv://${username}:${password}@cluster0.6e7csob.mongodb.net/todo?retryWrites=true&w=majority`;

    try{
        // first arg is url and 2nd is object will take tools and all that mongodb will be using
        await mongoose.connect(URL,{ useNewUrlParser:true });
        console.log('Database is connected successfully');
    }catch(error){
        console.error('Error while connecting database', error)
    }
}

export default Connection;