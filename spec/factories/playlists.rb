# spec/factories/playlists.rb

FactoryBot.define do
    factory :playlist do
      name { "My Playlist" }
      # user という名前で User モデルの関連を設定します。
      # この設定により、playlist を生成する際に、関連する user も自動的に生成されます。
      # User ファクトリが定義されている必要があります。
      user
  
      # 他に必要な属性があればここに追加します。
      # 例: description { "My playlist description" }
    end
end
  