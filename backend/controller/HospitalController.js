const db = require('../models');

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
        const HospitalInfoThumbnail = await db.HospitalInfoThumbnail.findOne(req.params.id, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(HospitalInfoThumbnail);
    }catch(error){
        console.log(error);
    }
}

const getHospitalInfoAndThumbnailById = async(req, res) => {
    try{
        const HospitalInfo = await db.HospitalInfo.findOne(req.params.id, {
            where: {
                id: req.params.id
            }
        });

        const HospitalInfoThumbnail = await db.HospitalInfoThumbnail.findAll(req.params.id, {
            where: {
                hospital_id: req.params.id
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

exports.getHospitalThumbnailById = getHospitalThumbnailById;
exports.getHospitalList = getHospitalList;
exports.getHospitalInfoAndThumbnailById = getHospitalInfoAndThumbnailById;