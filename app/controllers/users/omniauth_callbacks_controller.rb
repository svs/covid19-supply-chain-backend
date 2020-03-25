class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def twitter
  end


  private
  def auth
    request.env["omniauth.auth"]
  end
end