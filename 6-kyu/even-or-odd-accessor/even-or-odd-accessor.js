function evenOrOdd(n) {
    return n % 2 === 0 ? "Even" : "Odd";
​
}
​
evenOrOdd = new Proxy(evenOrOdd, {
    get(target, prop) {
        return evenOrOdd(prop)
    }
})