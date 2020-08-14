const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


UserSchema.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt);
}

UserSchema.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}


module.exports = model('User', UserSchema);