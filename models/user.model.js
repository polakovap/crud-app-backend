const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
{
    email:{
        type: String,
        required: [true, "Please enter e-mail"]
    },
    username: {
        type: String,
        required: [true, "Please enter username"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    }
},
{
    timestamps: true
}
);

const User = mongoose.model("User", UserSchema);

module.exports = User;