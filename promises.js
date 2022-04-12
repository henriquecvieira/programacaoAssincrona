function sendingEmail (body, to){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            var ocurredError = true            
            if(!ocurredError){
                resolve({time: 4, to: "henrique@email.com"})
            }else{
                reject("Sorry, something got wrong!")
            }
        },2000)
    })
}
sendingEmail ("Hi ", "henrique@email.com").then((time, to) =>{
    console.log(`
        Time: ${time},
        To: ${to}
    `)
}).catch((error) => {
    console.log("Nope, what a shame!!! " + error)
})