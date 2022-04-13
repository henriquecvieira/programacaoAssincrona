function getId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },1500)
    })
}

function searchEmailOnDataBase(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("victorlima@guia.com.br")
        },2000);
    })
}

function sendEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            let deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "henrique@email.com"}) // Promessa OK!
            }else{
                reject("Full line") // Foi mal, eu falhei :(
            }
        },1000)
    });
}

function getUsers(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve([
                {name: "Henrique" , lang: "CS"},
                {name: "Theodoro" , lang: "JS"},
                {name: "Arthur" , lang: "Python"}
                ], 1000)
        })             
    })
}

/*console.log("Beginning!");
getId().then((id) => {
    searchEmailOnDataBase(id).then((email) => { 
        sendEmail("Hi, how you doing?",email).then(() => {
            console.log("Sent email for user id: " + id)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("END");*/

/*getUsers().then((getUsersresult) => {
    console.log(getUsersresult)
}).catch(err)*/

sendEmail()
    .then((retornoDoEmail) => {
        let retorno= retornoDoEmail
        console.log("sucesso ===> " + JSON.stringify(retorno))
    })
    .catch((erro) => {
        console.log("ERRO ===> " +  erro)
    })



async function main(){
    var user = await getUsers()
    console.log(user)
}

main()
