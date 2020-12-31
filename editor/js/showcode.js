var typeCode = "Norm";

function run() {
  if (typeCode == "Norm") {
    let htmlCode = editorhtml.getValue();
    let cssCode = "<style>" + editorcss.getValue();
    +"</style>";
    let jsCode = editorjs.getValue();
    let output = document.querySelector("#output");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
  }

  if (typeCode == "Markdown") {
    let MD = editorhtml.getValue();
    var md = new Remarkable({ html: true });
    var compiled = md.render(MD);
    let cssCode = "<style>" + editorcss.getValue();
    +"</style>";
    let jsCode = editorjs.getValue();
    let output = document.querySelector("#output");
    output.contentDocument.body.innerHTML = compiled + cssCode;
    output.contentWindow.eval(jsCode);
  }
}

function preview() {
  if (typeCode == "Norm") {
    let htmlCode = editorhtml.getValue();
    let cssCode = "<style>" + editorcss.getValue();
    +"</style>";
    let output = document.querySelector("#output");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
  }

  if (typeCode == "Markdown") {
    let MD = editorhtml.getValue();
    var md = new Remarkable({ html: true });
    var compiled = md.render(MD);
    let cssCode = "<style>" + editorcss.getValue();
    +"</style>";
    let output = document.querySelector("#output");
    output.contentDocument.body.innerHTML = compiled + cssCode;
  }
}

document.querySelector("#editor-html").addEventListener("keyup", preview);
document.querySelector("#editor-css").addEventListener("keyup", preview);

function preprocessor(type) {
  if (type == "norm") {
    typeCode = "Norm";
  }

  if (type == "markdown") {
    typeCode = "Markdown";
    editorhtml.session.setMode("ace/mode/markdown");
    editorhtml.setValue(`# welcome to Vlabs
 - hello!
 - use a preprocessor
    `);
  }
}

function theme(name) {
  if (name == "monokai") {
    editorhtml.setTheme("ace/theme/monokai");
    editorcss.setTheme("ace/theme/monokai");
    editorjs.setTheme("ace/theme/monokai");
  }

  if (name == "dracula") {
    editorhtml.setTheme("ace/theme/dracula");
    editorcss.setTheme("ace/theme/dracula");
    editorjs.setTheme("ace/theme/dracula");
  }

  if (name === "github") {
    editorhtml.setTheme("ace/theme/github");
    editorcss.setTheme("ace/theme/github");
    editorjs.setTheme("ace/theme/github");
  }

  if (name === "chrome") {
    editorhtml.setTheme("ace/theme/chrome");
    editorcss.setTheme("ace/theme/chrome");
    editorjs.setTheme("ace/theme/chrome");
  }
}

var iframe = document.getElementById("output");
iframe.contentWindow.document.body.style.color = "white";
iframe.contentWindow.document.body.style.backgroundColor = "#1d1d1d";

function saveLocal() {
  var script = document.getElementById("script-save");
  var scriptName = script.value;
  localStorage.setItem(scriptName + "-html", editorhtml.getValue());
  localStorage.setItem(scriptName + "-css", editorcss.getValue());
  localStorage.setItem(scriptName + "-js", editorjs.getValue());
}

function getLocal() {
  var script = document.getElementById("script-get");
  var askScriptName = script.value;
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

        // If we are replacing a previously generated file we need to manually revoke the object URL to avoid memory leaks.
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
