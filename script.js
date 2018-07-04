function suma(a, b){

    if(isNaN(a)||isNaN(b)){

        resultado = "Eso no son numeros";
    }else{
        a = parseInt(a);
        b= parseInt(b);
        resultado = a+b;
    }
    return resultado;
}

let num1 = 7;
let num2 = "javi";
console.log(suma(num1, num2));

function renta(cap, int, tie){

    return cap * int * tie;
}
console.log(renta(10000, 3, 0.3));