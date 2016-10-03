Rails.application.routes.draw do

  root :to => "sessions#login"

  get 'users/getcurrentuser' => 'users#get_current_user'

  resources :locations
  resources :api_keys
  resources :users, only: [:new, :create, :update, :edit, :index]
  resources :orders
  resources :products, only: [:index, :show]
  resources :categories, only: [:index, :show]
  resources :bundles, only: [:index, :show]
  resources :order_items, only: [:index, :destroy]
  resource :session, only: [:create, :destroy]


end
