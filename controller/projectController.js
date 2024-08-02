import project from "../model/projectModel.js";

export const insertingDatas = async (req, res) => {
  const data = req.body.input;
  console.log(data);
  await project.insertMany( data );

  res.json("succss")
};

export const getTumbnail = async (req, res) => {
  const tumbnailData = await project.find();
  res.json({ message: "success", data: tumbnailData });
};
export const getVideo = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const newdata = await project.findOne({ _id: id });
  const newvideo = newdata?.video
  console.log(newvideo);
  res.json({ message: "success", data: newvideo });
};
