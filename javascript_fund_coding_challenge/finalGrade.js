const finalGrade= (a,b,c) =>{
    let mean = (a+b+c)/3
    if(a<0 || a>100 || b <0 || b>100 ||c<0 || c>100){
        return 'You have entered an invalid grade.'
    }else{
        if (mean >= 0 && mean <= 59){
            return 'F'
        }else  if (mean >= 60 && mean <= 69){
            return 'D'
        }else  if (mean >= 70 && mean <= 79){
            return 'C'
        }else  if (mean >= 80 && mean <= 89){
            return 'B'
        }else  if (mean >= 90 && mean <= 100){
            return 'A'
        }
           
    }
    
     
    
}

console.log(finalGrade(101,70,80))
console.log(finalGrade(99, 92, 95)) // Should print 'A'