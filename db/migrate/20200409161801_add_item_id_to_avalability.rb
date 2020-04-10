class AddItemIdToAvalability < ActiveRecord::Migration[6.0]
  def change
    add_reference :availabilities, :item, null: false, foreign_key: true
  end
end
