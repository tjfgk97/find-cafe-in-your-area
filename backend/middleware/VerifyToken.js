const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = "bocare2023withpetmily2023togetherwinaccesstoken";
const REFRESH_TOKEN_SECRET = "bocare2023withpetmily2023togetherwinrefreshtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
        req.account = decoded.account;
        next();
    })
}

exports.verifyToken = verifyToken;