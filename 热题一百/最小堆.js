class MinHeap {
  constructor() {
    this.heap = [];
  }
  top() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  getChildLeftIndex(i) {
    return i * 2 + 1;
  }

  getChildRightIndex(i) {
    return i * 2 + 2;
  }

  getParentIndex(i) {
    return (i - 1) >> 1;
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(index) {
    const leftChildIndex = this.getChildLeftIndex(index);
    const rightChildIndex = this.getChildRightIndex(index);
    if (this.heap[leftChildIndex] < this.heap[index]) {
      this.swap(leftChildIndex, index);
      this.shiftDown(leftChildIndex);
    }

    if (this.heap[rightChildIndex] < this.heap[index]) {
      this.swap(rightChildIndex, index);
      this.shiftDown(rightChildIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    const value = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.shiftDown(0)
    return value;
  }
}

const arr = [3, 2, 1];

const h = new MinHeap();
h.insert(3)
h.insert(2)
h.insert(1)
console.log(h.pop());
console.log(h);