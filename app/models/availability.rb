# == Schema Information
#
# Table name: availabilities
#
#  id                     :bigint           not null, primary key
#  availability           :integer
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  availability_report_id :integer
#  item_id                :bigint           not null
#
# Indexes
#
#  index_availabilities_on_item_id  (item_id)
#
# Foreign Keys
#
#  fk_rails_...  (item_id => items.id)
#
class Availability < ApplicationRecord

  belongs_to :availability_report
  belongs_to :item
  validates_presence_of :availability
  validates_numericality_of :availability
  validates_inclusion_of :availability, in: [0,1,2,3]

end
