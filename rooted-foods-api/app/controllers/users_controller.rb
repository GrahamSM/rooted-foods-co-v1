class UsersController < ApplicationController
  skip_before_action :ensure_authenticated_user, :only => [:create]


  def new
    @user = User.new
    render nothing: true
  end

  def create
    if current_user
      render json: {errors: "You are currently logged in!"}, status: 401
    else
      user = User.create(username: params[:username], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])
      if user.save
        session[:user_id] = user.id
        render json: user.to_json
      else
        render json: {errors: user.errors.messages}, status: 422
      end
    end
  end

  def update
    user = current_user
    if (user)
      user.update!(user_params)
    end
    render json: {}, status: 200
  end



    protected

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
  end
