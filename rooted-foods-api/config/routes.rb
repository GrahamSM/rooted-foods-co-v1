Rails.application.routes.draw do

  root :to => "sessions#login"
  get "signup", :to => "users#new"
  get "login", :to => "sessions#login"
  get "logout", :to => "sessions#logout"
  get "home", :to => "sessions#home"
  get "profile", :to => "sessions#profile"
  get "setting", :to => "sessions#setting"

  resources :locations
  resources :users
  resources :sales
  resources :products
  resources :orders
  resources :order_items
  resources :categories
  resources :bundles
  resources :api_keys

end
