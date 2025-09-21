//Singly Linked List Implementation in JavaScript
// insertion at the end and at the beginning
// display forward
//Delete node with specific value
// insert after a specific node
// insert before a specific node
// print in reverse order using recursion
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }   
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0
        this.next = null;
    }
    insert(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.size++;
        }else{
            let currentNode = this.head;
            while(currentNode?.next){
                currentNode = currentNode.next;
                
            }
            currentNode.next = newNode;
            this.size++;
        }
    }
    insertFirst(data){
        let newNode = new Node(data);
        let temp = this.head;
        if(!temp){
            temp = newNode;
            this.size++;
        }else{
            newNode.next = temp;
            this.head = newNode;
            this.size++;
        }
    }
    show(){
        let currentNode = this.head;
        let data = "";
        while(currentNode){
            data += (currentNode.data + (currentNode?.next?" => ":""));
            currentNode = currentNode.next;
        }
        console.log(data);
    }

    delete(data){
        let currentNode = this.head;
        if(currentNode.data === data){
            this.head = currentNode.next;
            this.size--;
            return;
        }else{
            while(currentNode?.next){
                if(currentNode.next.data === data){
                    currentNode.next = currentNode?.next?.next;
                    this.size--;
                    return;
                }
                currentNode = currentNode.next;
            }
        }
    }

    insertAfter(nodeData, data){
        let currentNode =this.head;
        const newNode = new Node(data);
        while(currentNode){
            if(currentNode?.data ===nodeData){
                newNode.next = currentNode?.next;
                currentNode.next = newNode;
                return 
            }
            currentNode = currentNode.next;
        }
        console.log("node not found")
    }
    insertBefore(nodeData, data){
        let currentNode = this.head;
        while(currentNode?.next){
            if(currentNode.next.data === nodeData){
                let newNode = new Node(data);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                return
            }
            currentNode = currentNode.next;
        }
        console.log("node not found")
    }
    printReverse(node =this.head){
        if(!node) return;
        this.printReverse(node.next);
        console.log(node.data);
    }
}

let sll = new SinglyLinkedList();
sll.insert(10);
sll.insert(20);
sll.insert(30);
sll.insertFirst(5);
sll.insertFirst(1);
sll.insert(324)
sll.insertAfter(20, 25)
sll.insertAfter(324, 400)
sll.insertBefore(10, 8)
sll.show();
sll.delete(30);
sll.show();
sll.printReverse();