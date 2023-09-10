document.getElementById('career').addEventListener('input', function (event) {
    var value = event.target.value;
    event.target.value = value.replace(/\b[a-z]/g, function (match) {
        return match.toUpperCase();
    });
});
document.getElementById('fullName').addEventListener('input', function (event) {
    var value = event.target.value;
    event.target.value = value.replace(/\b[a-z]/g, function (match) {
        return match.toUpperCase();
    });
});