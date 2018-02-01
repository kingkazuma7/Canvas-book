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

      // ctx.beginPath();
      // ctx.moveTo(100, 100);
      // ctx.lineTo(250, 200);
      // ctx.lineTo(250, 350);
      // ctx.lineTo(400, 350);
      // ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(150, 200);

      ctx.moveTo(200, 50);
      ctx.lineTo(200, 200);
      ctx.lineTo(300, 200);

      ctx.moveTo(450, 50);
      ctx.lineTo(350, 200);

      ctx.stroke();
    }
