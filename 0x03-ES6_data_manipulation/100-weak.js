const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    if (weakMap.get(endpoint) >= 5) {
      throw Error('Endpoint load is high');
    }
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    return;
  }
  weakMap.set(endpoint, 1);
}

module.exports = { queryAPI, weakMap };
