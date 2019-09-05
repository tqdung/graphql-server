import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const Auth = new Schema({
    email:    { type: String, required: true, unique: true},
    username: { type: String, required: true},
    password: { type: String, minlength: 6 },
    created:  { type: Date, default: Date.now() },
    updated:  { type: Date }
});

const saltRound = 10;

Auth.pre('save', (next) => {
    // Encode password
    bcrypt.genSalt(saltRound, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            console.log(this.password, 'password');
            next();
        })
    })
});

module.exports = Auth;