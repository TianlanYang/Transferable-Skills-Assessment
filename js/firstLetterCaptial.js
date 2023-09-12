function capitalizeInput(event) {
    var value = event.target.value;
    event.target.value = value.replace(/\b[a-z]/g, function (match) {
        return match.toUpperCase();
    });
}


document.querySelectorAll('input.text-capitalize').forEach(function (input) {
    input.addEventListener('input', capitalizeInput);
});