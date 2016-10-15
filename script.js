$(document).ready(function() {
	$('#file1').change(function () {	
	   var parts = $(this).val().split('\\');
	   $('#uploadFile').val(parts[parts.length -1]);
	});
});

function copyFilename(input) {
	var parts = input.split('\\');
	document.getElementById("uploadFile2").value = parts[parts.length -1];
}