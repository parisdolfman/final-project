class CreateCharities < ActiveRecord::Migration[6.1]
  def change
    create_table :charities do |t|
      t.integer :user_id
      t.string :image
      t.integer :category_id

      t.timestamps
    end
  end
end
