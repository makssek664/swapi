function irand(base, clamp) {

    const r = Math.floor(Math.random() * base) % clamp;
    console.log(base);
    return r;
}

export {irand as default};