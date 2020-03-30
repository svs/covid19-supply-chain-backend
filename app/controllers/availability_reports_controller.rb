class AvailabilityReportsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json
  def create
    if @report = AvailabilityReportCreator.new(current_user,create_params).create
      render json: @report
    else
    end
  end

  def create_params
    params.permit(:lat, :lon, availabilities_attributes: [:item, :availability])
  end
end
