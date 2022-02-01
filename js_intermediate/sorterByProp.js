const speciesArray = [
    { speciesName: "shark", numTeeth: 50 },
    { speciesName: "dog", numTeeth: 42 },
    { speciesName: "alligator", numTeeth: 80 },
    { speciesName: "human", numTeeth: 32 },
  ];
  
  // Write your code here:
  const sortSpeciesByTeeth = (array) => {
    array.sort(compare)
    return array
      
  function compare(a, b) {
    if (a.numTeeth > b.numTeeth) {
        return 1;
    }
    if (a.numTeeth < b.numTeeth) {
        return -1;
    } 
        
    return 0;
    }
  }