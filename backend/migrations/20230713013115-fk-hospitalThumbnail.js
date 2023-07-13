'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("hospital_info_thumbnail", {	// FK를 설정할 테이블 (DB에 있는 테이블 이름과 같아야한다.)
      fields: ["hospital_id"],	// FK로 등록할 필드 이름
      type: "foreign key",
      name: "hospital_info_hospital_thumbnail_hospital_id_fk",
      references: {
        table: "hospital_info",		// 참조할 테이블 (DB에 있는 테이블 이름과 같아야한다.)
        field: "id",	// 참조할 필드 이름
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
