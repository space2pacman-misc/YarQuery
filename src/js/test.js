doc.find(".orange").html("ORANGE").css("background: orange");
doc.find(".apple").html("APPLE").css("background: green");

doc.find(".orange").event("click", function() { alert("HOLA ORANGE"); });
doc.find(".apple").event("click", function() { alert("HOLA APPLE"); });

doc.find(".plum").css("background: yellow;").html("PLUM").event("click", function() { alert("HOLA PLUM") })

console.log(doc.find(".apple").html());
console.log(doc.find(".plum").html());