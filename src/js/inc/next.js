doc.next = function() {
	this.elements = this.elements.nextElementSibling;
	return this;
}