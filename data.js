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
          "yaw": 0.013322691974217094,
          "pitch": 0.20150258136684407,
          "rotation": 5.497787143782138,
          "target": "1-360-saln"
        },
        {
          "yaw": 3.113758939917407,
          "pitch": 0.29592329281563323,
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
          "yaw": 0.8014207272522338,
          "pitch": 0.16982407023287394,
          "rotation": 0.7853981633974483,
          "target": "0-360-recibidor"
        },
        {
          "yaw": -1.9154928785022154,
          "pitch": 0.31622728426454927,
          "rotation": 1.5707963267948966,
          "target": "3-360-dormitorio-2"
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
          "yaw": 2.379625179401244,
          "pitch": 0.19233164849731565,
          "rotation": 1.5707963267948966,
          "target": "0-360-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-360-dormitorio-2",
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
          "yaw": 1.5744459517046527,
          "pitch": 0.26411303773341466,
          "rotation": 1.5707963267948966,
          "target": "1-360-saln"
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
