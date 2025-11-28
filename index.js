
//Define 
function loginAttempt(userInfo){
const userInfo= {
  username: "user1"
  password: "password123"
}

let attemptCount=0

function userLogin() {
  return (passwordAttempt,) => {
  return attemptCount ++

let attempt()

  if (attemptCount > 3) {
    return "Account locked due to too many failed log in attempts"
  }

  if (passwordAttempt === userInfo.password ) {
    return "Login successful"

   } else ( attemptCount < 3 ){ 
   return "incorrect password.Try again"}
}

}

userLogin()


}

 createLoginTracker()


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};