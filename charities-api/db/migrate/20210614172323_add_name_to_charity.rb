class AddNameToCharity < ActiveRecord::Migration[6.1]
  def change
    add_column :charities, :name, :string
  end
end
