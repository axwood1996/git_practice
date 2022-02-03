class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level =level;
        this._numberOfStudents = numberOfStudents
    }
    get name(){
        return this._name
    }
    get level(){
        return this._level
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }
    set numberOfStudents(num){
        if (typeof num === 'Number'){
            this._numberOfStudents=num
        }else{
            this._numberOfStudents=parseInt(num)
        }
    }
    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level`)
    }
    static pickSubstituteTeacher(substituteTeachers){
        let index = Math.floor(Math.random()*substituteTeachers.length)
        console.log(substituteTeachers[index])
    }
}

class Primary extends School{
    constructor(name, numberOfStudents,pickupPolicy){
        super(name,'primary',numberOfStudents)
        this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy(){
        return this._pickupPolicy
    }
}

class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents)
        this._sportsTeams = sportsTeams
    }
    get sportsTeams(){
        console.log(this._sportsTeams)
        
    }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
const alSmith = new HighSchool('Al E. Smith', 45, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.sportsTeams