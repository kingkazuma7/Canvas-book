    // ロード時に描画関数(draw)を呼ぶ
    window.addEventListener('load', function() {
      draw();
    });

    function draw() {
      // canvas要素を取得
      var canvas = document.getElementById('canvas1');
      // getContextがあるか確認
      if(!canvas || !canvas.getContext) return;
      // コンテキストオブジェクトを取得
      var ctx = canvas.getContext('2d');

      // 四角形を描画
      ctx.strokeRect(100, 50, 120, 60);
      ctx.fillRect(5, 5, 20, 120);
      ctx.fillRect(200, 120, 200, 200);

    }
