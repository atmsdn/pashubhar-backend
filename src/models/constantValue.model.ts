import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const ConstantValueModel = (sequelize: Sequelize, _Sequelize: any) => {
    const ConstantValue = sequelize.define('ConstantValue', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            defaultValue: DataTypes.INTEGER,
        },
        type: {
            unique: true,
            type: DataTypes.STRING,
        },
        value1: {
            type: DataTypes.STRING,
        },
        value2: {
            type: DataTypes.STRING,
        },
        value3: {
            type: DataTypes.STRING,
        },
        value4: {
            type: DataTypes.STRING,
        },
        value5: {
            type: DataTypes.STRING,
        },
        ...auditColumns,
    });
    return ConstantValue;
};

export default ConstantValueModel;
