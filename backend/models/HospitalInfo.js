module.exports = (sequelize, DataTypes) => {
    const HospitalInfo = sequelize.define("hospital_info",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        hospital_name:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        hospital_phone:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        url:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        comment:{
            type:DataTypes.STRING(2000),
            allowNull:false
        },
        address:{
            type:DataTypes.STRING(2000),
            allowNull:false
        },
        address_detail:{
            type:DataTypes.STRING(2000),
            allowNull:false
        },
        kakao_link:{
            type:DataTypes.STRING(2000),
            allowNull:false
        },
        loc_lat:{
            type:DataTypes.STRING(2000),
            allowNull:false
        },
        loc_lng:{
            type:DataTypes.STRING(2000),
            allowNull:false
        }
    },{
        underscored: false,
        freezeTableName:true,
        charset: "utf8",
        collate: "utf8_general_ci",
    });

    HospitalInfo.associate = (db) => {
        db.HospitalInfo.hasMany(db.HospitalInfoThumbnail, {
            foreignKey:'hospital_id',
            targetKey:'id'
        })
    }

    return HospitalInfo;
}