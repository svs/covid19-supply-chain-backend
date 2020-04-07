module Api
  module V1
    class AvailabilityReportsController < ApiController
      before_action :authenticate_user!

      def create
        @report = AvailabilityReportCreator.new(create_params).create
        if @report.save
          render json: { success: true, report_id: @report.id }
        else
          render json: { success: false,
                         message: @report.errors.full_messages.join(', ')}
        end
      end

      def create_params
        params.permit(:store_name,
                      :lat,
                      :lon,
                      photos: [],
                      availabilities_attributes: %i[item availability])
              .merge(:user => current_user)
      end
    end
  end
end
