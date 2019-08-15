class ReviewsController < ApplicationController
  before_action :authorize_request, only: :create


  def index 
    @stay = Stay.find(params[:stay_id])
    @reviews = Review.where(stay_id: @stay.id)
    
    render json: @reviews
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def create
    @stay = Stay.find(params[:stay_id])
    @review = Review.new(review_params)
    @review.user = @current_user
    @review.stay = @stay
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end


  private

  def review_params
    params.require(:review).permit(:comment)
  end
end