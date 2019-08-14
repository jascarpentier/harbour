class RemoveStayIdFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :stay_id, :integer
  end
end
