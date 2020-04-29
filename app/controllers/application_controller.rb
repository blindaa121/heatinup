class ApplicationController < ActionController::Base
    helper_method :current_user, :require_signed_in, :signed_in?
    skip_before_action :verify_authenticity_token

    def current_user 
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def sign_in!(user)
        session[:session_token] = user.reset_session_token!
        current_user = user 
    end 

    def sign_out!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end 

    def signed_in?
        !!current_user
    end 

    private 

    def require_logged_in
        unless current_user
        render json: { base: ['invalid credentials'] }, status: 401
        end
    end
end
