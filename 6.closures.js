/**
 * Closures are functions that refer to independent (free) variables.
 * In other words, the function defined in the closure ‘remembers’
 * the environment in which it was created.
 */

/**
 * func2 has access to the variables declared in the scope of func1
 */
function func1(){
    let num = 10

    function func2() {
        console.log(num)
    }
    num++

    return func2
}

// const inner = func1()
// inner()

/**
 * 
 */
function greetings() {
    let announce = function () {
        console.log(message)
    }

    let message = "Hello World"

    return announce
}

const ann = greetings()
ann()