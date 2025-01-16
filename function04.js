const greeting = function(name, language) {
    if(language === "inglish") {
        return "good morning " + name + "!";
        } else if (language === "french") {
            return "bonjaour " + name + "!";
        } else {
            return "selamat pagi " + name + "!";
        }
    }
    console.log(greeting('CEO faray', 'inglish'));
