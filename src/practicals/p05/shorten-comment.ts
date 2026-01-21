const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string):string {
  if(comment === undefined || comment.trim()==''){
    return ''
  }
  else{
    for( const args of comment){
      let result = ''
      if(args.length>5 && args.length<10){
        result += args
        return result
      }
      else{ 
        return result
      }
    }
    return ''
  }
}