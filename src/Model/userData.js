import instance from './instance'

async function userData(url, request_body){

    instance.post(url, request_body)
      .then(function (response) {
        if(url === "/login"){

          return alert("Success, you have connected: " + response.data.login)

        }else if(url === "/user/cadaster"){

          return alert("Success, you have register: " + response.data.user.name)

        }
      
      })
      .catch(function (error) {

        return alert("Error, incorrect name or password!")

      });

}

export default userData