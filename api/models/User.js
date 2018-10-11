import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            default: null
        },
        lastName: {
            type: String,
            default: null
        }
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    coach: {
        type: Boolean,
        default: null
    },
    coachId: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date(),
        select: false
    },
    deletedAt: {
        type: Date,
        default: null,
        select: false
    },
});

const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
};

// userSchema.pre('save', (next) => {
//     const user = this;
//     bcrypt.hash(user.password, 10, (err, hash) => {
//         if (err) return next(err);
//
//         user.password = hash;
//         next();
//     })
// });

module.exports = mongoose.model('User', userSchema);