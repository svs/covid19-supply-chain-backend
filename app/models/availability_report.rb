# == Schema Information
#
# Table name: availability_reports
#
#  id         :bigint           not null, primary key
#  lat        :float
#  location   :jsonb
#  lon        :float
#  status     :integer
#  store_name :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class AvailabilityReport < ApplicationRecord

  validates_presence_of :lat
  validates_presence_of :lon

  validates_numericality_of :lat, allow_nil: true
  validates_numericality_of :lon, allow_nil: true

  belongs_to :user
  has_many :availabilities
  validates_presence_of :availabilities
  accepts_nested_attributes_for :availabilities

  has_many :photos

end
