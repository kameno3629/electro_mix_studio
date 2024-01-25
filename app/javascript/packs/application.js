// app/javascript/packs/application.js
// app/javascript/packs/application.js
document.getElementById('sound-source-ui').addEventListener('dragover', function(event) {
  event.preventDefault();
});

document.getElementById('sound-source-ui').addEventListener('drop', function(event) {
  event.preventDefault();
  var file = event.dataTransfer.files[0];
  // ここで音源を読み込みます
});

