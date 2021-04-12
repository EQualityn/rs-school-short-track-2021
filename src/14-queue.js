const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.node = new ListNode();
    this.head = this.node;
  }

  get size() {
    let size = 0;
    let cur = this.node;
    while (cur.next) {
      size++;
      cur = cur.next;
    }
    return size;
  }

  enqueue(element) {
    this.head.value = element;
    this.head.next = new ListNode();
    this.head = this.head.next;
  }

  dequeue() {
    const {
      value,
    } = this.node;
    this.node.value = this.node.next.value;
    this.node.next = this.node.next.next;
    return value;
  }
}

module.exports = Queue;
