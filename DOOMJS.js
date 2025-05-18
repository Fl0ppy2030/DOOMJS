(async () => {
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.top = '10px';
  iframe.style.left = '10px';
  iframe.style.width = '800px';
  iframe.style.height = '600px';
  iframe.style.zIndex = 9999;
  iframe.src = 'https://js-dos.com/games/doom.exe.html';
  document.body.appendChild(iframe);
})();
