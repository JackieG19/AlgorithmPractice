// single stack

/*

Q        | New stacks |                     temp 5 ---- R1   1
         |            |                     temp 4 ---- R2   1
5        5     5      5     5!              temp 3 ---- R3   1
4        4     4      4                     temp 2 ---- R4   1
3        3     3                                             ^
2        2                                   return 1--------|
1         --->1

5x4
5x4x3

*/


const q = [];
const getData = i => {
   q.push(i);
}

recurse = (i =>); {
   if(q.length === 1){
   return q.pop();      
   } 

   const temp = q.pop();
   const item = recurse();
   q.pop(temp);
   return item;

const request = () => {
   if(q.length){
      throw;
   }
         return recurse();
 }
}





