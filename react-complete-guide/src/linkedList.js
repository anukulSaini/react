class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}




class linkedlist{
    constructor(value){
        this.head ={
            value:value,
            next:null
        };
        this.tail = this.head;
        this.length=1;
    }
    append(value){
       const newNode = Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }
    prepend(value){
        const newNode = Node(value);
        newNode.next=this.head;
        this.head=newNode;
    }
    insert(index,value){  
        if (index>=this.length){
            return this.append
        }
        else{
            const newNode = Node(value);
            const leader = this.traverseToIndex(index-1)
            const holdingPointer = leader.next;
            leader.next=newNode;
            newNode.next=holdingPointer;
            this.length++;
            return this.printList();
        }
    }
    traverseToIndex(index){
        let counter=0;
        let currentNode = this.head;
        while(counter!==index){
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    }
}
const mylinkedlist = new linkedlist(10)