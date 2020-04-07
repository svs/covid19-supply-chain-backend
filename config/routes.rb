Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  root 'static#index'
<<<<<<< Updated upstream
=======

  namespace :api do
    namespace :v1 do
      post 'photos', to: 'photos#create'
      post 'reports', to: 'availability_reports#create'
      resources :items, only: [:index], format: :json
    end
  end

>>>>>>> Stashed changes
  get '/users/check_for_sign_in', to: 'user#check_for_user'
  get '/login', to: 'pages#index'
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
<<<<<<< Updated upstream
  post '/api/availability_reports', to: 'availability_reports#create'
=======

  # post '/api/availability_reports', to: 'availability_reports#create'
>>>>>>> Stashed changes

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
