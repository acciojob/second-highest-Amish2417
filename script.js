//your JS code here. If required.
if(arr.lenth==0 || arr.length==1){
	return -Infinity;
}
 let reversearr = arr.reverse();
if(reversearr[reversearr.length-2] != reverse[reverse.length-1] ){
	return reversearr[reversearr.length-2];
}
else{
	return -Infinity;
}