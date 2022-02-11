//このファイルは、他のファイルとともにWebpackによって自動的にコンパイルされます
//このディレクトリに存在します。実際のアプリケーションロジックをに配置することをお勧めします
// app / javascript内の関連する構造であり、これらのパックファイルのみを参照に使用します
//そのコードなので、コンパイルされます。

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//コメントを外して../imagesの下のすべての静止画像を出力フォルダと参照にコピーします
//ビュー内のimage_pack_tagヘルパーを使用してそれらを表示します（例：<％= image_pack_tag'rails.png '％>）
//または以下の `imagePath`JavaScriptヘルパー。
//
// const images = require.context（ '../ images'、true）
// const imagePath =（name）=> images（name、true）

import 'bootstrap'
import '../src/application.scss'
import '@fortawesome/fontawesome-free/js/all'