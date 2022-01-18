function cachingDecoratorNew(func) {
  let cache = [];
  return function (...rest) {
    let key = rest.toString();
    let idx = cache.findIndex(item => item.args === key);
    if (idx !== -1) {
      console.log(`Из кэша: ${cache[idx].result}`);
      return `Из кэша: ${cache[idx].result}`;
    }
    let res = func(...rest);
    cache.push({args: key, result: res});
    if (cache.length === 6) {
      cache.shift();
    }
    console.log(`Вычисляем: ${res}`);
    return `Вычисляем: ${res}`;
  }
}

function debounceDecoratorNew(func, ms) {
  let isThrottled = false;
  let timeoutID;
  return function (...args) {
    if (!isThrottled) {
      func.apply(this, ...args);
      isThrottled = true;
      return;
    }
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func.apply(this, ...args);
    }, ms);
  }
}

function debounceDecorator2(func, ms) {
  let isThrottled = false;
  let timeoutID;
  function wrapper (...args) {
    if (!isThrottled) {
      func.apply(this, ...args);
      isThrottled = true;
      wrapper.count++;
      return;
    }
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func.apply(this, ...args);
      wrapper.count++;
    }, ms);
  }
  wrapper.count = 0;
  return wrapper;
}
