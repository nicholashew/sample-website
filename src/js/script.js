/*
Table of Contents:
==================
jQuery Ready
	
	- 
	
Functions
	


*/





/*	=============================================================================
	jQuery Ready
	========================================================================== */
	
	$( document ).ready( function(){
		/*	--------------------------------------------------
			:: Load Google Font
			-------------------------------------------------- */
			loadGoogleFontFN();

			lineitemsEditableFN();			
	});

/*	=============================================================================
	jQuery Window Resize
	========================================================================== */
	
	$( window ).resize(function(){
		resizeEvent(function(){
			
		}, 100, '2572275020' );
	});
	
	var resizeEvent = (function(){
		var timers = {};
		return function( callback, ms, uniqueId ){
			console.log(uniqueId);
			if ( !uniqueId ){
				uniqueId = 'I_need_unique_ID';
			}
			if ( timers[uniqueId] ){
				clearTimeout( timers[uniqueId] );
			}
			timers[uniqueId] = setTimeout( callback, ms );
		};
	})();



/*	=============================================================================
	Functions
	========================================================================== */
	
	/*	--------------------------------------------------
		:: Load Google Font
		-------------------------------------------------- */
		function loadGoogleFontFN(){
			WebFontConfig = {
				google: { families: [ 'Lato:300,700:latin' ] }
			};
			(function(){
				var wf = document.createElement('script');
				wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
				wf.type = 'text/javascript';
				wf.async = 'true';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(wf, s);
			})();
		}
		
	/*	--------------------------------------------------
		:: Window Width
		-------------------------------------------------- */
		function windowWidthFN(){
			var windowWidth = $( window ).width();
			return windowWidth;
		}
		
	/*	--------------------------------------------------
		:: Window Height
		-------------------------------------------------- */
		function windowHeightFN(){
			var windowHeight = $( window ).height();
			return windowHeight;
		}
		
	/*	--------------------------------------------------
		:: Body Height
		-------------------------------------------------- */
		function bodyHeightFN(){
			var bodyHeight = $( 'body' ).height();
			return bodyHeight;
		}

	/*	--------------------------------------------------
		:: Lineitems Editable
		-------------------------------------------------- */
		function lineitemsEditableFN() {
			var container = document.querySelector('table.editable-lineitems > tbody');
			if (container) {				
				var rows = container.children;

				// forEach method from https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
				var nodeListForEach = function (array, callback, scope) {
				  for (var i = 0; i < array.length; i++) {
					callback.call(scope, i, array[i]);
				  }
				};

				var updateDataIndex = function() {
					nodeListForEach(rows, function (index, row) {
						row.querySelector('input.sequence[type=hidden]').value = index + 1;
						row.dataset.rowPosition = index + 1;
				  	});
				};

				var sortableTable = dragula([container]);

				sortableTable.on('dragend', updateDataIndex);

				//Add add new row button
				var button = document.createElement('button');
				button.className = 'btn btn-primary';
				button.innerHTML = 'Add More';

				var insertAfter = function(newElement, targetElement) {
				    // target is what you want it to go after. Look for this elements parent.
				    var parent = targetElement.parentNode;

				    // if the parents lastchild is the targetElement...
				    if (parent.lastChild == targetElement) {
				        // add the newElement after the target element.
				        parent.appendChild(newElement);
				    } else {
				        // else the target has siblings, insert the new element between the target and it's next sibling.
				        parent.insertBefore(newElement, targetElement.nextSibling);
				    }
				};

				insertAfter(button, container.parentElement);

				button.addEventListener ("click", function(e) {
					e.preventDefault();
			  		alert('todo add new row to bottom');
				});
			}			
		}
		
	/*	--------------------------------------------------
		:: Avoid `console` errors
		-------------------------------------------------- */
		(function(){
			var method;
			var noop = function (){};
			var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
			];
			var length = methods.length;
			var console = (window.console = window.console || {});
		
			while (length--){
				method = methods[length];
		
				// Only stub undefined methods.
				if (!console[method]){
					console[method] = noop;
				}
			}
		}());