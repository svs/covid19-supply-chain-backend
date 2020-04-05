class UserController < ApplicationController
  def check_for_user
    out = { isLoggedIn: user_signed_in? }
    render :json => out
  end
end
