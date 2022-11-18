function anagrama(palabra1, palabra2) {
    var ValidaAnagrama = true;
    var numCar, posEnCadena2;

    var palabra1 = prompt("Ingrese primera palabra");
    var palabra2 = prompt("Ingrese segunda palabra");

    var sizeWord1 = palabra1.length;
    var sizeWord2 = palabra2.length;

    if (sizeWord1 != sizeWord2) {
        ValidaAnagrama = false;
    } else if (palabra1 == palabra2) {
        ValidaAnagrama = false;
    } else {
        numCar = 0;
        while (ValidaAnagrama && (numCar < palabra1.length)) {
            posEnCadena2 = palabra2.indexOf(palabra1[numCar]);
            if (posEnCadena2 == -1) {
                ValidaAnagrama = false;
            } else {
                palabra2.split(posEnCadena2);

            }
            numCar++
        }
    }
    if (ValidaAnagrama) {
        return ValidaAnagrama
    } else {
        return ValidaAnagrama
    }
}
/**Casos de Uso
 * Maggie,Maggie
 * Conservadora,Conversadora
 * Escandalizar,Zascandilear
 * Frase,Fresa
 * Casa,saca
 */