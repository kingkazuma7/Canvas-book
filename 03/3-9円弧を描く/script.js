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

      // 赤の円弧 
      ctx.beginPath();
      // 0度から360度の円弧＝円
      ctx.arc(320, 130, 120, 0, 360 * Math.PI/180, false);
      ctx.strokeStyle = 'red';
      ctx.stroke();

      // 緑の円弧
      ctx.beginPath();
      // 0度から180度までの円弧
      ctx.arc(150, 270, 120, 0, 180 * Math.PI/180, false);
      ctx.fillStyle = 'red';
      ctx.fill();

      // 青の円弧
      ctx.beginPath();
      // 30度から210度までの円弧
      ctx.arc(490, 270, 120, 30 * Math.PI/180, 210 * Math.PI/180, false);
      ctx.fillStyle = 'blue';
      ctx.fill();
    }


