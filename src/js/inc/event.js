doc.event = function(event, fn) {

	if(this.elements.length > 1) {
		this.elements.forEach(function(item) {
			item.addEventListener(event, fn);
		})
	} else {
		this.elements.addEventListener(event, fn);	
	}

	return this;
}