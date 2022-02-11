Rails.application.routes.draw do
  get 'home' ,to: 'pages#home'
  get 'index' ,to: 'pages#index'
  get 'blog' ,to: 'pages#blog'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
