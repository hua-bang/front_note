console.log("filename: (1, 0)")
console.log(1);

function func() {
  console.log("filename: (4, 2)")
  console.info(2);
}

export default class Clazz {
  say() {
    console.log("filename: (9, 4)")
    console.debug(3);
  }

  return() {
    return <div>{[console.log("filename: (13, 17)"), console.error(4)]}</div>;
  }

}