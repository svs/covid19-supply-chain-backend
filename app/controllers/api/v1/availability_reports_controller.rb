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
        params.require(:availability_report)
              .permit(:store_name,
                      :lat,
                      # :user_id,
                      :lon,
                      photos: [],
                      availabilities_attributes: %i[item_id availability])
              .merge(:user_id => current_user.id)
      end
    end
  end
end
