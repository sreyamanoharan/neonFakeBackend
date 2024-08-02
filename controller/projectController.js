import project from "../model/projectModel.js";

export const insertingDatas = async (req, res) => {
  const data = req.body.input;
  console.log(data);
  await project.insertMany( data );
};

export const getTumbnail = async (req, res) => {
  const tumbnailData = await project.find();
  res.json({ message: "success", data: tumbnailData });
};
export const getVideo = async (req, res) => {
  const { id } = req.params;

  const newdata = await project.findOne({ id: id });
  const newvideo = newdata[0].video;
  res.json({ message: "success", data: newvideo });
};
