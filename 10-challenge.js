// Calculate the sum of numbers in an array of numbers
var list=[1,2,4,5,6]
var sum=0;
var sum2=0;
for(var i in list) {
sum+=list[i];
}
console.log(sum);


// or *****************


for(var value of list) {
sum2+=value;
}
console.log(sum2);