doc.hide = function(value) {
	if (value === undefined) {
		if (this.elements.length > 1) {
			this.elements.forEach(function(item) {
				item.style.display = "none";
			})
		} else {
			this.elements.style.display = "none";
		}

	} else {
		var  $this = this;
		if ($this.elements.length > 1) {
			$this.elements.forEach(function(item) {
				item.style.transitionDuration = value + "ms";
				item.style.transform = "scale(0)";
				var i = setTimeout(function() {
					item.style.display = "none";
				}, value)
			})
		} else {
			$this.elements.style.transitionDuration = value + "ms";
			$this.elements.style.transform = "scale(0)";
			var i = setTimeout(function() {
				$this.elements.style.display = "none";
			}, value)
		}
	}

	return this;
}