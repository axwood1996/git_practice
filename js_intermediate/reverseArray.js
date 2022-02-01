const reverseArray = array =>{
    let arr =[];
    console.log(array);
    for(let i = array.length-1; i>=0; i--){
      console.log(array[i])
      arr.push(array[i])
    }
    return arr
  }
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
   
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 