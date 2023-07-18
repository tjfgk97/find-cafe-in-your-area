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
        charset: "utf8",
        collate: "utf8_general_ci",
    });

    AdminInfo.associate = (db) => {}

    return AdminInfo;
}