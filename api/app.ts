import express, { Application } from "express"
import morgan from "morgan"
import cors from "cors"
import taskRoutes from "./routes"

export const app: Application = express()



app.use(morgan("dev"))
app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT"]
  })
);
app.use(express.json())
app.use("/api", taskRoutes)


