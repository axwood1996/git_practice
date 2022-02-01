const dogFactory = (name, breed, weight) =>{
    const dog = {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name
      },
      get breed(){
        return this._breed
      },
      get weight(){
        return this._weight
      },
      set name(data){
        this._name = data
      },
      set breed(data){
        this._breed=data
      },
      set weight(data){
        this._weight=data
      },
      bark(){
        return 'ruff! ruff!'
      },
      eatTooManyTreats(){
        const newWeight = this._weight + 1
        this._weight = newWeight
      }
    }
  
    return dog
  }