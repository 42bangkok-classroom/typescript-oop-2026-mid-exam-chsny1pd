const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string):string {
  if(comment === undefined || comment.trim()==''){
    return ''
  }
  else{
    for( const args of comment){
      if(args.length>5 && args.length<10){
        return args
      }
      else{ 
        return ''
      }
    } 
    return comment
}
}
console.log(shortenComment(comment))