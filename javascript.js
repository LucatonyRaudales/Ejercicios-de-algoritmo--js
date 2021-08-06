/*const multiplicar = (a, b) => {
    var result = 0
    if(b ==  0) return result
    
    for (var i = 0; i < b; i++){
        result += a
    }
    return result
}

function multiLeastCode(a,b){
    for(var result = 0, x = 0; x < b; x++) result += a;
    return result;
}

console.log(multiplicar(5, 4))
console.log(multiplicar(5, 0))
console.log(multiLeastCode(6, 4))

function double_last_item_array( my_arr ){
    return my_arr[ my_arr.length - 1 ] * 2;
  }

  console.log( double_last_item_array( [1, 2, 3, 4, 5, 6, 7, 8, 9 ] )) ; // 18
 


  //print 50 times "hola world"  without any loop function 
  function printing(a){
    console.log("Hola mundo ")
    a < 50 ?  printing(a += 1) : null
  }

  printing(0)


  // Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.




  //insertar días vividos, y retornar años, meses y días

  const daysToDate = (días) => {
      var años = Math.floor(días / 365);
      var diasRestantes = días%365;
      var numMeses = Math.floor(diasRestantes / 30)
      var diasA = diasRestantes%30
      console.log("Tienes", años,"años", numMeses, "meses y", diasA, "días")
  }

  daysToDate(10000)
   */


const submit = (array, numero) => {
    var retorna = []
    for (var i = 0; i < array.length; i++) {
        var sumatoria = array[i];
        var inarray = [array[i]];

        if (sumatoria < numero) {
            for (var j = i + 1; j < array.length; j++) {
                sumatoria += array[j]
                inarray.push(array[j])
                if (sumatoria == numero) {
                    retorna.push(inarray)
                    inarray = []
                    break;
                }
                if (sumatoria > numero) {
                    inarray = []
                    break;
                }
            }
        }

        else if (sumatoria > numero) {
            inarray = [];
        }

    }
    return retorna
}


console.log(submit([7, 3, 4, 6, 5, 4, 89, 6], 15))