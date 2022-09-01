// code your solution here


//const result = record.find(({year}) => year === 'W');

//console.log(result)



//function superbowlWin(win){
//   return win.year === 'W';
//}
//console.log(record.find(superbowlWin));


//function superbowlWin(record){
   //const result = record.find(record => result)
  //  return ("2015");

 
//}

// CORRECT METHOD, WILL PASS

// function superbowlWin(array){
//     for(let item of array){
//         if(item.result === "W"){
//            return item.year;
//         }
//     }
// }

//CORRECT METHOD, WONT PASS

//superbowlWin - (record) => {
//    const result = record.find(element => element.result === "W")
//    return result ? (result.year) : undefined
//}

function superbowlWin(record) {
    const result = record.find(element => element.result === "W")
    return result ? (result.year) : undefined
}

// function superbowlWin(yearsAndResults) {
//   const result = yearsAndResults.find(record => record.result === "W");
//   result result.year
// }
// superbowlWin(record) 

// function testFN(data){
//   data.forEach((record) =>{
//     console.log(record.year + 1)
//   })
// }


// testFN(record)