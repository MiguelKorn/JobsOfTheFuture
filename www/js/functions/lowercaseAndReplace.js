var lowercaseAndReplace = function (name) {
    name = name.toLowerCase();
    name = name.replace(/ /g, "_");
    return name;
};