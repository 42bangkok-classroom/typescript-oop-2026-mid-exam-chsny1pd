function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const merged = [...arr1 , ...arr2]
  merged.map((p)=>{
    let newarr:any[] = []
    if(!merged.includes(p)){
      newarr.splice(Number(p), 0, p);
    }
    return newarr
  })
  return merged
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];