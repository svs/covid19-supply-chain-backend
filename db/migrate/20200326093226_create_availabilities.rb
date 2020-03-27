class CreateAvailabilities < ActiveRecord::Migration[6.0]
  def change
    create_table :availabilities do |t|
      t.integer :availability_report_id
      t.text :item
      t.integer :availability

      t.timestamps
    end
  end
end
