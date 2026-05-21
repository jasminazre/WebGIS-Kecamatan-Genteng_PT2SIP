var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_kecamatan_genteng_ar_1 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_1 = format_kecamatan_genteng_ar_1.readFeatures(json_kecamatan_genteng_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_1.addFeatures(features_kecamatan_genteng_ar_1);
var lyr_kecamatan_genteng_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_1, 
                style: style_kecamatan_genteng_ar_1,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
                title: '<img src="styles/legend/kecamatan_genteng_ar_1.png" /> kecamatan_genteng_ar'
            });
var format_jalan_clean_2 = new ol.format.GeoJSON();
var features_jalan_clean_2 = format_jalan_clean_2.readFeatures(json_jalan_clean_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_clean_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_clean_2.addFeatures(features_jalan_clean_2);
var lyr_jalan_clean_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_clean_2, 
                style: style_jalan_clean_2,
                popuplayertitle: 'jalan_clean',
                interactive: true,
                title: '<img src="styles/legend/jalan_clean_2.png" /> jalan_clean'
            });
var format_Intersection_3 = new ol.format.GeoJSON();
var features_Intersection_3 = format_Intersection_3.readFeatures(json_Intersection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_3.addFeatures(features_Intersection_3);
var lyr_Intersection_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_3, 
                style: style_Intersection_3,
                popuplayertitle: 'Intersection',
                interactive: true,
    title: 'Intersection<br />\
    <img src="styles/legend/Intersection_3_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/Intersection_3_1.png" /> Genteng<br />\
    <img src="styles/legend/Intersection_3_2.png" /> Ketabang<br />\
    <img src="styles/legend/Intersection_3_3.png" /> Peneleh<br />\
    <img src="styles/legend/Intersection_3_4.png" /> <br />' });
var format_Servicearealines_4 = new ol.format.GeoJSON();
var features_Servicearealines_4 = format_Servicearealines_4.readFeatures(json_Servicearealines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_4.addFeatures(features_Servicearealines_4);
var lyr_Servicearealines_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_4, 
                style: style_Servicearealines_4,
                popuplayertitle: 'Service area (lines)',
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_4.png" /> Service area (lines)'
            });
var format_halte_pt_5 = new ol.format.GeoJSON();
var features_halte_pt_5 = format_halte_pt_5.readFeatures(json_halte_pt_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_5.addFeatures(features_halte_pt_5);
var lyr_halte_pt_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_5, 
                style: style_halte_pt_5,
                popuplayertitle: 'halte_pt',
                interactive: true,
                title: '<img src="styles/legend/halte_pt_5.png" /> halte_pt'
            });

lyr_Positronretina_0.setVisible(true);lyr_kecamatan_genteng_ar_1.setVisible(true);lyr_jalan_clean_2.setVisible(true);lyr_Intersection_3.setVisible(true);lyr_Servicearealines_4.setVisible(true);lyr_halte_pt_5.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_kecamatan_genteng_ar_1,lyr_jalan_clean_2,lyr_Intersection_3,lyr_Servicearealines_4,lyr_halte_pt_5];
lyr_kecamatan_genteng_ar_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luas': 'luas', });
lyr_jalan_clean_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_Intersection_3.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'luas keterjangkauan': 'luas keterjangkauan', 'luas kelurahan': 'luas kelurahan', 'persentase kel': 'persentase kel', });
lyr_Servicearealines_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_halte_pt_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'sumber': 'sumber', 'foto': 'foto', });
lyr_kecamatan_genteng_ar_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'luas': 'Range', });
lyr_jalan_clean_2.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_Intersection_3.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'luas keterjangkauan': 'Range', 'luas kelurahan': 'Range', 'persentase kel': 'Range', });
lyr_Servicearealines_4.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_halte_pt_5.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'sumber': 'TextEdit', 'foto': 'ExternalResource', });
lyr_kecamatan_genteng_ar_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'luas': 'no label', });
lyr_jalan_clean_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_Intersection_3.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'luas keterjangkauan': 'no label', 'luas kelurahan': 'no label', 'persentase kel': 'no label', });
lyr_Servicearealines_4.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_halte_pt_5.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'sumber': 'no label', 'foto': 'no label', });
lyr_halte_pt_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});