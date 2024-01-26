import React from 'react';

const AudioEffectControl = ({ onParamChange, onApplyEffect }) => {
  const handleParamChange = (event) => {
    const { name, value } = event.target;
    onParamChange(name, value);
  };

  const handleApplyEffect = (event) => {
    const effectName = event.target.value;
    onApplyEffect(effectName);
  };

  return (
    <div>
      <input type="range" name="echo" min="0" max="1" step="0.01" onChange={handleParamChange} />
      <button value="echo" onClick={handleApplyEffect}>Apply Echo</button>
      {/* 他のエフェクトのコントロールもここに追加 */}
    </div>
  );
};

export default AudioEffectControl;