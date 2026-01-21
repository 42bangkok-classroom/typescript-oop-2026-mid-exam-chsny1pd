function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const merged = [...arr1 , ...arr2]
  // const x:any[] = merged.map((p)=>{
  //   let newarr:any[] = []
  //   if(!merged.includes(p)){
  //     newarr.splice(Number(p), 0, p);
  //   }
  //   return newarr
  // })
  // return merged
  const x:any[] = []
  let z = merged.filter((value, index, array) => array.indexOf(value) === index);
  return z
}

const arr3 = [1, 2, 3, 4];
const arr4 = [3, 4, 5, 6];

console.log(getUniqueNumbers(arr3,arr4))
