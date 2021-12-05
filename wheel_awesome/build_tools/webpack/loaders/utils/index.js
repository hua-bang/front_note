const { HTML_TEMPLATE_TAG, SCRIPT_TEMPLATE_TAG } = require('./const');

function tplReplace(template, replaceMap) {
  return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    return replaceMap[key.trim()];
  });
}

function generateTagReg(tag) {
  return new RegExp(`<${tag}>([\\s\\S]*?)<\/${tag}>`)
}

function getTemplateFromSource(source, templateTag) {
  const res = generateTagReg(templateTag).exec(source);
  return res && res.length > 0 ? res[1] : '';
}

function getHTMLTemplateFromSource(source) {
  return getTemplateFromSource(source, HTML_TEMPLATE_TAG);
}

function getScriptTemplateFromSource(source) {
  return getTemplateFromSource(source, SCRIPT_TEMPLATE_TAG);
}

function getDataMapFropmScriptTemplate(scriptTemplate) {
  const fnStr = scriptTemplate.replace('export default', '');
  return eval(fnStr)();
}


function tplCompiler(source) {
  const htmlTemplate = getHTMLTemplateFromSource(source);
  const scriptTemplate = getScriptTemplateFromSource(source);

  const dataMap = getDataMapFropmScriptTemplate(scriptTemplate);
  return tplReplace(htmlTemplate, dataMap).replace(/[\n\t]+/g, '');
}

module.exports = {
  tplReplace,
  tplCompiler
}