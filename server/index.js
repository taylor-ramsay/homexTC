import faker from 'faker'

const createUser = () => {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName()
  }
}

// Try changing this to test your input!
const USER_COUNT = 10000

const users = Array(USER_COUNT)
  .fill('')
  .map(x => createUser())

// This method is for you to edit, create the filtering however you deem necessary.
const filterUsers = (query) => {
  let regex = new RegExp(query, "i")
  let filteredUsers = []
  if (query.length > 0){
    for(let i=0; i<users.length; i++){
      if(filteredUsers.length < 10){
        if(regex.test(users[i].firstname + " " + users[i].lastname) || regex.test(users[i].lastname + " " + users[i].firstname)){
          filteredUsers.push(users[i])
        }
      }
    }
  }
  return filteredUsers
}

export default filterUsers
