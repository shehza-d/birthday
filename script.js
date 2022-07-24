let dateFunction = () => {

	const today = new Date();

	const todayMonth= today.getMonth();
	const todayDate= today.getDate();
	console.log(todayMonth)
	console.log(todayDate)
	

	// const userDate = document.querySelector('#dateID').value;
	
	const userDate = new Date(document.querySelector('#dateID').value);
	if (userDate == null || userDate == "Invalid Date") {
		alert("Enter a date!");
		return;
	}
	const userDateMonth= userDate.getMonth();
	const userDateDate= userDate.getDate();
	console.log(userDateMonth)
	console.log(userDateDate)

	// if(todayMonth==userDateMonth&&todayDate==userDateDate){
	// 	alert("Happy Birthday")
	// }
	// console.log(userDate)
	// console.log(typeof (userDate))
	// let userYear = Number(userDate.slice(0, -6));
	// console.log(userYear)

	let age = today - userDate;


	
	// const age1 = today.getFullYear() - userDate.getFullYear();
	//     7                 3 or 10
	// if (today.getMonth() > userDate.getMonth()) {
	// 	console.log(`if running`)
	// 	let ageMonth = today.getMonth() - userDate.getMonth();
	// } else {
	// 	console.log(`else running`)
	// 	let ageMonth = userDate.getMonth() - today.getMonth() ;
	// }
	// console.log(age)
	// console.log(ageMonth)

	// const birthday = `You are ${age} Years, ${ageMonth} and ${ageDay} Old !`;

	if (userDate > today) {
		alert("Age can't be greater then current Date!");
		return;
	}

	// console.log(today.getDate())

	// let age = today.getFullYear()-userDate;
	// console.log(age)


	
	//converting milisecond into...
	let second = Math.floor(age / 1000);
	let minute = Math.floor(second / 60);
	second = second % 60;
	let hour = Math.floor(minute / 60);
	minute = minute % 60;
	let ageDay = Math.floor(hour / 24);
	hour = hour % 24;
	let ageMonth = Math.floor(ageDay / 30);
	ageDay = ageDay % 30;
	let ageYear = Math.floor(ageMonth / 12);
	ageMonth = ageMonth % 12;
	//https://gist.github.com/PantheraRed/2e65c48cdfa6fba49473913300cc8b12

	const birthday = `You are ${ageYear} Years, ${ageMonth} Months and ${ageDay} Days Old !`;
	// console.log(birthday)
	// console.log(year, month, day, hour, minute)

	//calculation days left to next birthday

} 