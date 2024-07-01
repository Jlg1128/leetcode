
const fetchCache = {};
function wrapFetchWithCache(fetchFn, scope) {
  fetchCache[scope] = {};
  return function() {
    const param = {...arguments};
    const cacheKey = JSON.stringify(param);
    const cachedValue = fetchCache[cacheKey];
    if (cachedValue !== undefined) {
      if (cachedValue.then && typeof cachedValue.then === 'function') return cachedValue;
      return Promise.resolve(cachedValue);
    }

    const fethcPromise = fetchCache[cacheKey] = fetchFn.apply(null, arguments);
    fethcPromise.then((result) => {
      fetchCache[cacheKey] = result;
      return result;
    });
  };
}

const fetchUser = wrapFetchWithCache(function(data) {
  console.log('123123123', data);
  return Promise.resolve(data);
})
