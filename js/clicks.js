define([
	"dojo/_base/declare", "esri/tasks/query", "esri/tasks/QueryTask"
],
function ( declare, Query, QueryTask ) {
        "use strict";

        return declare(null, {
			eventListeners: function(t){
				var clickCnt = 0;
				// Flood frequency, HUC, and Management Action clicks
				$('#' + t.id + 'top-controls input').on('click',function(c){
					t.esriapi.clearGraphics(t);
					// Find checked inputs and record values
					$('#' + t.id + 'top-controls input').each(function(i,v){
						if (v.checked){
							var rname = $(v).attr("name")
							t.obj[rname] = v.value;
							if (rname == "huc"){
								t.ws = $(v).prop("id").split("-").pop()
							}
						}
					})
					t.fe = t.ws + t.obj.mngmtAction + t.obj.floodFreq;
					t.obj.hucLayer = t.obj.huc
					// Update range slider min and max values 
					var slen = $('#' + t.id + 'mng-act-wrap .slider').length;
					t.ord = ""
					$("#" + t.id + "CPI-head").show();
					$.each($('#' + t.id + 'mng-act-wrap .slider'),function(i,v){
						if (slen == i + 1){
							t.ord = "last";
						}
						var ben  = v.id.split("-").pop();
						var okeys = Object.keys(t.sliderObj[t.fe]);
						$.each(okeys,function(i1,v1){
							if (ben == v1){
								if (t.sliderObj[t.fe][v1].vis){
									$("#" + v.id).parent().parent().parent().parent().show();
									var min = t.sliderObj[t.fe][v1].min;
									var max = t.sliderObj[t.fe][v1].max;
									$("#" + v.id).slider( "option", "min", min );
									$("#" + v.id).slider( "option", "max", max );
									var options = $("#" + v.id).slider( 'option' );
									var val1 = options.min;
									var val2 = options.max;
									if (t.sliderObj[t.fe][v1].values.length > 0){
										val1 = t.sliderObj[t.fe][v1].values[0];
										val2 = t.sliderObj[t.fe][v1].values[1];
									}
									$("#" + v.id).slider( 'option', 'values', [ val1, val2 ] );
								}else{
									$("#" + v.id).parent().parent().parent().parent().hide();
									var options = $("#" + v.id).slider( 'option' );
									$("#" + v.id).slider( 'option', 'values', [ options.min, options.max ] );
									if (v1 == "CPI"){
										$("#" + t.id + "CPI-head").hide();
									}
								}	
							}
						})
					})	
					// Set definition expressions for visible and enabled radion buttons
					$.each( $('.umr-radio-indent input'), function(i,v){
						var ben = v.name
						var val = v.name.value;
						var dis = v.disabled;
						if (t.radioObj[t.fe][ben].vis === true){
							$(v).parent().parent().parent().parent().show()
						}else{
							$(v).parent().parent().parent().parent().hide()
							$(v).prop("disabled", true)
							if ( $("#" + t.id + t.radioObj[t.fe][ben].cbid).prop("checked") ){
								$("#" + t.id + t.radioObj[t.fe][ben].cbid).trigger("click")
							}
						}
					});	
					// Update info text
					$.each($(".cntrlWrap"),function(i,v){	
						var obkey = v.id.split("-").pop()
						if (t.sliderObj[t.fe][obkey]){
							if (t.sliderObj[t.fe][obkey].info){
								if ( $(v).find(".feInfoTextWrap").is(":visible") ){
									$(v).find(".feInfoWrap").hide();
								}else{
									$(v).find(".feInfoWrap").show()
								}
								$(v).find(".feInfoText").html(t.sliderObj[t.fe][obkey].info)
							}else{
								$(v).find(".feInfoWrap").hide()
							}
						}	
						if (t.radioObj[t.fe][obkey]){
							if (t.radioObj[t.fe][obkey].info){
								$(v).find(".feInfoWrap").show()
								$(v).find(".feInfoText").html(t.radioObj[t.fe][obkey].info)
							}else{
								$(v).find(".feInfoWrap").hide()
							}	
						}
					});
					// Update watershed visibilty
					t.obj.visibleLayers = [];
					t.obj.visibleLayers.push(t.obj.hucLayer)
					t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
				})
				// Checkboxes for sliders
				$('#' + t.id + 'umr-wrap .-slCb').on('click',function(c){
					if (c.target.checked == true){
						$('#' + c.target.id).parent().parent().parent().find('.umr-slider-label').removeClass("label-off");
						$('#' + c.target.id).parent().parent().parent().find('.rnum').removeClass("label-off");
						var sl = $('#' + c.target.id).parent().parent().parent().find('.slider')[0].id 
						$('#' + sl).slider( "option", "disabled", false );
						var values = $('#' + sl).slider("option", "values");
						$('#' + sl).slider('values', values);
					}
					if (c.target.checked == false){
						$('#' + c.target.id).parent().parent().parent().find('.umr-slider-label').addClass("label-off");
						$('#' + c.target.id).parent().parent().parent().find('.rnum').addClass("label-off");
						var sl = $('#' + c.target.id).parent().parent().parent().find('.slider')[0].id 
						$('#' + sl).slider( "option", "disabled", true );
						var ben  = sl.split("-").pop();
						t[ben] = "";
						t.clicks.layerDefs(t);
					}	
					t.clicks.cbChecker(t);	
				})
				// Checkboxes for radio buttons
				$('#' + t.id + 'umr-wrap .rb_cb').on('click',function(c){
					if (c.target.checked == true){
						$.each($('#' + c.target.id).parent().parent().next().find('input'),function(i,v){
							$(v).attr('disabled', false)
							if (v.checked == true){
								$(v).trigger('click')
							}
						})
					}
					if (c.target.checked == false){
						var ben = $('#' + c.target.id).parent().parent().next().find('input')[0].name;
						t[ben] = "";
						t.clicks.layerDefs(t);
						$.each($('#' + c.target.id).parent().parent().next().find('input'),function(i,v){
							$(v).attr('disabled', true)		
						})
					}
					t.clicks.cbChecker(t);	
				});	
				// Radio button clicks
				$('.umr-radio-indent input').on('click',function(c){
					var ben = c.target.name;
					var field = c.target.name + "_" + t.obj.mngmtAction + t.obj.floodFreq;
					if (t.radioObj[t.fe][ben].shfld){
						field = ben;
					}
					var val = c.target.value;
					t[ben] = "( " + field + " = " + val + " )";
					if (val == 1 && ben == "TNC"){
						t[ben] = "( " + field + " > 0 )";
					}
					t.clicks.layerDefs(t);
				})
				// Info icon clicks
				$('#' + t.id + "mng-act-wrap .feInfo").click(function(c) {
					var e = c.currentTarget;
					$(".feInfoTextWrap").hide();
					$(".feInfoWrap").show();
					if ( $(e).hasClass('feInfoOpen') ){
						$(e).parent().parent().find(".feInfoTextWrap").show();
					}
					if ( $(e).hasClass('feInfoClose') ){
						$(e).parent().parent().find(".feInfoWrap").show();
					}
					$(e).parent().hide();
				});
				// Set up range slider
				$('#' + t.id + 'mng-act-wrap .slider').slider({range:true, min:0, max:2400, values:[0,2400], disabled:true, 
					change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
					slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
				})
				// filter section chevron clicks
				$('#' + t.id + 'mng-act-wrap .chev-oc').click(function(c){
					if ( $(c.currentTarget).hasClass('chev-o') ){
						$(c.currentTarget).parent().find('.chev-o').hide();
						$(c.currentTarget).parent().find('.chev-c').css("display","inline-block");
						$(c.currentTarget).parent().next().slideUp();
					} 
					if ( $(c.currentTarget).hasClass('chev-c') ){
						$(c.currentTarget).parent().find('.chev-c').hide();
						$(c.currentTarget).parent().find('.chev-o').css("display","inline-block");
						$(c.currentTarget).parent().next().slideDown();
					}
				})
				// reset filters click
				$(`#${t.id}resetFilters`).click(function(c){
					// reset all slider values in t.sliderObj to empty arrays
					$.each(t.sliderObj,function(i,v){
						$.each(v,function(i1,v1){
							if (v1.values){
								v1.values = [];
							}
						})
					})
					// reclick first checked item in top menu - this resets the slider values
					$.each($('#' + t.id + 'top-controls input'),function(i,v){
						if (v.checked){
							$('#' + v.id).trigger("click");
							return false;
						}
					})
					// uncheck slider checkboxes
					$('#' + t.id + 'umr-wrap .-slCb').each(function(i,v){
						if (v.checked){
							$(v).trigger('click');
						}
					})
					// set radio buttons to first input
					$('.umr-radio-indent').each(function(i,v){
						var ipt = $(v).find("input")[0];
						$(ipt).prop("checked",true);
					})
					// uncheck radio checkboxes
					$(`#${t.id}umr-wrap .rb_cb`).each(function(i,v){
						if (v.checked){
							$(v).trigger('click');
						}
					})
				})
				// save and share button
				$(`#${t.id}saveAndShare`).click(function(c){
					$(`#map-utils-control a`).each(function(i,v){
						if ($(v).html() == "Save &amp; Share"){
							v.click();
						}
					});
				})	
			},
			cbChecker: function(t){
				let n = 0;
				$('#' + t.id + 'umr-wrap .rb_cb').each(function(i,v){
					if (v.checked){
						n = n + 1;
					}
				})
				$(`#${t.id}umr-wrap .-slCb`).each(function(i,v){
					if (v.checked){
						n = n + 1;
					}
				})
				if (n == 0){
					$(`#${t.id}saveAndShare`).hide();
				}else{
					$(`#${t.id}saveAndShare`).show();
				}
			},
			sliderChange: function(e, ui, t){
				var ben  = e.target.id.split("-").pop()
				var us = "_";
				if (t.sliderObj[t.fe][ben].nounsc){
					us = "";
				}	
				var field = ben + us + t.obj.mngmtAction + t.obj.floodFreq;
				if (t.sliderObj[t.fe][ben].endwp){
					field = field + "P" 
				}
				if (t.sliderObj[t.fe][ben].shfld){
					field = ben;
				}	
				// slider change was mouse-driven
				if (e.originalEvent) {
					var v0 = ui.values[0]
					var v1 = ui.values[1]
					t.sliderObj[t.fe][ben].values = [v0,v1];
					if (t.sliderObj[t.fe][ben].div){
						v0 = v0/t.sliderObj[t.fe][ben].div
						v1 = v1/t.sliderObj[t.fe][ben].div
					}
					if (v1 == t.sliderObj[t.fe][ben].max && t.sliderObj[t.fe][ben].gtmax){
						t[ben] = "(" + field + " >= " + v0 + ")";	
					}else{
						t[ben] = "(" + field + " >= " + v0 + " AND " + field + " <= " + v1 + ")";	
					}
					t.clicks.layerDefs(t);
				}
				//slider change was programmatic
				else{					
					var dis = $('#' + e.target.id).slider("option", "disabled");
					var vis = $('#' + e.target.id).is(":visible")
					if (dis === true){
						t[ben] = "";	
					}else{
						if (vis){
							var v0 = ui.values[0]
							var v1 = ui.values[1]
							t.sliderObj[t.fe][ben].values = [v0,v1];
							if (t.sliderObj[t.fe][ben].div){
								v0 = v0/t.sliderObj[t.fe][ben].div
								v1 = v1/t.sliderObj[t.fe][ben].div
							}
							if (v1 == t.sliderObj[t.fe][ben].max && t.sliderObj[t.fe][ben].gtmax){
								t[ben] = "(" + field + " >= " + v0 + ")";	
							}else{
								t[ben] = "(" + field + " >= " + v0 + " AND " + field + " <= " + v1 + ")";	
							}
						}else{
							t[ben] = "";
						}
					}
					t.clicks.sliderSlide(e, ui, t);
					if (t.ord == "last"){
						t.clicks.layerDefs(t);
					}
				}	
			},
			sliderSlide: function(e, ui, t){
				var ben = e.target.id.split("-").pop();
				$('#' + e.target.id).parent().prev().find('.rnum').each(function(i,v){
					var sval = ui.values[i]
					if (t.sliderObj[t.fe][ben].div){
						sval = ui.values[i]/t.sliderObj[t.fe][ben].div
					}
					if (ui.values[i] > 100000){
						var val = t.clicks.abbreviateNumber(sval)
					}else{
						var val = t.clicks.commaSeparateNumber(sval)
					}	
					if (ui.values[i] == t.sliderObj[t.fe][ben].max && t.sliderObj[t.fe][ben].gtmax){
						$(v).html("<b>></b> " + val)
					}else{
						$(v).html(val)
					}
				})	
			},
			layerDefs: function(t){
				if (t.obj.stateSet == "no"){
					t.obj.exp = [t.Acres, t.TN, t.TP]
				}
				var exp = "OBJECTID > 0";
				var cnt = 0;
				$.each(t.obj.exp, function(i, v){
					if (v.length > 0){
						cnt = cnt + 1;
					}	
				});	
				if (cnt > 0){
					exp = "";
					t.obj.exp.unshift(t.obj.ffDef);
					$.each(t.obj.exp, function(i, v){
						if (v.length > 0){
							if (exp.length == 0){
								exp = v;
							}else{
								exp = exp + " AND " + v;
							}	
						}	
					});
				}	
				t.definitionExpression = exp;
				t.layerDefinitions = [];		
				t.layerDefinitions[t.obj.hucLayer] = exp;			
				t.dynamicLayer.setLayerDefinitions(t.layerDefinitions);
				var query = new Query();
				var queryTask = new QueryTask(t.url + '/' + t.obj.hucLayer);
				query.where = exp;
				queryTask.executeForCount(query,function(count){
					var countWcomma = t.clicks.commaSeparateNumber(count)
					$('#' + t.id + 'mng-act-wrap .fuCount').html(countWcomma); 
				});	
			},
			commaSeparateNumber: function(val){
				while (/(\d+)(\d{3})/.test(val.toString())){
					val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
				}
				return val;
			},
			abbreviateNumber: function(num) {
			    if (num >= 1000000000) {
			        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
			     }
			     if (num >= 1000000) {
			        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
			     }
			     if (num >= 1000) {
			        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
			     }
			     return num;
			}
        });
    }
);
