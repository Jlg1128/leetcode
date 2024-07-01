function debounce(fn, wait) {
  let now = Date.now();
  let timer;
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait * 1000);
  }
}

const fn = debounce((a) => {
  console.log(a);
}, 1);

fn(1);
fn(2);
fn(3);
fn(4);
fn(5);