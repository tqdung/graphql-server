import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import AuthSchema from '../models/auth_model';

const Auth = mongoose.model('auth', AuthSchema);

const createAuth = async ({email, username, password}) => {
    let auth = await Auth.findOne({ email: email });
    if (!auth) {
         let newAuth = new Auth({ email: email, username: username, password: password });
         await newAuth;
         return newAuth;
    }
    else {
        let err = new Error('This email is already registered!');
        err.statusCode = 409;
        return err;
    }
}


export default {
    createAuth,
}