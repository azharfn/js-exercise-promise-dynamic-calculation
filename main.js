function calculatePromise(number1, number2) {
  // ada 4 kondisi 
  /*jika parameter 0 maka = cant be 0
   *jika genap, genap maka dikurang -  
   *jika genap, ganjil maka ditambah +
   *jika number1 ganjil dikalikan 
   */
  //JIKA MENGGUNAKAN PROMISE HARUS DIDEKLARASI SEPERTI INI
  const result = new Promise((resolve, rejected) =>{
    if(number1 === 0 && number2 === 0){// cek jika ada input 0
      rejected("number1 and number2 cannot be 0"); // if 0
    }
    else if(number1 %2 !== 0){ // cek jika number1 ganjil
      resolve(number1 * number2); // if number 1 ganjil
    }else{
      if (number2 %2 === 0) { /// cek jika genap semua
        resolve(number1 - number2); // if genap, genap
      }
      else{// else jika number2 bukan genap
        resolve(number1 + number2); // if genap, ganjil
      }
    }
  });

  return result;
}
// menampilkan hasil 
calculatePromise(2, 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//menampilkann hasil jika ada banyak input 
calculatePromise(2, 3)
  .then((result) => {
    console.log("Result 1:", result);
    return result * 2;
  })
  .then((result) => {
    console.log("Result 2:", result);
    return result / 2;
  })
  .then((result) => {
    console.log("Result 3:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });




// calculatePromise(6,3)
//     .then((result) => addPromise(result, 4))
//     .then((result) => addPromise(result, 5))
//lanjutan belom paham

module.exports = calculatePromise;
