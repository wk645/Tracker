// $(function(){
// 	$('#name').keyup(function(){
// 		$('#greet').text('Hello ' + $('#name').val());
// 	})
// })

document.addEventListener('DOMContentLoaded', function() {

	const todos = []

	let focusContent = document.getElementById('focusText')
	focusContent.addEventListener("keydown", function(event) {

		// debugger
		// var key = e.which || e.keyCode;
		if (event.keyCode === 13) {

			let todayLi = document.getElementById('focusText')
			todayObj = {}
			todayObj.item = todayLi.value
			todos.push(todayObj)

			let mappedTodos = todos.map(todo => {
				return `
					<br>
					<h2 id="todos">${todo.item} <button type="delete">X</button></h2>
				`
			}).join("");

			let todosList = document.getElementById("today")
			todosList.innerHTML = mappedTodos
			
			focusContent.value = ""
		}

	})

	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	
	let time = document.getElementById("time")
	time.innerHTML = `${h}:${m}`



})














