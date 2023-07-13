const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');


require('dotenv').config();

const ACCESS_TOKEN_SECRET = "bocare2023withpetmily2023togetherwinaccesstoken";
const REFRESH_TOKEN_SECRET = "bocare2023withpetmily2023togetherwinrefreshtoken";

const getUsers = async(req, res) => {
    try {
        const adminInfo = await db.AdminInfo.findAll({
            attributes:['id','account']
        });
        res.json(adminInfo);
    } catch (error) {
        console.log(error);
    }
}

exports.getUsers = getUsers;

const Register = async(req, res) => {
    const { account, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await db.AdminInfo.create({
            account: account,
            password: hashPassword
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}

exports.Register = Register;

const Login = async(req, res) => {
    try {
        const adminInfo = await db.AdminInfo.findAll({
            where:{
                account: req.body.account
            }
        });

        const match = await bcrypt.compare(req.body.password, adminInfo[0].dataValues.password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const account = adminInfo[0].dataValues.account;
        const accessToken = jwt.sign({account}, ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({account}, REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await db.AdminInfo.update({refresh_token: refreshToken},{
            where:{
                account: account
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Account not found"});
    }
}

exports.Login = Login;

const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const adminInfo = await db.AdminInfo.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!adminInfo[0]) return res.sendStatus(204);
    const account = adminInfo[0].dataValues.account;
    await db.AdminInfo.update({refresh_token: null},{
        where:{
            account: account
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

exports.Logout = Logout;