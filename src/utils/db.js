import mongoose from "mongoose"

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        console.log(process.env.MONGO)
        throw new Error("there is error")
    }
}
export default connect