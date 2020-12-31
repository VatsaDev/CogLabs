var title = document.getElementById('title');
var edit = document.getElementById('edit');

function title() {
    document.title = edit.value();
    document.querySelector('title').textContent = edit.value();
}

document.querySelector("#edit").addEventListener("keyup", title);