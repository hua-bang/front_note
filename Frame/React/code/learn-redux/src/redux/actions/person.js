import { ADD_PERSON } from "../constant";

export const createAddPersonAction = (person) => ({ type: ADD_PERSON, data: person });