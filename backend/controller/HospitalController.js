const db = require('../models');
const {diskStorage} = require("../middleware/multer.middleware");
const multer = require("multer");

const getHospitalList = async(req, res) => {
    try{
        const hospitalList = await db.HospitalInfo.findAll();
        res.status(200).json(hospitalList);
    }catch(error){
        console.log(error);
    }
}

const getHospitalThumbnailById = async(req, res) => {
    try{
        const HospitalInfoThumbnail = await db.HospitalInfoThumbnail.findOne({
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(HospitalInfoThumbnail);
    }catch(error){
        console.log(error);
    }
}

const getHospitalInfoAndThumbnailById = async(req, res) => {
    try{
        const HospitalInfo = await db.HospitalInfo.findOne({
            where: {
                id: req.body.id
            }
        });

        const HospitalInfoThumbnail = await db.HospitalInfoThumbnail.findAll({
            where: {
                hospital_id: req.body.id
            }
        });

        const returnData = {
            "HospitalInfo": HospitalInfo,
            "HospitalInfoThumbnail": HospitalInfoThumbnail
        }

        res.send(returnData);
    }catch(error){
        console.log(error);
    }
}

const getHospitalInfoAndThumbnailByUrl = async(req, res) => {
    try{
        const HospitalInfo = await db.HospitalInfo.findOne({
            where: {
                url: req.body.url
            }
        });

        const HospitalInfoThumbnail = await db.HospitalInfoThumbnail.findAll({
            where: {
                hospital_id: HospitalInfo.id
            }
        });

        const returnData = {
            "HospitalInfo": HospitalInfo,
            "HospitalInfoThumbnail": HospitalInfoThumbnail
        }

        res.send(returnData);
    }catch(error){
        console.log(error);
    }
}

const registrationHospital = async(req, res) => {
    try{
        await db.HospitalInfo.create({
            hospital_name: req.body.name,
            hospital_phone: req.body.phone,
            url: req.body.url,
            comment: req.body.comment,
            address: req.body.address,
            address_detail: req.body.address_detail,
            kakao_link: req.body.kakao_link,
            loc_lat: req.body.address_lat,
            loc_lng: req.body.address_lng
        }).then(result => {
            for (let i = 0; i < req.files.length; i++) {
                db.HospitalInfoThumbnail.create({
                    file_name: req.files[i].filename,
                    file_path: req.files[i].filename,
                    file_size: req.files[i].size,
                    hospital_id: result.id
                })
            }
        }).catch(error => {
            console.log(error);
        })

        res.json({msg: "Registration Successful"});
    }catch(error){
        console.log(error);
    }
}

const modifyHospital = async(req, res) => {
    try{
        await db.HospitalInfoThumbnail.destroy({
            where: {
                hospital_id: req.body.id
            }
        });

        await db.HospitalInfo.update({
            hospital_name: req.body.name,
            hospital_phone: req.body.phone,
            url: req.body.url,
            comment: req.body.comment,
            address: req.body.address,
            address_detail: req.body.address_detail,
            kakao_link: req.body.kakao_link,
            loc_lat: req.body.address_lat,
            loc_lng: req.body.address_lng
        },{
            where: {
                id: req.body.id
            }
        }).then(result => {
            for (let i = 0; i < req.files.length; i++) {
                db.HospitalInfoThumbnail.create({
                    file_name: req.files[i].filename,
                    file_path: req.files[i].filename,
                    file_size: req.files[i].size,
                    hospital_id: req.body.id
                })
            }
        }).catch(error => {
            console.log(error);
        })

        res.json({msg: "Modify Successful"});
    }catch(error){
        console.log(error);
    }
}

const urlCheck = async(req,res) => {
    try{
        const url = req.body.url;
        const result = await db.HospitalInfo.findOne({
            where: {
                url: url
            }
        });
        if(result){
            res.status(200).json("impossible");
        }else{
            res.status(200).json("possible");
        }
    }catch(error){
        console.log(error);
    }
}

const deleteHospital = async(req, res) => {
    try{
        const result = await db.HospitalInfo.destroy({
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(result);
    }catch(error){
        console.log(error);
    }
}

exports.getHospitalThumbnailById = getHospitalThumbnailById;
exports.getHospitalList = getHospitalList;
exports.getHospitalInfoAndThumbnailById = getHospitalInfoAndThumbnailById;
exports.registrationHospital = registrationHospital;
exports.urlCheck = urlCheck;
exports.deleteHospital = deleteHospital;
exports.getHospitalInfoAndThumbnailByUrl = getHospitalInfoAndThumbnailByUrl;
exports.modifyHospital = modifyHospital;