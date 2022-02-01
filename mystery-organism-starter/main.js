// Returns a random DNA base
const returnRandBase2 = (base) => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  let arr
  if(base === 'A'){
    arr = dnaBases.filter(letter => letter != 'A')
    return arr[Math.floor(Math.random() * 3)];
  }else if(base=== 'T'){
    arr = dnaBases.filter(letter => letter != 'T')
    return arr[Math.floor(Math.random() * 3)];
  }else if(base === 'C'){
    arr = dnaBases.filter(letter => letter != 'C')
    return arr[Math.floor(Math.random() * 3)];
  }else{
    arr = dnaBases.filter(letter => letter != 'G')
    return arr[Math.floor(Math.random() * 3)];
  }
  


  
};


const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const PAequorFactory = (num,array) =>{
  const obj = {
    specimenNum: num,
    dna : array,
    mutate(){
      let basetoswap = Math.floor(Math.random()*this.dna.length)
      this.dna[basetoswap] = returnRandBase2(this.dna[basetoswap])
    },
    compareDNA(object){
      let counter= 0
      let percentage
      for (let i = 0; i<this.dna.length; i++){
          if(object.dna[i]===this.dna[i]){

          }else{
            counter += 1
          }

      }
      console.log(counter)
      percentage = 100- (counter/this.dna.length *100)
      console.log(`${this.specimenNum} and ${object.specimenNum} only have ${percentage}% DNA in common`)
    },
    willLikelySurvive(){
      if(willsurv(this.dna)){
        return true
      }else{
        return false
      }

    },

  }
  return obj
}



const repeatfunc = (func, times) => {
  let arr =[]
  let i= 0
  while(arr.length <= times){
    let obj = func(i,mockUpStrand())
    i += 1
    if(obj.willLikelySurvive()){
      arr.push(obj)
    }else{

    }
  }
  return arr
}





const willsurv = array =>{
  let counter = 0
  for(let i=0; i< array.length; i++){
    if(array[i]=== 'C' || array[i]=== 'G'){
      counter += 1
    }

  }
  let perc = counter/array.length*100
  if(perc >= 50){
    return true
  }else{
    return false
  }
}


x= repeatfunc(PAequorFactory,30)
console.log(x)


/*
x= PAequorFactory(1,mockUpStrand())
console.log(x)
console.log(x.dna)
console.log(x.willLikelySurvive())
*/
//console.log(PAequorFactory(1,mockUpStrand()))
/*
x = PAequorFactory('ex1',mockUpStrand())
console.log(x)
x2= PAequorFactory('ex2',mockUpStrand())
console.log(x2)

x.compareDNA(x2)
*/
/*
console.log(x.mutate(), x)
*/