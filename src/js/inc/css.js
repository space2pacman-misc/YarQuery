doc.css = function(value) {
	if(this.elements.length > 1) {
		this.elements.forEach(function(item) {
			item.setAttribute("style",value);
		})
	} else {
		this.elements.setAttribute("style",value);
	}

	return this;
}