const calculateWeight = (earthWeight, planet) => {
    let weight
    planet = planet.toLowerCase()
    if(planet === 'mercury'){
        weight = earthWeight * 0.378
        return weight

    }else if(planet === 'venus'){
        weight = earthWeight * 0.907
        return weight
    }else if(planet === 'mars'){
        weight = earthWeight * 0.377
        return weight
    }else if(planet === 'jupiter'){
        weight = earthWeight * 2.36
        return weight
    }else if(planet === 'saturn'){
        weight = earthWeight * 0.916
        return weight
    }else{
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}

console.log(calculateWeight(28,'Mars'))
console.log(calculateWeight(100, 'JupiTer'))