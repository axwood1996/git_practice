class Media {
    constructor(title){
        this._title=title
        this._isCheckedOut =false
        this._ratings = []
    }
    get title(){
        return this._title
    }
    get isCheckedOut(){
        return this._isCheckedOut

    }
    get ratings(){
        return this._ratings
    }
    set isCheckedOut(bool){
        if(typeof bool === 'Boolean'){
            this._isCheckedOut=bool
        }else{
            console.log(`Value needs to be a boolean`)
        }
    }
    toggleCheckOutStatus (){
        if(this._isCheckedOut === 'true'){
            this._isCheckedOut = false
        }else{
            this._isCheckedOut = true
        }
    }
    getAverageRating () {
        if(this._ratings.length>0){
            return (this._ratings.reduce(reducer))/(this._ratings.length)
        }else{
            console.log(`No ratings have been placed for this title`)
        }
    }
    addRating (num){
        if(num<=5 && num> 0){
            this._ratings.push(num)
        }else{
            console.log('Rating has to be between 0 and 5 stars')
        }
    }


}


class Book extends Media{
    constructor(author, title, pages){
        super(title)
        this._author = author
        this._pages = pages
    }
    get author(){
        return this._author
    }
    get pages(){
        return this._pages
    }
}

class Movie extends Media{
    constructor(director, title, runTime){
        super(title)
        this._director=director
        this._runTime= runTime
    }
    get director(){
        return this._director
    }
    get runTime(){
        return this._runTime
    }
}

const reducer = (previousValue, currentValue) => previousValue + currentValue;

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything',544)
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', '116')
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())










/*
const lda =new Media('Locura de amor en las vegas')
console.log(lda.title)
lda.addRating(4)
lda.addRating(3)
lda.addRating(4)
console.log(lda.getAverageRating())
*/

