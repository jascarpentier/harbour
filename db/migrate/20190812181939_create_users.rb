class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :email
      t.string :location
      t.string :hometown
      t.string :occupation
      t.string :languages
      t.string :countries_visited

      t.timestamps
    end
  end
end
