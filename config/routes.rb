# config/routes.rb

Rails.application.routes.draw do

  # Home
  root 'home#index'
  get '/home', to: 'home#index'
  get '/', to: 'home#index'

  # Sessions
  get 'login', to: 'sessions#new', as: :login

  # Users
  get 'signup', to: 'users#new', as: :signup
  resources :users, only: [:show, :edit, :update]

  # Main
  get '/main', to: 'main#index', as: 'main'

  # Playlists
  resources :playlists, only: [:index, :edit]

  # Inquiries
  resources :inquiries, only: [:new, :create] do
    collection do
      get 'confirm'
      get 'complete'
      get 'thanks'
    end
  end

  # Mypage
  get '/mypage', to: 'mypage#index', as: 'mypage'

  # Static pages
  get 'privacy_policy', to: 'policies#privacy_policy', as: :privacy_policy
  get 'terms', to: 'policies#terms', as: :terms

  
end
