# == Schema Information
#
# Table name: availabilities
#
#  id                     :bigint           not null, primary key
#  availability_report_id :integer
#  item                   :text
#  availability           :integer
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
class Availability < ApplicationRecord

  belongs_to :availability_report

  validates_presence_of :item
  validates_presence_of :availability
  validates_numericality_of :availability
  validates_inclusion_of :availability, in: [0,1,2,3]

end
