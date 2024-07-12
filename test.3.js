function *test() {
  const res = yield ok();
  console.log(res);
}

function ok() {
  console.log(3);
  return 1;
}

test();
console.log(2);