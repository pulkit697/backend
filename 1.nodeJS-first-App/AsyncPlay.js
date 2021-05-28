// passing function in argument
const fetchData = callback => {
    callback('hello');
};
// creating a function to pass in the arguments
fetchData(text => {
    console.log(text);
});

/********   PROMISES ***************/
const fetching = () => {
    // thing in resolve is a success and is held by 'then' statement
    // thing in resolve is a failure and is held by 'catch' statement
    // we can give any name other than resolve and reject
    const promise = new Promise((resolve,reject) => {
        setTimeout( () => {
            reject('hi');
        },2000);
    })
    return promise;
}

setTimeout( ()=>{
    console.log('timer over...');
    fetching()
        .then(text => {
            console.log('success: ',text);
            // we are calling the function again
            // aise hi, not necessary
            // the then-catch other than these are for this returned function
            return fetching();
        })
        .catch(text =>{
            console.log('error: ',text);
            return fetching();
        }) // below one are for the returned
        .then(text2 => {
            console.log('success2: ',text2);
        })
        .catch(text2 => {
            console.log('error2: ',text2);
        })
        
        
},3000);