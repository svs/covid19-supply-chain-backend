module Api
  module V1
    class AvailabilityReportsController < ApiController
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
                      :lon,
                      :user_id,
                      photos: [],
                      availabilities_attributes: %i[item availability])
      end
    end
  end
end
