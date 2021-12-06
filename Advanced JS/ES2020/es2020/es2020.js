// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
    - 9007199254740991
const answer = "YES"

// Exercise 2: why does this throw an error? How can you fix it?
// Cannot mix BigInt and other types - use more n
3n + 4n + 1n
const answer = "YES"

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: {
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}
const question = "this is it"
if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon
    && will_pokemon.pikachu && will_pokemon.pikachu.friend
    && will_pokemon.pikachu.friend.charizard) {
    console.log('fight!')
} else {
    console.log('walk away...')
}

let andrei = andrei_pokemon?.raichu?.power || "walk away..." || "fight !"
console.log(andrei);

let will = will_pokemon?.pikachu?.friend?.charizard || "Fight"
console.log(will)

const answer = "NO - answer is below"

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
    console.log('fight!')
} else {
    console.log('walk away...')
}


// Exercise 4: What do these each output? - false and then hello for rest
console.log(false ?? 'hellooo')
console.log(null ?? 'hellooo')
console.log(null || 'hellooo')
console.log((false || null) ?? 'hellooo')
console.log(null ?? (false || 'hellooo'))