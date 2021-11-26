// Type Coersion

// Double == means that comapre 2 values and if they have ddifferent types, try and coerse one(change it to the correct type) - this equals to true

//  There is never a time where you SHOULD use double == (not predictible code)
1 == '1'

// triple means that it's false becasue 3 equals comapre 2 values but don't coerce it (change it to the correct type);   
1 === '1'


// if this is run it equals true because 1 is always true  and 0 would be false.
if (1) {
    console.log(5);
}

//there is a concept of -0 and +0 - the code below returns true, even though they are different things.
-0 === +0

//  object.is   will return false- it's useful because you can NaN === NaN true
Object.is(-0, +0)