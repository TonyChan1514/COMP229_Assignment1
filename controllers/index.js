
exports.home = function (req, res){
    res.render("home", { title: "Home" })
};

exports.projects = function (req, res){
    res.render("projects", { title: "Projects" })
};

exports.about = function (req, res){
    res.render("about", { title: "About" })
};

exports.services = function (req, res){
    res.render("services", { title: "Services" })
};

exports.contact = function (req, res){
    res.render("contact", { title: "Contact" })
};
