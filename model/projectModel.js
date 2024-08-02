import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  id: {
    type: "string",
  },
  title: {
    type: "string",
  },
  description: {
    type: "string",
  },
  thumbnail: {
    type: "string",
  },
  video: {
    type: "string",
  },
});
 const project = mongoose.model('project',projectSchema)

 export default project