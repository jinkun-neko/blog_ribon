require 'rails_helper'

RSpec.describe "Pages", type: :request do
  describe "GET /pages" do
    it "GET /index" do
      get index_path
      expect(response).to have_http_status(200)
    end
    it "GET /home" do
      get home_path
      expect(response).to have_http_status(200)
    end
    it "GET /blog" do
      get blog_path
      expect(response).to have_http_status(200)
    end
  end
end
