import mongoose from "mongoose";    

const connectDB = async () => {
    try {
        const connection = await mongoose.connect( `${process.env.MONGODB_URI}` )
        console.log( "Connected to MongoDB", connection.connection.host )
    } catch ( error ) {
        console.error( "DB Error: ", error )
        process.exit(1)
    }
}

export default connectDB;