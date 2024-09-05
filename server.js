const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/peer_tutoring', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { fName, lName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        firstName: fName,
        lastName: lName,
        email: email,
        password: hashedPassword,
    });

    try {
        await user.save();
        res.send('User registered successfully!');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
