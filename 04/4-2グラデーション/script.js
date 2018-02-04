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

      // 始点から終点に向かう線形グラデーションを作成
      var grad = ctx.createLinearGradient(x1, y1, x2, y2);

      var grad = ctx.createRadialGradient(x1, y1, r1, x2, y2);

      // グラデーションの色を設定
      // 位置に色を設定
      grad.addColorStop(offset, color);

      // 直線
      ctx.beginPath();
      ctx.moveTo(10, 30);
      ctx.lineTo(630, 30);

      // 赤→青に向かうグラデーション
      linearGrad1.addColorStop(0, 'red');
      linearGrad1.addColorStop(1, 'blue');
      
    }
