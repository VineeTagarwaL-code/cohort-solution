const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const { z } = require('zod')


const EmailSchema = z.string().email();
const passSchema = z.string().min(6)

function validate(username, password) {
    const validEmail = EmailSchema.safeParse(username)
    const validPass = passSchema.safeParse(password)


    return (validEmail.success && validPass.success)

}
function signJwt(username, password) {
    let resultOfvalidation = validate(username, password)

    if (!resultOfvalidation) {
        return null;
    }

   
    var token = jwt.sign({ username: username, password: password }, jwtPassword)
    return token;
}

function verifyJwt(token) {
    try {
        let decoded = jwt.verify(token, jwtPassword);
        console.log(decoded)
        return true;
      } catch (error) {
return false;
      }
}

function decodeJwt(token) {
    try {

        
        let decoded = jwt.verify(token, jwtPassword);
     
        
        return true;
      } catch (error) {

     return false;
      }
  

}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}