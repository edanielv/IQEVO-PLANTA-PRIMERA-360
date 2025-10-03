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
          "yaw": 0.015542293994815992,
          "pitch": 0.29325564912144486,
          "rotation": 5.497787143782138,
          "target": "1-saln"
        },
        {
          "yaw": 3.120566237159518,
          "pitch": 0.2836375149625461,
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
          "yaw": 0.8003469318888374,
          "pitch": 0.19542918538526344,
          "rotation": 0.7853981633974483,
          "target": "0-recibidor"
        },
        {
          "yaw": -1.9148982512688058,
          "pitch": 0.30678729805611304,
          "rotation": 1.5707963267948966,
          "target": "3-dormitorio_2"
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
          "yaw": 2.38500767559624,
          "pitch": 0.224830237620246,
          "rotation": 1.5707963267948966,
          "target": "0-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dormitorio_2",
      "name": "DORMITORIO_2",
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
          "yaw": 1.5922961828120776,
          "pitch": 0.31048783288212967,
          "rotation": 0.7853981633974483,
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
