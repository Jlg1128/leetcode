class MyPromise2 {
  status = 'pending';
  value = undefined;
  reason = undefined;

  resolveCallbacks = []

  rejectCallbacks = [];

  constructor(executor) {
    let resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.resolveCallbacks.forEach(fn => fn());
        this.resolveCallbacks.length = 0;
      }
    }
  
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
      }
    }
  
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled = () => {}, onRejected = (err) => {throw err}) {
     const promise = new MyPromise2((resovle2, reject2) => {
      if (this.status === 'fulfilled') {
        resovle2(onFulfilled(this.value));
      }
      if (this.status === 'rejected') {
        reject2(onRejected(this.reason));
      }
      if (this.status === 'pending') {
        this.resolveCallbacks.push(() => resovle2(onFulfilled(this.value)));
        this.rejectCallbacks.push(() => reject2(onRejected(this.value)));
      }
    })
    return promise;
  }

  catch(errorCallback) {
    return this.then(null, errorCallback);
  }
}

MyPromise2.race = function (promises) {
  return new MyPromise2((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promise2[i].then(resolve, reject);
    }
  })
}

MyPromise2.race([
  new MyPromise2((res) => setTimeout(() => {
    res(1)
  }, 1000)),
  new MyPromise2((res) => setTimeout(() => {
    res(2)
  }, 2000))
]).then((val) => {
  console.log(val);
}, (err) => console.log(err)).catch(err => console.log('2', err))
