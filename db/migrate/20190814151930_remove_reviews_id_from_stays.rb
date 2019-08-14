class RemoveReviewsIdFromStays < ActiveRecord::Migration[5.2]
  def change
    remove_column :stays, :reviews_id, :bigint
  end
end
