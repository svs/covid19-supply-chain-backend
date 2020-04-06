Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  root 'static#index'
  get '/users/check_for_sign_in', to: 'user#check_for_user'
  get '/login', to: 'pages#index'
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  namespace :api do
    namespace :v1 do
      post 'photos', to: 'photos#create'
      post 'reports', to: 'availability_reports#create'
    end
  end
  # post '/api/availability_reports', to: 'availability_reports#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
