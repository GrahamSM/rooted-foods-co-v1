class CreateApiKeys < ActiveRecord::Migration
  def change
    create_table :api_keys do |t|
      t.string :access_token
      t.datetime :expires_at
      t.datetime :last_access
      t.integer :user_id
      t.datetime :created_at
      t.datetime :updated_at
      t.timestamps null: false
    end
  end
end
