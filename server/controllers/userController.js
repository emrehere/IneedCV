import UserPattern from "../models/userLoginModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });  
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserPattern.login(email, password);
      

        const token = createToken(user._id);

        res.status(200).json({ email, token, id: user.id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const registerUser = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const user = await UserPattern.register(email, password, name);

        const token = createToken(user._id);
        

        res.status(200).json({ email, name, token, id : user._id });
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { loginUser, registerUser };