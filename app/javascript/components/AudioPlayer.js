import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ source }) => {
  const [audioContext, setAudioContext] = useState(null);
  const [gainNode, setGainNode] = useState(null);
  const [sourceNode, setSourceNode] = useState(null);

  useEffect(() => {
    // Web Audio APIのコンテキストを初期化
    const context = new AudioContext();
    setAudioContext(context);

    // ゲインノード（音量調整用）を作成
    const gain = context.createGain();
    setGainNode(gain);

    // オーディオデータを読み込み、ソースノードを作成
    fetch(source)
      .then(response => response.arrayBuffer())
      .then(buffer => context.decodeAudioData(buffer))
      .then(decodedData => {
        const source = context.createBufferSource();
        source.buffer = decodedData;
        source.connect(gain);
        gain.connect(context.destination);
        setSourceNode(source);
      });

    // コンポーネントのアンマウント時にリソースを解放
    return () => {
      sourceNode && sourceNode.disconnect();
      gainNode && gainNode.disconnect();
      context.close();
    };
  }, [source]);

  // 音量を調整するハンドラ
  const handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    gainNode.gain.value = volume;
  };

  // 再生を開始するハンドラ
  const handlePlay = () => {
    sourceNode && sourceNode.start(0);
  };

  // 再生を停止するハンドラ
  const handleStop = () => {
    sourceNode && sourceNode.stop(0);
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>
      <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} />
    </div>
  );
};

export default AudioPlayer;