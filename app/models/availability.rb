class Availability < ApplicationRecord

  belongs_to :availability_report

  validates_presence_of :item
  validates_presence_of :availability
  validates_numericality_of :availability
  validates_inclusion_of :availability, in: [0,1,2,3]

end
