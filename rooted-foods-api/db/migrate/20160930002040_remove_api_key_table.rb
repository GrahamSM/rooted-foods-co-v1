class RemoveApiKeyTable < ActiveRecord::Migration
  def change
    drop_table :api_keys
  end
end
