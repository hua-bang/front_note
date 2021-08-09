function replaceSpace(s: string): string {
  return s.replace(/\s/g, "%20");
};


console.log(replaceSpace("We are happy!"));