import irand from "./util.js";
class Question {
    question() {
        this.answered = false;
        this.swapi.at(irand(10, 1000)).then((elm) => {
            this.elm = elm;
            this.div.innerHTML = `
            <h1>What's the movie?</h1>
            <span>${this.elm.opening_crawl}</span>
            <input class="ans">
            <button class="confirm">Confirm</button> 
            `;
            this.ans =  this.div.querySelector(".ans");
            this.conf = this.div.querySelector(".confirm");
            this.conf.addEventListener("click",  (e) => {
                if(this.elm.title.toLowerCase().includes(this.ans.value.toLowerCase())) {
                    this.div.innerHTML = "<h1>Congratulations!</h1>"
                    this.div.answered = true;
                } else {
                    this.div.innerHTML = "<h1>Nope!</h1>"
                    this.div.answered = false;
                }
            });
            
            while(!this.ans) {}

            return;
        });
    }
    isAnswered() {
        return this.answered;
    }
    constructor(swapi) {
        this.swapi = swapi;
        this.answered = true;
        this.div = document.createElement("div");
        document.body.appendChild(this.div);
    }
}

export {Question as default};