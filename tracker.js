document.addEventListener('DOMContentLoaded', function() {

	document.body.onload = function() {
		chrome.storage.sync.get('todo', function(data) {
			document.getElementById('today').innerText = `
			
			${data.todo}`
			console.log(storedFocus)
		})
	}

	const todos = []
	const storedFocus = []

	let focusContent = document.getElementById('focusText')
	// focusContent.style.display = 'block';
	focusContent.addEventListener("keydown", function(event) {

		if (event.keyCode === 13) {

			event.preventDefault();

			let todayLi = document.getElementById('focusText')
			todayObj = {}
			todayObj.item = todayLi.value
			todos.push(todayObj)

			
			chrome.storage.sync.set({'todo': focusContent.value}, function() {
				alert("success!")
			});

			let mappedTodos = todos.map(todo => {
				return `
					<br>
					<h2 id="todos">${todo.item} <button class="ui button">X</button></h2>
				`
			}).join("");

			let todosList = document.getElementById("today")
			todosList.innerHTML = mappedTodos
			
			focusContent.style.display = 'none';

		}

	})

	function updateTime() {
		let time = document.getElementById("time")
		let today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();

		if (m < 10) {
			time.innerHTML = `${h}:0${m}`
		} else {
			time.innerHTML = `${h}:${m}`
		}
	}
	setInterval(updateTime, 500);

	const notes = []

	let noteContainer = document.getElementById("noteText")
	noteContainer.addEventListener("keydown", function(event) {

		if (event.keyCode === 13) {

			event.preventDefault();

			let noteLi = document.getElementById("noteText")
			noteObj = {}
			noteObj.item = noteLi.value
			notes.push(noteObj)

			let mappedNotes = notes.map(note => {
				return `
					<br>
					<li id="note">${note.item}</li>
				`
			}).join("");

			let notesList = document.getElementById("allNotes")
			notesList.innerHTML = mappedNotes;

			noteContainer.value = "";
		}

		if (notes.length === 5) {
			// make a scroll bar
		}
		
	})





})














