Rails.application.routes.draw do
  get 'edm/create', to: 'edm#create'
  get 'audio_files', to: 'audio_files#index'
end
