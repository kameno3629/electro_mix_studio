FactoryBot.define do
    factory :sample do
      name { "Sample Name" }
      file_path { "path/to/sample.wav" }
      description { "Sample description" }
      length { 120 } # 適当なデフォルト値を設定
    end
end
  
  