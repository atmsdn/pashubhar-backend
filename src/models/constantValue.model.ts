import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const ConstantValueModel = (sequelize: Sequelize, _Sequelize: any) => {
    const ConstantValue = sequelize.define('ConstantValue', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            unique:true,
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.STRING,
        },
        ...auditColumns,
    });
    return ConstantValue;
};

export default ConstantValueModel;
