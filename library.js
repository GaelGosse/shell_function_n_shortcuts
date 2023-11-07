module.exports = class library{
    constructor(){
    }
    zero(time){
        if(typeof(parseInt(time)) === 'number'){
            if(time < 10){
                return `0${time}`
            } else {
                return time
            }
        } else {
            console.error(`${time} is not a number`)
        }
    }
    now(){
        let d = new Date()
        return `${(this).zero(d.getHours())}:${(this).zero(d.getMinutes())}:${(this).zero(d.getSeconds())}`
    }
    today(){
        let d = new Date()
        return `${(this).zero(d.getDate())}/${(this).zero(d.getMonth()+1)}/${d.getFullYear()}`
    }
    caseSense(word){
        // strict sensitive case
        if(typeof(word) === 'string'){
            return word.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '.').trim();
        } else {
            console.error(`${word} is not a string, please check the datatype of the arg`);
        }
    }
    generateRandomPassword(size=16, min=true, maj=true, nbr=true, strong=false){
        // if you want to add characters, add them in second arg in a string to add it
        if(typeof(size) === 'number' && parseInt(size) === size && size > 0){
            var result           = '';
            var minuscules       = 'abcdefghijklmnopqrstuvwxyz';
            var majuscules       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var numbers          = '0123456789';
            var characters       = '';
            if(min){
                characters += minuscules
            }
            if(maj){
                characters += majuscules
            }
            if(nbr){
                characters += numbers
            }
            if(strong && typeof(strong) === 'string'){
                characters += strong
            } else if(typeof(strong) != 'string' || typeof(strong) != 'boolean') {
                console.log(``, typeof(strong));
                console.error(`${strong} must be a string`.red);
            } else{
                console.error(`${strong} must be a string`.yellowù);
            }

            var charactersLength = characters.length;
            for ( var i = 0; i < size; i++ )
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            return result;
        } else {
            console.error(`${size} must be a positive integer and not equal to zero`);
        }
    }
    rounded(nbr, decimal=0){
        // round a number with n numbers (decimal) after the coma, if there is only one arg then it's rounded with no numbers after the coma
        if(typeof(nbr) === 'number'){
            if(typeof(decimal) === 'number' && parseInt(decimal) === decimal && decimal >= 0){
                let part = 10**decimal;
                return Math.floor(nbr * part)/part;
            } else {
                console.error(`${decimal} must be a positive integer`);
            }
        } else {
            console.error(`${nbr} is not a number, please check the datatype of the arg`);
        }
    }
    deleteAllCookies() {
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    removeDuplicates(arr){
        if(Array.isArray(arr)){
            function search(it, array){
                tab1 = Object.keys(array);
                tab2 = [];
                count = 0;

                for(let i = 0; i < Object.keys(array).length; i++){
                    if(array[tab1[i]] == it){
                        tab2.push(i);
                        count = 1;
                    }
                }
                if(count == 1){
                    return tab2.length == 1 ? tab2 = tab2[0] : tab2
                }
                else{
                    return false
                }
            }// end of search

            let tab = []
            for(let i = 0; i < arr.length; i++){
                if(!search(arr[i],tab)){
                    tab.push(arr[i])
                }
            }
            return tab
        }
        else{
            return console.warn("the input of this function is not an array, please check the datatype of it"), undefined
        }
    }
    getAllIndexes(arr, val) {
        // same as indexOf but globally
        if(Array.isArray(arr)){
            var indexes = [], i = -1;
            while ((i = arr.indexOf(val, i+1)) != -1){
                indexes.push(i);
            }
            return indexes;
        } else {
            console.error('the first argument must be ')
        }
    }
    alea(min, max, round=16){
        // generate random number between min and max and could be rounded to n numbers (third arg) after the coma
        if(typeof(min) == 'number'){
            if(typeof(max) == 'number'){
                if(typeof(round) == 'number' && round >= 0 && parseInt(round) == round){
                    return this.rounded((Math.random() * (max-min)) + min, round)
                } else {
                    console.warn(`the var round : ${round} must be an integer and superior to zero`);
                    return 'error'
                }
            } else {
                console.warn(`the var min : ${max} is not a number`)
                return 'error'
            }
        } else {
            console.warn(`the var min : ${min} is not a number`)
            return 'error'
        }
    }
    convertSetInArray(set, attr=false){
        // CONVERT Set in Array, if you want to add object either simple element just add a second argument which name the property of this object
        if(set instanceof Set){
            const arr = []
            for(const entry of set.entries()){
                if(entry[0] != null){
                    if(attr == false){
                        arr.push(entry[0])
                    } else {
                        arr.push({})
                        arr[arr.length-1][`${attr}`] = entry[0]
                    }
                }
            }
            return arr
        } else {
            console.error(`${set} must be a Set Object`)
        }
    }
    bufferToReadStream(buffer){
        let Readable = require('stream').Readable;
        let stream = new Readable();
        stream.push(buffer);
        stream.push(null);
        return stream;
    }
}