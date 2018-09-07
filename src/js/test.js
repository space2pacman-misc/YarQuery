doc.find(".orange").html("ORANGE").css("background: orange");
doc.find(".apple").html("APPLE").css("background: green");

doc.find(".orange").event("click", function() { alert("HOLA ORANGE"); });
doc.find(".apple").event("click", function() { alert("HOLA APPLE"); });

doc.find(".plum").css("background: yellow;").html("PLUM").event("click", function() { alert("HOLA PLUM") })

console.log(doc.find(".apple").html());
console.log(doc.find(".plum").html());

doc.find(".show").event("click", function() {
	doc.find(".orange").show(1000);
	doc.find(".apple").show(1000);
})

doc.find(".hide").event("click", function() {
	doc.find(".orange").hide(1000);
	doc.find(".apple").hide(1000);
})

console.log(doc.find(".fruits").children())