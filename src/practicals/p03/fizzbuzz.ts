// Write your code below
const input3 = process.argv[2]
if(input3 === undefined || input3.trim()==''){
    process.exit
}
else{
    const number = +input3
    if(isNaN(number)||number<=0||!Number.isInteger(number)){
        process.exit
    }
    else{
        for(let i = 1 ; i<=number ; i++){
            if(i%3==0 && i%5==0){
                console.log('FizzBuzz')
            }
            else if(i%3==0 ){
                console.log('Fizz')
            }
            else if(i%5==0){
                console.log('Buzz')
            }
            else {
                console.log(i)
            }
        }
    }
}