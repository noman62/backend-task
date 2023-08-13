import User from '../models/auth'
import { hashPassword, comparePassword } from '../utils/auth'
const jwt = require('jsonwebtoken');


//User Registration
export const register = async (req, res) => {
  try {
    const { name, email, password,phoneNumber } = req.body

    // Name validation
    if (!name) return res.status(400).send('Name is required')

    //email validation
    if (!email) return res.status(400).send('email is required')

    // Password validation
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send('Password is required and should be min 6 characters long')
    }

    // Email validation
    let userExist = await User.findOne({ email }).exec()
    if (userExist) return res.status(400).send('email is taken')

    // hash password
    const hashedPassword = await hashPassword(password)

    // Save user in database
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phoneNumber
    })
    await user.save().then(newUser => {
      console.log('New User----->', newUser)
    })

    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}


//User Login
export const login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body

    // Email Validation
    const user = await User.findOne({ email }).exec()
    if (!user) return res.status(400).send('No user found')

    // Password Validation
    const match = await comparePassword(password, user.password)
    if (!match) return res.status(400).send("Password didn't match.")



    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);

    // Set the token as a cookie
    res.cookie('token', token, { httpOnly: true });

    res.status(200).json(user);


  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}

//User Logout
export const logout = async (req, res) => {
  try {
    res.clearCookie('token')
    return res.status(200).json({ message: 'User logged out successfully' });
  } catch (err) {
    console.log(err)
  }
}

