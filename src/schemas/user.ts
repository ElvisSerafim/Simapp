import Realm from 'realm';
import { User } from '../types/types';


const UserObjectSchema = {
    name: "User",
    properties: {
        recordID: "string",
        token: "string",
        name: "string",
        password: "string",
        email: "string",
        phoneNumber: "string",
    },
    primaryKey: "recordID",
};

export default new Realm({ schema: [UserObjectSchema] });