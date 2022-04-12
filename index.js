function enviarEmail(body, to, callback){
    setTimeout(() => {
        var deuErro = false
        if(deuErro){
            callback(12, "\n email sending was failed")
        }else{
            callback(12)
        }       
    },2000)
}

console.log("start of email sending")

enviarEmail("Hi, you\´re Welcome","Cheers", (time, erro) => {
    if(erro == undefined){
        console.log("TUDO OK!")
        console.log(`Tempo: ${time}s`)
    }else{
        console.log("an error ocurred " + erro)
    }   
});
