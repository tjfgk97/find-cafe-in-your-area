const express = require("express");
const port = 3030;
const cors = require("cors");
const bodyParser = require("body-parser");
const {verifyToken} = require("./middleware/VerifyToken");
const {getUsers, Register, Login, Logout} = require("./controller/AdminInfo");
const {refreshToken} = require("./controller/RefreshToken");
const {
    getHospitalList, getHospitalThumbnailById, getHospitalInfoAndThumbnailById, registrationHospital, urlCheck,
    deleteHospital, getHospitalInfoAndThumbnailByUrl, modifyHospital
} = require("./controller/HospitalController");
const db = require("./models");
const cookieParser = require("cookie-parser");
const {upload} = require("./middleware/multer.middleware");
const path = require("path");

db.sequelize.sync({force: false})
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())
app.use(express.json());
app.use(express.static('uploads'));
app.use('*/getImages', express.static(path.join(__dirname, 'uploads')));

app.get('/api/users', verifyToken, getUsers);
app.post('/api/users', Register);
app.post('/api/login', Login);
app.get('/api/token', refreshToken);
app.delete('/api/logout', Logout);

app.get('/api/getHospitalList', getHospitalList);
app.post('/api/getHospitalThumbnailById', getHospitalThumbnailById);
app.post('/api/getHospitalInfoAndThumbnail', getHospitalInfoAndThumbnailById);
app.post('/api/getHospitalInfoByUrl', getHospitalInfoAndThumbnailByUrl)

app.post('/api/urlCheck', urlCheck);

app.post('/api/registrationHospital', upload.array('image'), registrationHospital);
app.post('/api/modifyHospital', upload.array('image'), modifyHospital);

app.post('/api/deleteHospital', deleteHospital);

app.listen(port, function () {
    console.log("server works on port :" + port);
});