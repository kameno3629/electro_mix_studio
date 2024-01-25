# db/seeds.rb

audio_categories = [
  { name: 'ドラムとリズムセクション', samples: [
      { name: 'キックドラム1', description: '深みのある低音', length: 1.0, key: 'A', bpm: 120, format: 'wav' },
      { name: 'スネア1', description: 'クリアな音色', length: 0.5, key: 'C', bpm: 140, format: 'wav' },
      # 他のドラム音源を追加...
    ]
  },
  { name: 'ベースライン', samples: [
      { name: 'サブベース1', description: '重低音のサブベース', length: 1.5, key: 'E', bpm: 100, format: 'wav' },
      { name: 'シンセベース1', description: 'エレクトロニックなシンセベース', length: 1.2, key: 'G', bpm: 130, format: 'wav' },
      # 他のベース音源を追加...
    ]
  },
  { name: 'メロディとハーモニー', samples: [
      { name: 'リードシンセ1', description: 'メインメロディに適したシンセリード', length: 2.0, key: 'B', bpm: 150, format: 'wav' },
      { name: 'パッド1', description: '広がりのあるパッドサウンド', length: 2.5, key: 'D', bpm: 90, format: 'wav' },
      # 他のメロディ・ハーモニー音源を追加...
    ]
  },
  { name: 'アコースティック楽器', samples: [
      { name: 'ピアノ1', description: 'クラシックなピアノサウンド', length: 3.0, key: 'F', bpm: 110, format: 'wav' },
      { name: 'アコースティックギター1', description: '温かみのあるギターサウンド', length: 2.8, key: 'A', bpm: 120, format: 'wav' },
      # 他のアコースティック楽器音源を追加...
    ]
  },
  { name: 'エフェクトとトランジション', samples: [
      { name: 'スウィープ1', description: 'ビルドアップに適したスウィープ', length: 0.8, key: 'C', bpm: 140, format: 'wav' },
      { name: 'インパクト1', description: 'ドロップに適した強烈なインパクト', length: 0.6, key: 'E', bpm: 130, format: 'wav' },
      # 他のエフェクト音源を追加...
    ]
  },
  { name: 'アルペジオとオスティナート', samples: [
      { name: 'アルペジオ1', description: 'エネルギッシュなアルペジオパターン', length: 1.8, key: 'G', bpm: 125, format: 'wav' },
      { name: 'オスティナート1', description: 'リズミカルな繰り返しパターン', length: 1.6, key: 'B', bpm: 135, format: 'wav' },
      # 他のアルペジオ・オスティナート音源を追加...
    ]
  },
  { name: 'ボーカルサンプル', samples: [
      { name: 'ボーカルフレーズ1', description: '感情的な女性ボーカルフレーズ', length: 2.2, key: 'D', bpm: 115, format: 'wav' },
      { name: 'ボーカルワンショット1', description: '加工しやすい男性ボーカルワンショット', length: 0.4, key: 'F', bpm: 105, format: 'wav' },
      # 他のボーカル音源を追加...
    ]
  }
]

audio_categories.each do |category|
  created_category = AudioCategory.find_or_create_by(name: category[:name])

  category[:samples].each do |sample|
    AudioFile.find_or_create_by(
      name: sample[:name],
      description: sample[:description],
      length: sample[:length],
      key: sample[:key],
      bpm: sample[:bpm],
      format: sample[:format],
      audio_category: created_category
    )
  end
end


