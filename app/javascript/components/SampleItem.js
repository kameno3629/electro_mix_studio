// app/javascript/components/SampleItem.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { playSample } from '../packs/audioPlayback'; // 再生関数をインポート

function SampleItem({ id, name, type, length }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'SAMPLE',
    item: { id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // 再生ボタンがクリックされたときのイベントハンドラ
  const handlePlayClick = () => {
    // ここでサンプルの再生を開始します。
    // 仮のURLを設定します。実際にはサンプルのURLに置き換える必要があります。
    const sampleUrl = `/samples/${id}/audio`;
    playSample(sampleUrl);
  };

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name} - {type} ({length})
      <button onClick={handlePlayClick}>Play</button> {/* 再生ボタンを追加 */}
    </div>
  );
}

export default SampleItem;