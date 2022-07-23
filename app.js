let dateFunction = () => {

	const today = new Date();

	// const todayMonth= today.getMonth();
	// const todayDate= today.getDate();

	// const userDate = document.querySelector('#dateID').value;

	const userDate = new Date(document.querySelector('#dateID').value);

	// const userDateMonth= userDate.getMonth();
	// const userDateDate= userDate.getDate();

	// if(todayMonth==userDateMonth&&todayDate==userDateDate){
	// 	alert("Happy Birthday")
	// }
	// console.log(userDate)
	// console.log(typeof (userDate))
	// let userYear = Number(userDate.slice(0, -6));
	// console.log(userYear)

	let age2 = today - userDate;
	// const age = today.getFullYear() - userDate.getFullYear();
	//     7                 3 or 10
	// if (today.getMonth() > userDate.getMonth()) {
	// 	console.log(`if running`)
	// 	let ageMonth = today.getMonth() - userDate.getMonth();
	// } else {
	// 	console.log(`else running`)
	// 	let ageMonth = userDate.getMonth() - today.getMonth() ;
	// }
	console.log(age2)
	// console.log(ageMonth)

	// const birthday = `You are ${age} Years, ${ageMonth} and ${ageDay} Old !`;

	// if (age = -1) {
	// 	alert("error age is greater then current year!");
	// 	return;
	// }

	// console.log(today.getDate())

	// let age = today.getFullYear()-userDate;
	// console.log(age)




} 