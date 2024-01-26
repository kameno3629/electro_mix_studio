import React, { useRef, useEffect } from 'react';

const AudioVisualizer = ({ audioData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const analyser = audioContext.createAnalyser();
  sourceNode.connect(analyser);
  const data = new Uint8Array(analyser.frequencyBinCount);
  const draw = () => {
    requestAnimationFrame(draw);
    analyser.getByteFrequencyData(data);
    context.clearRect(0, 0, canvas.width, canvas.height);
    data.forEach((value, i) => {
      context.fillRect(i * 12, canvas.height - value, 10, value);
    });
  };
  draw();
}, [audioData]);

  return <canvas ref={canvasRef} />;
};

export default AudioVisualizer;