module Api
  module V1
    class ItemsController < ApiController
      def index
        Item.all
      end
    end
  end
end
