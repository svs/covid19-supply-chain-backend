# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Item.destroy_all

essentials_list = {
  food: {
    flour: %w[atta besan maida],
    dairy: %w[milk butter dahi cheese],
    vegetables: %w[onions potatoes tomatoes
                   capsicum cauliflower cabbage
                   ladyfinger gourd lemon],
    fruits: %w[apple oranges grapes banana],
    beverages: %w[tea coffee soft-drinks],
    staples: %w[salt sugar oil spices rice],
    breakfast: %w[eggs bread poha suji],
    meat: %w[chicken mutton fish],
    others: %w[frozen-foods]
  },
  toiletries: {
    skin: %w[soap moisturizer facewash bodywash],
    oral: %w[toothpaste toothbrush mouthwash dental-floss],
    hair: %w[shampoo conditioner oil],
    others: %w[sanitary-products toilet-paper]
  }
}

def create_item(obj, parent = nil, grandparent = nil)
  if obj.is_a? Hash
    obj.each do |k, v|
      create_item(v, k, parent)
    end
  elsif obj.is_a? Array
    obj.each do |val|
      Item.create!(name: val, type: parent, category: grandparent.to_s) rescue byebug
    end
  end
end

create_item(essentials_list)


