// app/javascript/components/PlaylistDetail.js
import React from 'react';

function PlaylistDetail({ playlist }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{playlist.name}</h2>
      {/* ここにプレイリストの詳細情報を表示 */}
      {/* 例: トラックリスト、プレイリストの説明など */}
    </div>
  );
}

export default PlaylistDetail;
