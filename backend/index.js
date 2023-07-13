const express = require("express");
const port = 3030;
const cors = require("cors");
const bodyParser = require("body-parser");
const {verifyToken} = require("./middleware/VerifyToken");
const {getUsers, Register, Login, Logout} = require("./controller/AdminInfo");
const {refreshToken} = require("./controller/RefreshToken");
const {getHospitalList, getHospitalThumbnailById, getHospitalInfoAndThumbnailById} = require("./controller/HospitalController");
const db = require("./models");

db.sequelize.sync({force: true})
    .then(()=>{
        console.log('데이터베이스 연결 성공');
    })
    .catch((err)=>{
        console.error(err);
    });


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/api/users', verifyToken, getUsers);
app.post('/api/users', Register);
app.post('/api/login', Login);
app.get('/api/token', refreshToken);
app.delete('/api/logout', Logout);

app.get('/api/getHospitalList', getHospitalList);
app.post('/api/getHospitalThumbnailById', getHospitalThumbnailById);
app.post('/api/getHospitalInfoAndThumbnail', getHospitalInfoAndThumbnailById);

app.listen(port, function () {
    console.log("server works on port :" + port);
});