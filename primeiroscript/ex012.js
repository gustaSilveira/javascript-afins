var agora = new Date()
var hora = agora.getHours()
console.log(`sao exatamente ${hora} horas`)
if(hora < 12){
    console.log(`bom dia!`)
} else if (hora <=18){
    console.log(`boa tarde`)
} if (hora > 18){
    console.log(`boa noite`)
}