import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  id: {
    type: "string",
  },
  titile: {
    type: "string",
  },
  description: {
    type: "string",
  },
  tumbnail: {
    type: "string",
  },
  video: {
    type: "string",
  },
});
 const project = mongoose.model('project',projectSchema)

 export default project