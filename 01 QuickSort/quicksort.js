function quicksort (arr) 
{

	var num = Math.floor(arr.length/2);
	var numValue = arr.splice(num, 1);

	var  left=[];
	var  right=[];


	if (arr.length <= 1)
		{
			return arr
		}
	else 
		{
			for (var i = 0; i < arr.length; i++) 
			{	if (arr[i]<numValue)
				{
				 	left.push(arr[i]);
				}
				 else 
				 {
				 	right.push(arr[i]);
				 }
				
			}

			return quicksort(left).concat([numValue],quicksort(right));
		};
		
}
alert(quicksort([3,40,25,54,123,88,66,97]));