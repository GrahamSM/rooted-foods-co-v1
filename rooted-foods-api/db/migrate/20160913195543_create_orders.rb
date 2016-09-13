class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.boolean :recurring
      t.boolean :active
      t.integer :transaction_id
      t.boolean :completed

      t.timestamps null: false
    end
  end
end
