document.addEventListener('turbolinks:load', () => {
    // ここで enableDragAndDrop 関数を定義するか、または別の場所で定義されている場合はその関数を呼び出す
    enableDragAndDrop();
  });
  
  function enableDragAndDrop() {
    const audioSelectors = document.querySelectorAll('.audio-selector .file');
    const tracksArea = document.getElementById('tracks');
  
    audioSelectors.forEach(audio => {
      audio.setAttribute('draggable', true);
      audio.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.getAttribute('data-audio-id'));
        // コンソールにIDを表示するデバッグ行を追加
        console.log('Dragging:', event.target.getAttribute('data-audio-id'));
      });
    });
  
    tracksArea.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  
    tracksArea.addEventListener('drop', (event) => {
      event.preventDefault();
      const audioId = event.dataTransfer.getData('text/plain');
      const audioElement = document.querySelector(`[data-audio-id="${audioId}"]`);
      if (audioElement) {
        // 重複するIDを持たないようにクローンを作成
        const clone = audioElement.cloneNode(true);
        clone.id = `clone-${audioId}`;
        clone.setAttribute('data-audio-id', `clone-${audioId}`); // クローンに新しいdata-audio-idを設定
        tracksArea.appendChild(clone);
        // ドロップされた要素のIDをコンソールに表示
        console.log('Dropped:', clone.id);
      } else {
        console.error('Dropped element not found:', audioId);
      }
    });
  }