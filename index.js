import express from "express"
const app = express()

app.get("/", (req,res) => {
	res.json({hook: "corriendo"})
});



app.listen(5000, () => console.log('Ejecutnado en http://localhost:5000'))