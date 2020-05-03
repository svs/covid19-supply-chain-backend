class AvailabilityReportCreator

  def initialize(params)
    @params = params
  end

  def create
    AvailabilityReport.new.tap do |ar|
      ar.store_name = params[:store_name]
      ar.lat = params[:lat]
      ar.lon = params[:lon]
      ar.photos = build_photos
      ar.availabilities_attributes = params[:availabilities_attributes]
      ar.user_id = params[:user_id]
    end
  end

  private

  attr_reader :params

  def build_photos
    result = []
    if params[:photos].present?
      params[:photos].each do |photo_id|
        result << Photo.find(photo_id)
      end
    end
    result
  end

end
