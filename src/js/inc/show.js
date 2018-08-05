doc.show = function(value) {
	if (value === undefined) {
		if (this.elements.length > 1) {
			this.elements.forEach(function(item) {
				item.style.display = "inherit";
			})
		} else {
			this.elements.style.display = "inherit";
		}

	} else {
		var  $this = this;
		if ($this.elements.length > 1) {
			$this.elements.forEach(function(item) {
				item.style.display = "inherit";
				item.style.transitionDuration = value + "ms";
				item.style.transform = "scale(0)";
				item.offsetTop;
				item.style.transform = "scale(1)";
			})
		} else {
			$this.elements.style.display = "inherit";
			$this.elements.style.transitionDuration = value + "ms";
			$this.elements.style.transform = "scale(0)";
			$this.elements.offsetTop;
			$this.elements.style.transform = "scale(1)";
		}
	}

	return this;
}