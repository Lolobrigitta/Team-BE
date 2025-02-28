const port = process.env.PORT || 3000;

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const products = require('./Edouard/products');
const cars = require("./Mathias/cars");
const motos = require("./Logann/Moto");
const cats = require('./Reinhard/cats');
const fruit = require('./Jelle/Fruit')
const cors = require("cors");
app.use(cors());

// Endpoint to get all cats Reinhard
app.get('/AllCats',(req, res) => {
    res.json(cats);
});

// Endpoint to get cat by ID Reinhard
app.get('/OneCat/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!cat) return res.status(404).json({ message: "Cat not found" });
    res.json(cat);
});

//haal alle motormerken op Logan

app.get('/api/merken', (req, res) => {
    const merken = [...new Set(motos.map(moto => moto.brand))];
    res.json(merken);
});

// Haal een specifieke motor op via ID LOgan
app.get('/api/moto/:id', (req, res) => {
    const moto = motos.find(m => m.id === parseInt(req.params.id));
    if (!moto) {
        return res.status(404).json({ error: "Motor niet gevonden" });
    }
    res.json(moto);
})





// Endpoint om alle producten op te halen Edouard
app.get('/AllProducts', (req, res) => {
    res.json(products);
});

// Endpoint om één product op te halen op basis van ID Edouard
app.get('/OneProduct/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});



// Endpoint om alle auto's op te halen
app.get("/api/cars", (req, res) => {
    res.json(cars);
});

// Endpoint om een specifieke auto op te halen via ID
app.get("/api/cars/:id", (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
});

// Endpoint to get all fruits Jelle
app.get('/api/fruits', (req, res) => {
    res.json({ fruits });
});
//  Endpoint to get car by ID Jelle
app.get('/api/fruits/:name', (req, res) => {
    const fruitName = req.params.name.toLowerCase(); // Get the fruit name from the URL parameter
    const fruit = fruits.find(f => f.name.toLowerCase() === fruitName);

    if (fruit) {
        res.json(fruit); // Send the fruit details as JSON
    } else {
        res.status(404).json({ message: 'Fruit not found' }); // Return a 404 error if the fruit is not found
    }
});

// Endpoint om alle meubels op te halen Jens
app.get('/api/meubels', (req, res) => {
    res.json(products);
});

// Endpoint om één product op te halen op basis van ID Jens
app.get('/Onemeubels/:id', (req, res) => {
    const meubel = meubels.find(p => p.id === parseInt(req.params.id));
    if (!meubels) return res.status(404).json({ message: "meubel not found" });
    res.json(meubel);
});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`));