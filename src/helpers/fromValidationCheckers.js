
const validLength = (str) => {
    if (str?.length === 0) return true;
    return false;
}
/**
 * Validates email address.
 * Email must be a valid format and between 5 and 100 characters.
 */
const validateEmail = (email) => {
    if (validLength(email)) return false;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return email.length >= 5 && email.length <= 100 && emailRegex.test(email.trim());
}

/**
 * Validates password.
 * Password must be between 8 and 20 characters, and must contain at least:
 * - One uppercase letter
 * - One lowercase letter
 * - One digit
 * - One special character (@$!%*?&#)
 */
const validatePassword = (password) => {
    if (validLength(password)) return false;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;
    return passwordRegex.test(password);
}

/**
 * Validates that password and confirm password are the same.
 */
const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
}



export {
    validateEmail,
    validatePassword,
    validateConfirmPassword
} 