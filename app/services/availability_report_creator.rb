class AvailabilityReportCreator

  def initialize(user, params)
    @user = user
    @params = params
  end

  def create
    AvailabilityReport.create(params.merge(user_id: user.id))
  end

  private

  attr_reader :user, :params


end
