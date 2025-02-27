const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

// Dummy Data
const cars = [
    { id: 1, name: "Tesla Model S", description: "Electric luxury sedan", price: 79999 },
    { id: 2, name: "Ford Mustang", description: "Classic American muscle car", price: 55999 },
    { id: 3, name: "Chevrolet Camaro", description: "High-performance sports car", price: 48999 },
    { id: 4, name: "BMW M3", description: "German sports sedan", price: 70999 },
    { id: 5, name: "Audi R8", description: "Supercar with V10 engine", price: 142000 },
    { id: 6, name: "Mercedes-AMG GT", description: "Luxury sports coupe", price: 129000 },
    { id: 7, name: "Porsche 911", description: "Iconic rear-engine sports car", price: 101000 },
    { id: 8, name: "Lamborghini Huracan", description: "Exotic Italian supercar", price: 214000 },
    { id: 9, name: "Ferrari F8 Tributo", description: "V8-powered supercar", price: 280000 },
    { id: 10, name: "Nissan GT-R", description: "Japanese high-performance car", price: 113000 },
];

// Endpoint to get all cars
app.get('/cars', (req, res) => {
    res.json(cars);
});

// Endpoint to get car by ID
app.get('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
