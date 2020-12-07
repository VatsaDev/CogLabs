function lib() {
  let code = document.querySelector("#lib").value;
  $("head").append(code);
}

function meta() {
  let meta = document.querySelector("#meta").value;
  $("head").append(meta);
}
