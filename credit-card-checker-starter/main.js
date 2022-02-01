// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] //invalid
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] //invalid
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] //invalid

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const stringConvert = str =>{
    let arr =[]
    let ans =  str.split('')
    for(let i = 0; i< ans.length; i++){
        arr.push(Number(ans[i]))
    }
    return arr
}


const findInvalidCards = array =>{
  let arr= []
  let temp
  for(let i=0 ; i< array.length; i++){
      
    if(typeof array[i]==='string'){
        temp = stringConvert(array[i])
        
    }
    if(checkCred(temp)=== false){
        
        arr.push(temp)
    }
  }
  return arr
} 


const checkCred = array =>{
    let par = 0
    let expectedReturn
    let sum = 0
    for (let i = array.length-1; i >= 0 ; i--){
        if(par % 2 === 0){
            sum += array[i]
            par +=1
        }else{
            if(array[i] *2  >= 10){
                sum += (array[i] *2) -9
                par +=1
            }else{
                sum += array[i] *2 
                par += 1
            }
        }
    }
    if (sum %10 === 0){
        expectedReturn = true
    }else{
        expectedReturn = false
    }
    return expectedReturn
}

const cardCompanies = (array) =>{
    let company
    if(array[0]===3){
        company ='American Express'
    }else if(array[0]===4){
        company = 'Visa'
    }else if(array[0]===5){
        company = 'Mastercard'
    }else if(array[0]===6){
        company = 'Discover'
    }else{
        company = 'Company not found'
    }
    return company
}


const invalidCardCompanies = array =>{
    let arr =[]
    for(let i=0 ; i< array.length; i++){
        let temp = cardCompanies(array[i])
        if(arr.includes(temp)){
        }else{
            arr.push(temp)
        }
    }
    return arr
}


 x = findInvalidCards(['4539677908016808','4532778771091795'])
 console.log(x)

 x2 = invalidCardCompanies(x)
 console.log(x2)
 




/*
let cc ='1234567885214'
let acc = stringConvert(cc)
let vcc = checkCred(acc)
console.log(acc)
*/




