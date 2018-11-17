const nameReg = /^[\da-zA-Z_-]{6,}$/
export function validName (name: string) {
  return nameReg.test(name)
}

const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
export function validEmail (email: string) {
  return emailReg.test(email)
}

const pwdReg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{9,}$/
export function validPassword(pwd: string) {
  return pwdReg.test(pwd)
}