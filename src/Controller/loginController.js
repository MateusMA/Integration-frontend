import userData from '../Model/userData'

async function login(name_user, password_user){
    
    userData('/login', {name: name_user, password: password_user})
    
}

export default login