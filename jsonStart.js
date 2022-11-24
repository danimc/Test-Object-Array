const start = {
  session: {
    id: 24,
    id_user: 2,
    session_type: 2,
    start_time: '2022-11-24T14:55:24.041029Z',
    end_time: null,
  },
  area: {
    id_pole_start: 22,
    poles: [
      {
        id: 22,
        name: 'AV LOPEZ PORTILLO - AV 127',
        lat: '21.151487000000000',
        lon: '-86.872660799999990',
        idZone: null,
        cameras: [
          {
            id: 85,
            name: 'AV LOPEZ PORTILLO - AV 127 - 1',
            id_vms: 1261,
          },
          {
            id: 86,
            name: 'AV LOPEZ PORTILLO - AV 127 - 2',
            id_vms: 1262,
          },
          {
            id: 87,
            name: 'AV LOPEZ PORTILLO - AV 127 - 3',
            id_vms: 1263,
          },
          {
            id: 88,
            name: 'AV LOPEZ PORTILLO - AV 127 - PTZ',
            id_vms: 1264,
          },
        ],
        cameras_count: 4,
      },
      {
        id: 284,
        name: 'AV LOPEZ PORTILLO - AV CHACMOL',
        lat: '21.152372300000000',
        lon: '-86.870935899999990',
        idZone: null,
        cameras: [
          {
            id: 1133,
            name: 'AV LOPEZ PORTILLO - AV CHACMOL - 1',
            id_vms: 1257,
          },
          {
            id: 1134,
            name: 'AV LOPEZ PORTILLO - AV CHACMOL - PTZ',
            id_vms: 1260,
          },
          {
            id: 1135,
            name: 'AV LOPEZ PORTILLO - AV CHACMOL - 3',
            id_vms: 1259,
          },
          {
            id: 1136,
            name: 'AV LOPEZ PORTILLO - AV CHACMOL - 2',
            id_vms: 1258,
          },
        ],
        cameras_count: 4,
      },
      {
        id: 194,
        name: 'AV LOPEZ PORTILLO - CALLE 131 NORTE',
        lat: '21.150325100000000',
        lon: '-86.874963799999990',
        idZone: null,
        cameras: [
          {
            id: 773,
            name: 'AV LOPEZ PORTILLO - CALLE 131 NORTE - 1',
            id_vms: 1265,
          },
          {
            id: 774,
            name: 'AV LOPEZ PORTILLO - CALLE 131 NORTE - PTZ',
            id_vms: 1268,
          },
          {
            id: 775,
            name: 'AV LOPEZ PORTILLO - CALLE 131 NORTE - 2',
            id_vms: 1266,
          },
          {
            id: 776,
            name: 'AV LOPEZ PORTILLO - CALLE 131 NORTE - 3',
            id_vms: 1267,
          },
        ],
        cameras_count: 4,
      },
    ],
    date_creation: '2022-11-24T14:55:24.086219Z',
  },
  outcoming_resolution: {
    width: 720,
    height: 480,
  },
  servers: [
    {
      id_server_name: 'docker-compose',
      cameras_use: 12,
      cameras_on_list:
        '[85, 86, 87, 88, 773, 774, 775, 776, 1133, 1134, 1135, 1136]',
    },
  ],
};

export { start };
