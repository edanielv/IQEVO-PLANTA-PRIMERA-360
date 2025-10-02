var APP_DATA = {
  "scenes": [
    {
      "id": "0-01_recibidor",
      "name": "01_RECIBIDOR",
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
          "yaw": 0.01098338581623004,
          "pitch": 0.3164689592469614,
          "rotation": 5.497787143782138,
          "target": "1-02_saln"
        },
        {
          "yaw": 3.1115173046208975,
          "pitch": 0.4022023038832465,
          "rotation": 0,
          "target": "2-03_dormitorio_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02_saln",
      "name": "02_SALÓN",
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
          "yaw": 0.9291834195917055,
          "pitch": 0.09505686956390491,
          "rotation": 0.7853981633974483,
          "target": "0-01_recibidor"
        },
        {
          "yaw": -1.941438787980914,
          "pitch": 0.5852287832745731,
          "rotation": 7.853981633974483,
          "target": "3-03_dormitorio_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03_dormitorio_1",
      "name": "03_DORMITORIO_1",
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
          "yaw": 2.381944582787023,
          "pitch": 0.13172506685480556,
          "rotation": 0.7853981633974483,
          "target": "0-01_recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-03_dormitorio_2",
      "name": "03_DORMITORIO_2",
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
          "yaw": 1.5995384003307933,
          "pitch": 0.27796314902461816,
          "rotation": 7.0685834705770345,
          "target": "1-02_saln"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MIALMA-PLANTA PRIMERA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
