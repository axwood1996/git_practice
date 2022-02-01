const subLength = (string, character) =>{
    if(string.includes(character)){
      let firstOccurence = string.indexOf(character)
      if(string.includes(character, firstOccurence+1)){
        let secondOccurence =string.indexOf(character,firstOccurence+1)
        let dif = secondOccurence -firstOccurence
        if(string.includes(character,secondOccurence+1)){
          return 0
        }else{
          return dif+1
        }
      }else{
          return 0
      }
    }else{
      return 0;
    }
}

console.log(subLength('uncopyrightable','n'))