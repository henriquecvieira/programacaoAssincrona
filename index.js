function enviarEmail(body, to, callback){
    setTimeout(() => {
        console.log(`
        to: ${to}
        -------------------------------------
        ${body}
        -------------------------------------
        De: Henrique Vieira
        `)
        callback();
    },5000)
}

console.log(" sending email")
console.log("your email was sent, just wait a few minutes!")
enviarEmail("Hi, you are Welcome","Cheers", () => {
    console.log("this is a CALLBACK")
    console.log("its already done!")
    });
console.log("ok!!!!")