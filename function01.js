function greeting(name, language) {
    if(language === "english") {
        console.log(`good morning ${name}!`);
    } else if (language === "french") {
        console.log(`bonjour ${name}!`);
    } else {
        console.log(`selamat pagi ${name}!`);
    }
}
greeting("harry", "french")

console.log("-----------------------------------------------------------------------")

function hasil(a, b, operator) {
    let jumlah ;
    if (operator === "+"){
        jumlah = a + b ;
    }else if (operator === "-"){
        jumlah = a -b ;
    }
    console.log(jumlah)
}

hasil(2, 3, "-")