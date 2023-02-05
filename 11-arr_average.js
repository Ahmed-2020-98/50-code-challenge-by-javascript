// Calculate the average of the numbers in an array of numbers
var list=[1,2,4,5,6];
var average ,sum=0;

for(var value of list){
    sum+=value;
    average = sum / list.length;

}
console.log(average);