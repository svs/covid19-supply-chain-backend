class CreateAvailabilityReports < ActiveRecord::Migration[6.0]
  def change
    create_table :availability_reports do |t|
      t.integer :user_id
      t.jsonb :location
      t.float :lat
      t.float :lon
      t.integer :status
      t.timestamps
    end
  end
end
