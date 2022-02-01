const lifePhase = number =>{
    if(number>0 && number <= 3 ){
        return 'baby'
    }else if(number>=4 && number <= 12 ){
        return 'child'
    }else if(number>=13 && number <= 19 ){
        return 'teen'
    }else if(number>=20 && number <= 64 ){
        return 'adult'
    }else if(number>=65 && number <= 140 ){
        return 'senior citizen'
    }else{
        return 'This is not a valid age'
    }


}

console.log(lifePhase(60))