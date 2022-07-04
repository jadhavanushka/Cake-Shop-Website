
        function slideshow(){
            var x = document.getElementById('check-class');
            if(x.style.display === "none"){
                x.style.display="block";
            }else{
                x.style.display="none";
            }
        }
    

       
        Y.use('squarespace-ui-base', function(Y) {
              Y.one("h1.logo").plug(Y.Squarespace.TextShrink, {
                parentEl: Y.one('#header'),
                minFontSize: 16
              });
              if (Y.one('p.site-tagline')){
                  Y.one("p.site-tagline").plug(Y.Squarespace.TextShrink, {
                    parentEl: Y.one('#header'),
                    minFontSize: 12
                  });
              }
        });
     
