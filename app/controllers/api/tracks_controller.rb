class Api::TracksController < ApplicationController
  before_action :ensure_logged_in, only:[:create, :destroy, :update]

  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    @track.artist_id = current_user.id
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track && @track.artist_id == current_user.id
      @track.destroy
      render :show
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :genre, :artwork, :song)
  end
end
