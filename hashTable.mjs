// it is an array with hash functions helping it out (as far as I understand it)
// need to be doubled in size at a certain load factor, 0.75 is a standard
// store size and how much of the array is used to calculate load factor
// the array will start with size 16
// each array element (bucket) will be built using a linked list (to handle collisions)

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

    const _doubleArraySize = () => {};
    const _calculateLoadFactor = () => {};// think it through


    const set = (key, value) => {
        let hash = _hash(key);
        if(_arr[hash] == null){
            _arr[hash] = createBucket(key, value);
            _length++;
        }else if(_arr[hash].key == key){
            _arr[hash].content = value; //overwrite it no modification on length
        }else {
            _arr[hash].append(key, value); // adding a node to the bucket in case of collision
            _length++;
        }
    };
    const get = (key) => {};
    const remove = (key) => {/*will decrease length (_length--)*/};
    const length = () => {return _length};
    const clear = () => {_arr = Array(16).fill(null) /* will reset length (_length = 0;) */};
    const keys = () => {/* will return an array with all keys in the hash table */};
    const values = () => {/* will return an array with all values in the hash table */};
    const entries = () => {/* will return an array with all [key,value] pairs in the hash table */};

    return {set, get, remove, length, clear, keys, values, entries};
}