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

      ctx.beginPath();
      ctx.moveTo(320, 50);
      ctx.lineTo(150, 175);
      ctx.lineTo(235, 320);
      ctx.lineTo(405, 320);
      ctx.lineTo(490, 175);
      ctx.closePath();

      ctx.stroke();

    }
