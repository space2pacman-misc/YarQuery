doc.html = function(value) {
	if (value === undefined) {
		if (this.elements.length > 1) {
			var result = [];
			this.elements.forEach(function(item,index,arr) {
				result.push(item.innerHTML)
			})

			return result;
		} else {
			return this.elements.innerHTML;
		}
	} else {

		if(this.elements.length > 1) {
			this.elements.forEach(function(item) {
				item.innerHTML = value;
			})
		} else {
			this.elements.innerHTML = value;	
		}

	}

	return this;
}