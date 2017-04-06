

window.onload = () =>{
  const canvas =document.getElementById('canvas2d');
  /**
   * @type {CanvasRenderingContext2D}
   */
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 4;
  ctx.fillStyle = '#ff00ff';
  ctx.ellipse(62,62,60,60,0,0,360,false);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};