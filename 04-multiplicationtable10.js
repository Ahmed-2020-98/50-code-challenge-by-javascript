// 3. Print the multiplication table with 7
for (var i = 0; i <=12;i++) {
    printTable(i)
    console.log('****************************');
}

function printTable(n){
    for(var i = 0; i<=12;i++){
        console.log(`${i} * ${n} = ${i*n}`);

    }
}