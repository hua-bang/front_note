
function convert(obj) {
    Object.keys(obj).forEach(key => {
        let interalValue = obj[key];    // There is a closure. wonderful
        Object.defineProperty(obj, key, {
            get() {
                console.log(`getting key "${key}": ${interalValue}`);
                return interalValue;
            },
            set(val) {
                interalValue = val;
                console.log(`setting key "${key}" to: ${interalValue}`);
                return true;
            }
        })
    })
}


const obj = { foo: 123 }
convert(obj)

obj.foo // should log: 'getting key "foo": 123'
obj.foo = 234 // should log: 'setting key "foo" to: 234'
obj.foo // should log: 'getting key "foo": 234'