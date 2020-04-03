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
  self.inheritance_column = :_type_disabled
end
