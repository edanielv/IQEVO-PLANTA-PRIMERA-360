var APP_DATA = {
  "scenes": [
   {
      "id": "1-360-recibidor",
      "name": "360-RECIBIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.029448159675313335,
          "pitch": 0.30788164530696704,
          "rotation": 0,
          "target": "0-360-saln"
        },
        {
          "yaw": -2.669030314807248,
          "pitch": 0.31978059867217823,
          "rotation": 0.7853981633974483,
          "target": "2-360_bao-cortesa"
        },
        {
          "yaw": 3.115083165100784,
          "pitch": 0.22815410587453933,
          "rotation": 0,
          "target": "3-360_dormitorio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "0-360-saln",
      "name": "360-SALÓN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7905543744097479,
          "pitch": 0.17434269294316884,
          "rotation": 0.7853981633974483,
          "target": "1-360-recibidor"
        },
        {
          "yaw": -1.9157569590301975,
          "pitch": 0.39453221613736744,
          "rotation": 1.5707963267948966,
          "target": "5-360-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-360_bao-cortesa",
      "name": "360_BAÑO CORTESÍA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.32708174705542703,
        "pitch": 0.1929276545773888,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.5829693317135458,
          "pitch": 0.3497812605076476,
          "rotation": 0,
          "target": "1-360-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-360_dormitorio-1",
      "name": "360_DORMITORIO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1384588802956177,
          "pitch": 0.26232194799473874,
          "rotation": 0,
          "target": "4-360-bao-principal"
        },
        {
          "yaw": 2.385002401371965,
          "pitch": 0.20939172064154477,
          "rotation": 0.7853981633974483,
          "target": "1-360-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-360-bao-principal",
      "name": "360-BAÑO PRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0872948524456767,
        "pitch": 0.2452760789434496,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.0004199883640971791,
          "pitch": 0.2527908010330897,
          "rotation": 0.7853981633974483,
          "target": "3-360_dormitorio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-360-dormitorio-2",
      "name": "360-DORMITORIO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2850053529572598,
          "pitch": 0.21711298127248035,
          "rotation": 5.497787143782138,
          "target": "6-360_bao-dormitorio-individual"
        },
        {
          "yaw": 1.579859977110389,
          "pitch": 0.18395924598772062,
          "rotation": 0.7853981633974483,
          "target": "0-360-saln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-360_bao-dormitorio-individual",
      "name": "360_BAÑO DORMITORIO INDIVIDUAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3828802007381569,
          "pitch": 0.2866557355365895,
          "rotation": 0,
          "target": "5-360-dormitorio-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "IQevo-PLANTA PRIMERA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
