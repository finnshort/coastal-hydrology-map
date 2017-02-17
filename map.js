//Load map

var map = L.map('map').setView([51.1, -127], 7);

L.tileLayer('https://api.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png256?access_token=pk.eyJ1IjoiZHNob3J0IiwiYSI6ImNpdWM0Mng5czAwN2YyenFmOGZ4d2l2eXUifQ.sva-DsYSqbvQredRpeFG-A', {
  attribution:'&copy; Mapbox &copy; OpenStreetMap contributors'
}).addTo(map);

//GAUGES

//Gauges icon
var triangleIcon = L.icon({
  iconUrl: 'img/triangle-stroked-15.svg',
  iconSize: [18,18],
  riseOnHover: true
})

//Gauges popup
function onEachGaugeFeature(feature, layer) {
        layer.bindPopup("<h3>Hydrometric Gauge</h3>Station Number: " + feature.properties.FIELD3 + "<br> Site Name: " + feature.properties.FIELD4 + "<br> Gross Drainage Area (sq km): " + feature.properties.FIELD5 + "</font>");
        layer.on('mouseover', function() { layer.setOpacity(0.8); });
        layer.on('mouseout', function() { layer.setOpacity(1); });
};

//Gauges data
var gaugesData ={
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [ -126.00583,52.36000 ]
    },
    "properties": {
    "FIELD3":"Station_No. ",
    "FIELD4":"Site_Name",
    "FIELD5":"gross_drainage_area_sq.km"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -126.00583,52.36000 ]
    },
    "properties": {
    "FIELD3":"08FB006",
    "FIELD4":"Atnarko Rv. near the mouth",
    "FIELD5":"2550"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -126.35220,52.43917 ]
    },
    "properties": {
    "FIELD3":"08FB011",
    "FIELD4":"Bella Coola Rv. above Hammer Creek",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -125.06917,49.69278 ]
    },
    "properties": {
    "FIELD3":"08HB025",
    "FIELD4":"Browns Rv. near courtenay",
    "FIELD5":"87.9"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.99778,48.91556 ]
    },
    "properties": {
    "FIELD3":"08NB048",
    "FIELD4":"Carnation Creek",
    "FIELD5":"10.3"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.15000,49.81583 ]
    },
    "properties": {
    "FIELD3":"08GA043",
    "FIELD4":"Cheakamus Rv. near Brackendale",
    "FIELD5":"965"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.70444,48.87833 ]
    },
    "properties": {
    "FIELD3":"08HA001",
    "FIELD4":"Chemainus Rv. near Westholme",
    "FIELD5":"355"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.71444,48.77306 ]
    },
    "properties": {
    "FIELD3":"08HA011",
    "FIELD4":"Cowichan Rv. near Duncan",
    "FIELD5":"826"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.28500,49.31583 ]
    },
    "properties": {
    "FIELD3":"08HB002",
    "FIELD4":"Englishman Rv. near Parksville",
    "FIELD5":"319"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.13778,53.25250 ]
    },
    "properties": {
    "FIELD3":"08OA004",
    "FIELD4":"Honna Rv. near the mouth",
    "FIELD5":"45.3"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.48333,49.35444 ]
    },
    "properties": {
    "FIELD3":"08HB029",
    "FIELD4":"Little Qualicum Rv. near Qualicum Beach",
    "FIELD5":"237"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.09972,49.35611 ]
    },
    "properties": {
    "FIELD3":"08GA061",
    "FIELD4":"MacKay Creek at Montroyal Boulevard",
    "FIELD5":"3.63"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.96889,49.17722 ]
    },
    "properties": {
    "FIELD3":"08HB032",
    "FIELD4":"Millstone Rv. at Nanaimo",
    "FIELD5":"86.2"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.88694,49.06861 ]
    },
    "properties": {
    "FIELD3":"08HB034",
    "FIELD4":"Nanaimo Rv. near Cassidy",
    "FIELD5":"676"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.65194,49.41750 ]
    },
    "properties": {
    "FIELD3":"08HB022",
    "FIELD4":"Nile Creek near Bowser",
    "FIELD5":"15"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -125.24083,49.89417 ]
    },
    "properties": {
    "FIELD3":"08HD011",
    "FIELD4":"Oyster Rv. below Woodhus Creek",
    "FIELD5":"302"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.07500,53.25833 ]
    },
    "properties": {
    "FIELD3":"08OA003",
    "FIELD4":"Premier Creek near Queen Charlotte",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -125.30000,50.02917 ]
    },
    "properties": {
    "FIELD3":"08HD005",
    "FIELD4":"Quinsam Rv. near Campbell Rv.",
    "FIELD5":"278"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -126.52083,52.42444 ]
    },
    "properties": {
    "FIELD3":"08FB004",
    "FIELD4":"Salloomt Rv. near Hagensborg",
    "FIELD5":"159"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -125.90750,50.31222 ]
    },
    "properties": {
    "FIELD3":"08HD006",
    "FIELD4":"Salmon Rv. near Sayward",
    "FIELD5":"1210"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.31110,48.57611 ]
    },
    "properties": {
    "FIELD3":"08HA010 ",
    "FIELD4":"San Juan Rv. near Port Renfrew",
    "FIELD5":"578"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.96917,48.89250 ]
    },
    "properties": {
    "FIELD3":"08HB014",
    "FIELD4":"Sarita Rv. Near Bamfield",
    "FIELD5":"162"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.21900,49.79500 ]
    },
    "properties": {
    "FIELD3":"08GA022",
    "FIELD4":"Squamish Rv. near Brackendale",
    "FIELD5":"2350"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.14639,49.68972 ]
    },
    "properties": {
    "FIELD3":"08GA076",
    "FIELD4":"Stawamus Rv. at Hwy No.99",
    "FIELD5":"52.8"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -126.57833,50.44028 ]
    },
    "properties": {
    "FIELD3":"08HF004",
    "FIELD4":"Tsitika Rv. Below Catherine Creek",
    "FIELD5":"365"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.20972,53.61389 ]
    },
    "properties": {
    "FIELD3":"08OA002",
    "FIELD4":"Yakoun Rv. near Port Clements",
    "FIELD5":"480"
    }
  }
]
};

//Gauges add to map
L.geoJson(gaugesData, {
    onEachFeature: onEachGaugeFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: triangleIcon});
    }
}).addTo(map);

//SAMPLE SITES

//Samples icon
var sampleIcon = L.icon({
  iconUrl: 'img/cricket-15.svg',
  iconSize: [30,30],
  riseOnHover: true
})

//Samples popup
function onEachSampleFeature(feature, layer) {
        layer.bindPopup("<h3>Sampling Site</h3>Site name: " + feature.properties.FIELD3 + "<br> Hydrometric Station No Gauge ID " + feature.properties.FIELD4 + "<br> Gross Drainage Area (sq km): " + feature.properties.FIELD5);
        layer.on('mouseover', function() { layer.setOpacity(0.8); });
        layer.on('mouseout', function() { layer.setOpacity(1); });
};

//Samples data
var samplesData = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [-126.073132,52.369953]
    },
    "properties": {
    "FIELD3":"Site_Name",
    "FIELD4":"Hydrometric_station_No._gauge_ID",
    "FIELD5":"gross_drainage_area_sq.km"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -126.073132,52.369953 ]
    },
    "properties": {
    "FIELD3":"Atnarko Rv.",
    "FIELD4":"08FB006",
    "FIELD5":"2550"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -126.388000,52.432000 ]
    },
    "properties": {
    "FIELD3":"Bella Coola Rv. Near Hammer Rd.",
    "FIELD4":"08FB011",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.520789,53.413342 ]
    },
    "properties": {
    "FIELD3":"Bonanza Creek",
    "FIELD4":"NA",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -125.080176,49.693149 ]
    },
    "properties": {
    "FIELD3":"Browns Rv.",
    "FIELD4":"08HB025",
    "FIELD5":"87.9"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.997778,48.915560 ]
    },
    "properties": {
    "FIELD3":"Carnation Creek ",
    "FIELD4":"08HB048",
    "FIELD5":"10.3"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.157400,49.799678 ]
    },
    "properties": {
    "FIELD3":"Cheakamus Rv.",
    "FIELD4":"08GA043",
    "FIELD5":"965"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.705091,48.880006 ]
    },
    "properties": {
    "FIELD3":"Chemainus Rv.",
    "FIELD4":"08HA001",
    "FIELD5":"355"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.714684,48.773205 ]
    },
    "properties": {
    "FIELD3":"Cowichan Rv.",
    "FIELD4":"08HA011",
    "FIELD5":"826"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.285369,49.315739 ]
    },
    "properties": {
    "FIELD3":"Englishman Rv.",
    "FIELD4":"08HB002",
    "FIELD5":"319"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.516342,53.402948 ]
    },
    "properties": {
    "FIELD3":"Gregory Creek",
    "FIELD4":"NA",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.138094,53.252719 ]
    },
    "properties": {
    "FIELD3":"Honna Rv near the mouth",
    "FIELD4":"08OA004",
    "FIELD5":"45.3"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.484223,49.358569 ]
    },
    "properties": {
    "FIELD3":"Little Qualicum Rv.",
    "FIELD4":"08HB029",
    "FIELD5":"237"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.099942,49.356317 ]
    },
    "properties": {
    "FIELD3":"MacKay Creek",
    "FIELD4":"08GA061",
    "FIELD5":"3.63"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.966905,49.177575 ]
    },
    "properties": {
    "FIELD3":"Millstone Rv.",
    "FIELD4":"08HB032",
    "FIELD5":"86.2"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.876396,49.076391 ]
    },
    "properties": {
    "FIELD3":"Nanaimo Rv.",
    "FIELD4":"08HB034",
    "FIELD5":"676"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.642692,49.419923 ]
    },
    "properties": {
    "FIELD3":"Nile Creek",
    "FIELD4":"08HB022",
    "FIELD5":"15"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -125.229947,49.895551 ]
    },
    "properties": {
    "FIELD3":"Oyster Rv.",
    "FIELD4":"08HD011",
    "FIELD5":"302"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.076494,53.255184 ]
    },
    "properties": {
    "FIELD3":"Premier Crk",
    "FIELD4":"08OA003",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -125.296903,50.026653 ]
    },
    "properties": {
    "FIELD3":"Quinsam Rv. ",
    "FIELD4":"08HD005",
    "FIELD5":"278"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -126.538100,52.399600 ]
    },
    "properties": {
    "FIELD3":"Salloomt Rv.",
    "FIELD4":"08FB004",
    "FIELD5":"159"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -125.922668,50.320697 ]
    },
    "properties": {
    "FIELD3":"Salmon Rv. ",
    "FIELD4":"08HD006",
    "FIELD5":"1210"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.334774,48.579860 ]
    },
    "properties": {
    "FIELD3":"San Juan Rv.",
    "FIELD4":"08HA010 ",
    "FIELD5":"578"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.972790,48.891287 ]
    },
    "properties": {
    "FIELD3":"Sarita Rv.",
    "FIELD4":"08HB014",
    "FIELD5":"162"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.201361,49.795633 ]
    },
    "properties": {
    "FIELD3":"Squamish Rv.",
    "FIELD4":"08GA022",
    "FIELD5":"2350"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.204372,53.291838 ]
    },
    "properties": {
    "FIELD3":"Stanley Rv. below weir",
    "FIELD4":"NA",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.142275,49.691978 ]
    },
    "properties": {
    "FIELD3":"Stawamus Rv.",
    "FIELD4":"08GA076",
    "FIELD5":"52.8"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -131.943037,53.581777 ]
    },
    "properties": {
    "FIELD3":"Tlell Rv.",
    "FIELD4":"NA",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -126.565188,50.404028 ]
    },
    "properties": {
    "FIELD3":"Tsitika Rv.",
    "FIELD4":"08HF004",
    "FIELD5":"NA"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.208736,53.620639 ]
    },
    "properties": {
    "FIELD3":"Yakoun, near Port Clements",
    "FIELD4":"08OA002",
    "FIELD5":"480"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -132.276345,53.379017 ]
    },
    "properties": {
    "FIELD3":"Yakoun, near QC",
    "FIELD4":"NA",
    "FIELD5":"NA"
    }
  }
]
};

//Samples add to map
L.geoJson(samplesData, {
    onEachFeature: onEachSampleFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: sampleIcon});
    }
}).addTo(map);
