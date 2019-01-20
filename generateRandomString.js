function generateRandomString() {
    var randomString = "";
    var randomStringSource = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++) {
        randomString += randomStringSource.charAt(Math.floor(Math.random() * randomStringSource.length));
    }
    return randomString;
}
exports.generateRandomString = generateRandomString;
