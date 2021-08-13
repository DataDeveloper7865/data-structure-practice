

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.lenght, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
        return index;
    }

    get(key) {
        //hash
        let index = this._hash(key);
        //is something there, if not return undefined
        if(!this.keyMap[index]) {
            return undefined
        }
        for (let item of this.keyMap[index]) {
            //if item is there return val
            if (item[0] == key) {
                return item
            }
        }
        return undefined;
    }

}

