module Api
  module V1
    class ItemsController < ApiController
      def index
        render json: Item.all
      end
    end
  end
end
