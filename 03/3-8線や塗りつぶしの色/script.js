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

      // 三角形 
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(450, 30);
        ctx.lineTo(30, 150);
        ctx.closePath();
      // 塗り潰し色を設定
        ctx.fillStyle = 'red';
        ctx.fill();

      // 四角形
        ctx.beginPath();
        ctx.moveTo(30, 180);
        ctx.lineTo(230, 180);
        ctx.lineTo(230, 380);
        ctx.lineTo(30, 380);
        ctx.closePath();
      // 輪郭線の色を設定
      ctx.strokeStyle = 'green';
      ctx.stroke();

      // 五角形
        ctx.beginPath();
        ctx.moveTo(450, 70);
        ctx.lineTo(280, 195);
        ctx.lineTo(365, 340);
        ctx.lineTo(535, 340);
        ctx.lineTo(620, 195);
        ctx.closePath();
        // 塗り潰し色を設定
        ctx.fillStyle = 'blue';
        ctx.fill();
    }


