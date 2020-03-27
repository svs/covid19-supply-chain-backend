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
