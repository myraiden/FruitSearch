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
	// get the current string
	//pass it to search
	//let returned=search(input.value.toLowerCase())
	//call show suggestions
	showSuggestions(search(input.value.toLowerCase()),input.value)
}

function showSuggestions(results, inputVal) {
	//clear the dropdown list
	suggestions.innerHTML=""

	//dropdownlist exists as 'suggestions' item in HTML already
	//create a hover CSS style
	//allow the hover of a mouse to highlight the item but not select it in CSS
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