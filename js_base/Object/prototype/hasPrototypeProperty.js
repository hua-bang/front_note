/**
 * @author hug
 * @date 2021/3/7 12:02
 */
function hasPrototypeProperty(object, propertyName) {
    return !object.hasOwnProperty(propertyName) && (propertyName in object);
}
