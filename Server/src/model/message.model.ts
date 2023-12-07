import {Schema, model} from "mongoose";

interface IMessage{
    message : string
}

const MessageSchema = new Schema({
    message : { type : String, require : true}
},{
    timestamps : true
})

const MessageModel = model<IMessage>("message",MessageSchema);

export default MessageModel;