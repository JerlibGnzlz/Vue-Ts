import { app } from "./app"
import { dbConexion } from "./db"


app.listen(3000)
console.log("Servidor en el puerto 3000")
dbConexion()