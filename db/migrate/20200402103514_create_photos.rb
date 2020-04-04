class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.references :availability_report, null: true, foreign_key: true
      t.jsonb :image_data

      t.timestamps
    end
  end
end
