function MyPromise() {
  this.lock = false;
  this.value = '';
  this.queue = [];
}

MyPromise.prototype.then = function(cb) {
  cb(this.value)
  return this;
}

MyPromise.prototype.eat = function(arg) {
  this.queue.push(() => Promise.resolve(arg));
  this.run();
  return this;
}

MyPromise.prototype.sleep = function(time) {
  this.queue.push((prev) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, time * 1000);
    })
  })
  this.run();
  return this;
}

MyPromise.prototype.run = async function(params) {
  if (!this.lock && this.queue.length) {
    this.lock = true;
    const task = this.queue.shift();
    this.value = await task();
    this.lock = false;
    this.run();
  }
  return this;
}

const a = new MyPromise();
a.eat(3).then((value) => {
  console.log(value);
}).sleep(2)

new Promise((resolve, reject) => {
  reject(2)
}).then(() => {}, (reason) => {
  console.log(reason);
})