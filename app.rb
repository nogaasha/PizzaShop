#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"
class Product < ActiveRecord::Base
end	
class Shipment < ActiveRecord::Base
end
get '/' do
	@products = Product.all
	erb :index			
end

get '/about' do
	erb :about			
end
 
post '/cart' do
 @orders_input = params[:orderstring]
  @items = parse_orders_input @orders_input

    @items.each do |item|
    # id, cnt
    item[0] = Product.find(item[0])
  end
   erb :cart
end	

post '/place_order' do
  @shipment = Shipment.new params[:order]

  if @shipment.save
    erb :order_placed
  else
    @error = @shipment.errors.full_messages.first
    erb "Error"
  end
end

def parse_orders_input orders_input
  s1 = orders_input.split(/,/)

  arr = []

  s1.each do |x|
    s2 = x.split(/\=/)

    s3 = s2[0].split(/_/)

    id = s3[1]
    cnt = s2[1]

    arr2 = [id, cnt]

    arr.push arr2
  end

  return arr
end