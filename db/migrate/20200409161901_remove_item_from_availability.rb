class RemoveItemFromAvailability < ActiveRecord::Migration[6.0]
  def change
    remove_column :availabilities, :item
  end
end
