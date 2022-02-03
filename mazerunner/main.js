const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor (array){
        this.field=array
        this.position=[0,0]
        this.status='playing'
    }
    print(){
        for(let i= 0; i < this.field.length; i++){
            console.log(this.field[i].join(''))
        }
        
    }
    move(){
        let movement = prompt('Which way you want to move?')
        console.log(typeof movement)
        if(movement === 's'){
            this.position=[this.position[0]+1,this.position[1]+0]
        }
        if(movement === 'w'){
            this.position=[this.position[0]-1,this.position[1]+0]
        }
        if(movement === 'a'){
            this.position=[this.position[0]+0,this.position[1]-1]
        }
        if(movement === 'd'){
            this.position=[this.position[0]+0,this.position[1]+1]
            //console.log(this.position)
        }
    }
    conditions(){
        if(this.position[1]>=this.field[0].length || this.position[1] <0 || this.position[0] < 0 || this.position[0] >= this.field.length ){
            this.status = 'dead'
        }else{
            //console.log('entramos aca')
            if(this.field[this.position[0]][this.position[1]] ==='O' ){
                this.status='dead'

            }else if(this.field[this.position[0]][this.position[1]] ==='^'){
                this.status='won'
            }else{
        
            
                this.field[this.position[0]][this.position[1]] = '*'
                //console.log(this.field)
            }
        }
    }
    game(){
        this.print()
        while(this.status==='playing'){
            this.move()
            this.conditions()
            this.print()

        }
        if(this.status === 'won'){
            console.log('Congrats you found the hat!!!!!')
        }else{
            console.log('Better luck next time scrub')
        }
    }

}

const newrow= (width,porcentaje) =>{
    let arr =[]
    for(let i = 0; i< width; i++){
        let rand = Math.random()
        if(rand >= porcentaje/100){
            arr.push('░')
        }else{
            arr.push('O')
        }
    }
    return arr
}

const newmaze = (width,length, porcentaje) =>{
    let arr = []
    let temp1=0
    let temp2=0
    for(let i = 0; i<length; i++){
        arr.push(newrow(width,porcentaje))
    }
    while(temp1 === 0 || temp2===0){
        temp1= Math.round(Math.random()*(length-1))
        temp2= Math.round(Math.random()*(width-1))
    }
    
    
    arr[0][0] ='*'
    arr[temp1][temp2] = '^'
    return arr
}
let w = prompt('Width of maze?')
let h = prompt('Height of maze?')
let p = prompt('Percent of holes?')

x=newmaze(w,h,p)

const myField = new Field(x);

  

myField.game()