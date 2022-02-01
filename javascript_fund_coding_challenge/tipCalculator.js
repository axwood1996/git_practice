const tipCalculator = (quality, totalcost) =>{
    quality = quality.toLowerCase()
    let tip
    if(quality === 'bad'){
      tip=totalcost*0.05
      return tip
    }else if(quality === 'ok'){
      tip=totalcost*0.15
      return tip   
    }else if(quality === 'good'){
      tip=totalcost*0.20
      return tip
    }else if(quality === 'excellent'){
      tip=totalcost*0.30
      return tip
    }else{
      tip=totalcost*0.18
      return tip
    }
  }

  console.log(tipCalculator('Excellent',100))