import express from "express";

const app = express();

// middleware for json POST body
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to cats!");
});

app.get("/about", (req, res) => {
    res.json({
        message: "All about cats because they are the best!",
    });
});

app.get("/user/:id", (req, res) => {
    const userID = req.params.id;
    const s = req.query.sepia;
    console.log(s)
    res.json({ user: " UserID " + userID });
    
});

app.post("/contact", (req, res) => {
    const data = req.body;
    console.log(data.name);
    res.json({ message: "data received", data });
});

app.get('/search', (req, res) => {
    const { query, category } = req.query;
    res.json({ 
        "Search": query,
        "Category": category

    })
})

app.post("/cat", (req, res) => {
    const data = req.body;
    console.log(data.name);
    if(data.name) {
        res.status(200).send(data);
    } else {
        res.status(404).send({
            error: "name required"
        })
    }
});


app.listen(3000, () => {
    console.log("started server!! on port 3000")
})