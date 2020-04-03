class AddStoreNameToAvailabilityReports < ActiveRecord::Migration[6.0]
  def change
    add_column :availability_reports, :store_name, :text
  end
end
