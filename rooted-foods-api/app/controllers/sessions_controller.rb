class SessionsController < ApplicationController


    def create
      user = User.find_by_email(params[:email])
      # If the user exists AND the password entered is correct.
      binding.pry
      if user && user.authenticate(params[:password])
        # Save the user id inside the browser cookie. This is how we keep the user
        # logged in when they navigate around our website.
        session[:user_id] = user.id
        render json: {}, status: 201;
      else
      # If user's login doesn't work, send them back to the login form.
        render json: {}, status: 422
      end
    end

    def destroy
      session[:user_id] = nil
      render json: {}, status: 200
    end

end
