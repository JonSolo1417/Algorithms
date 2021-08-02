class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
        }
        var runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }
        runner.next = node;
        return this;
    }
    
    // remove the first node in the list
    removeFromFront() {
        if(!this.head) {
            console.log("There is no list!");
            return null;
        }
        
        var headToRemove = this.head;
        var newHead = this.head.next;

        this.head = newHead;
        headToRemove.next = null;
        return this;
    }

    // remove the last node in the list
    removeFromBack() {
        if(!this.head) {
            console.log("There is no list!");
            return null;
        } 
        if(this.head.next == null) {
            this.head = null;
            console.log("The list is now empty!")
        }
        var runner = this.head;
        while(runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
        return this;
    }

    minToFrontPTR(){
        if(!this.head || this.head.next == null) {
            return null; 
        }
        let min = this.head;            
        let minPrev = this.head;        
        var runner = this.head;         
    
        while(runner.next != null) {
            if (runner.next.value < min.value) {    //if the next node in the list has a value lower than min,
                min = runner.next;                  //replace our min with it
                minPrev = runner;                   //our current runner is previous to the next node which, as we have tested is our new minimum
            }
            runner = runner.next;
        }
        minPrev.next = min.next;
        this.addToFront(min.value);
        return this;
    }
    
    // locate the max value and move it to the end of your list
    maxToBackPTR(){
        if(!this.head || this.head.next == null) {
            return null; 
        }
        let max = this.head;        //tracks the node with the highest value
        let maxPrev = this.head;    //tracks the node previous to max
        var runner = this.head;     //our main runner to iterate through our list
        
        while(runner.next != null) {
            if (runner.next.value > max.value) {    //if the next node in the list has a value higher than max,
                max = runner.next;                  //replace our max with it
                maxPrev = runner;                   //our current runner is previous to the next node which, as we have tested is our new max
            }
            runner = runner.next;
        }
        maxPrev.next = max.next;        // maxPrev is updated to point to our max node's next node, effectively removing our max from it's old position in the list
        this.addToBack(max.value);      // add a new node with the max value to the end of the list
        return this;
    }
    printValues() {
        if(this.head == null) {
            console.log("There's nothing in this list!");
            return this;
        }
        var runner = this.head;
        while(runner != null) {
            console.log(`${runner.value} --> `);
            // console.log(runner.value + " --> ");
            runner = runner.next;
        }
        return this;
    }

}

const sll = new SLList();
sll.addToFront(-3)
sll.addToFront(-122)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(-5)
sll.addToBack(-15)
sll.addToBack(14)
console.log("==========================================")
sll.removeFromBack()
sll.printValues()
console.log("==========================================")
sll.removeFromFront()
sll.printValues()
console.log("==========================================")