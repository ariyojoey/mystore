const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');


const generateSecret = () => {
    return crypto.randomBytes(64).toString('hex');
};

// Auto-generate secret for jwt
const secret = generateSecret();

// Sign Up Controller
const signUp = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists!" });

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match!" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, firstName, lastName });
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '3h' });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Couldn't process the signUp....", error });
    }
};

// Sign In Controller
const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "Invalid email or password" });

        // Note that the password is encrypted as to why we're making use of bcrypt
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid email or password" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: '2h' });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Couldn't process the signIn....", error });
    }
};

module.exports = { signUp, signIn };
