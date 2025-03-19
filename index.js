import express from "express";

const app = express();
const port = 4000;

let users = [
    { email: "alice@example.com", password: "alice123" },
    { email: "bob@example.com", password: "bob123" },
    { email: "charlie@example.com", password: "charlie123" }
];

app.use(express.json());


app.put("/put", (req, res) => {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email);
    
    if (!user) {
        return res.json({ error: "Email not found" });
    }

    user.password = password;
    res.json({ success: "User updated successfully", user });
});

app.delete("/delete", (req, res) => {
    const { email } = req.body;
    
    const user = users.find(u => u.email === email);
    
    if (!user) {
        return res.json({ error: "Email not found" });
    }

    users = users.filter(u => u.email !== email);
    res.json({ success: "User deleted successfully" });
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
