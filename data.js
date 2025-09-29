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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.08020684621310892,
        "pitch": 0.04844308992967861,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 3.1301502978547893,
          "pitch": 0.39223156484558785,
          "rotation": 0,
          "target": "3-360-dormitorio-prin"
        },
        {
          "yaw": 0.06998113438790199,
          "pitch": 0.35280836355649825,
          "rotation": 5.497787143782138,
          "target": "1-360-saln"
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.2588413107146206,
        "pitch": 0.00025646513535271254,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.7926247421666144,
          "pitch": 0.17146079107315693,
          "rotation": 6.283185307179586,
          "target": "0-360-recibidor"
        },
        {
          "yaw": -0.8458083038212099,
          "pitch": 0.31685395017759,
          "rotation": 7.0685834705770345,
          "target": "2-360-dormitorio-indiv"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-360-dormitorio-indiv",
      "name": "360-DORMITORIO INDIV",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.28991948395558076,
        "pitch": 0.20708846728113706,
        "fov": 1.3093574628562612
      },
      "linkHotspots": [
        {
          "yaw": 2.19341435708934,
          "pitch": 0.31813590218146715,
          "rotation": 1.5707963267948966,
          "target": "1-360-saln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-360-dormitorio-prin",
      "name": "360-DORMITORIO PRIN",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.107386992518176,
        "pitch": 0.4081596788690742,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.3736016522838472,
          "pitch": 0.33571659516925223,
          "rotation": 0.7853981633974483,
          "target": "0-360-recibidor"
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
