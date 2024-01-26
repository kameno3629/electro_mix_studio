function toggleCategory(element) {
  const audioFilesDiv = element.nextElementSibling;
  if (audioFilesDiv.style.display === 'none') {
    audioFilesDiv.style.display = 'block';
  } else {
    audioFilesDiv.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var audioContext;
  var soundSourceSelects = document.querySelectorAll('.sound-source-select');
  var saveTrackButton = document.getElementById('save-track');
  var playTrackButton = document.getElementById('play-track');
  var persistTrackButton = document.getElementById('persist-track');
  var sources = [];

  // ユーザーのジェスチャーがあった後にAudioContextを作成
  document.body.addEventListener('click', function() {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  });

  if (soundSourceSelects) {
    soundSourceSelects.forEach(function(soundSourceSelect, index) {
      soundSourceSelect.addEventListener('change', function() {
        var selectedSoundSource = soundSourceSelect.value;
        if (sources[index]) {
          sources[index].stop();
        }
        fetch(selectedSoundSource)
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
          .then(audioBuffer => {
            sources[index] = audioContext.createBufferSource();
            sources[index].buffer = audioBuffer;
            sources[index].connect(audioContext.destination);
            if (index === 0) {
              sources[index].start();
            } else {
              sources[index - 1].onended = function() {
                sources[index].start();
              };
            }
          });
      });
    });
  }

  if (saveTrackButton) {
    saveTrackButton.addEventListener('click', function() {
      var track = Array.from(soundSourceSelects).map(function(soundSourceSelect) {
        return soundSourceSelect.value;
      });
      console.log('saveTrackButton track:', track); // 追加
      localStorage.setItem('track', JSON.stringify(track));
    });
  }
  
  if (playTrackButton) {
    playTrackButton.addEventListener('click', function() {
      var trackData = localStorage.getItem('track');
      var track = trackData ? JSON.parse(trackData) : [];
      console.log('playTrackButton track:', track); // 追加
      track.forEach(function(soundSource, index) {
        fetch(soundSource)
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
          .then(audioBuffer => {
            sources[index] = audioContext.createBufferSource();
            sources[index].buffer = audioBuffer;
            sources[index].connect(audioContext.destination);
            if (index === 0) {
              sources[index].start();
            } else {
              sources[index - 1].onended = function() {
                sources[index].start();
              };
            }
          });
      });
    });
  }

  if (persistTrackButton) {
    persistTrackButton.addEventListener('click', function() {
      var track = Array.from(soundSourceSelects).map(function(soundSourceSelect) {
        return soundSourceSelect.value;
      });
      fetch('/tracks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sound_sources: track }),
      })
      .then(response => response.json())
      .then(data => console.log(data));
    });
  }

  // ここで永続的に保存したトラックを取得し、再生します
  fetch('/tracks')
  .then(response => response.json())
  .then(response => {
    console.log('fetch /tracks response.data:', response.data); // 追加
    if (response.status === "SUCCESS" && Array.isArray(response.data)) {
      response.data.forEach(function(track, index) {
        console.log('fetch /tracks track.sound_sources:', track.sound_sources); // 追加
        if (Array.isArray(track.sound_sources)) {
          track.sound_sources.forEach(function(soundSource) {
              fetch(soundSource)
                .then(response => response.arrayBuffer())
                .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
                .then(audioBuffer => {
                  sources[index] = audioContext.createBufferSource();
                  sources[index].buffer = audioBuffer;
                  sources[index].connect(audioContext.destination);
                  if (index === 0) {
                    sources[index].start();
                  } else {
                    sources[index - 1].onended = function() {
                      sources[index].start();
                    };
                  }
                });
            });
          } else {
            console.error('Invalid sound_sources:', track.sound_sources); // 追加
          }
        });
      }
    });
  });