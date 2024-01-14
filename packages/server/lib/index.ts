import express = require("express")

const app: express.Application = express()

app.get("/", (req, res) => {
    res.send("Hello Wor1111ld!666")
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000!")
})
