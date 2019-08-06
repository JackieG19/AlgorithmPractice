/* Treasure Hunt
given the following arguments
 size -> int
 start -> [int, int]
 instructions -> [{heading: str,  steps: int}]
 figure the following:
 - size denotes a size x size grid
 - start is the starting coordination
 - instructions is an array of object containing heading "N", "S", "E", "W" the four directions
 - return the coordination of the treasure

 1.1: if steps so over on edge loop to opposite side
 1.2: accept direction: NW, SW, WE, SE
 1.3: accept traps array
 [[],[]] array of coordinates if person steps on atrop return dead instead
*/

/*
direction:
N = up(+)
S = down(-)
W = left(-)
E = right(+)
*/
var x = 2;
var y = 2;

