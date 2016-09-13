json.extract! order, :id, :user_id, :recurring, :active, :transaction_id, :completed, :created_at, :updated_at
json.url order_url(order, format: :json)