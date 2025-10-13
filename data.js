var APP_DATA = {
  "scenes": [
    {
      "id": "0-recibidor",
      "name": "RECIBIDOR",
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
          "yaw": -0.013781555402870183,
          "pitch": 0.24188269408929308,
          "rotation": 5.497787143782138,
          "target": "1-saln"
        },
        {
          "yaw": 3.124620840548898,
          "pitch": 0.31189368476175083,
          "rotation": 0,
          "target": "2-dormitorio_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-saln",
      "name": "SALÓN",
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
          "yaw": 0.8067653003510031,
          "pitch": 0.1733772986421549,
          "rotation": 0.7853981633974483,
          "target": "0-recibidor"
        },
        {
          "yaw": -1.93003419299564,
          "pitch": 0.25975008362686225,
          "rotation": 1.5707963267948966,
          "target": "4-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitorio_1",
      "name": "DORMITORIO_1",
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
          "yaw": 2.130693775972829,
          "pitch": 0.12964194975379684,
          "rotation": 0,
          "target": "3-bao-principal"
        },
        {
          "yaw": 2.385795155005482,
          "pitch": 0.28754363775412983,
          "rotation": 7.0685834705770345,
          "target": "0-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao-principal",
      "name": "BAÑO PRINCIPAL",
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
        "yaw": -0.28446431677196315,
        "pitch": 0.32631082397794486,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.052726056243123764,
          "pitch": 0.35999443089418826,
          "rotation": 0,
          "target": "2-dormitorio_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dormitorio-2",
      "name": "DORMITORIO 2",
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
          "yaw": 1.6085931940309797,
          "pitch": 0.18381834941183506,
          "rotation": 1.5707963267948966,
          "target": "1-saln"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MIALMA_PLANTA PRIMERA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
