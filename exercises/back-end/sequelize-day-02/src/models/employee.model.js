// src/models/employee.model.js

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'employees',
      underscored: true,
    });
  

    // declaramos as associações do model. A tabela Employees possuim um Address referenciado pela foreign keu employee_id, o model Employee deve chamá-la de address: 
    Employee.associate = (models) => {
      Employee.hasOne(models.Address,
        { foreignKey: 'employeeId', as: 'addresses' });
    };

    // caso cada emplpyee tivesse vários endereços, o código ficaria assim: 
    //  Employee.associate = (models) => {
    //Employee.hasMany(models.Address,
            //      { foreignKey: 'employeeId', as: 'addresses' });
            //  };
  
    return Employee;
  };