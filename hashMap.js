function HashMap() {
  const loadFactor = 0.75; //resize the hash table when its 75% full
  let capacity = 16; //initial siz of the array

  let numItems = 0;

  const buckets = new Array(capacity).fill(null).map(() => []);

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    hashCode = hashCode % capacity;
    return hashCode;
  }

  function set(key, value) {

    const index = hash(key);
    const bucket = buckets[index];
    
    const found = bucket.find((entry) => entry.key === key );

    if (found) {
      
      found.value = value;
    } else {
      bucket.push({key, value});
      numItems++;
    }

    if(numsItems > loadFactor) {
      capacity *= 2;
    }
  }

  function get(key) {
       const index = hash(key);
       const bucket = buckets[index];

       const result = bucket.find((entry) => entry.key === key);

       return result? result.value : null;
  }

  function has(key) {

           const index = hash(key);
       const bucket = buckets[index];

       const result = bucket.find((entry) => entry.key === key);

       return result? true : false;

  }

  function remove(key) {

      const index = hash(key);
      const bucket = buckets[index];

      const found = bucket.find((entry) => entry.key === key);

      if(found !== -1) {
          bucket.splice(found, 1);
        return true;
      }else {
        return false
      }
  }

  function length() {

    let count = 0;

    for(i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      count += bucket.length;
    }

    return count;
  }

  function clear() {

    for(i = 0; i < buckets.length; i++) {
      buckets[i] = [];
    }

  }

  function keys() {

    const keysArr = [];

    for(i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];

      for(j = 0; j < bucket.length; j++) {
            keysArr.push(bucket[j].key);
         
      }
    }

    return keysArr;
  }

  function values() {

    const valuesArr = [];

    for(i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];

      for(j = 0; j < bucket.length; j++) {
        valuesArr.push(bucket[j].value);
      }
    }

    return valuesArr;
  }

  function entries() {
        const entriesArr = [];

    for(i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];

      for(j = 0; j < bucket.length; j++) {
        entriesArr.push([bucket[j].key, bucket[j].value]);
      }
    }

    return entriesArr;
  }
  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    _debugBuckets: buckets, // expose for debugging
  };
}


export default HashMap;