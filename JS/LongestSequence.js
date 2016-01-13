var arr = [1,2,3,4,5,6,8,10,12,13,14,15,20,21,22,23,24,25,26,27,28,29,30];
var res = new Array();

res[0] = 0;
for(var i=1; i<arr.length; i++) res[i] = (arr[i] == arr[i-1] + 1) ? (res[i-1] + 1) : 0;

var maxLength = Math.max.apply({},res);

console.log(maxLength);