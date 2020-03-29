require 'rails_helper'

RSpec.describe AvailabilityReport, type: :model do
  let(:good_params) { JSON.load(File.read("./spec/fixtures/availability_reports/good_request.json"))}
  let(:u1) { FactoryBot.build(:user).tap{|u| u.save}}

  it "validations" do
    should validate_presence_of(:lat)
    should validate_presence_of(:lon)

    should validate_numericality_of(:lat)
    should validate_numericality_of(:lon)

    should belong_to(:user)
    should have_many(:availabilities)
    should accept_nested_attributes_for(:availabilities)
    should validate_presence_of(:availabilities)

  end

  it "should create an availability report" do
    ar = AvailabilityReportCreator.new(u1, good_params).create
    expect(ar).to be_a(AvailabilityReport)
    expect(ar).to be_valid
  end
end
