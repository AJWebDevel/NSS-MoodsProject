const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
//left as arrays because unsure how to use reduce to get sum, especially of specific numbers
const grumpyHours = []
const happyHours = []

//below for-of, if-else loop finds how many days were happy and how many were grumpy based on number of sleep hours
for (const hour of hours) {

    if (hour >= 7) {
        happyHours.push(hour)
       
    }
    else {
        grumpyHours.push(hour)
        
    }
}
//these find the number of days by finding the length of the post-loop-filled arrays of Grumpy hours and happy hours
const grumpyDays = grumpyHours.length
const happyDays = happyHours.length

console.log(`I was grumpy on ${grumpyHours.length} days.
I was happy on ${happyHours.length} days.`)