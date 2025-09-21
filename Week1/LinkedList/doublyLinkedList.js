// Doubly Linked List Implementation in JavaScript
// insertion at the end and at the beginning
// display forward and backward
// Delete node with specific value

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insert(data){
        let newNode= new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let temp= this.head;
            while(temp?.next) temp = temp?.next;
            temp.next = newNode;
            newNode.prev = temp;
            this.tail = newNode;
        }
    }
    insertFirst(data){
        let newNode = new Node(data);
        let temp = this.head;
        if(!temp){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = temp;
            temp.prev = newNode;
            this.head = newNode;
        }
    }
    delete(data){
        let currentNode = this.head;
        if(currentNode.data === data){
            this.head = currentNode.next;
            this.head.prev = null;  
            return
        }else{
            while(currentNode){
                if(currentNode.data === data){
                    let prevNode = currentNode.prev;
                    let nextNode = currentNode.next;
                    prevNode.next = nextNode;
                    if(nextNode) nextNode.prev = prevNode;
                    else this.tail = prevNode;
                    return 
                }
                currentNode = currentNode.next;
            }
        }
        console.log("Node not found");
    }
    showForward(){
        let currentNode = this.head;
        let data =""
        while(currentNode){
            data+=(currentNode.data+(currentNode?.next?"->":""));
            currentNode = currentNode.next;
        }
        console.log(data);
    }
    showBackward(){
        let currentNode = this.tail;
        let data = "";
        while(currentNode){
            data+=(currentNode.data+(currentNode?.prev?"->":""));
            currentNode = currentNode.prev;
        }
        console.log(data);
    }
}

let dll = new DoublyLinkedList();
dll.insert(10);
dll.insert(20);
dll.insert(30);
dll.insertFirst(5);
dll.insertFirst(1);
dll.showForward();
dll.showBackward();
dll.delete(5);
dll.showForward();
