import mongoose from "mongoose";

const connect = async() => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("✅ Already connected to MongoDB");
            return;
        }
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        throw new Error(error.message); // <-- Log the actual error
    }
};

export default connect;