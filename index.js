var dollarArray = [10, 10.1, 10.3, 11.6, 13.7, 16.5, 18.9, 19.4, 17.3, 16.9, 17.3, 17.3, 17.9, 17.7, 17.3, 17.1, 17.2, 16.1, 14.6, 13.1, 13.2, 13.4, 13.8, 14, 14.4, 14, 14, 14.1, 15.5, 16.9, 17.4, 17.8, 18.2, 21.5, 23.4, 24.1, 23.6, 25, 26.5, 26.7, 26.9, 26.7, 26.8, 27.6, 28.4, 28.9, 29.4, 29.8, 30, 30.4, 30.9, 31.2, 31.8, 32.9, 33.9, 35.5, 37.7, 39.8, 41.1, 42.5, 46.2, 51.9, 55.5, 58.2, 62.1, 67.7, 76.7, 86.3, 94, 97.6, 101.3, 105.3, 109.3, 110.5, 115.4, 120.5, 126.1, 133.8, 137.9, 141.9, 145.8, 149.7, 153.5, 158.6, 161.3, 163.9, 168.3, 174, 176.7, 180.9, 184.3, 190.3, 196.8, 201.8, 210.036, 210.228, 215.949, 219.179, 225.672, 229.601, 233.049];
function getYear(year){
	if(year < 1914 || year > 2014) throw new Error("Year is out of range.");
	return dollarArray[year-1914];
}
module.exports = function(startYear, endYear, amount){
	if(typeof startYear === "undefined") throw new Error("startYear is not defined.")
	if(typeof endYear === "undefined") throw new Error("endYear is not defined.")
	if(typeof amount === "undefined") throw new Error("amount is not defined.")
	return (getYear(endYear)/getYear(startYear))*amount;
}