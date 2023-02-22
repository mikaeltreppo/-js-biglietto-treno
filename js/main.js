let eta = parseInt(prompt('Inserisci la tua età.'));
console.log(eta);

let km = parseInt( prompt('inserisci i Km che vorresti percorrere'));
console.log(km);

let costo = 0.21;
let spesa = costo * km; 
let scontoSenior = (40 / 100) * spesa;
let spesaSenior = spesa - scontoSenior;
let scontoJunior = (20 / 100) * spesa;
let spesaJunior = spesa - scontoJunior;



if (eta > 65){
document.getElementById('costo').innerHTML = "Congratulazioni! Sei arrivato vivo fno a "+ eta +" anni, ti meriti uno sconto del 40%. Paghi solo: " + spesaSenior.toFixed(2) + "euro";
}
else if (eta < 18){
    document.getElementById('costo').innerHTML = "Ne spenderai di soldi quando sarai maggiorenne! Hai ancora " + eta + " anni, goditi uno sconto del 20%. Paghi solo: " + spesaJunior.toFixed(2) + "euro";
}
else{
    document.getElementById('costo').innerHTML = "Congratulazioni! Hai " + eta +" quindi nessuno ti vuole fare sconti! Paghi: " + spesa.toFixed(2) + "euro";
}




