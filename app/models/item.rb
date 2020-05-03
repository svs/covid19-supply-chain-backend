# == Schema Information
#
# Table name: items
#
#  id         :bigint           not null, primary key
#  name       :text
#  type       :integer
#  category   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Item < ApplicationRecord
  TYPES = %w[flour dairy vegetables
             fruits beverages staples
             breakfast meat
             skin oral
             hair others].freeze
  self.inheritance_column = :_type_disabled
  enum type: TYPES
  has_many :availabilities

  validates_inclusion_of :category, in: %w[food toiletries others]
end
