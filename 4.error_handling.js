/**
 * Operational Errors - occurs during runtine when some code is unhandled
 * Funcrtion Errors - the feature you made is not behaving as expected
 */

/**
 * The Error object
 * throw, pass, or constructed
 */
function throwErrorObj() {
    throw new Error("Not working.")
}

// throwErrorObj()

/**
 * BTS of Error Object
 */

class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = "Custom Error"
        // this.message = "Something not working as expected."
    }
}

function customErrorObj(){
    try {
        // throw new Error("Hello, this is not defined.")
        throw new CustomError("Greetings, something went wrong")
    } catch (error) {
        console.log("LOG: ", error)
    }
}

customErrorObj()


