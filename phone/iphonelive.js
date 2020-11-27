function mycheck() {
  if(screen.colorDepth<=24)return;
  var video = document.getElementById('video');
  if(video.canPlayType('application/vnd.apple.mpegURL')!='maybe')return;
  var m3u8date = '#EXTM3U\r\n#EXT-X-VERSION:3\r\n#EXT-X-STREAM-INF:BANDWIDTH=607794,CODECS="avc1.4d401e,mp4a.40.2",RESOLUTION=640x360\r\nhttps://www.radiantmediaplayer.com/media/rmp-segment/bbb-abr-aes/chunklist_b607794.m3u8\r\n#EXT-X-STREAM-INF:BANDWIDTH=1544757,CODECS="avc1.64001f,mp4a.40.2",RESOLUTION=960x540\r\nhttps://www.radiantmediaplayer.com/media/rmp-segment/bbb-abr-aes/chunklist_b1544757.m3u8\r\n#EXT-X-STREAM-INF:BANDWIDTH=2189923,CODECS="avc1.4d401f,mp4a.40.2",RESOLUTION=1280x720\r\nhttps://www.radiantmediaplayer.com/media/rmp-segment/bbb-abr-aes/chunklist_b2189923.m3u8';
  var blobhls = new Blob(
    [ m3u8date ],
    {
      type : 'application/vnd.apple.mpegurl'
    }
  );
  const urlhls = URL.createObjectURL(blobhls);
  
  var source = document.createElement('source');
  source.setAttribute('src', urlhls);
  source.setAttribute('type', 'application/x-mpegURL');
  video.appendChild(source);
  video.onloadedmetadata = function() {
    //alert("Metadata for video loaded");
    URL.revokeObjectURL(urlhls);
  };
  video.play();
}
mycheck();