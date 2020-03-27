# == Schema Information
#
# Table name: availability_reports
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  location   :jsonb
#  lat        :float
#  lon        :float
#  status     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class AvailabilityReport < ApplicationRecord

  validates_presence_of :lat
  validates_presence_of :lon

  validates_numericality_of :lat
  validates_numericality_of :lon

  belongs_to :user
  has_many :availabilities
  validates_presence_of :availabilities
  accepts_nested_attributes_for :availabilities

end
