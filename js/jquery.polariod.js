(function($){
	$.fn.polariod = function(options){
		var defaults = {
			polarwidth:368,
			polarheight:376,
            polarbackgroundimage:"",
			imagewidth:335,
            imageheight:275,
            fontsize:20
	    };
		var randomXToY = function(minVal,maxVal){
			var randVal = minVal+(Math.random()*(maxVal-minVal));
    		return Math.round(randVal);
		};
        var o = jQuery.extend(defaults,options);
		var zindexnr = 1;
		return this.each(function(){
			var ele = $(this);

			if (ele.parent().is('body'))
			{
				var pwidth=1280;
				var pheight=800;
			}
			else
			{
				var pwidth = ele.parent().width();
				var pheight = ele.parent().height();
			}

             var tempVal = Math.round(Math.random());
		     if(tempVal == 1) {
		 	     var rotDegrees = randomXToY(330, 360); 
		     } else {
			     var rotDegrees = randomXToY(0, 30); 
		     }

			  
		  	 ele.css({'width':o.polarwidth+'px','height':o.polarheight+'px','background':'#ffffff','border':'1px solid #787878',
				      'position':'absolute','left':o.polarwidth/3+Math.random()*(pwidth-o.polarwidth*2),'top':o.polarwidth/3+Math.random()*(pheight-2*o.polarwidth),
                      '-webkit-transform' : 'rotate('+ rotDegrees +'deg)', 
				      '-moz-transform' : 'rotate('+ rotDegrees +'deg)', 
				      '-o-transform' : 'rotate('+ rotDegrees +'deg)', 
			          'tranform' : 'rotate('+ rotDegrees +'deg)'
			         });
			 if (o.polarbackgroundimage!="")
			 {
				var  bgimage = {"background-image":"url("+o.polarbackgroundimage+")"};
				ele.css(bgimage);
			 }	
			 
			  var marginleft = (o.polarwidth-o.imagewidth)/2;

			  ele.find("img").css({'width':o.imagewidth+'px','height':o.imageheight+'px','margin':'25px 0 0 '+marginleft+'px'});
		      ele.find("p").css({"text-align":"center","font-family":"Georgia,serif","font-size":o.fontsize+'px',"color":"#2E2E2E","margin-top":"15px" });
			
			  var dragging = false;
	
			  ele.mouseup(function(e){
			      if(!dragging) {
				
				  zindexnr++;
				  var cssObj = { 'z-index' : zindexnr,
				                 'transform' : 'rotate(0deg)',	 
				                 '-webkit-transform' : 'rotate(0deg)',
			                     '-moz-transform' : 'rotate(0deg)',
			                     '-o-transform' : 'rotate(0deg)'};
				$(this).css(cssObj);
			   }
			   });
			
               ele.draggable({
		              cursor: 'crosshair',
		              start: function(event, ui) {
			          dragging = true;
			          zindexnr++;
			          var cssObj = { 'box-shadow' : '#888 5px 10px 10px',
			 	                      '-webkit-box-shadow' : '#888 5px 10px 10px',
				                      'margin-left' : '-10px',
				                      'margin-top' : '-10px',
				                      'z-index' : zindexnr };
			          $(this).css(cssObj);
		             },
		       stop: function(event, ui) {
			         var tempVal = Math.round(Math.random());
			         if(tempVal == 1) {
				     var rotDegrees = randomXToY(330, 360);
			        } else {
				        var rotDegrees = randomXToY(0, 30);
			         }
			        var cssObj = { 'box-shadow' : '',
				                   '-webkit-box-shadow' : '',
									'transform' : 'rotate('+ rotDegrees +'deg)',
									'-webkit-transform' : 'rotate('+ rotDegrees +'deg)',
									'-moz-transform' : 'rotate('+ rotDegrees +'deg)',
									'-o-transform' : 'rotate('+ rotDegrees +'deg)',
									'margin-left' : '0px',
									'margin-top' : '0px' };
					$(this).css(cssObj);
					dragging = false;
					}
				});
			
		
		});
	};
})(jQuery)
