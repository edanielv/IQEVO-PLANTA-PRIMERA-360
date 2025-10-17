var APP_DATA = {
  "scenes": [
    {
      "id": "0-360-recibidor",
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
          "yaw": 0.019300542968769818,
          "pitch": 0.2749311995507835,
          "rotation": 0,
          "target": "1-360-saln"
        },
        {
          "yaw": 3.132956082373287,
          "pitch": 0.2316857957806988,
          "rotation": 0,
          "target": "2-360_dormitorio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360-saln",
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
          "yaw": 0.8275576686123305,
          "pitch": 0.13441934451333815,
          "rotation": 0.7853981633974483,
          "target": "0-360-recibidor"
        },
        {
          "yaw": -1.928110799228481,
          "pitch": 0.2735604573347974,
          "rotation": 1.5707963267948966,
          "target": "4-360-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-360_dormitorio-1",
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
          "yaw": 2.1350493256873015,
          "pitch": 0.20298622676118683,
          "rotation": 0,
          "target": "3-360-bao-principal"
        },
        {
          "yaw": 2.3866879442647964,
          "pitch": 0.19329380619239345,
          "rotation": 0.7853981633974483,
          "target": "0-360-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-360-bao-principal",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03714967848530826,
          "pitch": 0.2214407546545658,
          "rotation": 1.5707963267948966,
          "target": "2-360_dormitorio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-360-dormitorio-2",
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
          "yaw": 1.5813884465474306,
          "pitch": 0.2136200668029833,
          "rotation": 1.5707963267948966,
          "target": "1-360-saln"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "IQEVO-PLANTA PRIMERA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
