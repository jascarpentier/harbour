class AddStayidToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :stay_id, :integer
  end
end
