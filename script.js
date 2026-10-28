(function(){
  var r=document.documentElement,s=localStorage.getItem('theme');
  try{if(s)r.setAttribute('data-theme',s);}catch(e){}
  var tb=document.getElementById('theme');
  if(tb)tb.onclick=function(){var d=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);var n=d?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}};
  // search on home page
  var q=document.getElementById('q');
  if(q)q.oninput=function(){var v=q.value.toLowerCase();document.querySelectorAll('.exp').forEach(function(c){c.style.display=c.textContent.toLowerCase().includes(v)?'':'none'})};
  // simple C syntax highlighting
  var re=/(\/\/.*|\/\*[\s\S]*?\*\/)|(#\w+|<\w+\.h>)|("(?:\\.|[^"\\])*")|\b(int|void|long|double|char|float|return|if|else|for|while|break|clock_t|sizeof)\b|\b(\d+)\b/g;
  document.querySelectorAll('code.lang-c').forEach(function(el){
    var t=el.textContent.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    t=t.replace(/(&lt;\w+\.h&gt;)/g,'\u0001$1\u0002');
    el.innerHTML=t.replace(/(\/\/.*)|(#\w+)|(\u0001.*?\u0002)|("(?:\\.|[^"\\])*")|\b(int|void|long|double|char|float|return|if|else|for|while|break|clock_t|sizeof)\b|\b(\d+)\b/g,function(m,a,b,c,d,e,f){
      if(a)return'<span class="c">'+a+'</span>';if(b)return'<span class="p">'+b+'</span>';
      if(c)return'<span class="s">'+c.replace(/[\u0001\u0002]/g,'')+'</span>';
      if(d)return'<span class="s">'+d+'</span>';if(e)return'<span class="k">'+e+'</span>';if(f)return'<span class="n">'+f+'</span>';return m;
    }).replace(/[\u0001\u0002]/g,'');
  });
  // copy buttons
  document.querySelectorAll('.copy').forEach(function(b){b.onclick=function(){
    var code=b.parentElement.nextElementSibling.textContent;
    (navigator.clipboard?navigator.clipboard.writeText(code):Promise.reject()).then(function(){b.textContent='Copied!'},function(){var a=document.createElement('textarea');a.value=code;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove();b.textContent='Copied!'});
    setTimeout(function(){b.textContent='Copy'},1500)}});
})();
