class Subject {
  constructor() {
    this.observers = [];
  }

  attack(observer) {
    this.observers.push(observer);
  }

  notify(...args) {
    this.observers.forEach(observer => {
      observer.update(...args);
    });
  }
}

class Observer {
  constructor(updater) {
    this.update = updater;
  }
}

let ob1 = new Observer(() => {
  console.log("update")
});

let ob2 = new Observer((a) => {
  console.log("update, argment a is " + a);
});

let sub = new Subject();
sub.attack(ob1);
sub.attack(ob2);
sub.notify("a");