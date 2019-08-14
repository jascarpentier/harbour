class ReviewsController < ApplicationController

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
    @review = Review.new(review_params)
    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @review.destroy
  end


  private

  def review_params
    params.require(:review).permit(:comment)
  end
end