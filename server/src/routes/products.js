// import {app} from '../app'
const app = require("../app")
const models = require("../models/schema")
console.log(models)

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await models.User.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).send({ message: 'Invalid password' });
        }

        // Generate a JWT token based on user role
        const token = jwt.sign(
            { userId: user._id, role: user.role }, // Payload with userId and role
            'your-secret-key', // Secret key for JWT
            { expiresIn: '1h' } // Token expiry time
        );

        // If user is admin, send adminJwtToken, else send userJwtToken
        if (user.role === 'admin') {
            return res.status(200).send({ adminJwtToken: token });
        } else {
            return res.status(200).send({ jwtToken: token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

app.post('/api/admin/add-product', async (req, res) => {
    try {
        const { productname, description, price, brand, image, category, countInStock, rating } = req.body;

        console.log(req.body);
        if (!productname || !description || !price || !brand || !image || !category || !countInStock || !rating) {
            return res.status(400).send({ message: 'Missing required fields' });
        }

        const foundCategory = await models.Category.findOne({ category });
        console.log(foundCategory);
        if (!foundCategory) {
            return res.status(404).send({ message: 'Category not found' });
        }

        const product = new models.Product({
            productname,
            description,
            price,
            brand,
            image,
            category: foundCategory,
            countInStock,
            rating,
            dateCreated: new Date()
        });

        await product.save();

        res.status(201).send(product);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});