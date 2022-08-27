const User = require('../model/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError, UnauthenticatedError } = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (req, res)=>{    
    if(!(req.body.password===req.body.confirmPassword)){
        throw new BadRequestError("passwords dont match")
    }
    const user = await User.create(req.body)
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user: { Name: user.name, userId: user._id, Email: user.email}, token})    

    
}


const login = async (req, res)=>{
    const { email,password } = req.body
    if(!email || !password){
        throw new BadRequestError('provide email and password')
    }
    const user = await User.findOne({'email': {'$regex': email ,$options:'i'}})
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT()
    res.status(StatusCodes.OK).json( {user: { firstName: user.Firstname, userId: user._id, Email: user.email, role: user.role }, token})
}


const getUser = async(req,res)=>{
    const userId = req.user.userId
    const user = await User.findById({_id:userId})
    if(!user){
        throw new NotFoundError(`no user with ${userId}`)
    }
    res.status(StatusCodes.OK).json(user)
}


module.exports = {
    register,
    login,
    getUser
}