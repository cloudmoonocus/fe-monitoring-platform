"use strict"

interface A {
    a: string
}

const a: A = {
    a: "a",
}

function core() {
    return "Hello from core" + [a]
}

console.log(core())
