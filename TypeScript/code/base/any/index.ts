let anyThing: any = "hug";
anyThing = 213;

console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
// it willn't error in compiler, but will in runtime

let something; // the default type is any