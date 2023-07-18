module.exports = (sequelize, DataTypes) => {
    const HospitalInfoThumbnail = sequelize.define('hospital_info_thumbnail', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        file_name:{
            type:DataTypes.STRING(2000),
            allowNull:false
        },
        file_path:{
            type:DataTypes.STRING(2000),
            allowNull:false
        },
        file_size:{
            type:DataTypes.INTEGER(255),
            allowNull:false
        },
        hospital_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        underscored: false,
        freezeTableName:true,
        charset: "utf8",
        collate: "utf8_general_ci",
    });

    HospitalInfoThumbnail.associate = (db) => {
        db.HospitalInfoThumbnail.belongsTo(db.HospitalInfo, {
            foreignKey:'hospital_id',
            targetKey:'id'
        })
    }

    return HospitalInfoThumbnail;
}