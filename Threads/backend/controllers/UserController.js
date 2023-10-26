import bcrypt from "bcryptjs";
import User from "../models/Users.js";

const SignupUser = async(req, res) => {
    try {
        const {name, email, username, password} = req.body;
        const existingUser = await Users.findOne({$or:[{email}, {username}]});

        if(existingUser){
            return res.status(400).json({message:"User already exists!"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name, email, username, password:hashedPassword,
        });

        await newUser.save();

        if(newUser){
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
            });
        } else {
            res.status(400).json({message: "Invalid user data!"});
        }

    } catch (error) {
        res.status(500).json({message: error.message});
        console.log("Error in signupUser", error.message);
    }
};

export { SignupUser };