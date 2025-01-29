const express = require("express");
const router = express.Router();
const Settings = require("../models/settingsModel.js");

router.get("/", async (req, res) => {
    let settings = await Settings.findOne();

    // If no settings are found, create default settings
    if (!settings) {
        settings = await Settings.create({
            heroText: "Welcome to Our Landing Page!",
            backgroundColor: "#ffffff",
            logo: "default-logo.png",
        });
    }

    const isAdmin = req.cookies.token ? true : false;
    res.render("index", { settings, isAdmin });
});

// Update Settings (Admin)
router.post("/admin/update", async (req, res) => {
    if (!req.cookies.token) return res.status(403).send("Unauthorized");
    const { heroText, backgroundColor, logo } = req.body;
    await Settings.findOneAndUpdate({}, { heroText, backgroundColor, logo });
    res.redirect("/");
});

module.exports = router;