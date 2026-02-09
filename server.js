import app from "./app.js";
const POST = process.env.PORT || 5000;

app.listen(POST,  (err,data) => {
    console.log("Server is running on port");
});