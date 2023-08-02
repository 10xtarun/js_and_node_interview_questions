const express = require("express")
const jwt = require("jsonwebtoken")

const CONSTANTS = {
    PORT: 3000,
    SECRET: "1234567890"
}

const USER_DB = []

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/api/greetings", (req, res) => {
    return res.status(200).json({
        message: "Greetings from server."
    })
})

app.post("/api/register", (req, res) => {
    const { email, password } = req.body.user

    USER_DB.push({ email, password })

    return res.status(201).json({
        message: "User registered successfully.",
        email
    })
})

app.post("/api/login", (req, res) => {
    try {
        const { email, password } = req.body.user

        const user = USER_DB.find(user => user.email === email)

        if (user) {
            const token = jwt.sign({ email }, CONSTANTS.SECRET, { expiresIn: "5m" })
            return res.status(200).json({
                message: "Login successful.",
                email,
                token
            })
        } else {
            throw new Error("User not found.")
        }
    } catch (error) {
        return res.status(400).json({
            message: "Login failed.",
            error: `${error.name} - ${error.message}`
        })
    }
})

app.get("/api/profile",
    // protected middleware
    (req, res, next) => {
        try {
            const { authorization } = req.headers

            // check if token is not sent from the client
            if (!authorization)
                throw new Error("Access forbidden.")

                // decode the JWT/token recieved from the client
            const decoded = jwt.verify(authorization, CONSTANTS.SECRET)

            const user = USER_DB.find(usr => usr.email === decoded.email)

            // if user does not exist in DB then throw error
            if(!user)
                throw new Error("User not found.")

            // attach the user on request object so it will be available throughout the req-res cycle
            req.user = user

        } catch (error) {
            return res.status(401).json({
                message: "User profile fetch failed.",
                error: `${error.name} - ${error.message}`
            })
        }
        next()
    },
    (req, res) => {
        return res.status(200).json({
            message: "User profile fetched successfully.",
            user: req.user
        })
    })

app.listen(CONSTANTS.PORT, (error) => {
    if (error) console.log("Error: ", error)
    console.log(`Server is running on port ${CONSTANTS.PORT}`)
})
