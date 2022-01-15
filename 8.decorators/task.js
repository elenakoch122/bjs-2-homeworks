function cachingDecoratorNew(func) {
  let cache = [];
  let amountCalls = 0;
  return function (...rest) {
    let key = rest.toString();
    let idx = cache.findIndex(item => item.args === key);
    if (idx === -1) {
      amountCalls++;
      if (amountCalls === 6) {
        cache.shift();
        amountCalls = 5;
      }
      let res = func(...rest);
      cache.push({args: key, result: res});
      console.log(`Вычисляем: ${res}`);
      return `Вычисляем: ${res}`;
    } else {
      console.log(`Из кэша: ${cache[idx].result}`);
      return `Из кэша: ${cache[idx].result}`;
    }
  }
}

function debounceDecoratorNew(func, ms) {
  let isThrottled = false;
  let timeoutID;
  return function (...args) {
    if (isThrottled) {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {isThrottled = false;}, ms);
      return;
    }
    func.apply(this, ...args);
    isThrottled = true;
    timeoutID = setTimeout(() => {isThrottled = false;}, ms);
    console.log(`timeoutID = ${timeoutID}`);
  }
}

function debounceDecorator2(func, ms) {
  let isThrottled = false;
  let timeoutID;
  function wrapper (...args) {
    if (isThrottled) {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {isThrottled = false;}, ms);
      wrapper.count++;
      return;
    }
    func.apply(this, ...args);
    isThrottled = true;
    timeoutID = setTimeout(() => {isThrottled = false;}, ms);
    wrapper.count++;
    console.log(`timeoutID = ${timeoutID}`);
  }
  wrapper.count = 0;
  return wrapper;
}
