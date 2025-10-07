function HashMap() {
  const loadFactor = 0.75; //resize the hash table when its 75% full
  let capacity = 16; //initial siz of the array

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

  return {
    set,
    get,
    has,
    _debugBuckets: buckets, // expose for debugging
  };
}

const map = HashMap();
map.set("Carlos", "Dev");
map.set("Sita", "Engineer");
map.set("Carlos", "CTO"); // Updates value

console.log(JSON.stringify(map._debugBuckets, null, 2));

console.log(map.has("Carlos"));
console.log(map.has("sdfksof"))


// console.log(map.get("Sita"));