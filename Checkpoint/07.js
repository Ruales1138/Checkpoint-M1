// 7️⃣ ***** EJERCICIO 7 ***** - ordenarPrecios() 7️⃣
// Implementar la función ordenarPrecios, la cual recibirá un array que representa una lista desordenada
// de precios de Henry Market y, a través de alguno de los métodos de ordenamiento vistos en el módulo (a elección),
// deberá retornar un array con los precios ordenados de menor a mayor.
// Asímismo, en caso de que la función se encuentre con algún precio 0 (cero) dentro del array, debe desestimar
// el ordenamiento, y retornar false.
//
// EJEMPLOS:
//  - ordenarPrecios([20,15,45,10,5]) => [5,10,15,20,45]
//  - ordenarPrecios([20,15,0,10,5]) => false

// CONSIGNAS:
//  🟢 En caso de recibir un 0 (cero) dentro del array, la función debe retornar false
//  🟢 Caso contrario, debe retornar un array con los precios ordenados, utilizando alguno de los método de ordenamiento
//    estudiados. NO SE PUEDE USAR EL MÉTODO SORT() DE ARRAY.

function ordenarPrecios(arr) {
    // Tu código aquí:
    var flag = true;
    while(flag){
      flag = false
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) return false;
        if(arr[i] > arr[i+1]) {
          var aux = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = aux;
          flag = true
        }
      }
    }
    return arr
}
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  ordenarPrecios
};