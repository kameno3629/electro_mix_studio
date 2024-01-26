// Web Audio APIのAudioContextを作成します。
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// サンプルを再生する関数を定義します。
function playSample(sampleUrl) {
  // Ajaxリクエストを使用してサンプルの音声データを取得します。
  const request = new XMLHttpRequest();
  request.open('GET', sampleUrl, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    // 音声データをデコードします。
    audioContext.decodeAudioData(request.response, function(buffer) {
      // AudioBufferSourceNodeを作成し、デコードした音声データを設定します。
      const source = audioContext.createBufferSource();
      source.buffer = buffer;

      // AudioBufferSourceNodeをAudioContextに接続します。
      source.connect(audioContext.destination);

      // 音声の再生を開始します。
      source.start(0);
    });
  };

  request.send();
}