class ShiftCipher {
    constructor(shift){
        this._shift =shift
    }
    get shift(){
        return this._shift
    }
    set shift(num){
        this._shift = num
    }
    encrypt(str){
        const cstr = str.toUpperCase()
        let nstr=''
        for(let i = 0 ; i< cstr.length; i++){
            if(cstr.charCodeAt(i) >= 65 && cstr.charCodeAt(i) <= 90){
                if(cstr.charCodeAt(i) >= 65 && cstr.charCodeAt(i)+this._shift <= 90){
                    nstr += String.fromCharCode(cstr.charCodeAt(i)+this._shift)

                }else if(cstr.charCodeAt(i)+this._shift > 90){
                    let temp = cstr.charCodeAt(i)+this._shift
                    while (temp > 90){
                        temp = temp-26
                    }
                    nstr += String.fromCharCode(temp)
                    temp = 0
                }
            }else{
                nstr += cstr[i]
            }
        }
        return nstr
    }
    decrypt(str){
        const cstr = str.toUpperCase()
        let nstr=''
        for(let i = 0 ; i< cstr.length; i++){
            if(cstr.charCodeAt(i) >= 65 && cstr.charCodeAt(i) <= 90){
                if(cstr.charCodeAt(i)-this._shift >= 65 && cstr.charCodeAt(i) < 90){
                    nstr += String.fromCharCode(cstr.charCodeAt(i)-this._shift)

                }else if(cstr.charCodeAt(i)-this._shift < 65){
                    let temp = cstr.charCodeAt(i)-this._shift
                    while (temp < 65){
                        temp = temp+26
                    }
                    nstr += String.fromCharCode(temp)
                    temp = 0
                }
            }else{
                nstr += cstr[i]
            }
        }
        return nstr.toLowerCase()
    }


}

const cipher = new ShiftCipher(2);
x = cipher.decrypt('K <3 OA RWRRA')

console.log(x)