import { tokenizer, parser, transformer, compiler } from './core';

const compilerRes = compiler('(add 2 (subtract 4 2))');



console.log(compilerRes);