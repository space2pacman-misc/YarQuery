doc.toggleClass = function(value) {
	var cl = this.elements.classList;
	if(cl.contains(value)) {
		cl.remove(value);
	} else {
		cl.add(value);
	}
}