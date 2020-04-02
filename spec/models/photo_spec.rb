# == Schema Information
#
# Table name: photos
#
#  id                     :bigint           not null, primary key
#  image_data             :jsonb
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  availability_report_id :bigint           not null
#
# Indexes
#
#  index_photos_on_availability_report_id  (availability_report_id)
#
# Foreign Keys
#
#  fk_rails_...  (availability_report_id => availability_reports.id)
#
require 'rails_helper'

RSpec.describe Photo, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
