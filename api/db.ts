import dotenv from 'dotenv';
dotenv.config();
import { connect } from 'mongoose';
const DB = "mongodb+srv://jerlibGnzlz:jm151619@backendcoderhouse.hvsk3vk.mongodb.net/VUE"



export const dbConexion = async (): Promise<void> => {
  try {
    if (typeof DB === "string") {
      await connect(DB);
      console.log("MongoDb connected is OK!!");
    }
  } catch (error) {
    console.log("Error in conection for:", error)
  }
}