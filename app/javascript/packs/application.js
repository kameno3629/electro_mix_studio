import fetchAudioFiles from './audio_files';

// drag_and_drop.jsをインポート
import './drag_and_drop'

// Turbolinksのイベントを使用するように変更
document.addEventListener('turbolinks:load', function() {
  var audioContext;

  // ユーザーのジェスチャーがあった後にAudioContextを作成
  document.body.addEventListener('click', function() {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  });

  // 音源ファイルのリストを取得し、ディレクトリ構造とドラッグ&ドロップを有効にする
  fetchAudioFiles(audioContext);
});