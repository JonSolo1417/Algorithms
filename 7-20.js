class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        // your code here
    }
    
    // remove and return the top value
    pop(){
        // your code here
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        // your code here
    }

    printStack() {
        // your code here
    }
}

var sls = new SLStack()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
console.log(sls.pop())
console.log(sls.returnTop())
sls.printStack()