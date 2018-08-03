doc.find = function(el) {
	var result = document.querySelectorAll(el);

	if (result.length > 1) {
		this.elements = document.querySelectorAll(el);
	} else {
		this.elements = document.querySelector(el);
	}

	return this;
}