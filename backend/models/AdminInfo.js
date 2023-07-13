module.exports = (sequelize, DataTypes) => {
    const AdminInfo = sequelize.define('admin_info', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        account:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        refresh_token:{
            type: DataTypes.TEXT
        }
    },{
        underscored: false,
        freezeTableName:true,
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
    });

    AdminInfo.associate = (db) => {}

    return AdminInfo;
}