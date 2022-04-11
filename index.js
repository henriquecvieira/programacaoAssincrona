function enviarEmail(body, to, callback){
    setTimeout(() => {
        console.log(`
        to: ${to}
        -------------------------------------
        ${body}
        -------------------------------------
        De: Henrique Vieira
        `)
        callback("ok", 5, "8s");
    },5000)
}

console.log(" sending email")
console.log("your email was sent, just wait a few minutes!")
enviarEmail("Hi, you are Welcome","Cheers", (status, amount, time) => {
    console.log(`
    Status: ${status}
    ------------------------
    Contatos: ${amount}
    ------------------------
    Tempo de Envio: ${time}
    `)
    console.log("its already done!")
    });
