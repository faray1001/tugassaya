function greeting(name, language) {
    if(language === "inglish") {
        return `good morning ${name}!`
        } else if (language === "french") {
            return `bonjour ${name}!`;
            } else  {
                return `selamat pagi ${name}!`;
            }
        }
        let greetingmessage = greeting("harry", "french");
        console.log(greetingmessage);