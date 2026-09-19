class MyStack {
    private q1:number[]
    constructor() {
        this.q1 = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.q1.push(x)

        for(let i=0; i<this.q1.length - 1; i++)
        {
            this.q1.push(this.q1.shift()!);
        }
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.q1.shift()!;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.q1[0];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.q1.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
