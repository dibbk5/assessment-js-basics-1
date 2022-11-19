///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let appleArrays = [fujiAcres, galaAcres, pinkAcres]//create an array of the arrays that can be parced
let totalAcres = 0

//loop through the first array to get to each array and then loop within those arrays adding up each number in the array
for (i = 0; i < appleArrays.length; i++) {
    for (j = 0; j < appleArrays[i].length; j++) {
        totalAcres += appleArrays[i][j]
    } 
}

console.log(totalAcres)//console log the total acres picked


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = (totalAcres/7)//take total acres divided by the 7 days in a week

console.log(averageDailyAcres)//console log the average acres per day

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0) {
    days += 1;
    acresLeft -= averageDailyAcres
}

console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

let tonsDaily = 6.5//tons per acre
let fujiTons = fujiAcres.slice(0,7)//copy fuji acres array
let galaTons = galaAcres.slice(0,7)//copy gala acres array
let pinkTons = pinkAcres.slice(0,7)//copy pink acres array
let appleTons = [fujiTons, galaTons, pinkTons]//new nested array
let appleNames = ["fuji apples", "gala apples", "pink apples"]//used for console logging 

//loop through each of the new arrays and multiply each value by the daily acre tons
for (i = 0; i < appleTons.length; i++) {
    for (j = 0; j < appleTons[i].length; j++) {
        appleTons[i][j] *= tonsDaily
    } 
}

console.log(appleTons)//console log all three ton arrays at once

// for (i = 0; i < appleTons.length; i++) {
//     console.log(`The daily tons harvested per day ${appleTons[i]} ${appleNames[i]}`)
// }

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let lbsperTon = 2000
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0
let applePounds = [fujiPounds, galaPounds, pinkPounds]

//loops through apple tons and multiplies them by the the tons then summs the apple tons arrays
for (i = 0; i < applePounds.length; i++) {
    for (j = 0; j < appleTons[i].length; j++) {
        appleTons[i][j] *= lbsperTon
        applePounds[i] += appleTons[i][j]
    } 
}

console.log(applePounds)//console logs the apple pounds per apple

// puts each respective apple poundage into a sentence
for (i = 0; i < applePounds.length; i++) {
    console.log(`This week ${applePounds[i]} lbs of ${appleNames[i]} were harvested.`)
}

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

let fujiProfit = 0
let galaProfit = 0
let pinkProfit = 0
let applePrice = [fujiPrice, galaPrice, pinkPrice]
let appleProfit = [fujiProfit, galaProfit, pinkProfit]

//loops through the apple profits and assigns the profit by multiplying the pounds per apple type by the price per apple type
for (i = 0; i < appleProfit.length; i++) {
    appleProfit[i] = applePounds[i] * applePrice[i]
}

console.log(appleProfit)//console logs the profit per apple type

//puts the profit per apple type into a sence and console logs each of them
for (i = 0; i < appleProfit.length; i++) {
    console.log(`This week ${appleProfit[i]} of profit was made from ${appleNames[i]}.`)
}


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = 0

//summed each type of apple into the total profit
for (i = 0; i < appleProfit.length; i++) {
    totalProfit += appleProfit[i]
}

//console logged total profit within the sentence
console.log(`This week we made ${totalProfit} from all apples`)