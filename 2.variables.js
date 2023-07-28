/**
 * How to defferentiate between variables?
 * Scope of variables
 * Redeclaration and reassignment
 * Hoisting
 */

/**
 * Global scope --> declared outside function
 * Local scope --> declared inside function
 * let & var can be re-assigned but cannot be re-declared
 */

/**
 * HOISTING
 * var can be accessed before declaration but they initialized with undefined (by default)
 * let is defined by default initialization hence it will give `not defined/before initialization` error
 */

/** 
 * var variables can have global or local scope 
 * var variables are hoisted to top
 * can be accessed before the line they are declared on
 */
function funcWithVar() {
    var num = 50

    function somePrint() {
        num = num + num
        console.log("\nInner print: ", num)
    }
    somePrint()
    console.log("Outer print: ", num)
}

funcWithVar()

/** re-declaration of var variables */
function reDecVar() {
    var num = 50

    function somePrint() {
        var num = 100
        num = num + num
        console.log("\nInner print: ", num)
    }
    somePrint()
    console.log("Outer print: ", num)
}

reDecVar()

/** hoisting of var */
function varHoisting() {
    console.log("\n 1st Number: ", num)

    var num = 500

    console.log(" 2nd Number: ", num)
}

varHoisting()

/* ==================================== */

/**
 * let variables are declared have global, local and block scopes
 */
function funcWithLet() {
    var num = 50

    function somePrint() {
        num = num + num

        if (num > 70) {
            let otherNum = 1000
            console.log("\nOther Number in if: ", otherNum)
            console.log("Num in if: ", num)
        }

        try {
            console.log("Other Number out of if: ", otherNum)
            console.log("Inner print: ", num)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    somePrint()
    console.log("\nOuter print: ", num)
}

funcWithLet()

function letHoisting() {
    try {
        console.log("\nNum 1: ", num)

        let num = 1000

        console.log("Num 2: ", num)
    } catch (error) {
        // Error:  ReferenceError: Cannot access 'num' before initialization
        console.log("Error: ", error)
    }
}

letHoisting()

/* ===================================== */

/**
 * Properties of const is same as let, addtionally const cannot be re-assigned
 */
function funcWithConst() {
    try {
        const num = 50
        console.log("\nNum 1: ", num)

        num = 10
    } catch (error) {
        console.log("Error: ", error)
    }
}

funcWithConst()

