// This is for solving -----------------

function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
function testing (){
    console.log("Hello world");
    
}
debounce(testing, 500);
