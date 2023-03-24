import mongoose from 'mongoose';

const DBConnection = async () => {
    const MONGODB_URL = `mongodb://akashrajputcs19:akash098@ac-shiccgl-shard-00-00.iimrwdo.mongodb.net:27017,ac-shiccgl-shard-00-01.iimrwdo.mongodb.net:27017,ac-shiccgl-shard-00-02.iimrwdo.mongodb.net:27017/?ssl=true&replicaSet=atlas-11pi3r-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URL, {useNewUrlParser: true});
        console.log('your database connected successfully');
    }
    catch (error) {
        console.error('Erorr while we calling our database', error.message);
    }
}

export default DBConnection;