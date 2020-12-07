function run() {
  let htmlCode = editorhtml.getValue();
  let cssCode = "<style>" + editorcss.getValue();
  +"</style>";
  let jsCode = editorjs.getValue();
  let output = document.querySelector("#output");
  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  output.contentWindow.eval(jsCode);
}

var iframe = document.getElementById("output");
iframe.contentWindow.document.body.style.color = "white";
iframe.contentWindow.document.body.style.backgroundColor = "#1d1d1d";

function saveLocal() {
  var scriptName = prompt("script name please,", "put a name");
  localStorage.setItem(scriptName + "-html", editorhtml.getValue());
  localStorage.setItem(scriptName + "-css", editorcss.getValue());
  localStorage.setItem(scriptName + "-js", editorjs.getValue());
}

function getLocal() {
  var askScriptName = prompt("script name please");
  var html = localStorage.getItem(askScriptName + "-html");
  var css = localStorage.getItem(askScriptName + "-css");
  var js = localStorage.getItem(askScriptName + "-js");

  //add in
  editorhtml.setValue(html);
  editorcss.setValue(css);
  editorjs.setValue(js);
}

function makeFile() {
  let file = document.getElementById("file");
  let htmlCode = editorhtml.getValue();
  let cssCode = "<style>" + editorcss.getValue() + "</style>";
  let jsCode = "<script>" + editorjs.getValue() + "</script>";
  let output =
    "<!--html--> \n" +
    htmlCode +
    "  \n<!--css--> \n" +
    cssCode +
    " \n<!--js--> \n" +
    jsCode;
  (function () {
    var textFile = null,
      makeTextFile = function (text) {
        var data = new Blob([text], { type: "text/plain" });

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
          window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
      };

    file.addEventListener(
      "click",
      function () {
        var link = document.createElement("a");
        link.setAttribute("download", "code.txt");
        link.href = makeTextFile(output);
        document.body.appendChild(link);

        // wait for the link to be added to the document
        window.requestAnimationFrame(function () {
          var event = new MouseEvent("click");
          link.dispatchEvent(event);
          document.body.removeChild(link);
        });
      },
      false
    );
  })();
}

function boilerplate(type) {
  if (type == "html5-min") {
    editorhtml.setValue(`<!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`);
  }
  if (type == "html5-meta") {
    editorhtml.setValue(`<!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <title>document</title>
      <meta charset="UTF-8">
      <meta name="description" content="sample">
      <meta name="keywords" content="sample, sample, sample">
      <meta name="author" content="joe bob">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        
    </body>
    </html>`);
  }
}

