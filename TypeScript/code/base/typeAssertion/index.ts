interface Cat {
  name: string,
  run(): void
}

interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish): boolean {
  if (typeof (animal as Fish).swim === "function") {
    return true;
  }
  return false;
}

interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

let tom1: Cat = {
  name: 'Tom',
  run: () => { console.log('run') }
};
let animal: Animal = tom1;