function anagrama(palabra1, palabra2) {

    var palabra1 = prompt("Ingrese primera palabra");
    var palabra2 = prompt("Ingrese segunda palabra");
    if (palabra1.toLowerCase() === palabra2.toLowerCase()) return false;

    return palabra1.toLowerCase().split("").sort().join("") === palabra2.toLowerCase().split("").sort().join("");
}

/**Casos de Uso
 * Maggie,Maggie
 * Conservadora,Conversadora
 * Escandalizar,Zascandilear
 * Frase,Fresa
 * Casa,saca
 */