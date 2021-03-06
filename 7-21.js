class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        var newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = this.tail.next;
        return this;
    }

    // remove and return the front value from the queue
    dequeue() {
        if(!this.head) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.head.value;
        this.head = this.head.next;
        return temp;
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value ;
                runner = runner.next;
            }
            return(str);
        }
    }

// given a queue, determine whether or not the values therein are a pallindrome 
    // Ex: 1 --> 2 --> 3 --> 2 --> 1 --> null
    // any values that are in the same order going forwards as backwards is a pallindrome, doesn't need to just be letters
    isPallindrome() {
        if(!this.head || !this.head.next) { 
            console.log("technically true cuz nothing or 1 thing is the same to and fro...")
            return true
        }
        // collect values into a array so I can compare them to the items in the list
        var runner = this.head;
        var comparer = [];
        while (runner) {
            comparer.push(runner.value);
            runner = runner.next;
        }
        
        // compare items in the array starting from the end, to the items in the queue starting from the front
        var newRunner = this.head;
        // only need to go halfway through
        for(var i = comparer.length-1 ; i > Math.floor(comparer.length/2) ; i --) {
            if(comparer[i] != newRunner.value) {
                return false
            }
            newRunner = newRunner.next
        }
        console.log("Neato! It's a palli :)")
        return true
    }
}


var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
q.displayQueue();

q.isPallindrome();