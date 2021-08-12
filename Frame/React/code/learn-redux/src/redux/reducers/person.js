import { ADD_PERSON } from "../constant";
const initState = [
  {
    id: 1,
    name: "tom",
    age: 18
  }
];

export default function personReducer(preState, action) {
  if (preState === undefined) {
    preState = initState;
  }
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [...preState, data];
    default:
      return preState;
  }
}