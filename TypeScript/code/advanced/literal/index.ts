type EventName = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event: EventName) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dblclick');