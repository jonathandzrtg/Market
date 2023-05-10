import { connect } from "mongoose";

(async () => {
    try {
        const db = await connect('mongodb+srv://diplomado:4yVubvGVlfVNekgo@mintic.rvllkc9.mongodb.net/?retryWrites=true&w=majority')
        console.log("DB conected")
    } catch (error) {
        console.log(error)
    }
})();