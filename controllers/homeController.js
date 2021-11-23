"use strict";
var users = [];
var products = [];
var isLoggedIn = false;
const fs = require("fs");
fs.readFile("./model/balloonatic-products.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        products = JSON.parse(jsonString);

        console.log("PRODUCTS:", products); // => "Customer address is: Infinity Loop Drive"
    } catch (err) {
        console.log("Error parsing JSON string:", err);
    }
});

exports.showAbout = (req, res) => {
    res.render("about");
};
exports.showProducts = (req, res) => {
    res.render("products", {
        offeredProducts: products
    });
};

exports.showBirthdayBouquets = (req, res) => {
    res.render("products", {
        offeredProducts: products
    });
};
exports.showBalloonyOccasions = (req, res) => {
    res.render("products", {
        offeredProducts: products
    });
};
exports.showBuildBalloonBouquet = (req, res) => {
    res.render("products", {
        offeredProducts: products
    });
};
exports.showDecoratingBalloons = (req, res) => {
    res.render("products", {
        offeredProducts: products
    });
};
exports.showBalloonsBulk = (req, res) => {
    res.render("products", {
        offeredProducts: products
    });
};
exports.showLogin = (req, res) => {
    res.render("login");
};
exports.postSignin = (req, res) => {
    isLoggedIn = true;
    res.render("products", {
        offeredProducts: products
    });
};
exports.showUserSignUp = (req, res) => {
    res.render("signup");
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};
exports.postedLogout = (req, res) => {
    res.render("logout");
};
exports.userRegister = (req, res) => {
    fs.readFile("./model/balloonatic-users.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err);
            return;
        }
        try {
            users = JSON.parse(jsonString);

            console.log("USERS:", users); // => "Customer address is: Infinity Loop Drive"
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
    });
    // console.log(JSON.stringify(req.body));
    let data = JSON.stringify(req.body);
    users.push(data);
    console.log(users);
    fs.writeFile("./model/balloonatic-users.json", users, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
    res.render("thanks");
};