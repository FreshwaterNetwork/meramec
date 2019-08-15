define([
	"dojo/_base/declare"
],
function ( 	declare ) {
        "use strict";
        return declare(null, {
			makeVariables: function(t){	
				// definition expression root field names
				t.KM2 = "";
				t.ACCp = "";
				t.DINp = "";
				t.GDDs = ""; 
				t.CPI = "";
				t.inIBA = "";
				t.TNC = "";
				t.WT_TOT = "";
				t.FWScrit = "";
				t.ABCcorr = "";
				t.cumu_hci = "";
				t.popnow = "";
				t.pop2050 = "";
				t.P2_2050 = "";
				t.P5_2050 = "";
				// object for range slider
				t.sliderObj = {
					// huc 8 + protection + 1 in 5 year flood
					h8p1:{
						KM2:{
							values:[], vis:true, min:0, max:350, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						ACCp:{
							values:[], vis:true, min:0, max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[], vis:true, min:0, max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							values:[], vis:true, min:0, max:100, endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For protection priorities, identify catchments lower in this metric, since if they are left unprotected and nutrient loads increase, they will have less ability to mitigate these loads."
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[], vis:true, min:0, max:75, shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[], vis:true, min:0, max:5, shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[], vis:true, min:0, max:150, nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[], vis:true, min:0, max:4000, nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[], vis:true, min:0, max:250000000, nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[], vis:true, min:0, max:250000000, nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 8 + protection + 1 in 100 year flood
					h8p2:{
						KM2:{
							values:[], vis:true, min:0, max:350, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						},
						ACCp:{
							values:[], vis:true, min:0, max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[], vis:true, min:0, max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[], vis:true, min:0, max:75, shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[], vis:true, min:0, max:5, shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[], vis:true, min:0, max:250, nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[], vis:true, min:0, max:8500, nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[], vis:true, min:0, max:500000000, nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[], vis:true, min:0, max:500000000, nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 8 + protection + 1 in 500 year flood
					h8p3:{
						KM2:{
							values:[], vis:true, min:0,	max:350, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						ACCp:{
							values:[], vis:true, min:0, max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[], vis:true, min:0, max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[], vis:true, min:0, max:75, shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[], vis:true, min:0, max:5, shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[], vis:true, min:0, max:300, nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[], vis:true, min:0, max:10000, nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[], vis:true, min:0, max:800000000, nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[], vis:true, min:0, max:800000000, nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 8 + restoration + 1 in 5 year flood
					h8r1:{
						KM2:{values:[],vis:true,min:0,max:250, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:150,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:6000,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:200000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:200000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 8 + restoration + 1 in 100 year flood
					h8r2:{
						KM2:{
							values:[],vis:true,min:0,max:850, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:350,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:15000,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:700000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 8 + restoration + 1 in 500 year flood
					h8r3:{
						KM2:{
							values:[],vis:true,min:0,max:850, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:500,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:20000,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1100000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1300000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 8 + restoration and reconnection + 1 in 5 year flood
					h8rr1:{
						KM2:{
							values:[],vis:true,min:0,max:200, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:25,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:3500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:75000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					},
					// huc 8 + restoration and reconnection + 1 in 100 year flood
					h8rr2:{
						KM2:{
							values:[],vis:true,min:0,max:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:20,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:2500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					},
					// huc 8 + restoration and reconnection + 1 in 500 year flood
					h8rr3:{
						KM2:{
							values:[],vis:true,min:0,max:20, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:20,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:750,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:25000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:30000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					},
					// huc 12 + protection + 1 in 5 year flood
					h12p1:{
						KM2:{
							values:[],vis:true,min:0,max:10, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For protection priorities, identify catchments lower in this metric, since if they are left unprotected and nutrient loads increase, they will have less ability to mitigate these loads."
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:25000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:20000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 12 + protection + 1 in 100 year flood
					h12p2:{
						KM2:{
							values:[],vis:true,min:0,max:10, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:1000,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 12 + protection + 1 in 500 year flood
					h12p3:{
						KM2:{
							values:[],vis:true,min:0,max:10, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:1000,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 12 + restoration + 1 in 5 year flood
					h12r1:{
						KM2:{
							values:[],vis:true,min:0,max:10, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						},
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:10000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:20000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 12 + restoration + 1 in 100 year flood
					h12r2:{
						KM2:{
							values:[],vis:true,min:0,max:25, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:25,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:1500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 12 + restoration + 1 in 500 year flood
					h12r3:{
						KM2:{
							values:[],vis:true,min:0,max:50, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:25,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:1500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:50000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// huc 12 + restoration and reconnection + 1 in 5 year flood
					h12rr1:{
						KM2:{
							values:[],vis:true,min:0,max:25, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For restoration priorities, identify catchments <i>higher</i> in this metric."
						},  
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:5,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:250,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					},
					// huc 12 + restoration and reconnection + 1 in 100 year flood
					h12rr2:{
						KM2:{
							values:[],vis:true,min:0,max:25, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:5,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:250,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					},
					// huc 12 + restoration and reconnection + 1 in 500 year flood
					h12rr3:{
						KM2:{
							values:[],vis:true,min:0,max:10,div:10, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:5,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:250,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					},
					// catchment + protection + 1 in 5 year flood
					catchp1:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For protection priorities, identify catchments lower in this metric, since if they are left unprotected and nutrient loads increase, they will have less ability to mitigate these loads."
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:1,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// catchment + protection + 1 in 100 year flood
					catchp2:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:1,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// catchment + protection + 1 in 500 year flood
					catchp3:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in natural land cover that is not currently in protected status"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For protection priorities, identify catchments <i>lower</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:1,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in forest/wetland floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected to be living in forest/wetland floodplain of the selected return interval in 2050"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// catchment + restoration + 1 in 5 year flood
					catchr1:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:1,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// catchment + restoration + 1 in 100 year flood
					catchr2:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:1,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// catchment + restoration + 1 in 500 year flood
					catchr3:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:1,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land that is in a floodplain of the selected return interval"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:500,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>Uses SSP2 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>Uses SSP5 socioeconomic development scenario, described <a href='https://www.sciencedirect.com/science/article/pii/S0959378016300681' target='_blank'>here</a>"
						}
					},
					// catchment + restoration and reconnection + 1 in 5 year flood
					catchrr1:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"<b>Growing degree days</b><br>A value of <q>25%</q> means 25% of catchments have lower growing degree days. Higher GDDs = higher denitrification potential. For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:100,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					},
					// catchment + restoration and reconnection + 1 in 100 year flood
					catchrr2:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:100,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					},
					// catchment + restoration and reconnection + 1 in 500 year flood
					catchrr3:{
						KM2:{
							values:[],vis:true,min:10,max:100,div:100, gtmax:true,
							info:"<b>Available Area</b><br>Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding"
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Accumulated yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient export at the outflow (kg/yr of N & P accumulated from upstream, divided by km<sup>2</sup> of upstream area). For restoration priorities, identify catchments <q>higher</q> in this metric."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"<b>Delivered incremental yield of N & P</b><br>A value of <q>25%</q> means 25% of catchments have lower nutrient loads ultimately making it to the Gulf (kg/yr of N & P from within a given watershed, divided by its area in km<sup>2</sup>). For restoration priorities, identify catchments <i>higher</i> in this metric."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"<b>National Commodity Crop Productivity Index</b><br>An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity for restoration."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"<b>At-Risk Wetland Species</b><br>Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"<b>National Fish Habitat Partnership Cumulative Habitat Condition Index</b><br>Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"<b>Current population</b><br>People currently living in ag or pasture land behind levees that could potentially be restored to floodplain"
						}, 
						pop2050:{
							values:[],vis:true,min:1,max:100,nounsc:true, gtmax:true,
							info:"<b>Projected population (2050)</b><br>People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:10000,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP2)</b><br>SSP2 = Social, economic, and historical trends to not shift markedly from historical patterns"
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"<b>Economic asset exposure (2050) (SSP5)</b><br>SSP5 = Strong investment in climate adaptation, albeit with continued worldwide fossil fuel exploitation and global adoption of energy- and resource-intensive lifestyles"
						}
					}
				}			
				// object for radio groups
				t.radioObj = {
					h8p1:{
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
					h8p2:{
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
					h8p3:{
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
					h8r1:{
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
					h8r2:{
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
					h8r3:{
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
					h8rr1:{
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
					h8rr2:{
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
					h8rr3:{
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
					h12rr1:{
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
					h12rr2:{
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
					h12rr3:{
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
					},
					catchrr1:{
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
					catchrr2:{
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
					catchrr3:{
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