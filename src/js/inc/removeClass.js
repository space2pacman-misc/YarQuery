doc.removeClass = function(value) {
	if(this.elements.length > 1) {
		this.elements.forEach(function(item) {
			item.classList.remove(value);
		})
	} else {
		this.elements.classList.remove(value);
	}

	return this;
}