const { tplCompiler } = require('../utils/index'); 

const template = `
<template>
<div style="color: red">{{name}}<div>



</template> 
<script>
 export default () => ({
   name: 'hug'
 })
</script>
`;

tplCompiler(template);
