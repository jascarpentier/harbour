class AddReviewsToStays < ActiveRecord::Migration[5.2]
  def change
    add_reference :stays, :reviews, foreign_key: true
  end
end
