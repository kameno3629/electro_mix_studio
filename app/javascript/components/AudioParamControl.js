import React from 'react';

const AudioParamControl = ({ onParamChange }) => {
  const handleParamChange = (event) => {
    const { name, value } = event.target;
    onParamChange(name, value);
  };

  return (
    <div>
      <input type="range" name="volume" min="0" max="1" step="0.01" onChange={handleParamChange} />
      {/* 他のパラメータのコントロールもここに追加 */}
    </div>
  );
};

export default AudioParamControl;