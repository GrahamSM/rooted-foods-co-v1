class CreateBundles < ActiveRecord::Migration
  def change
    create_table :bundles do |t|
      t.string :description
      t.string :image
      t.decimal :price

      t.timestamps null: false
    end
  end
end
