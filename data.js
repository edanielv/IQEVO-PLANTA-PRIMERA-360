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
          "yaw": 0.035333331600142515,
          "pitch": 0.29709634287570097,
          "rotation": 5.497787143782138,
          "target": "1-saln"
        },
        {
          "yaw": 3.1250167850596506,
          "pitch": 0.26734988971763407,
          "rotation": 0,
          "target": "2-dormitorio-principal"
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
          "yaw": 0.8077406870234594,
          "pitch": 0.183184683216723,
          "rotation": 0.7853981633974483,
          "target": "0-recibidor"
        },
        {
          "yaw": -1.930032833567525,
          "pitch": 0.3183208070594894,
          "rotation": 1.5707963267948966,
          "target": "3-dormitorio_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitorio-principal",
      "name": "DORMITORIO PRINCIPAL",
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
          "yaw": 2.3829411552408146,
          "pitch": 0.21067723622152457,
          "rotation": 1.5707963267948966,
          "target": "0-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dormitorio_02",
      "name": "DORMITORIO_02",
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
          "yaw": 1.586958648887876,
          "pitch": 0.27922046188581895,
          "rotation": 7.0685834705770345,
          "target": "1-saln"
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
