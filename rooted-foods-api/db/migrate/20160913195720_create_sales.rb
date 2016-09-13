class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.integer :amount
      t.boolean :refunded
      t.boolean :paid
      t.integer :order_id

      t.timestamps null: false
    end
  end
end
