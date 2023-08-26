import { model, Schema } from "mongoose";



export interface ITask {
  title: string,
  description: string,
  done?: boolean,
}

const taskschema = new Schema<ITask>({

  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean,
    default: false

  },

}, {
  versionKey: false
})


export const modelTask = model<ITask>("task", taskschema)