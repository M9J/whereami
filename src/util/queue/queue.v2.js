import { QUEUE_DELAY } from "../../App.config";

let _queue = [];

function enQueue(item) {
  _queue.push({
    id: Date.now(),
    item,
  });
}

function deQueue() {
  return _queue.shift();
}

function getQueueCount() {
  return _queue.length;
}

function hasQueue() {
  return getQueueCount() > 0;
}

function runQueue() {
  const dequedItem = deQueue();
  const hasQueueItem = dequedItem ? dequedItem.id : false;
  if (hasQueueItem) {
    if (typeof dequedItem.item === "function") {
      // console.log(dequedItem);
      dequedItem.item();
    }
  }
}

function loopQueue() {
  let timeout1 = setTimeout(() => {
    clearTimeout(timeout1);
    if (hasQueue()) {
      runQueue();
    }
    loopQueue();
  }, QUEUE_DELAY * 1000);
}

export function start() {
  if (hasQueue()) {
    runQueue();
    loopQueue();
  }
}

export function add(fn) {
  enQueue(fn);
}
