(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "id": "camera_8FB527F7_9257_FF54_41C6_B2D2E4A3BABD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -88.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EC4C721_9257_F0EC_41C7_3D55521622F3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D89714F_9257_F0B4_41A1_D4758F0DB966",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220929_154942_989",
 "id": "panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C",
 "thumbnailUrl": "media/panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F26374C_9257_F0B4_41A4_92DC469330F8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E65C632_9257_F0EC_41CF_8889918FCB06",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -76.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B32703C3_9257_F7AC_41D7_A349AA7635FB",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_91DB39F3_8C09_EC97_41D8_487723238A28_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2BB92D0_9257_F1AC_41DD_A477CB55849A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191418_534",
 "id": "panorama_83F7F792_8C38_E491_41D9_5141E01C492E",
 "thumbnailUrl": "media/panorama_83F7F792_8C38_E491_41D9_5141E01C492E_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E4D366E_9257_F174_41DB_0C86EF060885",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C04BF13_9257_D0AC_41A4_5978A074DE36",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -93.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3405430_9257_F0EC_41A0_9BBC701D5A30",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7F792_8C38_E491_41D9_5141E01C492E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 156,
   "yaw": 171.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4"
  },
  {
   "backwardYaw": 176.2,
   "yaw": -2.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_153150_536",
 "id": "panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F",
 "thumbnailUrl": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9A817FC1_8C09_E4F3_41C6_87F6A2F1E818",
  "this.overlay_95190C39_8C08_2B90_41B8_80F6A30E5E14"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C592F59_9257_EF5C_41B8_852CE5263340",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 119.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220929_154636_701",
 "id": "panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4",
 "thumbnailUrl": "media/panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3F51482_9257_F1AC_41CA_E7EA0DD8561B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.78,
   "yaw": 176.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F"
  },
  {
   "backwardYaw": -179.71,
   "yaw": -88.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5"
  },
  {
   "backwardYaw": 171.29,
   "yaw": -2.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F"
  },
  {
   "backwardYaw": 50.61,
   "yaw": -148.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F91343_8C08_3DF7_41D6_52A483E4F120"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_153127_965",
 "id": "panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B",
 "thumbnailUrl": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_951E095D_8C08_ED90_4195_7A3FA712D73E",
  "this.overlay_9445DD69_8C08_E5B3_41C4_A666F0731A54",
  "this.overlay_9743BA3D_8E3A_B0AC_41C8_5BA441FF057B",
  "this.overlay_906793CE_8E3A_B7ED_41C2_82E3ECA2A61A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F31C740_9257_F0AC_41DE_27C24EB1EB8C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191458_897",
 "id": "panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0",
 "thumbnailUrl": "media/panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.43,
   "yaw": 3.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547"
  },
  {
   "backwardYaw": -105.66,
   "yaw": 102.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F95300_8C08_3D70_41D9_63C3D471B506"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192035_287",
 "id": "panorama_83F9265B_8C08_2790_41A7_CE6318C7261D",
 "thumbnailUrl": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A913D5A2_8E1A_B054_41DF_A49A857D031B",
  "this.overlay_A9A92D7F_8E1A_50AC_41BE_3021096F610E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B259729C_9257_F1D4_41AB_D576543E74CE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 39.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EE3A6F1_9257_F16C_41CB_B3FF2F880E7D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E47965A_9257_F15C_41D7_3C0187423CC6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F40BE2B_9257_D0FC_41E0_2ED609F8327E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -11.93,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.1,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_87B3BD86_926A_53B4_4159_C4A7256CF448",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_87B3BD86_926A_53B4_4159_C4A7256CF448_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.93
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.84,
   "yaw": 41.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F68079_8C38_1B93_41BD_7567F5157FB2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_190824_073",
 "id": "panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38",
 "thumbnailUrl": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9004C266_8E0A_B0DD_41DE_10D72E049923",
  "this.overlay_90A3787C_8E0A_50AC_41CA_73E84557C347"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3C954C8_9257_F1BC_41D4_9D9B5DCADF33",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 6.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8DDD41A1_9257_F3EC_41E1_6526861C42A2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8CF10FB3_9257_EFEC_41A6_93CC5D0DAF35",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E2DC5C3_9257_F3AC_41E1_189B92E94393",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -23.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EB35678_9257_F15C_41DF_7D63024C413D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -87.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -172.34,
   "yaw": -0.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9"
  },
  {
   "backwardYaw": -5.44,
   "yaw": 176.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_152918_241",
 "id": "panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F",
 "thumbnailUrl": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9E639F91_8C08_2493_41C8_70B0987778D7",
  "this.overlay_99495688_8C08_2771_41CD_B28885149C06"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B37C63FF_9257_F754_41C8_DFA142257A55",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -58.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_87F7BC14_9276_30D4_41DA_BB2D86659923",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8306DE3B_925A_50DC_41DF_F2CE5CE9127D_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_8306DE3B_925A_50DC_41DF_F2CE5CE9127D_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_8306DE3B_925A_50DC_41DF_F2CE5CE9127D_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_8306DE3B_925A_50DC_41DF_F2CE5CE9127D_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D37EFEF_9257_EF74_41DA_6D8781F2FF10",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79"
  },
  {
   "backwardYaw": -16.48,
   "yaw": -99.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191105_444",
 "id": "panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A",
 "thumbnailUrl": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_958E9A86_8E06_505C_41C1_0E5810743EB6",
  "this.overlay_9582FC3D_8E06_D0AC_41B3_8FAE24F0135D",
  "this.overlay_922DB55E_8E06_50ED_41CF_E95B25CF62AF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EFDB6E7_9257_F174_41D9_BCF7CF6D2055",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -60.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B329B3CD_9257_F7B4_41E1_766C54AB9925",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -64.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D61E087_9257_F1B4_41BB_1FFAD036782B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F95300_8C08_3D70_41D9_63C3D471B506_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8DA510F6_9257_F154_41C8_D84102C67CE2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 10,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 14.5,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_8306DE3B_925A_50DC_41DF_F2CE5CE9127D",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8306DE3B_925A_50DC_41DF_F2CE5CE9127D_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.21
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E82A6C8_9257_F1BC_41B3_CB2716F12DE4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 27.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F0D3788_9257_FFBC_41DD_C6AAADCEA0C8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 15.24,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.97,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_814A46D6_926A_D154_41BA_4E887EC21464",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_814A46D6_926A_D154_41BA_4E887EC21464_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 11.34
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EBBC68C_9257_F1B4_41B9_8FD7AB95358D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 171.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FDD9ECA_9257_D1BC_41DC_16E637AEA06F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2676261_9257_F16C_41D0_F8E0E481B59C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -52.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191358_741",
 "id": "panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F",
 "thumbnailUrl": "media/panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EE82703_9257_F0AC_41DE_C0ADC2A1C476",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -13.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2F17347_9257_F0B4_41A9_D394F25A52B1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 172.93,
   "yaw": -11.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BD768485_8E0A_D05F_41BB_57EF6D488370"
  },
  {
   "backwardYaw": 19.11,
   "yaw": 162.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_190725_788",
 "id": "panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB",
 "thumbnailUrl": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A1A5060D_8E06_B06C_41D5_0932ADF5B2AB",
  "this.overlay_A12A3BF1_8E06_77B4_41DA_3FFFA7F346C1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3A3F450_9257_F0AC_41C9_E0D5C2088447",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 87.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F6E37B1_9257_FFEC_41CA_5953D21A3831",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 87.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 41.61,
   "yaw": 177.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38"
  },
  {
   "backwardYaw": 111.97,
   "yaw": -1.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_190804_396",
 "id": "panorama_83F68079_8C38_1B93_41BD_7567F5157FB2",
 "thumbnailUrl": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A34FD280_8E0E_5055_41D0_86EB3FBDA9F6",
  "this.overlay_A08AEDE4_8E0E_73DC_41BE_188B6E3ECB84"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B03A84DC_9257_F154_41C9_A84D20DAF826",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B385D46E_9257_F174_41DF_35603CEC14ED",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.25,
   "yaw": 1.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294"
  },
  {
   "backwardYaw": 166.38,
   "yaw": 113.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191146_036",
 "id": "panorama_83F78678_8C38_2791_41CD_65D33060086A",
 "thumbnailUrl": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AFE064D6_8E7E_B1FC_41B7_EBC7015B3552",
  "this.overlay_AF9C3214_8E7E_507C_41B7_FB2B32A0C7A5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.93,
   "yaw": -177.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F78678_8C38_2791_41CD_65D33060086A"
  },
  {
   "backwardYaw": -99.4,
   "yaw": -16.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191124_544",
 "id": "panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294",
 "thumbnailUrl": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AADC2291_8E3E_B074_41DC_62FDAF1DA07D",
  "this.overlay_AB4553FC_8E3E_77AC_41B3_ACAB59444E3B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E1745D7_9257_F354_41E1_C569E46612FD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 31.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.43,
   "yaw": -108.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8"
  },
  {
   "backwardYaw": 87.02,
   "yaw": 86.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38"
  },
  {
   "backwardYaw": 113.61,
   "yaw": 166.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F78678_8C38_2791_41CD_65D33060086A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191205_772",
 "id": "panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275",
 "thumbnailUrl": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AE3CA33C_8E7A_50AC_41E1_6DBFD3451119",
  "this.overlay_AF4621BB_8E79_F3B4_41C3_4925851078FE",
  "this.overlay_91E001BB_8E79_B3B4_41DC_770FA709879E",
  "this.overlay_A7EFF8C0_8F0C_B2FD_4195_F139ECEB2F58"
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_190932_486",
 "id": "panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF",
 "thumbnailUrl": "media/panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3930464_9257_F174_41E1_3E58E429BD39",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220929_155419_633",
 "id": "panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518",
 "thumbnailUrl": "media/panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F162DC7_9257_D3B4_41C4_CE2AED2D5E78",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_192018_554",
 "id": "panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE",
 "thumbnailUrl": "media/panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_89571D06_9256_F0B4_41D2_7F17AEC4023C",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 72.39,
   "yaw": -173.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A"
  },
  {
   "backwardYaw": -96.41,
   "yaw": 96.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F"
  },
  {
   "backwardYaw": 104.86,
   "yaw": -91.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155125_570",
 "id": "panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20",
 "thumbnailUrl": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_81789926_8F33_B385_41D0_A99128F09A13",
  "this.overlay_9EECCE9F_8F74_8E83_41BC_EC0134B246EA",
  "this.overlay_976BDB77_8F15_9783_41D6_5B50B0DF37AA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 121.5,
   "yaw": 76.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6"
  },
  {
   "backwardYaw": 96.68,
   "yaw": -96.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20"
  },
  {
   "backwardYaw": -95.18,
   "yaw": 103.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155021_509",
 "id": "panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F",
 "thumbnailUrl": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9A4A29AF_8F77_7283_41D2_EBFC21C3FCD3",
  "this.overlay_98835D8C_8F0C_9285_41D2_B47CF9204137",
  "this.overlay_92245BA9_8F37_968F_41CB_8AC6ED25AEAD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155936_047",
 "id": "panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA",
 "thumbnailUrl": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B4247E98_8E0E_D074_41C6_BEBA0CF91F5A",
  "this.overlay_B5F96926_8E0A_B05C_41E1_24D2EEA732CE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C9F0F95_9257_EFD4_41E1_F7CFFFE32630",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 42.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.26,
   "yaw": -106.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE"
  },
  {
   "backwardYaw": -90.27,
   "yaw": 83.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155517_897",
 "id": "panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37",
 "thumbnailUrl": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C472A38E_8E07_B06C_41CF_968C3C706F08",
  "this.overlay_C0D469E1_8E06_73D4_41DF_2902A70DEE7F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -137.16,
   "yaw": -5.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4"
  },
  {
   "backwardYaw": -9.94,
   "yaw": 175.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_153107_310",
 "id": "panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908",
 "thumbnailUrl": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_98F2E21A_8C38_3F91_41DD_000A02D29798",
  "this.overlay_9B56E9FB_8C38_2C97_41B1_6666BA5F25A1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E1AB5F6_9257_F354_41B2_4AE7931F24AF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -119.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E7FB61E_9257_F0D4_41D8_AAB559E9C325",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D1BF034_9257_F0D4_41AB_B6B71559A8AC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -110.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.03,
   "yaw": -176.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191027_956",
 "id": "panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286",
 "thumbnailUrl": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B7C85C2E_8E0A_D0AC_41BC_0FB6B18B0085"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FA8C828_9257_F0FC_41D4_E77600BBA914",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FCE2ED6_9257_D154_41CD_6D19CA9097F4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8CD45FD1_9257_EFAC_41DF_61E154FD22C9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_190856_125",
 "id": "panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B",
 "thumbnailUrl": "media/panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FBC3801_9257_F0AC_41E0_F5588DA82F3D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C753F27_9257_D0F4_41DE_53A6A7D4AB0E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F78678_8C38_2791_41CD_65D33060086A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_87FCFC1B_9276_30DC_41DB_622C02BE32B0",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_8313F304_925A_F0B4_41DA_D7E8247DDF7B_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_8313F304_925A_F0B4_41DA_D7E8247DDF7B_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_8313F304_925A_F0B4_41DA_D7E8247DDF7B_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_8313F304_925A_F0B4_41DA_D7E8247DDF7B_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 100.52,
   "yaw": -105.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_190641_004",
 "id": "panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110",
 "thumbnailUrl": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9FF582E1_8C08_1CB3_41DE_78754A263519",
  "this.overlay_829FF2E0_925A_716C_41E2_3E2E7F2B6838",
  "this.popup_8313F304_925A_F0B4_41DA_D7E8247DDF7B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.8,
   "yaw": -89.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA"
  },
  {
   "backwardYaw": 3.97,
   "yaw": 87.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F9265B_8C08_2790_41A7_CE6318C7261D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191856_351",
 "id": "panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547",
 "thumbnailUrl": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A6FAF2D1_8E1A_51F4_41D4_937D96EF6149",
  "this.overlay_A69BA6BA_8E19_B1B5_41D2_F441D90C54B7"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EC9172D_9257_F0F4_41BA_2689C14E63D0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -107.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.89,
   "yaw": -179.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192137_546",
 "id": "panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5",
 "thumbnailUrl": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_97195B81_8E39_D054_419A_4F9922EDD0EF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D2AF00E_9257_F0B4_41CC_B500692487A2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.59,
   "yaw": 10.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D"
  },
  {
   "backwardYaw": -0.12,
   "yaw": -172.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_152938_649",
 "id": "panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9",
 "thumbnailUrl": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9928C147_8C09_FDFF_41E1_75DC4E65A37D",
  "this.overlay_9B727271_8C08_1F90_41CC_CAD9C585DCAE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F2C275E_9257_FF54_41C3_62615180DF74",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220929_155321_722",
 "id": "panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF",
 "thumbnailUrl": "media/panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191339_594",
 "id": "panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56",
 "thumbnailUrl": "media/panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.11,
   "yaw": 170.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9"
  },
  {
   "backwardYaw": 175.6,
   "yaw": -9.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_153045_120",
 "id": "panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D",
 "thumbnailUrl": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_99AEB21A_8C08_1F91_41D2_FEE3B36434DC",
  "this.overlay_983F1576_8C09_E591_41AA_CA203FCD18AE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B02DB4E6_9257_F174_41E0_66D67FFE621E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2041225_9257_F0F4_41D0_28EE3AB214D8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C"
  },
  {
   "backwardYaw": -0.94,
   "yaw": 135.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090"
  },
  {
   "backwardYaw": 69.02,
   "yaw": -16.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F9118A_8C08_1D71_41D5_796FC41C380A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191800_549",
 "id": "panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D",
 "thumbnailUrl": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A22E1521_8F34_B3BF_41B6_C8DD8BEC55DF",
  "this.overlay_A126C531_8F34_B39F_41C1_EDB1C860813D",
  "this.overlay_A13031A1_8F33_92BF_41BC_6D9E0D11BC54"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B24A42B2_9257_F1EC_41D6_FD90FBE20754",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F4F17E3_9257_FF6C_4192_26CD1B7B17DF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F0B9DE5_9257_D374_41D6_B2BDA76F5A65",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 80.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F5AD7CF_9257_FFB4_41BE_CC713816A35E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FF7AE9A_9257_D1DC_41E1_A8F618BEBF5A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D"
  },
  {
   "backwardYaw": 103.64,
   "yaw": -95.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F"
  },
  {
   "backwardYaw": -91.09,
   "yaw": 83.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155042_872",
 "id": "panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB",
 "thumbnailUrl": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9952592B_8F73_7383_41C1_49F3F823BBB6",
  "this.overlay_9B383627_8F75_9183_41BA_C2FC920733F4",
  "this.overlay_94B2066D_8F13_9187_41E0_DA6EDDCF4681"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E6BB63C_9257_F0D4_41DE_CF1498E6A3C2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F5E0E17_9257_D0D4_41CB_560D57686A6A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -4.21,
   "yaw": -149.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE"
  },
  {
   "backwardYaw": 0.7,
   "yaw": -60.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191438_189",
 "id": "panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1",
 "thumbnailUrl": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A9832D30_8FFC_939D_41D0_5097E99603A9",
  "this.overlay_A8B339AC_8FF4_B285_41C0_3DB913D68F4E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191007_444",
 "id": "panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79",
 "thumbnailUrl": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BA903959_8E07_B0F7_41CE_E99470BFF0C7",
  "this.overlay_BAF15A15_8E09_D07C_41A3_6739CC05D4B3",
  "this.overlay_BAEBE469_8F17_B18F_41DF_95A45195030F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EF756D2_9257_F1AD_41CE_B080D82FABC7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C4A1F6D_9257_EF74_41C3_74F22E5814B1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F9118A_8C08_1D71_41D5_796FC41C380A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191615_099",
 "id": "panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF",
 "thumbnailUrl": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BD9095B4_8F0C_9285_41D5_21DC142F03CD",
  "this.overlay_BC5A9696_8F0C_FE85_41C0_BAA81FF08B28"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_192003_873",
 "id": "panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD",
 "thumbnailUrl": "media/panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 85.38,
   "yaw": 169.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3"
  },
  {
   "backwardYaw": -93.66,
   "yaw": 90.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE"
  },
  {
   "backwardYaw": 83.59,
   "yaw": -90.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155535_664",
 "id": "panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE",
 "thumbnailUrl": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C84A4EE4_8E1E_B1DC_41D1_970B5956C826",
  "this.overlay_C4940649_8E1B_D0D4_41E0_DCC2267EAECD",
  "this.overlay_8AC5612C_926A_D0F4_41E0_7547F61F00D2"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -76.91,
   "yaw": 166.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942"
  },
  {
   "backwardYaw": -140.03,
   "yaw": 50.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_154809_938",
 "id": "panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5",
 "thumbnailUrl": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_94B565B8_8F1C_928D_41C6_5C51E2B84135",
  "this.overlay_93615E3E_8F13_7185_41BC_DF7E49E944E4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D52A0A3_9257_F1EC_41D3_D6792A70A7E6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.02,
   "yaw": 0.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155653_749",
 "id": "panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD",
 "thumbnailUrl": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_85002209_927E_50BC_41C8_D8ABE15620CD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EC27D95_9257_D3D4_41C8_A9F8E46FD2CB",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -138.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FA24815_9257_F0D4_41A3_6CB9DF690B6D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C13EF09_9257_D0BC_41E1_D12FC062582C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -168.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3D714AA_9257_F1FC_41E1_6AC84A10046F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -51.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F331DA9_9257_D3FC_419C_D707AC217D24",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -68.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2D4B37C_9257_F754_41CD_DD56D18DA1A8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E9666AA_9257_F1FC_41D7_2B032C01BBC7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8CAE5F8B_9257_EFBC_41CF_15E82A0E67F2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -16.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F90B59_8C09_ED93_415D_549E6199901A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D0C804A_9257_F0BC_41D0_8F5AD92F1E27",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155359_757",
 "id": "panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724",
 "thumbnailUrl": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B8FA4F2D_8F7C_8F86_41D8_ECD3E2F10EC8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C689F4D_9257_D0B4_41DF_9B7B5DCA9273",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_87D30C2A_9276_30FC_41AD_195BB9E740DC",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_87B3BD86_926A_53B4_4159_C4A7256CF448_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_87B3BD86_926A_53B4_4159_C4A7256CF448_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_87B3BD86_926A_53B4_4159_C4A7256CF448_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_87B3BD86_926A_53B4_4159_C4A7256CF448_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220929_155241_524",
 "id": "panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0",
 "thumbnailUrl": "media/panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 176.2,
   "yaw": -5.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F"
  },
  {
   "backwardYaw": -105.25,
   "yaw": 100.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_190621_357",
 "id": "panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49",
 "thumbnailUrl": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_82C8EFFC_8C08_E491_41CE_6B24F5DEF9A0",
  "this.overlay_9F726CED_8C08_E4B3_41E1_218D613BAA80",
  "this.overlay_82170E3C_9259_D0D4_41C5_BA9EA3AB9F83",
  "this.popup_8306DE3B_925A_50DC_41DF_F2CE5CE9127D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EEA9D76_9257_D354_418B_544C768B520A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -45.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 60.27,
   "yaw": 128.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A"
  },
  {
   "backwardYaw": 166.09,
   "yaw": -76.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_154832_956",
 "id": "panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942",
 "thumbnailUrl": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_959B67D7_8F1F_FE83_41AF_47F842F9A526",
  "this.overlay_95F16069_8F1D_718F_41B3_E07445A88F48"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8DB420D7_9257_F154_41B0_DD937C048E6C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -98.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -110.45,
   "yaw": -172.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155619_303",
 "id": "panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115",
 "thumbnailUrl": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B06EF97D_8E1E_50AC_41D8_7EE2CFAD58A9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -92.32,
   "yaw": 92.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC"
  },
  {
   "backwardYaw": 95.45,
   "yaw": -90.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9"
  },
  {
   "backwardYaw": 0.7,
   "yaw": 177.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155715_600",
 "id": "panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236",
 "thumbnailUrl": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CE3BB08A_8E1E_5054_41C3_EF598F23591E",
  "this.overlay_B1A6806F_8E19_D0AB_41D2_BD498E72CB9B",
  "this.overlay_CE6F1A1B_8E1A_D074_41BB_8FADCE5213CE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.56,
   "yaw": 53.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F91E12_8C09_E791_41E1_1A7E67121080"
  },
  {
   "backwardYaw": 1.93,
   "yaw": -78.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F92643_8C08_27F7_41D2_DE6A101816A6"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192222_562",
 "id": "panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5",
 "thumbnailUrl": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9DE071DD_8E06_53EC_41CD_6E74FE25CF41",
  "this.overlay_9D4A0659_8E1A_70F4_4191_879129AEF0FB",
  "this.overlay_858F4960_926A_336C_41CA_1A221C242689",
  "this.popup_84EF3D76_926A_5354_41BA_9777708B3DFE",
  "this.overlay_86C2DE0B_926A_D0BC_41DE_F5374C08BFAF",
  "this.popup_87B3BD86_926A_53B4_4159_C4A7256CF448"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 165.48,
   "yaw": -165.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA"
  },
  {
   "backwardYaw": -149.84,
   "yaw": -4.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191304_221",
 "id": "panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE",
 "thumbnailUrl": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AC18DE85_8F0C_8E87_4179_A32E598E42CE",
  "this.overlay_ACA527D7_8F0C_BE83_41DE_1883D3D449D7"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EDE770F_9257_F0B4_41BD_04835F06CA9E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3B13444_9257_F0B4_41E0_6996E912F595",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -160.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_91DB39F3_8C09_EC97_41D8_487723238A28",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_91DB39F3_8C09_EC97_41D8_487723238A28_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F68079_8C38_1B93_41BD_7567F5157FB2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_83F6B5A7_8C38_64BF_41A8_3FB8EA75CE7B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F6A294_8C38_7C91_41AF_53801A889AF2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F78678_8C38_2791_41CD_65D33060086A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_83F78678_8C38_2791_41CD_65D33060086A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7C303_8C38_3D77_41AF_0573F9536E84",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_83F7FFBB_8C38_2490_41B4_987E889B3D56_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_83F7CB5E_8C38_ED91_41E1_7A0D343B566F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7F792_8C38_E491_41D9_5141E01C492E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_83F7F792_8C38_E491_41D9_5141E01C492E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_83F720E2_8C38_3CB1_41BD_AE37AF1563B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F9118A_8C08_1D71_41D5_796FC41C380A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F964B6_8C08_2490_419F_8ED3016C5D34",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F91110_8C08_1D91_4197_6A2730BE76A3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "camera": "this.panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "camera": "this.panorama_83F9D9E6_8C08_ECB1_41CC_D624392541DE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F9265B_8C08_2790_41A7_CE6318C7261D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "camera": "this.panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F95300_8C08_3D70_41D9_63C3D471B506",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "camera": "this.panorama_83F95300_8C08_3D70_41D9_63C3D471B506_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "camera": "this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "camera": "this.panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "camera": "this.panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F92643_8C08_27F7_41D2_DE6A101816A6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "camera": "this.panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F91343_8C08_3DF7_41D6_52A483E4F120",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "camera": "this.panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "camera": "this.panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F91E12_8C09_E791_41E1_1A7E67121080",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "camera": "this.panorama_83F91E12_8C09_E791_41E1_1A7E67121080_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83F90B59_8C09_ED93_415D_549E6199901A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "camera": "this.panorama_83F90B59_8C09_ED93_415D_549E6199901A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BD768485_8E0A_D05F_41BB_57EF6D488370",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "camera": "this.panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "camera": "this.panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "camera": "this.panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 61)",
   "camera": "this.panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 61, 62)",
   "camera": "this.panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 62, 63)",
   "camera": "this.panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 63, 64)",
   "camera": "this.panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 64, 65)",
   "camera": "this.panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 65, 66)",
   "camera": "this.panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 66, 67)",
   "camera": "this.panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 67, 68)",
   "camera": "this.panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 68, 69)",
   "camera": "this.panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 69, 70)",
   "camera": "this.panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 70, 71)",
   "camera": "this.panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 71, 72)",
   "camera": "this.panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 72, 73)",
   "camera": "this.panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 73, 74)",
   "camera": "this.panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 74, 75)",
   "camera": "this.panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 75, 76)",
   "camera": "this.panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 76, 77)",
   "camera": "this.panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 77, 78)",
   "camera": "this.panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 78, 79)",
   "camera": "this.panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 79, 80)",
   "camera": "this.panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 80, 81)",
   "camera": "this.panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 81, 82)",
   "camera": "this.panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 82, 83)",
   "camera": "this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 83, 84)",
   "camera": "this.panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 84, 85)",
   "camera": "this.panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 85, 86)",
   "camera": "this.panorama_CE3E85B7_8E3A_F3BC_41D4_B125092E6BEF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 86, 87)",
   "camera": "this.panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 87, 88)",
   "camera": "this.panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 88, 89)",
   "camera": "this.panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 89, 90)",
   "camera": "this.panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 90, 91)",
   "camera": "this.panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 91, 92)",
   "camera": "this.panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 92, 93)",
   "camera": "this.panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 93, 0)",
   "camera": "this.panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F9EF834_9257_F0D4_41C9_D68FB4C1C419",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -79.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C219EFC_9257_D155_41D5_BDC197651963",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 71.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8CC51FE5_9257_EF74_41C5_6E0D0BD41451",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D961114_9257_F0D4_41B4_1205D5200E52",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 163.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D986130_9257_F0EC_41DA_42C12C4B480E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 69.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 135.7,
   "yaw": -0.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D"
  },
  {
   "backwardYaw": 8.13,
   "yaw": -152.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191631_969",
 "id": "panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090",
 "thumbnailUrl": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A2189F26_8F0C_8F85_41DD_CF797EDEF9CD",
  "this.overlay_A2B6D068_8F0C_B18E_41BE_F099B9C0FBF7"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -81.12,
   "yaw": 11.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_190704_677",
 "id": "panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40",
 "thumbnailUrl": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BE1AB951_8E1A_70F4_4193_5E88A06080D1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8CE39FC7_9257_EFB4_41C8_CDEFA8C1AC36",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -148.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C801FA9_9257_EFFC_41D6_A2FF4DC39DD6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2768243_9257_F0AC_41DE_4CF88DCCBBC5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -126.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2AC52EE_9257_F174_41DA_F42797A90414",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -102.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FB15E40_9257_D0AC_41CA_42EB076AF321",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FF81EA4_9257_D1FC_41E2_12E4677C9EF1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D7F8068_9257_F17C_41C7_ECA675F1AC89",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B36D7409_9257_F0BC_41BB_575404E0E1A7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -83.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F18D77C_9257_FF54_41BD_EA8678595BD1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B31AF3E1_9257_F76C_41E2_1CCE205C0527",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 42.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E1015E1_9257_F36C_41D4_BD392792A0EB",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8DC0D1C0_9257_F3AC_41DB_51AA757896D1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3D814B4_9257_F1DC_41C1_CDBC5E438113",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E023600_9257_F0AC_41D3_3BFAEE847AD1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -13.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.07,
   "yaw": 69.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D"
  },
  {
   "backwardYaw": 85.2,
   "yaw": -92.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191819_856",
 "id": "panorama_83F9118A_8C08_1D71_41D5_796FC41C380A",
 "thumbnailUrl": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A009DDBD_8F34_9287_41D5_BA410DC9A2A5",
  "this.overlay_BE69EB69_8F35_978F_41AE_816FD5060049"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.8,
   "yaw": 165.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE"
  },
  {
   "backwardYaw": -152.15,
   "yaw": 8.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090"
  },
  {
   "backwardYaw": -89.71,
   "yaw": -8.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547"
  },
  {
   "backwardYaw": 119.75,
   "yaw": 31.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191245_505",
 "id": "panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA",
 "thumbnailUrl": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A446FCC6_8E07_D1DC_41B2_85FEE335A3B3",
  "this.overlay_A40A26B4_8E09_D1BC_41B1_D92B054899F7",
  "this.overlay_A4B4A424_8E09_F05C_41C9_FC4870D3224E",
  "this.overlay_A13FDD80_8F0C_937D_41D5_8EA12AFE76ED"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.47,
   "yaw": 2.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03"
  },
  {
   "backwardYaw": 0.2,
   "yaw": -178.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321"
  },
  {
   "backwardYaw": -92.98,
   "yaw": 85.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F9118A_8C08_1D71_41D5_796FC41C380A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220924_193619_055",
 "id": "panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9",
 "thumbnailUrl": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BCB70F4E_8E06_70EC_41E1_0875F753D6F9",
  "this.overlay_BCFAC8B9_8E07_D1B7_41C5_2AE680C0A6C0",
  "this.overlay_BF27C40C_8F37_7185_41DE_1505AC472FD0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2805321_9257_F0EC_41D8_959067F81D20",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 87.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -96.98,
   "yaw": 97.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04"
  },
  {
   "backwardYaw": -172.64,
   "yaw": -110.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115"
  },
  {
   "backwardYaw": 92.59,
   "yaw": -92.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155732_016",
 "id": "panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC",
 "thumbnailUrl": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B3F9FBB7_8E0A_B7BB_41E1_BACC3EF050EA",
  "this.overlay_B3F6D223_8E19_D054_41C1_060AE30BC13C",
  "this.overlay_CADFA7EF_8E1E_5FAC_4193_6D492268FD85"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F91CB0_8C08_E490_41D3_1E85EA08A7DD_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 128.34,
   "yaw": 60.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942"
  },
  {
   "backwardYaw": 176.73,
   "yaw": -83.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E"
  },
  {
   "backwardYaw": -173.05,
   "yaw": 72.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155147_785",
 "id": "panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A",
 "thumbnailUrl": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_80A943A7_8F1F_7683_41C8_2BAD1A5C8CA8",
  "this.overlay_9F41860A_8F15_918D_41C4_FED6D8E5C1E0",
  "this.overlay_922D5FCE_8F17_8E85_41CA_849397756C5F",
  "this.overlay_90C5FD5E_8F35_7385_41BB_D39538CBE606"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B29FB30D_9257_F0B4_41D8_BE7936262500",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C30EEEA_9257_D17C_41C3_102FAA273CE5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 114.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 11.73,
   "yaw": -81.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40"
  },
  {
   "backwardYaw": 86.2,
   "yaw": 87.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_190840_187",
 "id": "panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2",
 "thumbnailUrl": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BC80A6BD_8F15_FE87_41DD_75EBE6EA1B40",
  "this.overlay_BB2875D7_8F13_9283_41C7_0D6487F28246"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.47,
   "yaw": -143,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2"
  },
  {
   "backwardYaw": 163.52,
   "yaw": 77.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04"
  },
  {
   "backwardYaw": -137.73,
   "yaw": 134.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155806_713",
 "id": "panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577",
 "thumbnailUrl": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B059736F_8E7A_70AB_41D3_FAB6A739BF43",
  "this.overlay_CD820909_8E7A_5057_41D1_8427365B6EED",
  "this.overlay_C7D8874D_8E1A_50EC_41D6_FC13314E5301"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3ED23F_8E3A_B0AB_41DB_5E5A4F639AE0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E2395B7_9257_F3D4_41DF_6620BEA76832",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -66.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191323_119",
 "id": "panorama_83F7C303_8C38_3D77_41AF_0573F9536E84",
 "thumbnailUrl": "media/panorama_83F7C303_8C38_3D77_41AF_0573F9536E84_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_87D23C2A_9276_30FC_41CB_AEB944FDD285",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_84EF3D76_926A_5354_41BA_9777708B3DFE_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_84EF3D76_926A_5354_41BA_9777708B3DFE_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_84EF3D76_926A_5354_41BA_9777708B3DFE_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_84EF3D76_926A_5354_41BA_9777708B3DFE_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191518_993",
 "id": "panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5",
 "thumbnailUrl": "media/panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 77.08,
   "yaw": 163.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577"
  },
  {
   "backwardYaw": 97.5,
   "yaw": -96.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC"
  },
  {
   "backwardYaw": -92.32,
   "yaw": 84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155748_161",
 "id": "panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04",
 "thumbnailUrl": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B25906EE_8E7F_B1AC_4183_1356F0727CC4",
  "this.overlay_B0EA762A_8E7B_B054_41C4_161316D11BAB",
  "this.overlay_8444E4D7_927A_7154_41E1_DD7E5AF50444"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B"
  },
  {
   "backwardYaw": -82.75,
   "yaw": 179.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F91343_8C08_3DF7_41D6_52A483E4F120"
  },
  {
   "backwardYaw": -77.03,
   "yaw": 127.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F91E12_8C09_E791_41E1_1A7E67121080"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192250_600",
 "id": "panorama_83F90B59_8C09_ED93_415D_549E6199901A",
 "thumbnailUrl": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9E25D462_8E0B_D0D4_41C1_7DA036935D41",
  "this.overlay_9C7F686F_8E0A_50AC_41E0_B0CD124DB590",
  "this.overlay_9EED3FC2_8E0A_CFD4_41DC_023BC65BB95F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F259DBB_9257_D3DC_41C6_79608BFD062E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_87D60C2A_9276_30FC_41DB_52DA65F2F352",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_814A46D6_926A_D154_41BA_4E887EC21464_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_814A46D6_926A_D154_41BA_4E887EC21464_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_814A46D6_926A_D154_41BA_4E887EC21464_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_814A46D6_926A_D154_41BA_4E887EC21464_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8CBCBF75_9257_EF54_41E0_774421D4E820",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -117.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B350F41D_9257_F0D4_41DB_850992156A2C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8C67EF3B_9257_D0DC_41CF_907A81FDE2A2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 172.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -65.78,
   "yaw": 167.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4"
  },
  {
   "backwardYaw": -108.94,
   "yaw": 1.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191225_375",
 "id": "panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8",
 "thumbnailUrl": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9021DDDA_8E06_D3F4_41D0_7558A9B1D8AF",
  "this.overlay_90ACBE97_8E06_D07C_41DB_FA34F60BD321"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B3E63494_9257_F1D4_41D8_907C3A23076E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 102.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CDA61216_8E3E_507C_41BD_6FC513FE9CB4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_192122_055",
 "id": "panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9",
 "thumbnailUrl": "media/panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.45,
   "yaw": 179.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9"
  },
  {
   "backwardYaw": -60.25,
   "yaw": 0.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220924_193531_029",
 "id": "panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03",
 "thumbnailUrl": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BDB6CA79_8E39_F0B7_41D7_61ABBF04868F",
  "this.overlay_BDCB88A6_8E39_B05C_41DF_60484F0978AE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F738792_9257_FFAC_41D8_0246A300744D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F79C7A6_9257_FFF4_41DF_88138EAE87B1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 162.82,
   "yaw": 19.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB"
  },
  {
   "backwardYaw": -1.75,
   "yaw": 111.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F68079_8C38_1B93_41BD_7567F5157FB2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_190745_799",
 "id": "panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9",
 "thumbnailUrl": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A0BE9273_8E06_D0B4_41B3_03B0DF1A56F8",
  "this.overlay_A0F32766_8E06_F0DC_41A5_BF2C770B2921"
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220929_155301_742",
 "id": "panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47",
 "thumbnailUrl": "media/panorama_CE3E838D_8E3A_D06C_41D2_596D70992C47_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 50.2,
   "yaw": -140.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_154748_998",
 "id": "panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F",
 "thumbnailUrl": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_93CF9350_8F15_F79D_41DA_A398CA525BF1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B33633AE_9257_F7F4_41C1_0E61979A6B15",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F91E12_8C09_E791_41E1_1A7E67121080_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 76.09,
   "yaw": 121.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_154923_000",
 "id": "panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6",
 "thumbnailUrl": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_92EE5438_8F34_918D_4153_3950BCF28CF0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F5497C5_9257_FFB4_41D7_8ABFA47C62C4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FEA8EB8_9257_D1DC_41D9_BB6D32FD92B1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220929_155340_651",
 "id": "panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84",
 "thumbnailUrl": "media/panorama_CE3EB6F1_8E3A_D1B7_4190_63022FDFDC84_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.05,
   "yaw": 176.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_154905_024",
 "id": "panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E",
 "thumbnailUrl": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B9D4F927_8F73_7382_41CA_BCD91A6EC678"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F852E86_9257_D1B4_419B_DBFB80D8718C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.29,
   "yaw": -179.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_91DB39F3_8C09_EC97_41D8_487723238A28"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_152853_840",
 "id": "panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6",
 "thumbnailUrl": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_83C7BDDB_8E09_B3F4_41D7_807ABB86C3E3",
  "this.overlay_80A7928C_8E0E_D06C_41DE_401C079643AB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8DEC8183_9257_F3AC_41D2_9B62FF5E2286",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2C5B39A_9257_F7DC_41DC_FDAEB35F0584",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -12.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B2E3A35E_9257_F754_41E2_2542881B155F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 156.16,
   "yaw": 8.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F92643_8C08_27F7_41D2_DE6A101816A6"
  },
  {
   "backwardYaw": -148.15,
   "yaw": 50.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B"
  },
  {
   "backwardYaw": 179.47,
   "yaw": -82.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F90B59_8C09_ED93_415D_549E6199901A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192208_508",
 "id": "panorama_83F91343_8C08_3DF7_41D6_52A483E4F120",
 "thumbnailUrl": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9BDC78D5_8E1E_B1FC_41E0_EEFCB8472B90",
  "this.overlay_9809DC46_8E1E_50DD_41B1_72469BBA8426",
  "this.overlay_9BE16F6C_8E1E_50AC_41D6_D26B1090B441"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F69F46_8C38_25F1_41D1_AB977D8617E5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8DFA0165_9257_F374_41CF_8FC9170174C7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 30.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 53.95,
   "yaw": 3.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5"
  },
  {
   "backwardYaw": 127.11,
   "yaw": -77.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F90B59_8C09_ED93_415D_549E6199901A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192236_705",
 "id": "panorama_83F91E12_8C09_E791_41E1_1A7E67121080",
 "thumbnailUrl": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9D18B9D6_8E07_F3FC_41D0_A505D590505D",
  "this.overlay_9D6E6BDC_8E07_D7EC_41DA_16B7D9B8B427"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 134.32,
   "yaw": -137.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A"
  },
  {
   "backwardYaw": 169.66,
   "yaw": 85.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155554_210",
 "id": "panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3",
 "thumbnailUrl": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C862C4E9_8E1A_71D4_41B9_EEB1F87661C0",
  "this.overlay_C86307AC_8E1E_DFAC_41CA_2C925845C525",
  "this.overlay_85BBC173_9276_336C_41D4_866D1E5B2882"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B23181D4_9257_F354_41C8_6B6DBDD4D620",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 101.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 76.75,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.81,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_84EF3D76_926A_5354_41BA_9777708B3DFE",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_84EF3D76_926A_5354_41BA_9777708B3DFE_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.44
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_190913_204",
 "id": "panorama_83F6A294_8C38_7C91_41AF_53801A889AF2",
 "thumbnailUrl": "media/panorama_83F6A294_8C38_7C91_41AF_53801A889AF2_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F6D5E0B_9257_D0BC_41BC_CE05F14775B3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EA03696_9257_F1D4_41DD_AB9702231F1F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 31.72,
   "yaw": 119.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_191837_621",
 "id": "panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7",
 "thumbnailUrl": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A47CD893_8E1E_5074_41AD_935EECFF07EB",
  "this.overlay_A435EFBF_8E1E_4FAC_41AE_F8C9397FF1A2"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B214E210_9257_F0AC_41B8_4EE321D10BF8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191933_081",
 "id": "panorama_83F964B6_8C08_2490_419F_8ED3016C5D34",
 "thumbnailUrl": "media/panorama_83F964B6_8C08_2490_419F_8ED3016C5D34_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D389003_9257_F0AC_417E_63D91F0917EE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191947_842",
 "id": "panorama_83F91110_8C08_1D91_4197_6A2730BE76A3",
 "thumbnailUrl": "media/panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 167.93,
   "yaw": -65.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8"
  },
  {
   "backwardYaw": 171.81,
   "yaw": 156,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F"
  },
  {
   "backwardYaw": -5.44,
   "yaw": -137.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A"
  },
  {
   "backwardYaw": 115.25,
   "yaw": 81.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F95300_8C08_3D70_41D9_63C3D471B506"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192105_636",
 "id": "panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4",
 "thumbnailUrl": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9A8CE596_8C08_2491_41BE_C27CEE6B62DC",
  "this.overlay_9BA969CC_8C08_2CF1_41D6_61F19F70504E",
  "this.overlay_945CDEDC_8E3E_71EC_41D5_FBAC764DD7A1",
  "this.overlay_951731E3_8E39_F3D4_41AF_FA385B0BB706",
  "this.overlay_95BA98E6_8E3B_B1DD_41D5_DF43CBF89CBD",
  "this.overlay_80F18A65_9269_F174_41C4_C140760CACCF",
  "this.popup_814A46D6_926A_D154_41BA_4E887EC21464"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B268B27D_9257_F154_41D5_210A4528DB03",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 103.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 81.09,
   "yaw": 115.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4"
  },
  {
   "backwardYaw": 102.16,
   "yaw": -105.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F9265B_8C08_2790_41A7_CE6318C7261D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192050_695",
 "id": "panorama_83F95300_8C08_3D70_41D9_63C3D471B506",
 "thumbnailUrl": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AB2BE5AC_8E09_D3AD_41D2_C87FE5CE900C",
  "this.overlay_A8FFC1BC_8E06_53AC_41D3_68C2C3F11E4D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8FA3FE52_9257_D0AC_41E1_FCD9E59D3673",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8EDFCD89_9257_D3BC_41DC_82489D654365",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E51A650_9257_F0AC_4191_D7464931D2E0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 98.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F91110_8C08_1D91_4197_6A2730BE76A3_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B22201F2_9257_F36C_41CB_447F8E54DCF6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -103.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155440_252",
 "id": "panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5",
 "thumbnailUrl": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2BDEA9C_8E0A_506C_41D2_6DB3934AADF6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.71,
   "yaw": 0.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6"
  },
  {
   "backwardYaw": -7.48,
   "yaw": 177.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_153000_980",
 "id": "panorama_91DB39F3_8C09_EC97_41D8_487723238A28",
 "thumbnailUrl": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_97B8E281_8C08_7F73_41A7_4ACEA639023D",
  "this.overlay_962B128E_8C08_3F71_41B6_E6BCBE3AE232",
  "this.overlay_9699C21F_8C19_FF8F_41DA_EDA8F22FFF9E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -11.45,
   "yaw": 172.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB"
  },
  {
   "backwardYaw": 176.93,
   "yaw": -5.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220924_193642_630",
 "id": "panorama_BD768485_8E0A_D05F_41BB_57EF6D488370",
 "thumbnailUrl": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BF9E1516_8E0B_D07C_41DC_1C286099C1D5",
  "this.overlay_BFBC04B0_8E0B_F1B4_41E0_E0116C75376E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F12B76A_9257_FF7C_419B_7AF136D4BDD7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220920_191725_277",
 "id": "panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C",
 "thumbnailUrl": "media/panorama_83F6CA5E_8C07_EF91_41E1_2A64A4E9409C_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.03,
   "yaw": 176.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BD768485_8E0A_D05F_41BB_57EF6D488370"
  },
  {
   "backwardYaw": -178.77,
   "yaw": 0.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220924_193709_338",
 "id": "panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321",
 "thumbnailUrl": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BF808027_8E09_D05B_41C4_432DEFE53A3B",
  "this.overlay_BFD2966B_8E09_F0D4_41D5_C4C08295DDB6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.68,
   "yaw": 95.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236"
  },
  {
   "backwardYaw": 84,
   "yaw": -92.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155636_038",
 "id": "panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9",
 "thumbnailUrl": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CAE676BF_8E09_D1AB_41A9_27240E4C3D3A",
  "this.overlay_C6620900_8E0A_D055_41DC_9FB28BAEBB3C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F188DD1_9257_D3AC_41C9_E153AF690A2B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE3A0626_8E3E_505D_41DD_D30F394F702C"
  },
  {
   "backwardYaw": -91.91,
   "yaw": 104.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20"
  },
  {
   "backwardYaw": 83.59,
   "yaw": -91.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155104_304",
 "id": "panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906",
 "thumbnailUrl": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9C5E146E_8F74_9185_41D0_9D2802B3D0CB",
  "this.overlay_9CBFC61A_8F7C_F18D_419E_2EC50AE2C2C4",
  "this.overlay_905207D9_8F3D_9E8F_41DE_0CC51414B8B6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8D4370B9_9257_F1DC_41D1_2E1E79947C87",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F69EFB_8C38_6490_41CA_AB6931743EAF_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "20220929_155001_261",
 "id": "panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D",
 "thumbnailUrl": "media/panorama_CE3DA727_8E39_B05B_4198_1FDA08A9686D_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 8.47,
   "yaw": 156.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F91343_8C08_3DF7_41D6_52A483E4F120"
  },
  {
   "backwardYaw": -78.9,
   "yaw": 1.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220920_192153_464",
 "id": "panorama_83F92643_8C08_27F7_41D2_DE6A101816A6",
 "thumbnailUrl": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9962987F_8E1A_70AB_4192_9154066658AE",
  "this.overlay_998A2275_8E1A_F0BF_41A6_5FA7886ADE17"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E09A614_9257_F0D4_41D7_FEB3A3873453",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 163.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE3EE99A_8E3A_5074_41E1_C0E9ECF96518"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5"
  },
  {
   "backwardYaw": -106.64,
   "yaw": 91.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37"
  },
  {
   "backwardYaw": 90.95,
   "yaw": -93.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155457_871",
 "id": "panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE",
 "thumbnailUrl": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C60B3A8B_8E0A_5054_41B6_ADBFEC0193E2",
  "this.overlay_C2908445_8E0A_50DC_41DC_757B24740F10",
  "this.overlay_C008920B_8E0A_706B_41D3_00383E702ECC",
  "this.overlay_C378FA0E_8FFA_506A_41B8_E5AA971B6168",
  "this.overlay_C2095F35_8E07_B0BC_41CC_1AD0CC84345D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_B30BC3EB_9257_F77C_41D4_3DE2915B5B2B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8E9CB6B4_9257_F1D4_41D0_CD0D9F86F54F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.98,
   "yaw": 171.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B"
  },
  {
   "backwardYaw": 177.43,
   "yaw": -7.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_91DB39F3_8C09_EC97_41D8_487723238A28"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F90B59_8C09_ED93_415D_549E6199901A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_153023_419",
 "id": "panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F",
 "thumbnailUrl": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_94F13A0E_8C08_2F71_41D9_3EAC652E992E",
  "this.overlay_97742882_8C08_EB71_41E1_47B659C10B8B",
  "this.overlay_813CA528_8E0A_7055_41E0_DC51C2C33D74"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F7C0DF7_9257_D354_41D9_DA5D16F36235",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 2.38,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 14.54,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_8313F304_925A_F0B4_41DA_D7E8247DDF7B",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8313F304_925A_F0B4_41DA_D7E8247DDF7B_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -4.5
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_83F91C94_8C08_6490_41B8_CDA02858AEA9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -143,
   "yaw": 62.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577"
  },
  {
   "backwardYaw": -176.56,
   "yaw": -5.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "20220929_155827_799",
 "id": "panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2",
 "thumbnailUrl": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B7768017_8E06_507B_41C8_3FF9D7BFA32D",
  "this.overlay_B559C2DD_8E06_71EF_41E1_8A8DB49DAF55"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_8F947E70_9257_D16C_41DC_D65F60813361",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "cursor": "hand",
 "id": "IconButton_89571D06_9256_F0B4_41D2_7F17AEC4023C",
 "width": 56,
 "transparencyActive": false,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": "2.26%",
 "minWidth": 1,
 "maxWidth": 56,
 "iconURL": "skin/IconButton_89571D06_9256_F0B4_41D2_7F17AEC4023C.png",
 "maxHeight": 56,
 "bottom": "6.8%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 56,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton14318"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent29777"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage29778"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton29779"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "top": 10,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B, this.camera_8FB15E40_9257_D0AC_41CA_42EB076AF321); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.5,
   "image": "this.AnimatedImageResource_AC2902D5_8C18_1C90_4195_51D93DB68B99",
   "pitch": -22.22,
   "yaw": -2.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A817FC1_8C09_E4F3_41C6_87F6A2F1E818",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.5,
   "yaw": -2.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.22
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4, this.camera_8F40BE2B_9257_D0FC_41E0_2ED609F8327E); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.39,
   "image": "this.AnimatedImageResource_AC29A2D5_8C18_1C90_419D_8F4183993357",
   "pitch": -18.77,
   "yaw": 171.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_95190C39_8C08_2B90_41B8_80F6A30E5E14",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.39,
   "yaw": 171.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F, this.camera_8D52A0A3_9257_F1EC_41D3_D6792A70A7E6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.39,
   "image": "this.AnimatedImageResource_AC2E32D5_8C18_1C90_41A6_B0D5D56004ED",
   "pitch": -14.32,
   "yaw": -2.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_951E095D_8C08_ED90_4195_7A3FA712D73E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.39,
   "yaw": -2.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F, this.camera_8D7F8068_9257_F17C_41C7_ECA675F1AC89); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.14,
   "image": "this.AnimatedImageResource_AC2EC2D5_8C18_1C90_41BC_E7F66F4BAE89",
   "pitch": -24.55,
   "yaw": 176.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9445DD69_8C08_E5B3_41C4_A666F0731A54",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.14,
   "yaw": 176.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5, this.camera_8D61E087_9257_F1B4_41BB_1FFAD036782B); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.76,
   "image": "this.AnimatedImageResource_B8547FB6_8E09_CFBC_41DB_B688B11D4D54",
   "pitch": -9.41,
   "yaw": -88.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9743BA3D_8E3A_B0AC_41C8_5BA441FF057B",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.76,
   "yaw": -88.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.41
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F91343_8C08_3DF7_41D6_52A483E4F120, this.camera_8D4370B9_9257_F1DC_41D1_2E1E79947C87); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.22,
   "image": "this.AnimatedImageResource_B854EFB6_8E09_CFBC_41DC_34A893C443C5",
   "pitch": -10.21,
   "yaw": -148.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_906793CE_8E3A_B7ED_41C2_82E3ECA2A61A",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.22,
   "yaw": -148.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F95300_8C08_3D70_41D9_63C3D471B506, this.camera_8EC4C721_9257_F0EC_41C7_3D55521622F3); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.27,
   "image": "this.AnimatedImageResource_B84DBFC5_8E09_CFDC_41D8_701D12D12190",
   "pitch": -15.55,
   "yaw": 102.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A913D5A2_8E1A_B054_41DF_A49A857D031B",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.27,
   "yaw": 102.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547, this.camera_8EDE770F_9257_F0B4_41BD_04835F06CA9E); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.01,
   "image": "this.AnimatedImageResource_B8420FC5_8E09_CFDC_41AB_C0F31225B27A",
   "pitch": -18,
   "yaw": 3.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A9A92D7F_8E1A_50AC_41BE_3021096F610E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.01,
   "yaw": 3.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ]
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "hfov": 18.88,
   "image": "this.AnimatedImageResource_B84A0FB6_8E09_CFBC_41D3_426746E85FF7",
   "pitch": -26.18,
   "yaw": 145.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_9004C266_8E0A_B0DD_41DE_10D72E049923",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.88,
   "yaw": 145.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F68079_8C38_1B93_41BD_7567F5157FB2, this.camera_B2F17347_9257_F0B4_41A9_D394F25A52B1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.31,
   "image": "this.AnimatedImageResource_B84ABFB6_8E09_CFBC_41C9_72CE37BD89E8",
   "pitch": -15.14,
   "yaw": 41.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90A3787C_8E0A_50AC_41CA_73E84557C347",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.31,
   "yaw": 41.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9, this.camera_8D37EFEF_9257_EF74_41DA_6D8781F2FF10); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.17,
   "image": "this.AnimatedImageResource_99B941A7_8C38_7CBF_41D2_9CABC3D48CDD",
   "pitch": -24.34,
   "yaw": -0.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E639F91_8C08_2493_41C8_70B0987778D7",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.17,
   "yaw": -0.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49, this.camera_8D389003_9257_F0AC_417E_63D91F0917EE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.06,
   "image": "this.AnimatedImageResource_99B881A7_8C38_7CBF_41CA_0B0EFA184D69",
   "pitch": -17.59,
   "yaw": 176.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99495688_8C08_2771_41CD_B28885149C06",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.06,
   "yaw": 176.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.59
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0_HS_0_0.png",
      "width": 140,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": 1.63,
   "yaw": -16.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_958E9A86_8E06_505C_41C1_0E5810743EB6",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.29,
   "yaw": -16.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 1.63
  }
 ]
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "hfov": 19.38,
   "image": "this.AnimatedImageResource_B84B1FB6_8E09_CFBC_41DD_6C47B5382007",
   "pitch": -23.04,
   "yaw": 71.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_9582FC3D_8E06_D0AC_41B3_8FAE24F0135D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.38,
   "yaw": 71.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.04
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294, this.camera_8D961114_9257_F0D4_41B4_1205D5200E52); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.37,
   "image": "this.AnimatedImageResource_B84B4FB6_8E09_CFBC_41D8_B01F5F9D58B6",
   "pitch": -23.1,
   "yaw": -99.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_922DB55E_8E06_50ED_41CF_E95B25CF62AF",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.37,
   "yaw": -99.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.1
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9, this.camera_B3B13444_9257_F0B4_41E0_6996E912F595); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.19,
   "image": "this.AnimatedImageResource_ADC2D4E4_8F15_B285_41BA_36AF419BF36E",
   "pitch": -12.31,
   "yaw": 162.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1A5060D_8E06_B06C_41D5_0932ADF5B2AB",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.19,
   "yaw": 162.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.31
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD768485_8E0A_D05F_41BB_57EF6D488370, this.camera_B3405430_9257_F0EC_41A0_9BBC701D5A30); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.3,
   "image": "this.AnimatedImageResource_ADC544E5_8F15_B287_41DD_6886A0A7BBB4",
   "pitch": -10.26,
   "yaw": -11.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A12A3BF1_8E06_77B4_41DA_3FFFA7F346C1",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.3,
   "yaw": -11.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.26
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9, this.camera_8F331DA9_9257_D3FC_419C_D707AC217D24); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.14,
   "image": "this.AnimatedImageResource_ADC484EC_8F15_B285_41CD_EDB42B89A6CE",
   "pitch": -16.77,
   "yaw": -1.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A34FD280_8E0E_5055_41D0_86EB3FBDA9F6",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.14,
   "yaw": -1.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38, this.camera_8EC27D95_9257_D3D4_41C8_A9F8E46FD2CB); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.46,
   "image": "this.AnimatedImageResource_ADC734EC_8F15_B285_41D9_F89DF89D9DC8",
   "pitch": -13.5,
   "yaw": 177.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A08AEDE4_8E0E_73DC_41BE_188B6E3ECB84",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.46,
   "yaw": 177.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294, this.camera_8EE3A6F1_9257_F16C_41CB_B3FF2F880E7D); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.44,
   "image": "this.AnimatedImageResource_B848BFB6_8E09_CFBC_419B_E9F9E866B1A0",
   "pitch": -22.5,
   "yaw": 1.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AFE064D6_8E7E_B1FC_41B7_EBC7015B3552",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.44,
   "yaw": 1.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275, this.camera_8EE82703_9257_F0AC_41DE_C0ADC2A1C476); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.14,
   "image": "this.AnimatedImageResource_B8492FB6_8E09_CFBC_4164_53E0C6D1B58C",
   "pitch": -24.55,
   "yaw": 113.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF9C3214_8E7E_507C_41B7_FB2B32A0C7A5",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.14,
   "yaw": 113.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A, this.camera_8F0B9DE5_9257_D374_41D6_B2BDA76F5A65); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.53,
   "image": "this.AnimatedImageResource_B84BDFB6_8E09_CFBC_41B5_D5CC3CCD93A6",
   "pitch": -12.68,
   "yaw": -16.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AADC2291_8E3E_B074_41DC_62FDAF1DA07D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.53,
   "yaw": -16.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F78678_8C38_2791_41CD_65D33060086A, this.camera_8F188DD1_9257_D3AC_41C9_E153AF690A2B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.39,
   "image": "this.AnimatedImageResource_B8480FB6_8E09_CFBC_41E0_AF63D41408E3",
   "pitch": -14.32,
   "yaw": -177.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB4553FC_8E3E_77AC_41B3_ACAB59444E3B",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.39,
   "yaw": -177.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.35,
   "image": "this.AnimatedImageResource_B8494FB6_8E09_CFBC_41C6_238A17002405",
   "pitch": -14.73,
   "yaw": -5.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE3CA33C_8E7A_50AC_41E1_6DBFD3451119",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.35,
   "yaw": -5.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2, this.camera_B02DB4E6_9257_F174_41E0_66D67FFE621E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.8,
   "image": "this.AnimatedImageResource_B849EFB6_8E09_CFBC_41D2_FE01A22A36C0",
   "pitch": -8.59,
   "yaw": 86.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF4621BB_8E79_F3B4_41C3_4925851078FE",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.8,
   "yaw": 86.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.59
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F78678_8C38_2791_41CD_65D33060086A, this.camera_8E2395B7_9257_F3D4_41DF_6620BEA76832); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.55,
   "image": "this.AnimatedImageResource_B84E0FB6_8E09_CFBC_41A8_C3558388D4D4",
   "pitch": -21.68,
   "yaw": 166.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_91E001BB_8E79_B3B4_41DC_770FA709879E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.55,
   "yaw": 166.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8, this.camera_B03A84DC_9257_F154_41C9_A84D20DAF826); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.01,
   "image": "this.AnimatedImageResource_A049EEB9_8F14_8E8F_417A_88897048F4D5",
   "pitch": -18,
   "yaw": -108.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7EFF8C0_8F0C_B2FD_4195_F139ECEB2F58",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.01,
   "yaw": -108.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A, this.camera_8EC9172D_9257_F0F4_41BA_2689C14E63D0); this.mainPlayList.set('selectedIndex', 82)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_1_HS_0_0.png",
      "width": 303,
      "class": "ImageResourceLevel",
      "height": 338
     }
    ]
   },
   "pitch": -11.25,
   "yaw": -173.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_81789926_8F33_B385_41D0_A99128F09A13",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.65,
   "yaw": -173.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -11.25
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906, this.camera_8F26374C_9257_F0B4_41A4_92DC469330F8); this.mainPlayList.set('selectedIndex', 80)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.31,
   "image": "this.AnimatedImageResource_AD9155B4_8F15_B285_41D3_62A5D9933A2D",
   "pitch": -24.95,
   "yaw": -91.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9EECCE9F_8F74_8E83_41BC_EC0134B246EA",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.31,
   "yaw": -91.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F, this.camera_8F31C740_9257_F0AC_41DE_27C24EB1EB8C); this.mainPlayList.set('selectedIndex', 78)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.31,
   "image": "this.AnimatedImageResource_AD9015BA_8F15_B28D_41D2_865B4010A2B7",
   "pitch": -24.95,
   "yaw": 96.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_976BDB77_8F15_9783_41D6_5B50B0DF37AA",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.31,
   "yaw": 96.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_1_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB, this.camera_B350F41D_9257_F0D4_41DB_850992156A2C); this.mainPlayList.set('selectedIndex', 79)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.88,
   "image": "this.AnimatedImageResource_ADABD594_8F15_B285_41C7_351129BC4700",
   "pitch": -27.82,
   "yaw": 103.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9A4A29AF_8F77_7283_41D2_EBFC21C3FCD3",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.88,
   "yaw": 103.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20, this.camera_B36D7409_9257_F0BC_41BB_575404E0E1A7); this.mainPlayList.set('selectedIndex', 81)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.74,
   "image": "this.AnimatedImageResource_ADAA959A_8F15_B28D_41D7_53C3B0E16C07",
   "pitch": -21.68,
   "yaw": -96.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_98835D8C_8F0C_9285_41D2_B47CF9204137",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.74,
   "yaw": -96.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6, this.camera_B37C63FF_9257_F754_41C8_DFA142257A55); this.mainPlayList.set('selectedIndex', 75)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_1_HS_2_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": 0.41,
   "yaw": 76.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_92245BA9_8F37_968F_41CB_8AC6ED25AEAD",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.27,
   "yaw": 76.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.41
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.86,
   "image": "this.AnimatedImageResource_ADBA5555_8F15_B387_41DA_08A43189DFD3",
   "pitch": -18.56,
   "yaw": -30.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B4247E98_8E0E_D074_41C6_BEBA0CF91F5A",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.86,
   "yaw": -30.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.56
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.9,
   "image": "this.AnimatedImageResource_ADBAF556_8F15_B385_41D1_40B693763D77",
   "pitch": -17.73,
   "yaw": 27.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B5F96926_8E0A_B05C_41E1_24D2EEA732CE",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.9,
   "yaw": 27.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE, this.camera_8FBC3801_9257_F0AC_41E0_F5588DA82F3D); this.mainPlayList.set('selectedIndex', 92)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.79,
   "image": "this.AnimatedImageResource_AD99E5DA_8F15_B28D_41BD_A770FBAC759F",
   "pitch": -21.27,
   "yaw": 83.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C472A38E_8E07_B06C_41CF_968C3C706F08",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.79,
   "yaw": 83.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE, this.camera_8FB527F7_9257_FF54_41C6_B2D2E4A3BABD); this.mainPlayList.set('selectedIndex', 90)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.84,
   "image": "this.AnimatedImageResource_AD98B5DB_8F15_B283_41D2_C9C29DE70564",
   "pitch": -20.86,
   "yaw": -106.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C0D469E1_8E06_73D4_41DF_2902A70DEE7F",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.84,
   "yaw": -106.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4, this.camera_B31AF3E1_9257_F76C_41E2_1CCE205C0527); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.76,
   "image": "this.AnimatedImageResource_AC2A92D0_8C18_1C90_41D6_89EF01B1A3D2",
   "pitch": -20.05,
   "yaw": -5.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98F2E21A_8C38_3F91_41DD_000A02D29798",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.76,
   "yaw": -5.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.05
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D, this.camera_B30BC3EB_9257_F77C_41D4_3DE2915B5B2B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.73,
   "image": "this.AnimatedImageResource_AC2B22D0_8C18_1C90_41B9_E22EED552346",
   "pitch": -20.34,
   "yaw": 175.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B56E9FB_8C38_2C97_41B1_6666BA5F25A1",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.73,
   "yaw": 175.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2, this.camera_8E9666AA_9257_F1FC_41D7_2B032C01BBC7); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.44,
   "image": "this.AnimatedImageResource_ADC6E4F3_8F15_B283_41DF_C4A4260CFAD9",
   "pitch": -24.14,
   "yaw": -176.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B7C85C2E_8E0A_D0AC_41BC_0FB6B18B0085",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.44,
   "yaw": -176.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49, this.camera_8F9EF834_9257_F0D4_41C9_D68FB4C1C419); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.44,
   "image": "this.AnimatedImageResource_99B911A7_8C38_7CBF_4199_3F1481A2FAA8",
   "pitch": -22.5,
   "yaw": -105.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9FF582E1_8C08_1CB3_41DE_78754A263519",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.44,
   "yaw": -105.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_8313F304_925A_F0B4_41DA_D7E8247DDF7B, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_87FCFC1B_9276_30DC_41DB_622C02BE32B0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0_HS_1_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -4.5,
   "yaw": 2.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_829FF2E0_925A_716C_41E2_3E2E7F2B6838",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.54,
   "yaw": 2.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_0_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F9265B_8C08_2790_41A7_CE6318C7261D, this.camera_8EA03696_9257_F1D4_41DD_AB9702231F1F); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.23,
   "image": "this.AnimatedImageResource_B84CBFC5_8E09_CFDC_41D3_D5F55E1A2C8D",
   "pitch": -15.95,
   "yaw": 87.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6FAF2D1_8E1A_51F4_41D4_937D96EF6149",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.23,
   "yaw": 87.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA, this.camera_8EBBC68C_9257_F1B4_41B9_8FD7AB95358D); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.23,
   "image": "this.AnimatedImageResource_B84CCFC5_8E09_CFDC_41E1_0E63B35E7573",
   "pitch": -15.95,
   "yaw": -89.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A69BA6BA_8E19_B1B5_41D2_F441D90C54B7",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.23,
   "yaw": -89.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B, this.camera_8D0C804A_9257_F0BC_41D0_8F5AD92F1E27); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.81,
   "image": "this.AnimatedImageResource_B8416FC5_8E09_CFDC_41C1_D6F313119D54",
   "pitch": -26.72,
   "yaw": -179.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97195B81_8E39_D054_419A_4F9922EDD0EF",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.81,
   "yaw": -179.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.72
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D, this.camera_8F852E86_9257_D1B4_419B_DBFB80D8718C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.49,
   "image": "this.AnimatedImageResource_99B8D1A7_8C38_7CBF_41CB_65C373E976B0",
   "pitch": -22.09,
   "yaw": 10.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9928C147_8C09_FDFF_41E1_75DC4E65A37D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.49,
   "yaw": 10.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F, this.camera_8FF7AE9A_9257_D1DC_41E1_A8F618BEBF5A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.56,
   "image": "this.AnimatedImageResource_99B811A7_8C38_7CBF_41A7_853637963E46",
   "pitch": -12.27,
   "yaw": -172.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B727271_8C08_1F90_41CC_CAD9C585DCAE",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.56,
   "yaw": -172.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908, this.camera_8F162DC7_9257_D3B4_41C4_CE2AED2D5E78); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.32,
   "image": "this.AnimatedImageResource_99B851A7_8C38_7CBF_41D7_39EF3265C383",
   "pitch": -23.32,
   "yaw": -9.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99AEB21A_8C08_1F91_41D2_FEE3B36434DC",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.32,
   "yaw": -9.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9, this.camera_8F259DBB_9257_D3DC_41C6_79608BFD062E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.2,
   "image": "this.AnimatedImageResource_99BB81A7_8C38_7CBF_41C8_254BF910C960",
   "pitch": -15.34,
   "yaw": 170.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_983F1576_8C09_E591_41AA_CA203FCD18AE",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.2,
   "yaw": 170.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090, this.camera_8D2AF00E_9257_F0B4_41CC_B500692487A2); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.9,
   "image": "this.AnimatedImageResource_875BBBC6_9276_37B4_41DF_EA636438F5EA",
   "pitch": -18,
   "yaw": 135.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A22E1521_8F34_B3BF_41B6_C8DD8BEC55DF",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.9,
   "yaw": 135.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.32,
   "image": "this.AnimatedImageResource_875B3BC6_9276_37B4_41D1_5E0B858F80AC",
   "pitch": -23.32,
   "yaw": -112.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A126C531_8F34_B39F_41C1_EDB1C860813D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.32,
   "yaw": -112.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F9118A_8C08_1D71_41D5_796FC41C380A, this.camera_8D1BF034_9257_F0D4_41AB_B6B71559A8AC); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.49,
   "image": "this.AnimatedImageResource_8758BBC6_9276_37B4_41DA_1CF2C6085644",
   "pitch": -13.09,
   "yaw": -16.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A13031A1_8F33_92BF_41BC_6D9E0D11BC54",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.49,
   "yaw": -16.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906, this.camera_8E6BB63C_9257_F0D4_41DE_CF1498E6A3C2); this.mainPlayList.set('selectedIndex', 80)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.31,
   "image": "this.AnimatedImageResource_ADAC359D_8F15_B287_41B4_7A440156D338",
   "pitch": -24.95,
   "yaw": 83.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9952592B_8F73_7383_41C1_49F3F823BBB6",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.31,
   "yaw": 83.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F, this.camera_8E65C632_9257_F0EC_41CF_8889918FCB06); this.mainPlayList.set('selectedIndex', 78)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.69,
   "image": "this.AnimatedImageResource_ADACF5A3_8F15_B283_41D5_5032EF273179",
   "pitch": -22.09,
   "yaw": -95.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9B383627_8F75_9183_41BA_C2FC920733F4",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.69,
   "yaw": -95.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 77)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.09,
   "image": "this.AnimatedImageResource_ADAC25A5_8F15_B287_41D3_D347EF3C108B",
   "pitch": -30.68,
   "yaw": 178.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94B2066D_8F13_9187_41E0_DA6EDDCF4681",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.09,
   "yaw": 178.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03, this.camera_8F5E0E17_9257_D0D4_41CB_560D57686A6A); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.46,
   "image": "this.AnimatedImageResource_A16B6B33_8FF3_B783_41DD_6FBA057DF817",
   "pitch": -13.5,
   "yaw": -60.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A9832D30_8FFC_939D_41D0_5097E99603A9",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.46,
   "yaw": -60.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE, this.camera_8F6D5E0B_9257_D0BC_41BC_CE05F14775B3); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.23,
   "image": "this.AnimatedImageResource_A16BCB39_8FF3_B78F_41DB_DE0A0A611A06",
   "pitch": -15.95,
   "yaw": -149.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A8B339AC_8FF4_B285_41C0_3DB913D68F4E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.23,
   "yaw": -149.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "hfov": 18.47,
   "image": "this.AnimatedImageResource_ADC624F2_8F15_B29D_41D9_643B4AC78216",
   "pitch": -28.64,
   "yaw": 161.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_BA903959_8E07_B0F7_41CE_E99470BFF0C7",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.47,
   "yaw": 161.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.64
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0_HS_1_0.png",
      "width": 355,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": 0.04,
   "yaw": -20.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BAF15A15_8E09_D07C_41A3_6739CC05D4B3",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.04,
   "yaw": -20.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.04
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 70)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.55,
   "image": "this.AnimatedImageResource_87557BC6_9276_37B4_41D6_3720072D8927",
   "pitch": -21.68,
   "yaw": -106.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BAEBE469_8F17_B18F_41DF_95A45195030F",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.55,
   "yaw": -106.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.19,
   "image": "this.AnimatedImageResource_875DDBC6_9276_37B4_41A9_6F8028E3FB6C",
   "pitch": -16.36,
   "yaw": -115.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BD9095B4_8F0C_9285_41D5_21DC142F03CD",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.19,
   "yaw": -115.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.36
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.56,
   "image": "this.AnimatedImageResource_875D7BC6_9276_37B4_41D4_C3FEE61740BA",
   "pitch": -12.27,
   "yaw": 141.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_BC5A9696_8F0C_FE85_41C0_BAA81FF08B28",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.56,
   "yaw": 141.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3, this.camera_8F5497C5_9257_FFB4_41D7_8ABFA47C62C4); this.mainPlayList.set('selectedIndex', 93)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.1,
   "image": "this.AnimatedImageResource_AD98E5DB_8F15_B283_41D9_5C6A7BE3D8E7",
   "pitch": -40.09,
   "yaw": 169.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C84A4EE4_8E1E_B1DC_41D1_970B5956C826",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.1,
   "yaw": 169.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37, this.camera_8F4F17E3_9257_FF6C_4192_26CD1B7B17DF); this.mainPlayList.set('selectedIndex', 91)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.48,
   "image": "this.AnimatedImageResource_AD9B85E2_8F15_B2BD_41DF_27CCC89208B7",
   "pitch": -23.73,
   "yaw": -90.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C4940649_8E1B_D0D4_41E0_DCC2267EAECD",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.48,
   "yaw": -90.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE, this.camera_8F5AD7CF_9257_FFB4_41BE_CC713816A35E); this.mainPlayList.set('selectedIndex', 90)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.31,
   "image": "this.AnimatedImageResource_8E55ED11_9257_D0AC_41B2_5BCA63CE2E6B",
   "pitch": -24.95,
   "yaw": 90.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8AC5612C_926A_D0F4_41E0_7547F61F00D2",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.31,
   "yaw": 90.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942, this.camera_B268B27D_9257_F154_41D5_210A4528DB03); this.mainPlayList.set('selectedIndex', 73)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_1_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -6.14,
   "yaw": 166.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_94B565B8_8F1C_928D_41C6_5C51E2B84135",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": 166.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F, this.camera_B259729C_9257_F1D4_41AB_D576543E74CE); this.mainPlayList.set('selectedIndex', 71)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.01,
   "image": "this.AnimatedImageResource_ADA9358B_8F15_B283_41DD_F234157795F4",
   "pitch": -25.36,
   "yaw": 50.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_93615E3E_8F13_7185_41BC_DF7E49E944E4",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.01,
   "yaw": 50.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.36
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236, this.camera_8C801FA9_9257_EFFC_41D6_A2FF4DC39DD6); this.mainPlayList.set('selectedIndex', 67)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.44,
   "image": "this.AnimatedImageResource_8E86DEBF_927E_51D4_41CB_79F2BA656E1C",
   "pitch": -22.5,
   "yaw": 0.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_85002209_927E_50BC_41C8_D8ABE15620CD",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.44,
   "yaw": 0.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 86)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -2.45,
   "yaw": 4.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B8FA4F2D_8F7C_8F86_41D8_ECD3E2F10EC8",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.26,
   "yaw": 4.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E88D1_8E3A_B1F4_41C7_39C2922E5724_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.45
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F, this.camera_8F18D77C_9257_FF54_41BD_EA8678595BD1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.46,
   "image": "this.AnimatedImageResource_99B6F1A7_8C38_7CBF_41B9_916A6F71F1A3",
   "pitch": -13.5,
   "yaw": -5.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_82C8EFFC_8C08_E491_41CE_6B24F5DEF9A0",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.46,
   "yaw": -5.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110, this.camera_8F0D3788_9257_FFBC_41DD_C6AAADCEA0C8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.35,
   "image": "this.AnimatedImageResource_99B9D1A7_8C38_7CBF_4194_453010234A16",
   "pitch": -14.73,
   "yaw": 100.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9F726CED_8C08_E4B3_41E1_218D613BAA80",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.35,
   "yaw": 100.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_8306DE3B_925A_50DC_41DF_F2CE5CE9127D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_87F7BC14_9276_30D4_41DA_BB2D86659923, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0_HS_2_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": 6.21,
   "yaw": 10,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_82170E3C_9259_D0D4_41C5_BA9EA3AB9F83",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.5,
   "yaw": 10,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A, this.camera_8E1AB5F6_9257_F354_41B2_4AE7931F24AF); this.mainPlayList.set('selectedIndex', 82)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.09,
   "image": "this.AnimatedImageResource_ADA9F58C_8F15_B285_41A9_C0975E413D6D",
   "pitch": -44.18,
   "yaw": 128.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_959B67D7_8F1F_FE83_41AF_47F842F9A526",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.09,
   "yaw": 128.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5, this.camera_8E023600_9257_F0AC_41D3_3BFAEE847AD1); this.mainPlayList.set('selectedIndex', 72)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_1_HS_1_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -5.73,
   "yaw": -76.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_95F16069_8F1D_718F_41B3_E07445A88F48",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.21,
   "yaw": -76.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC, this.camera_8D986130_9257_F0EC_41DA_42C12C4B480E); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_1_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -6.14,
   "yaw": -172.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B06EF97D_8E1E_50AC_41D8_7EE2CFAD58A9",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": -172.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC, this.camera_B3A3F450_9257_F0AC_41C9_E0D5C2088447); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.89,
   "image": "this.AnimatedImageResource_ADA21575_8F15_B387_41C8_DEB9ECC9536A",
   "pitch": -20.45,
   "yaw": 92.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CE3BB08A_8E1E_5054_41C3_EF598F23591E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.89,
   "yaw": 92.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.45
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9, this.camera_B3930464_9257_F174_41E1_3E58E429BD39); this.mainPlayList.set('selectedIndex', 69)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.48,
   "image": "this.AnimatedImageResource_ADA2F575_8F15_B387_41DC_443D45751E83",
   "pitch": -23.73,
   "yaw": -90.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B1A6806F_8E19_D0AB_41D2_BD498E72CB9B",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.48,
   "yaw": -90.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD, this.camera_B385D46E_9257_F174_41DF_35603CEC14ED); this.mainPlayList.set('selectedIndex', 68)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.02,
   "image": "this.AnimatedImageResource_ADA5A57C_8F15_B385_41E0_58E9893814B7",
   "pitch": -31.09,
   "yaw": 177.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CE6F1A1B_8E1A_D074_41BB_8FADCE5213CE",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.02,
   "yaw": 177.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F91E12_8C09_E791_41E1_1A7E67121080, this.camera_8CD45FD1_9257_EFAC_41DF_61E154FD22C9); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.26,
   "image": "this.AnimatedImageResource_B8445FD5_8E09_CFFC_41DD_44DFB7EF39EE",
   "pitch": -10.51,
   "yaw": 53.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9DE071DD_8E06_53EC_41CD_6E74FE25CF41",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.26,
   "yaw": 53.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.51
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F92643_8C08_27F7_41D2_DE6A101816A6, this.camera_8CC51FE5_9257_EF74_41C5_6E0D0BD41451); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.48,
   "image": "this.AnimatedImageResource_B8453FD5_8E09_CFFC_41DB_DD67D8DEC8CA",
   "pitch": -6.07,
   "yaw": -78.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9D4A0659_8E1A_70F4_4191_879129AEF0FB",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.48,
   "yaw": -78.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.07
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_84EF3D76_926A_5354_41BA_9777708B3DFE, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_87D23C2A_9276_30FC_41CB_AEB944FDD285, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0_HS_2_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 153
     }
    ]
   },
   "pitch": 1.44,
   "yaw": 76.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_858F4960_926A_336C_41CA_1A221C242689",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.06,
   "yaw": 76.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.44
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_87B3BD86_926A_53B4_4159_C4A7256CF448, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_87D30C2A_9276_30FC_41AD_195BB9E740DC, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0_HS_3_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 0.93,
   "yaw": -11.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_86C2DE0B_926A_D0BC_41DE_F5374C08BFAF",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.1,
   "yaw": -11.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA, this.camera_8D89714F_9257_F0B4_41A1_D4758F0DB966); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.07,
   "image": "this.AnimatedImageResource_A16A4B32_8FF3_B79D_41C5_CEF9BDA4369B",
   "pitch": -24.95,
   "yaw": -165.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC18DE85_8F0C_8E87_4179_A32E598E42CE",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.07,
   "yaw": -165.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1, this.camera_8DFA0165_9257_F374_41CF_8FC9170174C7); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.53,
   "image": "this.AnimatedImageResource_A16AEB32_8FF3_B79D_41BA_F54D50C198C7",
   "pitch": -12.68,
   "yaw": -4.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ACA527D7_8F0C_BE83_41DE_1883D3D449D7",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.53,
   "yaw": -4.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA, this.camera_8F947E70_9257_D16C_41DC_D65F60813361); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.25,
   "image": "this.AnimatedImageResource_875A8BC6_9276_37B4_41DD_68C096C20E8D",
   "pitch": -23.93,
   "yaw": -152.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A2189F26_8F0C_8F85_41DD_CF797EDEF9CD",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.25,
   "yaw": -152.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D, this.camera_8FA3FE52_9257_D0AC_41E1_FCD9E59D3673); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.14,
   "image": "this.AnimatedImageResource_875A2BC6_9276_37B4_41BC_466EDC871FFC",
   "pitch": -16.77,
   "yaw": -0.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2B6D068_8F0C_B18E_41BE_F099B9C0FBF7",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.14,
   "yaw": -0.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2, this.camera_8E51A650_9257_F0AC_4191_D7464931D2E0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.76,
   "image": "this.AnimatedImageResource_8756ABC6_9276_37B4_41C5_8B36FB17149F",
   "pitch": -9.41,
   "yaw": 11.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BE1AB951_8E1A_70F4_4193_5E88A06080D1",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.76,
   "yaw": 11.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.41
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D, this.camera_8E09A614_9257_F0D4_41D7_FEB3A3873453); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.27,
   "image": "this.AnimatedImageResource_8758DBC6_9276_37B4_41D3_9B4D4C104565",
   "pitch": -15.55,
   "yaw": 69.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A009DDBD_8F34_9287_41D5_BA410DC9A2A5",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.27,
   "yaw": 69.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9, this.camera_8E7FB61E_9257_F0D4_41D8_AAB559E9C325); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.31,
   "image": "this.AnimatedImageResource_87587BC6_9276_37B4_41DF_61623BBA5A6F",
   "pitch": -15.14,
   "yaw": -92.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BE69EB69_8F35_978F_41AE_816FD5060049",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.31,
   "yaw": -92.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7, this.camera_8EFDB6E7_9257_F174_41D9_BCF7CF6D2055); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.97,
   "image": "this.AnimatedImageResource_B84F4FB6_8E09_CFBC_41C5_51636ECC9A7A",
   "pitch": -10.68,
   "yaw": 31.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A446FCC6_8E07_D1DC_41B2_85FEE335A3B3",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.97,
   "yaw": 31.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0_HS_0_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE, this.camera_8E9CB6B4_9257_F1D4_41D0_CD0D9F86F54F); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.62,
   "image": "this.AnimatedImageResource_B84E4FB6_8E09_CFBC_41D7_0FDDC2376472",
   "pitch": -16.82,
   "yaw": 165.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A40A26B4_8E09_D1BC_41B1_D92B054899F7",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.62,
   "yaw": 165.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547, this.camera_8EF756D2_9257_F1AD_41CE_B080D82FABC7); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.96,
   "image": "this.AnimatedImageResource_B84E8FB6_8E09_CFBC_41D2_6A5DD6C3E1E3",
   "pitch": -12.73,
   "yaw": -8.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4B4A424_8E09_F05C_41C9_FC4870D3224E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.96,
   "yaw": -8.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090, this.camera_8E82A6C8_9257_F1BC_41B3_CB2716F12DE4); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.73,
   "image": "this.AnimatedImageResource_875F3BC6_9276_37B4_41D3_DA751A6D605D",
   "pitch": -1.43,
   "yaw": 8.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A13FDD80_8F0C_937D_41D5_8EA12AFE76ED",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 3.73,
   "yaw": 8.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0_HS_3_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.43
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321, this.camera_8F79C7A6_9257_FFF4_41DF_88138EAE87B1); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.52,
   "image": "this.AnimatedImageResource_ADBB8548_8F15_B38D_41A3_C9350AD0ACC0",
   "pitch": -13.21,
   "yaw": -178.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BCB70F4E_8E06_70EC_41E1_0875F753D6F9",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.52,
   "yaw": -178.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03, this.camera_8F738792_9257_FFAC_41D8_0246A300744D); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.63,
   "image": "this.AnimatedImageResource_ADBA654E_8F15_B385_41C0_0CA15986316C",
   "pitch": -11.57,
   "yaw": 2.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BCFAC8B9_8E07_D1B7_41C5_2AE680C0A6C0",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.63,
   "yaw": 2.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.57
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F9118A_8C08_1D71_41D5_796FC41C380A, this.camera_8F6E37B1_9257_FFEC_41CA_5953D21A3831); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.04,
   "image": "this.AnimatedImageResource_87AD6BD6_9276_3754_4161_ACFC16CDBDC1",
   "pitch": -7.68,
   "yaw": 85.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BF27C40C_8F37_7185_41DE_1505AC472FD0",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.04,
   "yaw": 85.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B08B6C90_8E09_B075_41D2_FDDBFC178115, this.camera_8E4D366E_9257_F174_41DB_0C86EF060885); this.mainPlayList.set('selectedIndex', 66)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.22,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_1_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -5.32,
   "yaw": -110.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B3F9FBB7_8E0A_B7BB_41E1_BACC3EF050EA",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.22,
   "yaw": -110.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236, this.camera_8EB35678_9257_F15C_41DF_7D63024C413D); this.mainPlayList.set('selectedIndex', 67)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.16,
   "image": "this.AnimatedImageResource_ADA0156C_8F15_B385_41D7_B47123279B94",
   "pitch": -18,
   "yaw": -92.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B3F6D223_8E19_D054_41C1_060AE30BC13C",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.16,
   "yaw": -92.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04, this.camera_8E47965A_9257_F15C_41D7_3C0187423CC6); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.53,
   "image": "this.AnimatedImageResource_ADA0D56D_8F15_B387_4186_8C98404773C2",
   "pitch": -23.32,
   "yaw": 97.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CADFA7EF_8E1E_5FAC_4193_6D492268FD85",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.53,
   "yaw": 97.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_1_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20, this.camera_B3C954C8_9257_F1BC_41D4_9D9B5DCADF33); this.mainPlayList.set('selectedIndex', 81)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_1_HS_0_0.png",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 206
     }
    ]
   },
   "pitch": -4.83,
   "yaw": 72.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_80A943A7_8F1F_7683_41C8_2BAD1A5C8CA8",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.5,
   "yaw": 72.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.83
  }
 ]
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "items": [
  {
   "hfov": 11.29,
   "image": "this.AnimatedImageResource_AD93B5BC_8F15_B285_41D9_D7044C706868",
   "pitch": -23.09,
   "yaw": -161.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_9F41860A_8F15_918D_41C4_FED6D8E5C1E0",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.29,
   "yaw": -161.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942, this.camera_B3D714AA_9257_F1FC_41E1_6AC84A10046F); this.mainPlayList.set('selectedIndex', 73)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.19,
   "image": "this.AnimatedImageResource_AD93F5C2_8F15_B2FD_41DB_04E69AD71ACB",
   "pitch": -25.77,
   "yaw": 60.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_922D5FCE_8F17_8E85_41CA_849397756C5F",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.19,
   "yaw": 60.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_1_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E, this.camera_B3D814B4_9257_F1DC_41C1_CDBC5E438113); this.mainPlayList.set('selectedIndex', 74)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_1_HS_3_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -0.41,
   "yaw": -83.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_90C5FD5E_8F35_7385_41BB_D39538CBE606",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.27,
   "yaw": -83.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.41
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275, this.camera_8C04BF13_9257_D0AC_41A4_5978A074DE36); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.75,
   "image": "this.AnimatedImageResource_8754DBC6_9276_37B4_41B3_4BD977172041",
   "pitch": -37.23,
   "yaw": 87.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BC80A6BD_8F15_FE87_41DD_75EBE6EA1B40",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.75,
   "yaw": 87.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40, this.camera_8C13EF09_9257_D0BC_41E1_D12FC062582C); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.35,
   "image": "this.AnimatedImageResource_87545BC6_9276_37B4_41AB_C86D6965EC22",
   "pitch": -14.73,
   "yaw": -81.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BB2875D7_8F13_9283_41C7_0D6487F28246",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.35,
   "yaw": -81.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2, this.camera_8CBCBF75_9257_EF54_41E0_774421D4E820); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.42,
   "image": "this.AnimatedImageResource_ADBC555D_8F15_B387_41CE_2D8C7CE1139A",
   "pitch": -24.27,
   "yaw": -143,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B059736F_8E7A_70AB_41D3_FAB6A739BF43",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.42,
   "yaw": -143,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04, this.camera_8CAE5F8B_9257_EFBC_41CF_15E82A0E67F2); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.74,
   "image": "this.AnimatedImageResource_ADBF255E_8F15_B385_41BD_8DAA542BFB79",
   "pitch": -27.13,
   "yaw": 77.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CD820909_8E7A_5057_41D1_8427365B6EED",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.74,
   "yaw": 77.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.13
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3, this.camera_8C9F0F95_9257_EFD4_41E1_F7CFFFE32630); this.mainPlayList.set('selectedIndex', 93)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.84,
   "image": "this.AnimatedImageResource_ADBF8563_8F15_B383_41D0_1A8139B94BB3",
   "pitch": -20.86,
   "yaw": 134.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C7D8874D_8E1A_50EC_41D6_FC13314E5301",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.84,
   "yaw": 134.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_1_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577, this.camera_B2AC52EE_9257_F174_41DA_F42797A90414); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.94,
   "image": "this.AnimatedImageResource_ADBE5565_8F15_B387_41A4_75A7B9A14B10",
   "pitch": -31.5,
   "yaw": 163.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B25906EE_8E7F_B1AC_4183_1356F0727CC4",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.94,
   "yaw": 163.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC, this.camera_B29FB30D_9257_F0B4_41D8_BE7936262500); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.04,
   "image": "this.AnimatedImageResource_ADA12566_8F15_B385_41DD_D72ED6D94E9E",
   "pitch": -19.27,
   "yaw": -96.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B0EA762A_8E7B_B054_41C4_161316D11BAB",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.04,
   "yaw": -96.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9, this.camera_B2805321_9257_F0EC_41D8_959067F81D20); this.mainPlayList.set('selectedIndex', 69)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.84,
   "image": "this.AnimatedImageResource_8E837EBA_927E_51DC_41DB_11E78D3342BF",
   "pitch": -20.86,
   "yaw": 84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8444E4D7_927A_7154_41E1_DD7E5AF50444",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.84,
   "yaw": 84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.54,
   "image": "this.AnimatedImageResource_B83AEFD5_8E09_CFFC_41B1_8A85C5C01FE1",
   "pitch": -28.23,
   "yaw": 86.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E25D462_8E0B_D0D4_41C1_7DA036935D41",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.54,
   "yaw": 86.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F91E12_8C09_E791_41E1_1A7E67121080, this.camera_B3E63494_9257_F1D4_41D8_907C3A23076E); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.95,
   "image": "this.AnimatedImageResource_B83B2FD5_8E09_CFFC_41D2_DAE2770CEEBC",
   "pitch": -25.77,
   "yaw": 127.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9C7F686F_8E0A_50AC_41E0_B0CD124DB590",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.95,
   "yaw": 127.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F91343_8C08_3DF7_41D6_52A483E4F120, this.camera_B3F51482_9257_F1AC_41CA_E7EA0DD8561B); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.06,
   "image": "this.AnimatedImageResource_B83A2FD5_8E09_CFFC_41D6_032345D942AB",
   "pitch": -17.59,
   "yaw": 179.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9EED3FC2_8E0A_CFD4_41DC_023BC65BB95F",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.06,
   "yaw": 179.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.59
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4, this.camera_8C30EEEA_9257_D17C_41C3_102FAA273CE5); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.09,
   "image": "this.AnimatedImageResource_B84EFFB6_8E09_CFBC_41C1_3FDBB0CA7474",
   "pitch": -18.97,
   "yaw": 167.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9021DDDA_8E06_D3F4_41D0_7558A9B1D8AF",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.09,
   "yaw": 167.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.97
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275, this.camera_8C219EFC_9257_D155_41D5_BDC197651963); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.69,
   "image": "this.AnimatedImageResource_B84F7FB6_8E09_CFBC_41A0_D40904B4ACFB",
   "pitch": -10.38,
   "yaw": 1.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90ACBE97_8E06_D07C_41DB_FA34F60BD321",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.69,
   "yaw": 1.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.38
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9, this.camera_8C689F4D_9257_D0B4_41DF_9B7B5DCA9273); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.38,
   "image": "this.AnimatedImageResource_ADBAC54E_8F15_B385_41DA_B45241E470A3",
   "pitch": -22.91,
   "yaw": 179.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BDB6CA79_8E39_F0B7_41D7_61ABBF04868F",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.38,
   "yaw": 179.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1, this.camera_8C592F59_9257_EF5C_41B8_852CE5263340); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.46,
   "image": "this.AnimatedImageResource_ADBDA554_8F15_B385_41D9_56840B9D8C5B",
   "pitch": -13.5,
   "yaw": 0.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BDCB88A6_8E39_B05C_41DF_60484F0978AE",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.46,
   "yaw": 0.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F68079_8C38_1B93_41BD_7567F5157FB2, this.camera_8FCE2ED6_9257_D154_41CD_6D19CA9097F4); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.53,
   "image": "this.AnimatedImageResource_ADC5D4EB_8F15_B283_41E0_3E4FA766E5D9",
   "pitch": -12.68,
   "yaw": 111.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A0BE9273_8E06_D0B4_41B3_03B0DF1A56F8",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.53,
   "yaw": 111.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB, this.camera_8FDD9ECA_9257_D1BC_41DC_16E637AEA06F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.53,
   "image": "this.AnimatedImageResource_ADC474EB_8F15_B283_41E0_904F386E3FE4",
   "pitch": -12.68,
   "yaw": 19.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A0F32766_8E06_F0DC_41A5_BF2C770B2921",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.53,
   "yaw": 19.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5, this.camera_8C4A1F6D_9257_EF74_41C3_74F22E5814B1); this.mainPlayList.set('selectedIndex', 72)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.88,
   "image": "this.AnimatedImageResource_ADA7B584_8F15_B285_41E1_3D8B986B5FCE",
   "pitch": -26.18,
   "yaw": -140.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_93CF9350_8F15_F79D_41DA_A398CA525BF1",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.88,
   "yaw": -140.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F, this.camera_B22201F2_9257_F36C_41CB_447F8E54DCF6); this.mainPlayList.set('selectedIndex', 78)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_1_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": 1.23,
   "yaw": 121.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_92EE5438_8F34_918D_4153_3950BCF28CF0",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.27,
   "yaw": 121.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A6450_8E3E_70F4_41DA_28E2F25847A6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A, this.camera_8F7C0DF7_9257_D354_41D9_DA5D16F36235); this.mainPlayList.set('selectedIndex', 82)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -3.27,
   "yaw": 176.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B9D4F927_8F73_7382_41CA_BCD91A6EC678",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.25,
   "yaw": 176.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3A7267_8E3E_50DC_41E1_686DA169061E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.53,
   "image": "this.AnimatedImageResource_B8517FB6_8E09_CFBC_41B9_79F456660761",
   "pitch": -12.68,
   "yaw": 1.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_83C7BDDB_8E09_B3F4_41D7_807ABB86C3E3",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.53,
   "yaw": 1.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91DB39F3_8C09_EC97_41D8_487723238A28, this.camera_8CF10FB3_9257_EFEC_41A6_93CC5D0DAF35); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.49,
   "image": "this.AnimatedImageResource_B851AFB6_8E09_CFBC_41DA_C4925CA64372",
   "pitch": -13.09,
   "yaw": -179.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_80A7928C_8E0E_D06C_41DE_401C079643AB",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.49,
   "yaw": -179.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F90B59_8C09_ED93_415D_549E6199901A, this.camera_8E1015E1_9257_F36C_41D4_BD392792A0EB); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.32,
   "image": "this.AnimatedImageResource_B846FFC5_8E09_CFDC_41DB_FCEA319B34F2",
   "pitch": -23.32,
   "yaw": -82.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9BDC78D5_8E1E_B1FC_41E0_EEFCB8472B90",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.32,
   "yaw": -82.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F92643_8C08_27F7_41D2_DE6A101816A6, this.camera_8E2DC5C3_9257_F3AC_41E1_189B92E94393); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.45,
   "image": "this.AnimatedImageResource_B8474FC5_8E09_CFDC_41CB_115C872E5743",
   "pitch": -33.95,
   "yaw": 8.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9809DC46_8E1E_50DD_41B1_72469BBA8426",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.45,
   "yaw": 8.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B, this.camera_8E1745D7_9257_F354_41E1_C569E46612FD); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.44,
   "image": "this.AnimatedImageResource_B8443FD5_8E09_CFFC_41DB_2779FCFA15BF",
   "pitch": -22.5,
   "yaw": 50.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9BE16F6C_8E1E_50AC_41D6_D26B1090B441",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.44,
   "yaw": 50.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F90B59_8C09_ED93_415D_549E6199901A, this.camera_B2676261_9257_F16C_41D0_F8E0E481B59C); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.25,
   "image": "this.AnimatedImageResource_B845AFD5_8E09_CFFC_41DD_324C6C08F497",
   "pitch": -29.86,
   "yaw": -77.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D18B9D6_8E07_F3FC_41D0_A505D590505D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.25,
   "yaw": -77.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5, this.camera_B2768243_9257_F0AC_41DE_4CF88DCCBBC5); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.32,
   "image": "this.AnimatedImageResource_B83A7FD5_8E09_CFFC_41E0_28CCA6BE162D",
   "pitch": -29.45,
   "yaw": 3.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D6E6BDC_8E07_D7EC_41DA_16B7D9B8B427",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.32,
   "yaw": 3.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.45
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577, this.camera_8EEA9D76_9257_D354_418B_544C768B520A); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.37,
   "image": "this.AnimatedImageResource_AD9A55E3_8F15_B283_41DB_D8999422EEBE",
   "pitch": -24.55,
   "yaw": -137.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C862C4E9_8E1A_71D4_41B9_EEB1F87661C0",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.37,
   "yaw": -137.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE, this.camera_8EDFCD89_9257_D3BC_41DC_82489D654365); this.mainPlayList.set('selectedIndex', 92)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.86,
   "image": "this.AnimatedImageResource_AD9D25EA_8F15_B28D_41C6_F147A71356FC",
   "pitch": -31.91,
   "yaw": 85.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C86307AC_8E1E_DFAC_41CA_2C925845C525",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.86,
   "yaw": 85.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.91
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 82)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.48,
   "image": "this.AnimatedImageResource_8E53ED11_9257_D0AC_41C6_84F289A1AEE2",
   "pitch": -23.73,
   "yaw": 141.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_85BBC173_9276_336C_41D4_866D1E5B2882",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.48,
   "yaw": 141.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA, this.camera_8CE39FC7_9257_EFB4_41C8_CDEFA8C1AC36); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.61,
   "image": "this.AnimatedImageResource_B84F4FC5_8E09_CFDC_41D0_2FEB1EE360B9",
   "pitch": -27.82,
   "yaw": 119.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A47CD893_8E1E_5074_41AD_935EECFF07EB",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.61,
   "yaw": 119.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.31,
   "image": "this.AnimatedImageResource_B84FDFC5_8E09_CFDC_41CF_320413E1FFA4",
   "pitch": -15.14,
   "yaw": -87.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A435EFBF_8E1E_4FAC_41AE_F8C9397FF1A2",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.31,
   "yaw": -87.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908, this.camera_B32703C3_9257_F7AC_41D7_A349AA7635FB); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.66,
   "image": "this.AnimatedImageResource_AC2812D5_8C18_1C90_41D3_8D071EF5E8E1",
   "pitch": -20.86,
   "yaw": -137.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9A8CE596_8C08_2491_41BE_C27CEE6B62DC",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.66,
   "yaw": -137.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F, this.camera_B33633AE_9257_F7F4_41C1_0E61979A6B15); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.98,
   "image": "this.AnimatedImageResource_AC2852D5_8C18_1C90_41D0_7AF4D244206C",
   "pitch": -19.64,
   "yaw": 156,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9BA969CC_8C08_2CF1_41D6_61F19F70504E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.98,
   "yaw": 156,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.64
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8, this.camera_B2C5B39A_9257_F7DC_41DC_FDAEB35F0584); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.72,
   "image": "this.AnimatedImageResource_B843CFC5_8E09_CFDC_41E0_55C23815E74B",
   "pitch": -12.89,
   "yaw": -65.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_945CDEDC_8E3E_71EC_41D5_FBAC764DD7A1",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.72,
   "yaw": -65.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F95300_8C08_3D70_41D9_63C3D471B506, this.camera_B329B3CD_9257_F7B4_41E1_766C54AB9925); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.75,
   "image": "this.AnimatedImageResource_B840BFC5_8E09_CFDC_41B3_B66C0B0AA857",
   "pitch": -12.48,
   "yaw": 81.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_951731E3_8E39_F3D4_41AF_FA385B0BB706",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.75,
   "yaw": 81.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.48
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_4_0.png",
      "width": 198,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ]
   },
   "pitch": 8.83,
   "yaw": 8.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_95BA98E6_8E3B_B1DD_41D5_DF43CBF89CBD",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.63,
   "yaw": 8.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_4_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.83
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_814A46D6_926A_D154_41BA_4E887EC21464, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_87D60C2A_9276_30FC_41DB_52DA65F2F352, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_5_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ]
   },
   "pitch": 11.34,
   "yaw": 15.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_80F18A65_9269_F174_41C4_C140760CACCF",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.97,
   "yaw": 15.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_5_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4, this.camera_8DB420D7_9257_F154_41B0_DD937C048E6C); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.91,
   "image": "this.AnimatedImageResource_B842BFC5_8E09_CFDC_41D1_1826F6BE4531",
   "pitch": -18.82,
   "yaw": 115.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB2BE5AC_8E09_D3AD_41D2_C87FE5CE900C",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.91,
   "yaw": 115.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F9265B_8C08_2790_41A7_CE6318C7261D, this.camera_8DA510F6_9257_F154_41C8_D84102C67CE2); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.06,
   "image": "this.AnimatedImageResource_B8433FC5_8E09_CFDC_41C9_EBD55E31F012",
   "pitch": -17.59,
   "yaw": -105.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A8FFC1BC_8E06_53AC_41D3_68C2C3F11E4D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.06,
   "yaw": -105.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.59
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 91)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_1_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -0.17,
   "yaw": 42.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C2BDEA9C_8E0A_506C_41D2_6DB3934AADF6",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.27,
   "yaw": 42.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EAB23_8E3A_7054_41D7_DB571BBE97D5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.17
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6, this.camera_8C753F27_9257_D0F4_41DE_53A6A7D4AB0E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.01,
   "image": "this.AnimatedImageResource_AC2CA2DA_8C18_1C91_41C6_3A3E83CDA903",
   "pitch": -18,
   "yaw": 0.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97B8E281_8C08_7F73_41A7_4ACEA639023D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.01,
   "yaw": 0.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F, this.camera_8C67EF3B_9257_D0DC_41CF_907A81FDE2A2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.82,
   "image": "this.AnimatedImageResource_AC2D42DA_8C18_1C91_41E0_FD257BE8E36A",
   "pitch": -19.64,
   "yaw": 177.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_962B128E_8C08_3F71_41B6_E6BCBE3AE232",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.82,
   "yaw": 177.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.64
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.95,
   "image": "this.AnimatedImageResource_AC2DE2DF_8C18_1C8F_41BA_51E1B211A54C",
   "pitch": -25.77,
   "yaw": 95.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9699C21F_8C19_FF8F_41DA_EDA8F22FFF9E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.95,
   "yaw": 95.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB, this.camera_8DEC8183_9257_F3AC_41D2_9B62FF5E2286); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.39,
   "image": "this.AnimatedImageResource_ADB9A540_8F15_B3FD_41D0_2F964EB53715",
   "pitch": -14.32,
   "yaw": 172.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BF9E1516_8E0B_D07C_41DC_1C286099C1D5",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.39,
   "yaw": 172.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321, this.camera_8DDD41A1_9257_F3EC_41E1_6526861C42A2); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.62,
   "image": "this.AnimatedImageResource_ADB9C540_8F15_B3FD_41DD_CE8C62707F1C",
   "pitch": -11.45,
   "yaw": -5.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BFBC04B0_8E0B_F1B4_41E0_E0116C75376E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.62,
   "yaw": -5.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.45
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD768485_8E0A_D05F_41BB_57EF6D488370, this.camera_B214E210_9257_F0AC_41B8_4EE321D10BF8); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.39,
   "image": "this.AnimatedImageResource_ADB8A546_8F15_B385_41D2_0FD345853F98",
   "pitch": -12.22,
   "yaw": 176.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BF808027_8E09_D05B_41C4_432DEFE53A3B",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.39,
   "yaw": 176.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.22
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9, this.camera_B2041225_9257_F0F4_41D0_28EE3AB214D8); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.54,
   "image": "this.AnimatedImageResource_ADBB3547_8F15_B383_41D7_8FEA7BADF258",
   "pitch": -10.18,
   "yaw": 0.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BFD2966B_8E09_F0D4_41D5_C4C08295DDB6",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.54,
   "yaw": 0.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236, this.camera_B2E3A35E_9257_F754_41E2_2542881B155F); this.mainPlayList.set('selectedIndex', 67)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.59,
   "image": "this.AnimatedImageResource_ADA4157D_8F15_B387_41D3_4BF8FDA8F918",
   "pitch": -22.91,
   "yaw": 95.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CAE676BF_8E09_D1AB_41A9_27240E4C3D3A",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.59,
   "yaw": 95.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04, this.camera_B2D4B37C_9257_F754_41CD_DD56D18DA1A8); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.16,
   "image": "this.AnimatedImageResource_ADA4D583_8F15_B283_41DD_6452BA60D88C",
   "pitch": -18,
   "yaw": -92.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C6620900_8E0A_D055_41DC_9FB28BAEBB3C",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.16,
   "yaw": -92.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20, this.camera_B24A42B2_9257_F1EC_41D6_FD90FBE20754); this.mainPlayList.set('selectedIndex', 81)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.82,
   "image": "this.AnimatedImageResource_ADAC85AB_8F15_B283_41E0_8E3EF26AA812",
   "pitch": -28.23,
   "yaw": 104.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9C5E146E_8F74_9185_41D0_9D2802B3D0CB",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.82,
   "yaw": 104.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB, this.camera_B2BB92D0_9257_F1AC_41DD_A477CB55849A); this.mainPlayList.set('selectedIndex', 79)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.89,
   "image": "this.AnimatedImageResource_ADAF55AC_8F15_B285_41C4_A44D7D343879",
   "pitch": -20.45,
   "yaw": -91.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9CBFC61A_8F7C_F18D_419E_2EC50AE2C2C4",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.89,
   "yaw": -91.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.45
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 76)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_1_HS_2_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ]
   },
   "pitch": -7.77,
   "yaw": 115.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_905207D9_8F3D_9E8F_41DE_0CC51414B8B6",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.16,
   "yaw": 115.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5, this.camera_B23181D4_9257_F354_41C8_6B6DBDD4D620); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.47,
   "image": "this.AnimatedImageResource_B8419FC5_8E09_CFDC_4167_B3E797E94748",
   "pitch": -28.64,
   "yaw": 1.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9962987F_8E1A_70AB_4192_9154066658AE",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.47,
   "yaw": 1.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.64
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F91343_8C08_3DF7_41D6_52A483E4F120, this.camera_8DC0D1C0_9257_F3AC_41DB_51AA757896D1); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.2,
   "image": "this.AnimatedImageResource_B8460FC5_8E09_CFDC_41DF_2F4468F88BC8",
   "pitch": -24.14,
   "yaw": 156.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_998A2275_8E1A_F0BF_41A6_5FA7886ADE17",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.2,
   "yaw": 156.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.14
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37, this.camera_8F2C275E_9257_FF54_41C3_62615180DF74); this.mainPlayList.set('selectedIndex', 91)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.07,
   "image": "this.AnimatedImageResource_AD9405CA_8F15_B28D_41E1_9A9C14EE5A1A",
   "pitch": -26.72,
   "yaw": 91.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C60B3A8B_8E0A_5054_41B6_ADBFEC0193E2",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.07,
   "yaw": 91.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.72
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE, this.camera_8F12B76A_9257_FF7C_419B_7AF136D4BDD7); this.mainPlayList.set('selectedIndex', 92)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.48,
   "image": "this.AnimatedImageResource_AD94C5CB_8F15_B283_41CB_2BC7F40347E9",
   "pitch": -23.86,
   "yaw": -93.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C2908445_8E0A_50DC_41DC_757B24740F10",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.48,
   "yaw": -93.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 89)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.45,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_2_0.png",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ]
   },
   "pitch": -0.89,
   "yaw": 67.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C008920B_8E0A_706B_41D3_00383E702ECC",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.45,
   "yaw": 67.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 88)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_3_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "pitch": -2.08,
   "yaw": -83.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C378FA0E_8FFA_506A_41B8_E5AA971B6168",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.93,
   "yaw": -83.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.08
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 87)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_4_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ]
   },
   "pitch": 1.48,
   "yaw": -47.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C2095F35_8E07_B0BC_41CC_1AD0CC84345D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.64,
   "yaw": -47.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_4_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.48
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91DB39F3_8C09_EC97_41D8_487723238A28, this.camera_8FEA8EB8_9257_D1DC_41D9_BB6D32FD92B1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.61,
   "image": "this.AnimatedImageResource_AC2F52DA_8C18_1C91_41B0_33B1F715351E",
   "pitch": -21.27,
   "yaw": -7.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94F13A0E_8C08_2F71_41D9_3EAC652E992E",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.61,
   "yaw": -7.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B, this.camera_8FF81EA4_9257_D1FC_41E2_12E4677C9EF1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.32,
   "image": "this.AnimatedImageResource_AC2C02DA_8C18_1C91_41C5_10DA5FD17CC1",
   "pitch": -23.32,
   "yaw": 171.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97742882_8C08_EB71_41E1_47B659C10B8B",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.32,
   "yaw": 171.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.38,
   "image": "this.AnimatedImageResource_B8572FB6_8E09_CFBC_41E0_883F4C1AC3BA",
   "pitch": -12.13,
   "yaw": -163.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_813CA528_8E0A_7055_41E0_DC51C2C33D74",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.38,
   "yaw": -163.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.13
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286, this.camera_8FA8C828_9257_F0FC_41D4_E77600BBA914); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.38,
   "image": "this.AnimatedImageResource_ADBD7556_8F15_B385_41E1_55141CDA412D",
   "pitch": -22.91,
   "yaw": -5.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B7768017_8E06_507B_41C8_3FF9D7BFA32D",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.38,
   "yaw": -5.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577, this.camera_8FA24815_9257_F0D4_41A3_6CB9DF690B6D); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.75,
   "image": "this.AnimatedImageResource_ADBD955C_8F15_B385_41BF_E6BBD42C9515",
   "pitch": -27,
   "yaw": 62.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B559C2DD_8E06_71EF_41E1_8A8DB49DAF55",
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.75,
   "yaw": 62.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2902D5_8C18_1C90_4195_51D93DB68B99",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9A1A0E13_8C08_E797_41D2_E1BF5CAE1A3F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC29A2D5_8C18_1C90_419D_8F4183993357",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2E32D5_8C18_1C90_41A6_B0D5D56004ED",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2EC2D5_8C18_1C90_41BC_E7F66F4BAE89",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8547FB6_8E09_CFBC_41DB_B688B11D4D54",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9ABF962B_8C08_27B7_41D5_DBC6F94F527B_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B854EFB6_8E09_CFBC_41DC_34A893C443C5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84DBFC5_8E09_CFDC_41D8_701D12D12190",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F9265B_8C08_2790_41A7_CE6318C7261D_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8420FC5_8E09_CFDC_41AB_C0F31225B27A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84A0FB6_8E09_CFBC_41D3_426746E85FF7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F69C55_8C38_2B93_41E0_E897E74D4B38_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84ABFB6_8E09_CFBC_41C9_72CE37BD89E8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99B941A7_8C38_7CBF_41D2_9CABC3D48CDD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9B1E2887_8C19_EB70_41D8_451AEBE6B94F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99B881A7_8C38_7CBF_41CA_0B0EFA184D69",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84B1FB6_8E09_CFBC_41DD_6C47B5382007",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F6BED8_8C39_E490_41E0_FE8076A86D3A_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84B4FB6_8E09_CFBC_41D8_B01F5F9D58B6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADC2D4E4_8F15_B285_41BA_36AF419BF36E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F6666E_8C38_E7B1_4180_F9379EA2C2EB_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADC544E5_8F15_B287_41DD_6886A0A7BBB4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADC484EC_8F15_B285_41CD_EDB42B89A6CE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F68079_8C38_1B93_41BD_7567F5157FB2_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADC734EC_8F15_B285_41D9_F89DF89D9DC8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B848BFB6_8E09_CFBC_419B_E9F9E866B1A0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F78678_8C38_2791_41CD_65D33060086A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8492FB6_8E09_CFBC_4164_53E0C6D1B58C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84BDFB6_8E09_CFBC_41B5_D5CC3CCD93A6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F75A4C_8C38_2FF1_41E0_07276FEDD294_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8480FB6_8E09_CFBC_41E0_AF63D41408E3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8494FB6_8E09_CFBC_41C6_238A17002405",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B849EFB6_8E09_CFBC_41D2_FE01A22A36C0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84E0FB6_8E09_CFBC_41A8_C3558388D4D4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7B26F_8C38_1F8F_41C0_9DF633659275_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_A049EEB9_8F14_8E8F_417A_88897048F4D5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD9155B4_8F15_B285_41D3_62A5D9933A2D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DFF50_8E39_B0F5_41D2_60D97E7E3D20_1_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD9015BA_8F15_B28D_41D2_865B4010A2B7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADABD594_8F15_B285_41C7_351129BC4700",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DD8B7_8E39_D1BC_41CF_A603E424A78F_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADAA959A_8F15_B28D_41D7_53C3B0E16C07",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBA5555_8F15_B387_41DA_08A43189DFD3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BB33F5A0_8E0E_D054_41D4_13E97AA578FA_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBAF556_8F15_B385_41D1_40B693763D77",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD99E5DA_8F15_B28D_41BD_A770FBAC759F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3F6F1B_8E3B_B074_41BD_702A8C1F8F37_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD98B5DB_8F15_B283_41D2_C9C29DE70564",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2A92D0_8C18_1C90_41D6_89EF01B1A3D2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9E48CECF_8C18_648F_41DE_0082A7F6E908_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2B22D0_8C18_1C90_41B9_E22EED552346",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F6B524_8C39_E5B0_41D5_38CFD4F12286_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADC6E4F3_8F15_B283_41DF_C4A4260CFAD9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F6EAA5_8C38_2CB3_41E1_9CF1A140F110_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99B911A7_8C38_7CBF_4199_3F1481A2FAA8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84CBFC5_8E09_CFDC_41D3_D5F55E1A2C8D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F90A6E_8C08_6FB0_41E0_2C066D872547_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84CCFC5_8E09_CFDC_41E1_0E63B35E7573",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F9788B_8C08_6B77_41D2_5CEC7F7D98B5_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8416FC5_8E09_CFDC_41C1_D6F313119D54",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99B8D1A7_8C38_7CBF_41CB_65C373E976B0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9E37D017_8C18_FB90_41C6_AB613D7C24D9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99B811A7_8C38_7CBF_41A7_853637963E46",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99B851A7_8C38_7CBF_41D7_39EF3265C383",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9ED16E7F_8C18_2790_41DF_9CE59F173C1D_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99BB81A7_8C38_7CBF_41C8_254BF910C960",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_875BBBC6_9276_37B4_41DF_EA636438F5EA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_875B3BC6_9276_37B4_41D1_5E0B858F80AC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F934A1_8C08_24B0_41DA_B0E20402BB6D_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8758BBC6_9276_37B4_41DA_1CF2C6085644",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADAC359D_8F15_B287_41B4_7A440156D338",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADACF5A3_8F15_B283_41D5_5032EF273179",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DECFD_8E39_F1AC_41E0_2B56761316BB_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADAC25A5_8F15_B287_41D3_D347EF3C108B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_A16B6B33_8FF3_B783_41DD_6FBA057DF817",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F743A6_8C38_1CB1_41B5_21E5C47DACB1_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_A16BCB39_8FF3_B78F_41DB_DE0A0A611A06",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADC624F2_8F15_B29D_41D9_643B4AC78216",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F6F8AD_8C38_2CB3_41BE_186125666E79_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_87557BC6_9276_37B4_41D6_3720072D8927",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_875DDBC6_9276_37B4_41A9_6F8028E3FB6C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F72575_8C38_2593_4186_A31EDCEF0DCF_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_875D7BC6_9276_37B4_41D4_C3FEE61740BA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD98E5DB_8F15_B283_41D9_5C6A7BE3D8E7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD9B85E2_8F15_B2BD_41DF_27CCC89208B7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3F70E4_8E3B_F1DC_41BB_E386C6A1B5EE_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8E55ED11_9257_D0AC_41B2_5BCA63CE2E6B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3A2EC7_8E3E_D1DC_41D6_E2AF410C09A5_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA9358B_8F15_B283_41DD_F234157795F4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CC735381_8E19_D054_41D7_8FBCF27EC2BD_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8E86DEBF_927E_51D4_41CB_79F2BA656E1C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99B6F1A7_8C38_7CBF_41B9_916A6F71F1A3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D3FD7DF_8C38_648F_41D3_4C5983DA4F49_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99B9D1A7_8C38_7CBF_4194_453010234A16",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3A205C_8E3E_D0ED_41D3_F8504500E942_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA9F58C_8F15_B285_41A9_C0975E413D6D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA21575_8F15_B387_41C8_DEB9ECC9536A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA2F575_8F15_B387_41DC_443D45751E83",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B046DB82_8E1A_D054_41CF_AC3D8DF40236_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA5A57C_8F15_B385_41E0_58E9893814B7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8445FD5_8E09_CFFC_41DD_44DFB7EF39EE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83FAE0D5_8C08_1C93_41DD_4DF67C31DAB5_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8453FD5_8E09_CFFC_41DB_DD67D8DEC8CA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_A16A4B32_8FF3_B79D_41C5_CEF9BDA4369B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7363D_8C38_2790_41D1_CB0F282DC6DE_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_A16AEB32_8FF3_B79D_41BA_F54D50C198C7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0_HS_0_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_875A8BC6_9276_37B4_41DD_68C096C20E8D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7024B_8C38_3FF0_41D1_CA2EFAF10090_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_875A2BC6_9276_37B4_41BC_466EDC871FFC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83E9A7D1_8C38_2493_41C5_C202A451FC40_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8756ABC6_9276_37B4_41C5_8B36FB17149F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8758DBC6_9276_37B4_41D3_9B4D4C104565",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F9118A_8C08_1D71_41D5_796FC41C380A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_87587BC6_9276_37B4_41DF_61623BBA5A6F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84F4FB6_8E09_CFBC_41C5_51636ECC9A7A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84E4FB6_8E09_CFBC_41D7_0FDDC2376472",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84E8FB6_8E09_CFBC_41D2_6A5DD6C3E1E3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7B9CC_8C38_6CF1_41E1_246DD4A090EA_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_875F3BC6_9276_37B4_41D3_DA751A6D605D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBB8548_8F15_B38D_41A3_C9350AD0ACC0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBA654E_8F15_B385_41C0_0CA15986316C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BA30F97F_8E06_F0AC_41D7_C63C765A79F9_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_87AD6BD6_9276_3754_4161_ACFC16CDBDC1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA0156C_8F15_B385_41D7_B47123279B94",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CFA3D43B_8E7A_B0AB_41B5_CA5D32BCC0CC_1_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA0D56D_8F15_B387_4186_8C98404773C2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD93B5BC_8F15_B285_41D9_D7044C706868",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3E709D_8E3A_706C_41B1_5BE398974D2A_1_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD93F5C2_8F15_B2FD_41DB_04E69AD71ACB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8754DBC6_9276_37B4_41B3_4BD977172041",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F698EF_8C38_2C8F_41A4_7DE415419AE2_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_87545BC6_9276_37B4_41AB_C86D6965EC22",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBC555D_8F15_B387_41CE_2D8C7CE1139A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBF255E_8F15_B385_41BD_8DAA542BFB79",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B299D47F_8E79_B0AC_41DA_0F51A0102577_1_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBF8563_8F15_B383_41D0_1A8139B94BB3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBE5565_8F15_B387_41A4_75A7B9A14B10",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA12566_8F15_B385_41DD_D72ED6D94E9E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B08FD81A_8E7E_5074_41C0_2CD6CA0E9B04_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8E837EBA_927E_51DC_41DB_11E78D3342BF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B83AEFD5_8E09_CFFC_41B1_8A85C5C01FE1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B83B2FD5_8E09_CFFC_41D2_DAE2770CEEBC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F90B59_8C09_ED93_415D_549E6199901A_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B83A2FD5_8E09_CFFC_41D6_032345D942AB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84EFFB6_8E09_CFBC_41C1_3FDBB0CA7474",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F7AE3D_8C38_6790_41D7_66C822C3C6B8_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84F7FB6_8E09_CFBC_41A0_D40904B4ACFB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBAC54E_8F15_B385_41DA_B45241E470A3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BD2054E6_8E06_B1DC_41BA_E7BBAE1CBB03_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBDA554_8F15_B385_41D9_56840B9D8C5B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADC5D4EB_8F15_B283_41E0_3E4FA766E5D9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F673A3_8C38_FCB7_41DC_1AFACF7DD0B9_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADC474EB_8F15_B283_41E0_904F386E3FE4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3A0A7A_8E3E_B0B5_41D4_6237B8CE990F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA7B584_8F15_B285_41E1_3D8B986B5FCE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8517FB6_8E09_CFBC_41B9_79F456660761",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9620C2E3_8C18_7CB7_415F_00DA340503B6_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B851AFB6_8E09_CFBC_41DA_C4925CA64372",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B846FFC5_8E09_CFDC_41DB_FCEA319B34F2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8474FC5_8E09_CFDC_41CB_115C872E5743",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F91343_8C08_3DF7_41D6_52A483E4F120_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8443FD5_8E09_CFFC_41DB_2779FCFA15BF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B845AFD5_8E09_CFFC_41DD_324C6C08F497",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F91E12_8C09_E791_41E1_1A7E67121080_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B83A7FD5_8E09_CFFC_41E0_28CCA6BE162D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD9A55E3_8F15_B283_41DB_D8999422EEBE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD9D25EA_8F15_B28D_41C6_F147A71356FC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3F522C_8E3B_D0AD_41C5_AFE6EAE747C3_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8E53ED11_9257_D0AC_41C6_84F289A1AEE2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84F4FC5_8E09_CFDC_41D0_2FEB1EE360B9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F91DEE_8C08_64B1_41BE_392D70A1B2B7_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B84FDFC5_8E09_CFDC_41CF_320413E1FFA4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2812D5_8C18_1C90_41D3_8D071EF5E8E1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2852D5_8C18_1C90_41D0_7AF4D244206C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B843CFC5_8E09_CFDC_41E0_55C23815E74B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F95F2A_8C08_25B1_41DC_3EC1BA4B2DE4_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B840BFC5_8E09_CFDC_41B3_B66C0B0AA857",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B842BFC5_8E09_CFDC_41D1_1826F6BE4531",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F95300_8C08_3D70_41D9_63C3D471B506_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8433FC5_8E09_CFDC_41C9_EBD55E31F012",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2CA2DA_8C18_1C91_41C6_3A3E83CDA903",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2D42DA_8C18_1C91_41E0_FD257BE8E36A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_91DB39F3_8C09_EC97_41D8_487723238A28_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2DE2DF_8C18_1C8F_41BA_51E1B211A54C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADB9A540_8F15_B3FD_41D0_2F964EB53715",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BD768485_8E0A_D05F_41BB_57EF6D488370_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADB9C540_8F15_B3FD_41DD_CE8C62707F1C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADB8A546_8F15_B385_41D2_0FD345853F98",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_BF5FABC1_8E0A_B7D4_41DC_B110CE4A6321_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBB3547_8F15_B383_41D7_8FEA7BADF258",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA4157D_8F15_B387_41D3_4BF8FDA8F918",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CF4FCAC9_8E0A_71D4_41E1_B57C532348B9_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADA4D583_8F15_B283_41DD_6452BA60D88C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADAC85AB_8F15_B283_41E0_8E3EF26AA812",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3DEE50_8E39_D0F4_41BE_6B9C3831A906_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADAF55AC_8F15_B285_41C4_A44D7D343879",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8419FC5_8E09_CFDC_4167_B3E797E94748",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_83F92643_8C08_27F7_41D2_DE6A101816A6_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8460FC5_8E09_CFDC_41DF_2F4468F88BC8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD9405CA_8F15_B28D_41E1_9A9C14EE5A1A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE3EBE41_8E3A_50D4_41DE_6E4826A8D8DE_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AD94C5CB_8F15_B283_41CB_2BC7F40347E9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2F52DA_8C18_1C91_41B0_33B1F715351E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC2C02DA_8C18_1C91_41C5_10DA5FD17CC1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_95DA078A_8C08_6571_41D8_0EB24DCFB81F_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B8572FB6_8E09_CFBC_41E0_883F4C1AC3BA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBD7556_8F15_B385_41E1_55141CDA412D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B4659300_8E0B_D055_41D3_FE321E1E31C2_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ADBD955C_8F15_B385_41BF_E6BBD42C9515",
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_89571D06_9256_F0B4_41D2_7F17AEC4023C], 'cardboardAvailable')",
 "data": {
  "name": "Player3989"
 },
 "children": [
  "this.MainViewer",
  "this.IconButton_89571D06_9256_F0B4_41D2_7F17AEC4023C",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
