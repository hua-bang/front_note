let site = "后盾人";

function show() {
    console.log("show function")
}
class User {
    static render() {
        console.log("user static render")
    }
}

export {
    site,
    show as Show,
    User
}