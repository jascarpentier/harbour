class StaysController < ApplicationController

  def index
    @stays = Stay.all
    render json: @stays, include: :reviews
  end

  def show 
    @stay = Stay.find(params[:id])
    render json: @stay, include: :reviews
  end
end