const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// make everything lowercase
	// look ANYWHERE in the array item for the part of the string
	results=fruit.filter((val)=>{if(val.toLowerCase().includes(str)==true) return val});
	//add to results
	return results;
}

function searchHandler(e) {
	//if the user deletes all text from the search bar, reset the suggestions to blank
	if(input.value===''){
		suggestions.innerHTML=""

	//otherwise get the current string from the input and pass it to search as lowercase
	}else{
		showSuggestions(search(input.value.toLowerCase()),input.value)
	}
}

function showSuggestions(results, inputVal) {
	//clear the dropdown list
	suggestions.innerHTML=""

	// populate the dropdown list
	results.forEach(element => {
		let li=document.createElement("li")
		li.innerText=element
		suggestions.append(li)
	});
	
}

function useSuggestion(e) {
	// when users click on a suggestion, fill out the search bar and close the dropdown list
	input.value=e.target.innerText
	suggestions.innerHTML=""
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);