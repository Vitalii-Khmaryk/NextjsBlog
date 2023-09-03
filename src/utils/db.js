import mongoose from "mongoose";
const connect = async () => {
  await mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => console.log(error));
};

export default connect;
