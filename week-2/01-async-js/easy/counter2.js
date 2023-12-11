var n = 0;


function myOwn(count, duration) {
    setTimeout(count, duration);
}


function count() {
    console.log(n);
    n++;
    myOwn(count, 1000)
}

count()