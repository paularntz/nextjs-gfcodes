import mongoose, { Schema } from "mongoose"

const topicSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        address: String,
        violation:String,
        description: String,
    }, 
    {
        timestamp: true,
    }
)

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic