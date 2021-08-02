//Singly Linked List

//needs 2 classes
//create a node and a class to create pointers

class Node {
constructor(valueInput) {
    this.value = valueInput;
    this.next = null;
}
}

class SLL {
constructor() {
    this.head = null;
}

addToFront(value) {
    var node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
}

// given a value, add it to the back of your singly linked list
// what if the list is empty?
addToBack(valueInput) {
    if (this.head == null) {
    this.addToFront(valueInput);
    }
    var node = new Node(valueInput);
    var head = this.head;
    while (head.next != null) {
    head = head.next;
    //console.log(head);
    }
    head.next = node;
    return this;
}
// given a value, print whether the list contains that value
contains(value) {
    var head = this.head;
    while (head != null) {
    console.log(head.value, value);
    if (head.value == value) {
        return true;
    }
    head = head.next;
    }
    return false;
}

// print out the SLL
display() {
    var head = this.head;
    while (head != null) {
    console.log(head.value);
    head = head.next;
    }
}
}

mylist = new SLL();
mylist.addToFront(5);
mylist.addToFront(10);
mylist.addToBack(3);
console.log(mylist.contains(3));
console.log(mylist);
mylist.display();