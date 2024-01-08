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
export const CalculateValue = async (
    fields1: string,
    fields2: string,
    fields3: string,
    fields4: string,
    fields5: string
) => {
    return Number(fields1) + Number(fields2) + Number(fields3) + Number(fields4) + Number(fields5);
}
