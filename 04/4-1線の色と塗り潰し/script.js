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

      // 直線
      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(300, 380);
      // 線の色を設定
      ctx.strokeStyle = 'red';
      ctx.stroke();

      // 三角形
      ctx.beginPath();
      ctx.moveTo(450, 100);
      ctx.lineTo(300, 330);
      ctx.lineTo(600, 330);
      // 塗り潰し色を設定
      ctx.fillStyle = '#f0f';
      ctx.fill();
    }
