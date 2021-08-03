interface Person {
  name: string,
  readonly age?: number,
  [propName: string]: any
}

let tom: Person = {
  name: "hug",
  gender: 1
}
// tom.age = 29