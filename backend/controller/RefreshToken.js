const jwt = require('jsonwebtoken');
const db = require('../models');

const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const adminInfo = await db.AdminInfo.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!adminInfo[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const account = adminInfo[0].account;
            const accessToken = jwt.sign({account}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}

exports.refreshToken = refreshToken;