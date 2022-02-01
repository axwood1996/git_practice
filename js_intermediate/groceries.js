// Write function below
const groceries = array =>{
    let len = array.length
    console.log(`Input length is ${len}`)
    
    let str = ''
    if(len === 1){
        
      
      str = str + array[0].item
    }
    if(len === 2){
      str = str + array[0].item + ' and ' + array[1].item;
    }
    if(len >= 3){
        for(let i = 0; i<= len-1; i++ ){
            if(i === 0){
                
                str += array[0].item
                console.log(str)
            }
            if(i>0 && i< len-1){
                str += ', ' + array[i].item
                console.log(str)

            }
            if(i=== len-1){
                str += ' and ' + array[i].item
                console.log(str)

            }
        }
    }
    return str
  }
  
  let arr = [{item: 'Bread'}, {item: 'Butter'}, {item: 'Margarita'}, {item: 'Rigatonni'}]
  console.log(groceries(arr))
  
  //console.log(groceries([{item: 'Cheese Balls'}]))