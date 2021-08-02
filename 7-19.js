class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue {
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


    //return true/false based on whether you find the given value in a queue
    contains(value) {
        if(!this.head){
            return false;
        }
        var runner = this.head;
        while(runner){
            if (runner.value === value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // find the size/length of a queue
    size(){
        var runner = this.head;
        var count = 0;

        while (runner){
            count++;
            runner = runner.next;
        }
        console.log(count)
        return count
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value;
                runner=runner.next;
            }
            console.log(str);
        }
    }
}


var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
q.dequeue();
q.size();
q.contains(3);
q.contains(6);
q.displayQueue();