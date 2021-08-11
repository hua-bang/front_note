function firstUniqChar1(s: string): string {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === undefined) {
      map.set(s[i], true) ;
    } else {
      map.set(s[i], false);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      return s[i];
    }
  }
  return " ";
};

console.log(firstUniqChar1("abaccdeff"));