import { WhereOptions } from 'sequelize/types';
import db from '../models';
import { getPasswordHash } from '../shared/utils/auth-utils';
import { BadRequestError } from '../shared/errors/bad-request.error';

const User: any = db.user;
const Constant: any = db.constantValue;

export const createUser = async (
    name: string,
    species: string,
    address1: string,
    address2: string,
    phoneNumber: number
) => {
    const isNumberExist = await getUser({ phoneNumber })
    if (isNumberExist) {
        throw new BadRequestError('Phone number already exist');
    }
    return await User.create({
        name,
        species,
        address1,
        address2,
        phoneNumber
    });
};

export const getAllUsers = async () => await User.findAll();

export const getUser = async (filter: WhereOptions) =>
    await User.findOne({
        where: filter,
    });

export const getUserByEmailId = async (email: string) =>
    await User.scope('withPassword').findOne({ where: { email } });

export const findUser = async (filter: WhereOptions) =>
    await User.findOne({ where: filter });

export const getCurrentUser = async (id: any) => {
    const user = await User.findOne({
        where: {
            id
        }
    })
    return user;
}
export const getConstantValue = async () => {
    const constant = await Constant.findAll()
    return constant;
}
export const getConstantValueByFilter = async (type: any) => {
    const constant = await Constant.findAll({
        where: {
            type
        }
    })
    return constant;
}
export const CalculateValue = async (type: string, fields1: string, fields2: string, fields3: string, fields4: string, fields5: string) => {
    try {
        console.log(fields1, fields2, fields3, fields4, fields5)
        const constantArray = await getConstantValueByFilter(type)
        return constantArray[0]?.dataValues?.value1 * Number(fields1) + constantArray[0]?.dataValues?.value2 * Number(fields2) + constantArray[0]?.dataValues?.value3 * Number(fields3) + constantArray[0]?.dataValues?.value4 * Number(fields4) + constantArray[0]?.dataValues?.value5 * Number(fields5);
    } catch (e) {
        throw new BadRequestError('Something went wrong in calculation');
    }

}
