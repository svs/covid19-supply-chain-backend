require 'rails_helper'

RSpec.describe "AvailabilityReportsRequest", type: :request do
  let(:good_request_params) { JSON.load(File.read("./spec/fixtures/availability_reports/good_request.json")) }

  context "logged in" do
    before(:each) do
      user = create(:user)
      sign_in user
    end

    it "should create an AvailabilityReport" do
      headers = { "ACCEPT" => "application/json" }
      post "/api/availability_reports", params: good_request_params, headers: headers
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
