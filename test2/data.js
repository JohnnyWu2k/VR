var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "一號出口",
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
        "yaw": -2.189688963109081,
        "pitch": 0.10062919168719198,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.097649081641073,
          "pitch": 0.1558863714733576,
          "rotation": 4.71238898038469,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3637645890247967,
          "pitch": -0.1562780829082051,
          "title": "一號出口",
          "text": "松山高中"
        }
      ]
    },
    {
      "id": "1-",
      "name": "捷運內部",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.094622358436972,
          "pitch": -0.06748060918404342,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0163203059174766,
          "pitch": -0.11185455469276562,
          "title": "松山高中",
          "text": "一號出口"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
