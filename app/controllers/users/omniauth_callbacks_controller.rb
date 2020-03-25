class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def twitter
    @user = User.from_omniauth(auth)
    sign_in_and_redirect @user, event: :authentication
    set_flash_message(:notice, :success, kind: "Twitter") if is_navigational_format?
  end

  def failure
    redirect_to root_path
  end


  private
  def auth
    request.env["omniauth.auth"]
  end
end