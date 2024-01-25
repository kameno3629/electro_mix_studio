Rails.application.routes.draw do
  root 'home#index' # HomeControllerのindexアクションが存在することを確認
  resources :audio_files, only: [:new, :create]
  resources :playlists
  resources :users, only: %i[new create show]
  resources :samples, only: %i[index show create destroy]
  resources :tracks
  # その他のルートが必要な場合はここに追加
end
