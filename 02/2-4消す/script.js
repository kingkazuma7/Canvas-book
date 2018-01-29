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

      // 赤い線で描画
      ctx.strokeStyle = 'red';
      ctx.strokeRect(100, 50, 120, 60);

      // 青で塗りつぶして描画
      ctx.fillStyle = '#0000ff';
      ctx.fillRect(250, 100, 75, 75);

      ctx.clearRect(160, 70, 150, 70);
      // 全面クリア
      clearRect(0, 0, canvas.width, canvas.height);

    }
