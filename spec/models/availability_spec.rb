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
require 'rails_helper'

RSpec.describe Availability, type: :model do
  it "validates" do
    should belong_to(:availability_report)
    should validate_presence_of :item
    should validate_numericality_of :availability
    should validate_presence_of :availability
    should validate_inclusion_of(:availability).in_array((0..3).to_a)
  end
end
