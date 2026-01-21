// Write your code below
const input4 = process.argv[2]
if(input === undefined || input.trim()==''){
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
            for(let j = i ; j<=number ; j++){
                if(j!=i){
                    result += ''
                }
                else {
                    result += i
                }
            }
        }   
    }
}