let evenNums = []
let oddNums = []



let groupofNums2 = [...groupofNums , 12,234,12343,5345,645,645,756,56,8,1234234,534,5134]


function oddOrEven (a){
  for( let i = 0 ; i <= a.length ; i++ ){
  if(a[i] % 2 == 0){
    evenNums.push(a[i])
  }
  else{
    oddNums.push(a[i])
  }
  
}
  
}

oddOrEven(groupofNums)
console.log(evenNums)
console.log(oddNums)

oddOrEven(groupofNums2)

console.log(evenNums)
console.log(oddNums)

 let oddNumbers = groupofNums.filter((groupofNum) => {
   return groupofNums = groupofNum.pop(evenNums)
 })
 
 console.log(oddNumbers)