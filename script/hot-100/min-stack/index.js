/**
 * 最小栈
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var MinStack = function() {
    this.stack = [];
    this.topPointor = null;
    this.minStack = [Number.MAX_SAFE_INTEGER];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.topPointor = val;
    let minNumber = this.minStack[this.minStack.length - 1];

    if (minNumber >= val) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const topVal = this.stack.pop();

    this.topPointor = this.stack[this.stack.length - 1];

    if (topVal === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }

    return topVal;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.topPointor;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};


// 解法二
var MinStack = function() {
    this.mins = []
    this.values = []
};

MinStack.prototype.push = function(val) {
    if (
        this.mins.length <= 0 ||
        this.mins[this.mins.length - 1] >= val) {
        this.mins.push(val)
    }

    this.values.push(val)
        // 可以打印出来，观察理解最小栈的变化
        //console.log(`this.mins ${this.mins}`)
        //console.log(`this.values ${this.values}`)
};

MinStack.prototype.pop = function() {
    if (this.values.pop() ===
        this.mins[this.mins.length - 1]) {
        this.mins.pop()
    }
};

MinStack.prototype.top = function() {
    return this.values[this.values.length - 1]
};

MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1]
};