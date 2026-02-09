import app from "./app.js";
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.error("Server error:", err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});