function sendingEmail (body, to){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            var ocurredError = true
            console.log("SENT EMAIL")
            if(!ocurredError){
                resolve()
            }else{
                reject()
            }
        },2000)
    })
}
sendingEmail ("Hi ", "henrique@email.com").then(() =>{
    console.log("Dope, we got it!! ")
}).catch(() => {
    console.log("Nope, what a shame! :(")
})