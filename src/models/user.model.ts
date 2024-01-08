import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const UserModel = (sequelize: Sequelize, _Sequelize: any) => {
    const User = sequelize.define(
        'Users',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phoneNumber: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: true,
            },
            species: {
                type: DataTypes.STRING,
            },
            address1: {
                type: DataTypes.STRING,
            },
            address2: {
                type: DataTypes.STRING,
            },
            ...auditColumns,
        },
        {
            defaultScope: {
                attributes: { exclude: ['password'] },
            },
            scopes: {
                withPassword: {
                    attributes: { exclude: [] },
                },
            },
            hooks: {
                afterCreate: (record: any) => {
                    /* eslint no-param-reassign: "off" */
                    delete record.dataValues.password;
                },
                afterUpdate: (record: any) => {
                    /* eslint no-param-reassign: "off" */
                    delete record.dataValues.password;
                },
            },
        }
    );
    return User;
};

export default UserModel;
