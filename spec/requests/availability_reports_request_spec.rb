require 'rails_helper'
include Devise::Test::IntegrationHelpers




RSpec.describe "AvailabilityReportsRequest", type: :request do

  let(:good_request_params) { JSON.load(File.read("./spec/fixtures/availability_reports/good_request.json")) }
  before(:all) do
  end

  context "logged in" do
    it "should create an AvailabilityReport" do
      u = create(:user)
      binding.pry
      sign_in(u)
      headers = { "ACCEPT" => "application/json" }
      post "/api/availability_reports", params: good_request_params
      #binding.pry
      #p response.status
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(response).to be_successful
    end
  end

  it "should bounce unauthenticated users" do
      headers = { "ACCEPT" => "application/json" }
      post "/api/availability_reports", params: good_request_params
      expect(response.status).to eq(302)
  end
end
