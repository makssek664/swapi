import irand from "./util.js";
class Question {
    question() {
        this.answered = false;
        this.swapi.at(irand(10, 1000)).then((elm) => {
            this.elm = elm;
            this.div.innerHTML = `
            <h1 class="question">What's the movie?</h1>
            <span class="opening-crawl">${this.elm.opening_crawl}</span></br>
            <input class="ans">
            <button class="confirm">Confirm</button> 
            `;
            this.ans =  this.div.querySelector(".ans");
            this.conf = this.div.querySelector(".confirm");
            this.conf.addEventListener("click",  (e) => {
                if(this.elm.title.toLowerCase().includes(this.ans.value.toLowerCase()) && this.ans.value !== "") {
                    this.div.innerHTML = '<h1 class="success">Congratulations!</h1>';
                    this.answered = true;
                } else {
                    this.div.innerHTML = '<h1 class="failure">Nope!</h1>';
                    this.answered = true;
                }
            });

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
        this.div.className = "game";
        document.body.appendChild(this.div);
    }
}

export {Question as default};