const _ ={
    clamp (number, lower,upper) {
        number = Math.max(number,lower)
        number = Math.min(number,upper)
        return number

    },
    inRange (num, start ,endnoninc){
        if(typeof endnoninc === 'undefined'){
            endnoninc = start
            start = 0
            console.log(endnoninc)
            console.log(start)
        }
        if(start > endnoninc){
            let temp = start
            start = endnoninc
            endnoninc = temp
        }
        let ans
        if(num >= start && num<endnoninc){
            ans =  true
        }else{
            ans =  false
        }
        return ans
    },
    words (str){
        let words = str.split(' ')
        return words

    },
    pad (str, num){
        if(str.length >= num){
            return str
        }
        let fpadding = Math.floor((num-str.length)/2)
        let bpadding = num-str.length-fpadding
        for (let i = 0; i < bpadding; i++){
            str += ' '

        }
        for (let i= 0; i < fpadding; i++){
            str = ' ' + str
        }
        return str
    },
    has (object, key){
        
        let hasValue = object[key]
        
        if(hasValue != undefined){
            return true
        }
            return false
    },
    invert (object){
        let invertedObject = {}
        for(let key in object){
            let originalValue =object[key]
            invertedObject = {originalValue : key}
        }
        return invertedObject
    },
    findKey (object, predfunction){
        let ans = undefined
        for(let key in object){
            if(predfunction(object[key])){
                ans = key
            } 
                
            
        }
        return ans
    },
    drop (array, num){
        if(typeof num === 'undefined'){
            num=1
        }
        let arr= array.slice(num)
        return arr
            
    },
    dropWhile(array, predfunc){
            
      const cb = (element,index) =>{
          return (!predfunc(element,index,array))
      }
      const dropNumber = array.findIndex(cb)
      let arr = this.drop(array, dropNumber)
      return arr

    },
    chunk (array, size){
        let arr= []
        if(typeof size === 'undefined'){
            size = 1
        }
        for(let i = 0; i<array.length; i++){
            if(i + size <= array.length){
                let temp = array.slice(i,i+size)
                arr.push(temp)
                i = i+size-1
            }else{
                let temp = array.slice(i,array.length)
                arr.push(temp)
                i = array.length-1
            }
        }
        return arr

    }

};






// Do not write or modify code below this line.
module.exports = _;