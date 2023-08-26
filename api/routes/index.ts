import { Request, Response, Router } from "express";
import { modelTask, ITask } from '../models/Task';


const router = Router();

router.get("/tasks", async (req: Request, res: Response) => {

  const getTasks = await modelTask.find()
  try {

    if (!getTasks) {

      return res.status(400).json({ message: "No hay tareas" })
    } else {

      return res.status(200).json(getTasks)
    }
  } catch (error) {
    console.log(error)
  }
})

router.post("/tasks", async (req: Request, res: Response) => {
  try {
    const { description, title } = req.body as ITask

    const task = new modelTask({ description, title })
    if (!task) {
      return res.status(400).json({ message: "No se ha creado la tarea" })
    } else {

      res.status(200).json({ message: "Se creo la tarea", task })
      await task.save()
    }
  } catch (error) {
    console.log(error)
  }
})

router.get("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const getTasks = await modelTask.findById(id)

    if (!getTasks) {

      return res.status(400).json({ message: "No hay tarea" })
    }
    return res.status(200).json(getTasks)
  } catch (error) {
    console.log(error)
  }
})

router.put("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { description, title } = req.body as ITask

    const putTasks = await modelTask.findByIdAndUpdate(id, { description, title }, { new: true })


    if (!putTasks) {

      return res.status(400).json({ message: "No hay tarea" })
    }
    return res.status(200).json(putTasks)
  } catch (error) {
    console.log(error)
  }
})
router.delete("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deleteTasks = await modelTask.findByIdAndDelete(id)

    if (!deleteTasks) {

      return res.status(400).json({ message: "No hay tarea" })
    }
    return res.status(200).json({ message: "Se elimino la tarea", deleteTasks })
  } catch (error) {
    console.log(error)
  }
})

export default router