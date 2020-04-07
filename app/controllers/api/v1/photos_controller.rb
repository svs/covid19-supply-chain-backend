module Api
  module V1
    class PhotosController < ApiController
      def create
        photo = Photo.create!(image: photo_params[:image])
        if photo
          render json: { success: true, photo_id: photo.id, photo_url: photo.image_url }
        else
          render json: { success: false, message: "Request Failed" }
        end
      end

      private

      def photo_params
        params.permit(:image)
      end
    end
  end
end