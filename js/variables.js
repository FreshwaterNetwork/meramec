define([
	"dojo/_base/declare"
],
function ( 	declare ) {
        "use strict";
        return declare(null, {
			makeVariables: function(t){	
				// definition expression root field names
				t.Acres = "";
				t.TN = "";
				t.TP = "";
				// object for range slider
				t.sliderObj = {
					// huc 12 + protection + 1 in 5 year flood
					h12p1:{
						Acres:{
							values:[],vis:true,min:17,max:806, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric.<br>"
						}	
					},
					// huc 12 + protection + 1 in 100 year flood
					h12p2:{
						Acres:{
							values:[],vis:true,min:153,max:3044, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric.<br>"
						}  
					},
					// huc 12 + protection + 1 in 500 year flood
					h12p3:{
						Acres:{
							values:[],vis:true,min:282,max:4901, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric.<br>"
						}
					},

					// huc 12 + restoration + 1 in 5 year flood
					h12r1:{
						Acres:{
							values:[],vis:true,min:1,max:482, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in ag or potentially grazed land that could potentially be restored"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric.<br>"
						}
					},
					// huc 12 + restoration + 1 in 100 year flood
					h12r2:{
						Acres:{
							values:[],vis:true,min:67,max:2577, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in ag or potentially grazed land that could potentially be restored"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric.<br>"
						} 
					},
					// huc 12 + restoration + 1 in 500 year flood
					h12r3:{
						Acres:{
							values:[],vis:true,min:107,max:3122, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in ag or potentially grazed land that could potentially be restored"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric.<br>"
						} 
					},

					// catchment + protection + 1 in 5 year flood
					catchp1:{
						Acres:{
							values:[],vis:true,min:0,max:295, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric.<br>"
						} 
					},
					// catchment + protection + 1 in 100 year flood
					catchp2:{
						Acres:{
							values:[],vis:true,min:0,max:504, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric.<br>"
						}
					},
					// catchment + protection + 1 in 500 year flood
					catchp3:{
						Acres:{
							values:[],vis:true,min:0,max:576, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>lower</i> in this metric.<br>"
						} 
					},

					// catchment + restoration + 1 in 5 year flood
					catchr1:{
						Acres:{
							values:[],vis:true,min:0,max:123, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in ag or potentially grazed land that could potentially be restored"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric.<br>"
						}  
					},
					// catchment + restoration + 1 in 100 year flood
					catchr2:{
						Acres:{
							values:[],vis:true,min:0,max:453, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in ag or potentially grazed land that could potentially be restored"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric.<br>"
						} 
					},
					// catchment + restoration + 1 in 500 year flood
					catchr3:{
						Acres:{
							values:[],vis:true,min:0,max:729, gtmax:true,
							info:"<b>Available floodplain area for given return interval and management action</b><br>Area of floodplain in ag or potentially grazed land that could potentially be restored"
						},
						TN:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total nitrogen (SWAT model)</b><br>Total nitrogen loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric."
						},
						TP:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Total phosphorus (SWAT model)</b>Total phosphorus loading, according to SWAT modeling. Values normalized to 0-100 scale. For protection priorities, identify catchments <i>higher</i> in this metric.<br>"
						}
					}
				}			
				// object for radio groups
				t.radioObj = {
					// huc 12 + protection + 1 in 5 year flood
					h12p1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// huc 12 + protection + 1 in 100 year flood
					h12p2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// huc 12 + protection + 1 in 500 year flood
					h12p3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}	
					},
					// huc 12 + restoration + 1 in 5 year flood
					h12r1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// huc 12 + restoration + 1 in 100 year flood
					h12r2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// huc 12 + restoration + 1 in 500 year flood
					h12r3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// catchment + protection + 1 in 5 year flood
					catchp1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// catchment + protection + 1 in 100 year flood
					catchp2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// catchment + protection + 1 in 500 year flood
					catchp3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// catchment + restoration + 1 in 5 year flood
					catchr1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// catchment + restoration + 1 in 100 year flood
					catchr2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					},
					// catchment + restoration + 1 in 500 year flood
					catchr3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info:"<b>Important Bird Areas</b><br>Missing description for this filter"
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info:"<b>TNC Ecoregional Assessment Units</b><br>Missing description for this filter"
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"<b>USFWS Threatened & Endangered Species Active Critical Habitat</b><br>Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act"
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"<b>American Bird Conservancy Corridors & Key Habitat Bird Areas</b><br>Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList"
						}
					}
				}
				// javascript way to loop through the object and get keys and values
				// const runloop = () => {
				// 	for (const key of Object.keys(t.sliderObj)){
				// 		if (key == "h8p2"){
				// 			for (const key1 of Object.keys(t.sliderObj[key])){
				// 				console.log(key1, t.sliderObj[key][key1])
				// 			}
				// 		}
				// 	}
				// }
				//runloop();
				//const x = document.getElementsByClassName("toggle-btn")
				// x.forEach(function(vx,ix,y){
				// 	console.log(vx,ix,y)
				// })
				//for (const y in x){
				//	console.log(y)
				//}	
			}
		});
    }
);