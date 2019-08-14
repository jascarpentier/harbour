class AddStayIdToReviews < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :stay, foreign_key: true
  end
end
