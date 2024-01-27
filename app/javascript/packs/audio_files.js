// ディレクトリ構造を生成する関数
function buildDirectoryTree(audioFiles, audioContext) {
    const treeContainer = document.getElementById('audio-files-tree');
    audioFiles.forEach(file => {
      if (file.url) {
        const path = new URL(file.url).pathname;
        const pathParts = path.replace(/^\//, '').split('/');
        let currentContainer = treeContainer;
  
        pathParts.forEach((part, index) => {
            if (index === pathParts.length - 1) {
              const fileElement = document.createElement('div');
              fileElement.classList.add('file');
              fileElement.innerText = decodeURIComponent(part.replace(/\+/g, ' '));
              fileElement.setAttribute('draggable', true);
              fileElement.setAttribute('data-audio-id', file.id); // この行を追加
              fileElement.addEventListener('dragstart', (event) => {
                event.dataTransfer.setData('text/plain', file.id.toString()); // 'audioId'から'text/plain'に変更
                // コンソールにIDを表示するデバッグ行を追加（オプション）
                console.log('Dragging:', file.id);
              });
              currentContainer.appendChild(fileElement);
        } else {
            let dirElement = currentContainer.querySelector(`div[data-dir="${part}"]`);
            if (!dirElement) {
              dirElement = document.createElement('div');
              dirElement.setAttribute('data-dir', part);
              dirElement.innerText = decodeURIComponent(part.replace(/\+/g, ' '));
              dirElement.classList.add('directory');
              const dirContainer = document.createElement('div');
              dirContainer.classList.add('directory-container');
              dirContainer.style.display = 'none'; // 初期状態では非表示
              dirElement.appendChild(dirContainer);
              dirElement.addEventListener('click', function(event) {
                event.stopPropagation(); // イベントの伝播を止める
                const childContainer = this.querySelector('.directory-container');
                childContainer.style.display = childContainer.style.display === 'none' ? 'block' : 'none';
              });
              currentContainer.appendChild(dirElement);
            }
            currentContainer = dirElement.querySelector('.directory-container');
          }
        });
      }
    });
  }
  
  // ドラッグ&ドロップ機能を実装する関数
function enableDragAndDrop(audioContext) {
    const tracksArea = document.getElementById('tracks');
    tracksArea.addEventListener('dragover', (event) => {
      event.preventDefault();
      // ドラッグ中にトラックエリアのスタイルを変更する
      tracksArea.style.backgroundColor = '#dee2e6';
    });
  
    tracksArea.addEventListener('dragleave', (event) => {
      // ドラッグがトラックエリア外に出たときに元のスタイルに戻す
      tracksArea.style.backgroundColor = '#e9ecef';
    });
  
    tracksArea.addEventListener('drop', (event) => {
      event.preventDefault();
      // ドロップ後に元のスタイルに戻す
      tracksArea.style.backgroundColor = '#e9ecef';
      const audioId = event.dataTransfer.getData('audioId');
      if (audioId) {
        // ここでaudioIdを使って音源データを取得
        const audioElement = document.querySelector(`[data-audio-id="${audioId}"]`);
        if (audioElement) {
          // トラックエリアに音源データを追加する処理
          const trackElement = document.createElement('div');
          trackElement.classList.add('track');
          trackElement.textContent = audioElement.textContent; // とりあえずファイル名を表示
          tracksArea.appendChild(trackElement);
        }
      }
    });
  }
  
  // AWSから音源ファイルのリストを取得し、それを画面に表示する関数
  function fetchAndDisplayAudioFiles(audioContext) {
    fetch('/audio_files')
      .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(audioFiles => {
        buildDirectoryTree(audioFiles, audioContext);
        enableDragAndDrop(audioContext);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  // このファイルの関数をエクスポート
  export default fetchAndDisplayAudioFiles;
  
  // fetchAndDisplayAudioFiles関数をグローバルスコープに割り当てる
  window.fetchAndDisplayAudioFiles = fetchAndDisplayAudioFiles;