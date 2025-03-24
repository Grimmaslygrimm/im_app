export const createUserValidationSchema = {
    username: {
        notEmpty: {
            errorMessage: "Username cannot be empty"
        },
        isString: {
            options: true,
            errorMessage: "Username must be a string"
        }
    },
    password: {
        isLength: {
            min: 8, 
            max: 32,
            errorMessage: "Password must be between 8 and 32 characters long" 
        },
        notEmpty: {
            errorMessage: "Password is Required"
        },
        isString: {
            options: true,
            errorMessage: "Username must be a string"
        }
        //add a custom validator to password that forces at least 1 special character, 1 upper case letter, and 1 number
    }
}