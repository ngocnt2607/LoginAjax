import connection from "../config/connectDB"
let createNewUser = (user) => {
  return new Promise((resolve, reject) => {
      try{
         connection.query("INSERT INTO login set ?", user, function(error, rows) {
             if(error) reject(error)
             resolve("Create a new user successfully")
         })
      }catch (error) {
         reject(error)
      }
  })
}

module.exports = {
    createNewUser: createNewUser
}