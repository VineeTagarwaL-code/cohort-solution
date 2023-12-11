/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(duration) {

    const resolved = new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Promise resolved')
        }, duration);
    })
       
    

    return resolved;
}

wait(2000).then((data)=>{
    console.log(data)
})

