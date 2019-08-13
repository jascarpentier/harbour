class CreateStays < ActiveRecord::Migration[5.2]
  def change
    create_table :stays do |t|
      t.string :name
      t.string :location
      t.string :type
      t.string :description
      t.string :url_to_image
      t.integer :price

      t.timestamps
    end
  end
end
