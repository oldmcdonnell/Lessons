function doSomethingAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random()
            if (randomNumber > 0.5) {
                resolve('Success')
            } else {
             reject(new Error('Failure!'))   
            }
        }, 2000) //
    }
}

console.log('start')
doSomethingAsync()
.then((successfulResult) => {
    console.log('Result', successfulResult) // success
})
.catch((error) => {
    console.log('Error: ', error)//fail
})
.finally(() => {
    console.log('Done: >>>>>>>')
})


async function example(){
    try{
        console.log('Start')
        const result = await doSomethingAsync()
    } catch (error){
    console.log('Error: ', error)// failure
    } finally{
    console.log(' Done')
    }
}

example()