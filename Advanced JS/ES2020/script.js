// Es2020

// BigInt is a type of safe number. essentially there is a limit to how much info one can store in memory

// Returns bigInt
typeof 1n

// returns 9007199254740991
Number.MAX_SAFE_INTEGER

// As soon as number is bigger than 9... it breaks unless you add n to BOTH  numbers
9007199254740991n + 20n


// Optional chaining operator  it avoids all the chekcing of if statements. ?.

let will_pokemon = {
    pikachu: {

    }
}

let delilah_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}

// This Optional chaining operator checks if delil has an object, is there an object of del poke or pikachu - works on objects and checking their properties - 
let power = delilah_pokemon?.pikachu?.power || 'No Power'

console.log(power)

// Nullish coalescing operator ?? - often used instead of the or || For example, the pikachu might not NOT ever not have power, but we don't wanna say "no power" if it may have power later. (0 = a value and we will have a power, but if we were using || it would return no power.)

let power = delilah_pokemon?.pikachu?.power ?? 'No Power'
console.log(power)





