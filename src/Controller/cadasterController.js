import userData from '../Model/userData'

async function cadaster(name_user, password_user){
    
    userData('/user/cadaster', {name: name_user, password: password_user})
    
}

export default cadaster