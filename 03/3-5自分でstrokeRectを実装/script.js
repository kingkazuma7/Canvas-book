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

      // 四角形描画
      function myStrokeRect(x, y, width,height,ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.closePath();
        ctx.stroke();
      }

      // 3つの四角形を描く
      myStrokeRect(100, 120, 100, 100, ctx);
      myStrokeRect(200, 240, 120, 160, ctx);
      myStrokeRect(300, 50, 250, 130, ctx);
    }

