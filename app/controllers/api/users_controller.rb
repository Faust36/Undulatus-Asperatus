class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, except: [:create, :show]

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy
    @user = User.find_by(id: current_user.id)
    if @user
      @user.destroy
      render 'api/tracks'
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :city, :country, :bio, :first_name, :last_name)
  end


end
