json.extract! sale, :id, :amount, :refunded, :paid, :order_id, :created_at, :updated_at
json.url sale_url(sale, format: :json)