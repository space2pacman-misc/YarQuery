doc.addClass = function(value) {
	if(this.elements.length > 1) {
		this.elements.forEach(function(item) {
			item.classList.add(value);
		})
	} else {
		this.elements.classList.add(value);
	}

	return this;
}