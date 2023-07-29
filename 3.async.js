const fs = require("fs")
const fsP = require("fs/promises")

class Aynschronous {

    runSync() {
        console.log("First console.")
        console.log("Second console.")
        console.log("Third console.")
    }

    runAsync() {
        console.log("First console.")

        setTimeout(() => {
            console.log("Second console.")
        }, 100)

        console.log("Third console.")
    }

    /**
     * Read file with callbacks
     */
    readFile() {
        return fs.readFile("./sample.txt", { encoding: "utf8" }, function (err, data) {
            console.log("Error: ", err)
            console.log("Data: ", data)
        })
    }

    /**
     * readFile with promise
     */
    readFileP() {
        return fsP.readFile("./sample.txt", { encoding: "utf8" })
            .then((data) => {
                console.log("\nData: ", data)
            })
            .catch((err) => {
                console.log("Error: ", err)
            })
    }

    /**
     * convert callback to Promise
     */
    newReadFileP(filename, options) {
        return new Promise(function (resolve, reject) {
            fs.readFile(filename, options, function (error, data) {
                if (error) reject(error)
                resolve(data)
            })
        })
    }

    /**
     * Promise chaining
     */
    writeFileFromAPI() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log("API Response: ", response.status, response.statusText)
                return response.json()
            })
            .then((data) => {
                console.log("Response body: ", data[0])
                return fsP.writeFile("./response.json", JSON.stringify(data), { encoding: "utf-8" })
            })
            .then(() => {
                console.log("File write successful.")
            })
            .catch((error) => {
                console.log("Error: ", error)
            })
    }

    // /**
    //  * async-await are elegant way to handle Promises
    //  * Promise chaining can be confusing sometimes
    //  */
    async writeFileUsingAsyncAwait() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')

            console.log("API Response status: ", response.status, response.statusText)

            const data = await response.json()

            console.log("Response body: ", data[0])

            await fsP.writeFile("./response.json", JSON.stringify(data), { encoding: "utf-8" })
            console.log("File write successful.")
        } catch (error) {
            console.log("Error: ", error)
        }
    }
}

const code = new Aynschronous()

// code.runSync()
// console.log("=====================\n")
// code.runAsync()
// console.log("=====================\n")
// code.readFile()
// code.readFileP()

// code.newReadFileP("./sample.txt", { encoding: "utf8" })
// .then((data) => {
//     console.log("Data: ", data)
// })
// .catch((error) => {
//     console.log("Error: ", error)
// })

// code.writeFileFromAPI()

code.writeFileUsingAsyncAwait()