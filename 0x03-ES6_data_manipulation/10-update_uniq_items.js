export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const one of map.keys()) {
      if (map.get(one) === 1) {
        map.set(one, 100);
      }
    }
    return map;
  }
  throw Error('Cannot process');
}
