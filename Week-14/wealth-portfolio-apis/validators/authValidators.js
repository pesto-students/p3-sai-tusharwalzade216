const { checkSchema } = require("express-validator");

const loginValidator = checkSchema({
    username: {
        errorMessage: 'Username should be a valid email!',
        isEmail: true,
    },
    password: {
        isLength: {
            errorMessage: 'Password should be 8-12 characters long!',
            options: {
                max: 12,
                min: 8
            },
        }
    },
});

module.exports = { loginValidator };
