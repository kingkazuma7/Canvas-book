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

      // 四角形
        ctx.beginPath();
        ctx.moveTo(30, 100);
        ctx.lineTo(230, 100);
        ctx.lineTo(230, 100);
        ctx.lineTo(230, 300);
        ctx.lineTo(30, 300);
        ctx.closePath();

      // 五角形
        ctx.moveTo(430, 50);
        ctx.lineTo(260, 175);
        ctx.lineTo(345, 320);
        ctx.lineTo(515, 320);
        ctx.lineTo(600, 175);
        ctx.closePath();

      // パスを塗りつぶす
      ctx.fill();
    }


