/**
 * @author hug
 * @date 2021/3/6 10:15
 */
import {add} from "./one.js";

export function sum(...args) {
    return args.reduce((t, v) => add(t,v));
}
