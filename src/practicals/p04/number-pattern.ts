// Write your code below
const input4 = process.argv[2]
if(input4 === undefined || input4.trim()==''){
    process.exit
}
else{
    const number = +input4
    if(isNaN(number)||number<=0||!Number.isInteger(number)){
        process.exit
    }
    else{
        for(let i = 1 ; i<=number ; i++){
            let result = ''
            for(let k = number ; k>i ; k--){
              result += ' '
            }
            for(let j = i ; j>0 ; j--){
                result += j
              }
        console.log(result)}
    }
}