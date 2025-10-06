class Swapi {
    constructor() {
        this.ready = axios.get("https://swapi.info/api/films").then(
            (header) => {
                this.table = header.data;
                console.log(this.table);
            }

        );    
    }

    async foreach() {
        await this.ready;
        if(this.current == null) {
            this.current = 0;
        }
        return this.table[this.current++];
    }
    async at(i) {
        await this.ready;
        console.log(i % this.table.length);
        if(this.table === null) {
            console.error("How?!");
        }
        return this.table[i % this.table.length];
    }
}

export {Swapi as default};