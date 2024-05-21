// we need to find elements by key, I'll modify the find function as well as the contains function [Done]
// no need for insertAt function, so I'll remove it [Done]
// no need for head and tail functions, I'll remove them [Done]
// no need prepend function, I'll remove it [Done]

import { createNode} from "./ListNode.mjs";
export const createBucket = (firstNodeKey ,firstNodeValue) => {
    let firstNode = createNode(null, firstNodeKey ,firstNodeValue);
    let _head = Object.assign({}, firstNode);
    let _tail = Object.assign({}, firstNode);
    let _size = 1;
    const append = (value) => {
        const newNode = createNode(null, key, value);
        (_size == 1)? _head.next = newNode : _tail.next = newNode;
        _tail = newNode;
        _size++;
    };
    const size = () => {return _size;};
    const toString = () => {// maybe I'll need it's logic I'll keep it in case
        let pointedAtNode = _head;
        let finalString = ""; 
        while(pointedAtNode != null){
            finalString += `(${pointedAtNode.content}) --> `;
            pointedAtNode = pointedAtNode.next;
        };
        finalString += "null";
        return finalString;
    };

    const at = (index) => {
        let pointedAtNode = _head;
        let i = 0; 
        while(pointedAtNode != null){
            if(i == index) return pointedAtNode;
            i++;
            pointedAtNode = pointedAtNode.next;
        };
        return undefined;
    };

    const find = (key) => {
        let pointedAtNode = _head;
        let i = 0; 
        while(pointedAtNode != null){
            if(key == pointedAtNode.key) return i;
            i++;
            pointedAtNode = pointedAtNode.next;
        };
        return null;
    };
    const contains = (key) => {
        let pointedAtNode = _head;
        while(pointedAtNode != null){
            if(key == pointedAtNode.key) return true;
            pointedAtNode = pointedAtNode.next;
        };
        return false;
    };

    const removeAt = (index) => {
        if(index>_size) throw new Error('Index out of range for inserting!');
        else if(index == _size) {pop(); return;}
        let prevNode = at(index-1);
        let nextNode = at(index+1);
        prevNode.next = nextNode;
        _size--;
    };

    const remove = (key) => {
        const index = find(key);
        removeAt(index);
    };
    
    const pop = () => {
        const value = Object.assign({}, _tail);
        let newTail = at(_size-2);
        newTail.next = null;
        _tail = newTail;
        _size--;
        return value;
    };

    return {remove, size, append, contains};

};