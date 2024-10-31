let req = new XMLHttpRequest();

req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText)
    }
};

req.open("GET", "https://api.jsonbin.io/v3/b/67237c12ad19ca34f8c1a220/latest", true);
req.setRequestHeader("X-Master-Key", "$2a$10$H/9wkZrAnGEOWUYY3hH39.JsPFRkfBk.F.ZUNM8dFtccZtpgpagNK");
req.setRequestHeader("X-Bin-Meta", "false")
req.send();