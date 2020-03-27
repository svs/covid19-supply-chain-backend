Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  root 'static#index'
  get '/login', to: 'pages#index'
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  post '/api/availability_reports', to: 'availability_reports#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
