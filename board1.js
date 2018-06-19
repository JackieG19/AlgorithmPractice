/* creating queue using stack 

input: structure data or request
output: FiFo using a FiLo

1                       5--->5         1
2                       4              2
3                       3              3
4                       2              4
5 - request             1              5
-- Recursion            enO           deQ
1
2
*/


const enQ = [];
const deQ = [];

const getData = i =>{
// const request = () => {

  const tranfer = ()=> {
    while(enQ.length){
deQ.push(enQ.pop());

const request = () => {
  if(enQ.length){
  return deQ.pop();
}

tranfer();
return deQ.pop();

deQ.push(enQ.pop());
const request = () => {
  if(enQ.length){
  return deQ.pop();
  }
    if(deQ.length){
    return deQ.pop();
    }

// throw system to run error
