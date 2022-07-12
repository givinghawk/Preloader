// YOU MUST HAVE JQUERY ON YOUR WEBSITE FOR THIS TO WORK (<script src="https://code.jquery.com/jquery-1.6.4.js">)
var wy5r98fsdh = `<style>.loader{position:fixed;z-index:99;top:0;left:0;width:100%;height:100%;background:black;display:flex;justify-content:center;align-items:center}.loader>img{width:100px}.loader.hidden{animation:fadeOut 1s;animation-fill-mode:forwards}@keyframes fadeOut{100%{opacity:0;visibility:hidden}}.thumb{height:100px;border:1px solid #000;margin:10px}</style>
<div class='loader'>
<center>
<div class='spinner-border text-success' role='status'>
</div>
<p>Hang in there whilst we load ${document.domain}...</p>
</center>
</div>
<script>window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
    });</script>`;
$(".preloader").html(wy5r98fsdh);
