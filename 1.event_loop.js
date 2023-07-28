/** 
 * Topics: Event Loop, Callbacks
 */

class EventLoop {
    /**
     * Create a big loop to simulate blocking function
     * sync function, running while is taking time and blocks before 3 console
     */
    syncLoop(message) {

        let N = 1000000

        while (N > 0) {
            N -= 1
        }

        console.log("Message: ", message)
    }

    runSyncLoop() {
        console.log("Function Start.")
        this.syncLoop("Hello World!")
        console.log("Function End.")
    }

    /**
     * Create a async function
     */

    asyncFunc(message, time){
        setTimeout(() => {
            console.log("Some async function is running.")
        }, time)
    }

    runAsyncFunc() {
        console.log("Function Start.")
        this.asyncFunc("Hello World!", 1000)
        console.log("Function End.")
    }

    /**
     * Create a callback
     */
    someCallbackFunc = function() {
        console.log("Greetings from callback.")
    }

    runSomeFunc(time){
        setTimeout(this.someCallbackFunc, time)
    }
}

const evt = new EventLoop()
// run while
evt.runSyncLoop()
console.log("------------------------\n")
// run async func
// evt.runAsyncFunc()
console.log("------------------------\n")
evt.runSomeFunc(2000)
console.log("------------------------\n")
