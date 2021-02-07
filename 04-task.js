import users from "./users.js"

const getInactiveUsers = users => users
.filter(user => !user.isActive)
.map(user => user.name);    

console.log(getInactiveUsers(users)); 

// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


