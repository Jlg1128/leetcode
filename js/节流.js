function throttle(fn, wait) {
  // let now = Date.now();
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        clearTimeout(timer);
        timer = null;
        now = Date.now();
      }, wait * 1000);
    }
  }
}


const fn = throttle((a) => {console.log(a)}, 1);
fn(3);
fn(3);
fn(3);
fn(3);
fn(3);
