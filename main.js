"use strict";

const express = require("express"),
        app = express(),
        homeController = require("./controllers/homeController"),
        errorController = require("./controllers/errorController"),
        layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
        express.urlencoded({
            extended: false
        })
        );
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", homeController.showAbout);
app.get("/products", homeController.showProducts);
app.get("/login", homeController.showLogin);
app.post("/signin", homeController.postSignin);
app.get("/signup", homeController.showUserSignUp);
app.post("/register", homeController.userRegister);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);
app.post("/logout", homeController.postedLogout);


app.get("/birthdayBouquets", homeController.showBirthdayBouquets);
app.get("/balloonyOccasions", homeController.showBalloonyOccasions);
app.get("/buildBalloonBouquet", homeController.showBuildBalloonBouquet);
app.get("/decoratingBalloons", homeController.showDecoratingBalloons);
app.get("/balloonsBulk", homeController.showBalloonsBulk);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
