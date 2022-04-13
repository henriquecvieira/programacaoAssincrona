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
            resolve("theodoro@guia.com.br")
        },2000);
    })
}

function sendEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            let deuErro = true;
            if(!deuErro){
                resolve({time: 6, to: "henrique@email.com"}) 
            }else{
                reject("Full line") 
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

/*sendEmail()
    .then((retornoDoEmail) => {
        let retorno= retornoDoEmail
        console.log("sucesso ===> " + JSON.stringify(retorno))
    })
    .catch((erro) => {
        console.log("ERRO ===> " +  erro)
    })*/



async function main(){
    var id = await getId()
    var email = await searchEmailOnDataBase(id)
    
    try{
        await sendEmail("Olá, como vai? " , email)
        console.log("sucesso ===> " + email)
    }
    catch(erro){    
        console.log(erro)        
    }
}

main()

//asyncGetId()


