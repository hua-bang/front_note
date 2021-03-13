/**
 * @author hug
 * @date 2021/3/12 21:50
 */
let observer = new MutationObserver((MutationRecord,MutationObserver) => {
    console.log(MutationRecord,MutationObserver);
})

observer.observe(document.body,{attributes: true});
