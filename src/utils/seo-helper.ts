export const metaHelper = (queryProperty: string, value: string) => {
	// Get an element if it exists already
	const element = document.querySelector(`meta[${queryProperty}]`);

	// Check if the element exists
	if (element) {
		// If it does just change the content of the element
		element.setAttribute("content", value);
	} else {
		// It doesn't exist so lets make a HTML element string with the info we want
		const newEl = `<meta ${queryProperty} content="${value}" />`;

		// And insert it into the head
		document.head.insertAdjacentHTML("beforeend", newEl);
	}
};

export const titleHelper = (title: string) => {
	const element = document.querySelector('title');
	if (element) {
		element.innerText = title;
	}
}
