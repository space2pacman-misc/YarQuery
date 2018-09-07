doc.prev = function() {
	this.elements = this.elements.previousElementSibling;
	return this;
}