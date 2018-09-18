// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
<script type="text/javascript">
	function listOnKeyPress(e, list) {
		var key = e.which;
		if (key >= 48 && key < 58) {
			var start = list.value.substring(0, list.selectionStart).lastIndexOf("\n");
			start = start == -1 ? 0 : start + 1;
			var end = list.value.substring(list.selectionStart).indexOf("\n");
			end = end == -1 ? list.value.length - 1 : end + list.selectionStart - 1;
			if (end - start == 10) {
				alert("you definitely don't need this huge number")
				e.preventDefault();
			}
		}
		else if (key == 13) {
			list.style.height = (list.scrollHeight + 15) + "px";//15 - depends on font height
		}
		else {
			e.preventDefault();
		}
	}
</script>

<script type="text/javascript">
	function listOnErase(e, list) {
		var key = e.keyCode;
		if (key == 8 || key == 46) {
			list.style.height = "0px";
			list.style.height = list.scrollHeight + "px";
		}
	}
</script>

<script type="text/javascript">
	function getAllLists() {
		var totalString = "";
		var number = document.getElementById("numberOfLists").value;
		for (var i = 0; i < number; i++) {
			totalString += ";" + document.getElementById("list" + i).value;
		}
		totalString = totalString.substring(1);
		return totalString;
	}
	function buttonClick() {
		$.post("@Url.Action("Calculate", "Home")", { inputs: getAllLists()} ,function(data){
			document.getElementById("result").innerHTML =data;
     });
//		document.getElementById("result").innerHTML = 'Url.Action("Calculate", "Home", new { inputs = "' + getAllLists() + '" })';
	}
</script>

<script type="text/javascript">
	function inputNumberOfLists() {
		var number = document.getElementById("numberOfLists").value;
		var container = document.getElementById("lists");
		container.innerHTML = "";
		for (var i = 0; i < number; i++) {
			container.innerHTML += "<textarea id=\"list" + i + "\" rows=\"1\" cols=\"10\" style=\"resize: none; overflow:hidden;\" onkeypress=\"listOnKeyPress(event,this)\" onkeyup=\"listOnErase(event,this)\"></textarea>"
		}
		return true; //return true to submit, false to do nothing
	}
</script>