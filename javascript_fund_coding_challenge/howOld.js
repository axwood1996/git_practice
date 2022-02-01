const howOld = (age, year) => {
    let currentYear =  2022
    let difference = year-currentYear
    let yearborn = currentYear - age
    if(difference >0){
        let newage= age+difference
        return `You will be ${newage} in the year ${year}`
    }else if(difference <= 0 && year >= yearborn){
        let newage= year - yearborn
        return `You were ${newage} in the year ${year}`
    }else{
        let dif = yearborn- year
        return `The year ${year} was ${dif} years before you were born`
    }
}


console.log(howOld(26,1996))
console.log(howOld(26,2025))
console.log(howOld(26,2000))
console.log(howOld(26,2014))
console.log(howOld(26,2012))
console.log(howOld(26,2080))
console.log(howOld(26,2056))
