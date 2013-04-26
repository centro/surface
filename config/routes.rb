SurfaceRails::Application.routes.draw do

  mount Kss::Engine => '/styleguide' if Rails.env.development?

  root :to => 'kss/home#index'

end
