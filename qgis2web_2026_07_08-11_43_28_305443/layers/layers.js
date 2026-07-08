var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_yogyakartakota_1 = new ol.format.GeoJSON();
var features_yogyakartakota_1 = format_yogyakartakota_1.readFeatures(json_yogyakartakota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yogyakartakota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yogyakartakota_1.addFeatures(features_yogyakartakota_1);
var lyr_yogyakartakota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yogyakartakota_1, 
                style: style_yogyakartakota_1,
                popuplayertitle: 'yogyakarta kota',
                interactive: true,
    title: 'yogyakarta kota<br />\
    <img src="styles/legend/yogyakartakota_1_0.png" /> rendah<br />\
    <img src="styles/legend/yogyakartakota_1_1.png" /> sedang<br />\
    <img src="styles/legend/yogyakartakota_1_2.png" /> tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_yogyakartakota_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_yogyakartakota_1];
lyr_yogyakartakota_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join kecam': 'join kecam', 'join kec_1': 'join kec_1', 'join kec_2': 'join kec_2', 'join kec_3': 'join kec_3', 'join kec_4': 'join kec_4', 'join kec_5': 'join kec_5', 'join kec_6': 'join kec_6', 'join kec_7': 'join kec_7', 'join kec_8': 'join kec_8', 'join kec_9': 'join kec_9', 'join kec10': 'join kec10', 'join kec11': 'join kec11', 'join kec12': 'join kec12', });
lyr_yogyakartakota_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'join kecam': 'TextEdit', 'join kec_1': 'TextEdit', 'join kec_2': 'TextEdit', 'join kec_3': 'TextEdit', 'join kec_4': 'TextEdit', 'join kec_5': 'TextEdit', 'join kec_6': 'TextEdit', 'join kec_7': 'TextEdit', 'join kec_8': 'TextEdit', 'join kec_9': 'TextEdit', 'join kec10': 'TextEdit', 'join kec11': 'TextEdit', 'join kec12': 'TextEdit', });
lyr_yogyakartakota_1.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'header label - visible with data', 'REMARK': 'inline label - always visible', 'METADATA': 'header label - visible with data', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'join kecam': 'no label', 'join kec_1': 'no label', 'join kec_2': 'no label', 'join kec_3': 'no label', 'join kec_4': 'no label', 'join kec_5': 'no label', 'join kec_6': 'no label', 'join kec_7': 'no label', 'join kec_8': 'no label', 'join kec_9': 'no label', 'join kec10': 'no label', 'join kec11': 'no label', 'join kec12': 'no label', });
lyr_yogyakartakota_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});