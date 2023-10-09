import { QUEUE_DELAY } from "../../App.config";

class Queue {
  #_queue = [];

  #enQueue(item) {
    const queueItem = {
      queueId: Date.now(),
      queueItem: item,
    };
    this.#_queue = [...this.#_queue, queueItem];
  }

  #deQueue() {
    const queueItem = this.#_queue[0];
    this.#_queue = this.#_queue.slice(1);
    return queueItem;
  }

  #getQueueCount() {
    return this.#_queue.length;
  }

  #hasQueue() {
    return this.#getQueueCount() > 0;
  }

  #runQueue() {
    const dequedItem = this.#deQueue();
    const hasQueueItem = dequedItem ? dequedItem.queueId : false;
    if (hasQueueItem) {
      if (typeof dequedItem.queueItem === "function") {
        console.log(dequedItem);
        dequedItem.queueItem();
      }
    }
  }

  #loopQueue() {
    let timeout1 = setTimeout(() => {
      clearTimeout(timeout1);
      this.#runQueue();
      if (this.#hasQueue()) {
        this.#loopQueue();
      }
    }, QUEUE_DELAY * 1000);
  }

  start() {
    if (this.#hasQueue()) {
      this.#runQueue();
      this.#loopQueue();
    }
  }

  add(fn) {
    this.#enQueue(fn);
  }
}

export const DEFAULT_QUEUE = new Queue();
