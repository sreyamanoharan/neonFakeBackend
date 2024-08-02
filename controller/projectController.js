export const insertingDatas = async (req, res) => {
  const data = req.body.input;
  console.log(data);
};

const data = [
  {
    id: 1,
    title: "abc",
    description: "fdsfffggdfgdf",
    tumbnail:
      "https://res.cloudinary.com/ds0dvm4ol/image/upload/v1722515249/cgni3ylc7fp1oxj1s7l2.png",
    video:
      "https://res.cloudinary.com/ds0dvm4ol/video/upload/v1722515254/gqxaf4kmcbysxjhymdhz.mp4",
  },
  {
    id: 2,
    title: "abc",
    description: "fdsfffggdfgdf",
    tumbnail:
      "https://res.cloudinary.com/ds0dvm4ol/image/upload/v1722515249/cgni3ylc7fp1oxj1s7l2.png",
    video:
      "https://res.cloudinary.com/ds0dvm4ol/video/upload/v1722516958/wntpnalrkbkduc19q0yg.mp4",
  },
];
export const getTumbnail = async (req, res) => {
  // return data
  res.json(data);
};
export const getVideo = async (req, res) => {
  console.log("hii");
  const { id } = req.params;
  const newData = data.filter((data) => data.id == id);
  res.json(newData);
};
