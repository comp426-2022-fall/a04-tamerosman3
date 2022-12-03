export default function roll (sides, dice, rolls)
{
	 let result = [];
	 for(let i = 0; i < rolls; i++) {
		 let temp = 0;
		  for(let i = 0; i < dice; i++) temp = temp + 1 + Math.floor(Math.random() * sides);
		 result[i] = temp;
	                                }
	             
	const output = {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": result
                       }

	return JSON.stringify(output);
}
