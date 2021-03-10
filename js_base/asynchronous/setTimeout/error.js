/**
 * @author hug
 * @date 2021/3/10 14:56
 */
function double(val, callback, error) {
    try{
        throw new Error("error");
    }catch (e) {
        error(e)
    }
}

double(2,() => {}, (err) => {
    console.log(err);
})
