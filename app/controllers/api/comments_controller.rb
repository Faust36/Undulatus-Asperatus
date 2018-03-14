class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in, only:[:create, :destroy]

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment && @comment.author_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Unable to Delete Comment"], status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :track_id)
  end
end
