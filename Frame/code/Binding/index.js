let data = {
    name: ""
};

Object.defineProperty(data, "name", {
    enumerable: true,
    configurable: true,
    set(val) {   
        input.value = val;
        div.innerHTML = val;
    }
})
input.addEventListener("input", (event) => {
    let val = event.target.value;
    data.name = val;
})
