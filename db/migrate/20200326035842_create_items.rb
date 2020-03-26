class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.text :name
      t.integer :type
      t.text :category

      t.timestamps
    end
  end
end
