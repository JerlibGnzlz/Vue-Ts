import { type AxiosResponse } from "axios";
import { Axios } from "./axios";
import { type ITask } from '@/interfaces/ITasks';


export const getTasks = async (): Promise<AxiosResponse<ITask[]>> => {
  return await Axios.get("/tasks")
}

export const getTask = async (id: string): Promise<AxiosResponse<ITask>> => {
  return await Axios.get(`/tasks/${id}`)
}


export const createTask = async (task: ITask) => {
  return await Axios.post("/tasks", task)
}

export const updateTask = async (id: string, task: ITask) => {
  return await Axios.put(`/tasks/${id}`, task)
}

export const deleteTask = async (id: string): Promise<AxiosResponse<ITask>> => {
  return await Axios.delete(`/tasks/${id}`)
}
