// it is an array with hash functions helping it out (as far as I understand it)
// need to be doubled in size at a certain load factor, 0.75 is a standard
// store size and how much of the array is used to calculate load factor
// the array will start with size 16
// each array element (bucket) will be built using a linked list (to handle collisions)

// notes build it to be easy to test!

import { createBucket } from "./bucket.mjs";
export const createHashTable = () => {

    let _arr = Array(16).fill(null);
    let _length = 0;


    const _hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= _arr.length; // to avoid having very large numbers
        }
        return hashCode;
    };

    const _doubleArraySize = () => {
        // this method might cause problems with accessing elements later on!!
        // doubling the array size will change the hash for elements [from the future, this just happened]
        let currentLength = _arr.length;
        for (let i = 0; i<currentLength; i++){
            _arr.push(null);
        }
    };
    const _handelTableGrowth = () => {
        if(_calculateLoadFactor() >= 0.75){
            _doubleArraySize();
        }
    };

    const _calculateLoadFactor = () => {
        return _length/_arr.length 
    };// think it through


    // this below is probably trash review it thoroughly
    //#############################################################################
    const set = (key, value) => {
        // still need to see if the table needs to grow, keep it in mind
        let hash = _hash(key);
        if(_arr[hash] == null){
            _arr[hash] = createBucket(key, value);
            _length++;
        }else if(_arr[hash].contains(key) == true){
            let index = _arr[hash].find(key);
            _arr[hash].at(index).content = value; //overwrite it no modification on length
        }else {
            _arr[hash].append(key, value); // adding a node to the bucket in case of collision
            _length++;
        }
        _handelTableGrowth();
    };

    const get = (key) => {
        let hash = _hash(key);
        let bucket = _arr[hash];
        if(bucket == null) return null;
        else if(bucket.size() == 1) return bucket.at(0).content;
        else {
            let index = bucket.find(key);
            if(index == null) return null;
            else return bucket.at(index).content;
        };
    };
    //#############################################################################

    const printHashTableArray = () => {
        _arr.forEach((el) => { 
            if(el != null) console.log(el.toString());
            else console.log(null);

        });
    };

    const remove = (key) => {
        let hash = _hash(key);
        _arr[hash].remove(key);
    };
    const length = () => {return _length};
    const clear = () => {
        _arr = Array(16).fill(null) 
        _length = 0;
    };
    const keys = () => {/* will return an array with all keys in the hash table */};
    const values = () => {/* will return an array with all values in the hash table */};
    const entries = () => {/* will return an array with all [key,value] pairs in the hash table */};

    return {set, get, remove, length, clear, keys, values, entries, printHashTableArray};
}