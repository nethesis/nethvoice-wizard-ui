var appConfig_OLD = {
  TOTAL_STEP: 11,
  STEP_MAP: {
    extensions: 1,
    groups: 2,
    profiles: 3,
    devices: 4,
    configurations: 5,
    physical: 6,
    voip: 7,
    inbound: 8,
    outbound: 9,
    languages: 10,
    settings: 11
  },
  STEP_MAP_REVERSE: {
    '0': 'users',
    '1': 'users/extensions',
    '2': 'users/groups',
    '3': 'users/profiles',
    '4': 'users/devices',
    '5': 'users/configurations',
    '6': 'trunks/physical',
    '7': 'trunks/voip',
    '8': 'routes/inbound',
    '9': 'routes/outbound',
    '10': 'admin/languages',
    '11': 'admin/settings'
  },
  TRUNKS_PREV_STEP: 5,
  ROUTES_PREV_STEP: 7,
  ADMINS_PREV_STEP: 9,
  STEP_WIZARD: {
    extensions: {
      prev: false,
      next: 'users/groups'
    },
    groups: {
      prev: 'users/extensions',
      next: 'users/profiles'
    },
    profiles: {
      prev: 'users/groups',
      next: 'users/devices'
    },
    devices: {
      prev: 'users/profiles',
      next: 'users/configurations'
    },
    configurations: {
      prev: 'users/devices',
      next: 'trunks/physical'
    },
    physical: {
      prev: 'users/configurations',
      next: 'trunks/voip'
    },
    voip: {
      prev: 'trunks/physical',
      next: 'routes/inbound'
    },
    inbound: {
      prev: 'trunks/voip',
      next: 'routes/outbound'
    },
    outbound: {
      prev: 'routes/inbound',
      next: 'admin/languages'
    },
    languages: {
      prev: 'routes/outbound',
      next: 'admin/settings'
    },
    settings: {
      prev: 'admin/languages',
      next: false,
      last: true
    }
  },
  MAX_TRIES: 6,
  INTERVAL_POLLING: 2000
};

var appConfig = {
  TOTAL_STEP: 13,
  STEP_MAP: {
    extensions: 1,
    groups: 2,
    profiles: 3,
    devices: 4,
    inventory: 5,
    models: 6,
    configurations: 7,
    physical: 8,
    voip: 9,
    inbound: 10,
    outbound: 11,
    languages: 12,
    settings: 13
  },
  STEP_MAP_REVERSE: {
    '0': 'users',
    '1': 'users/extensions',
    '2': 'users/groups',
    '3': 'users/profiles',
    '4': 'devices',
    '5': 'devices/inventory',
    '6': 'devices/models',
    '7': 'configurations',
    '8': 'trunks/physical',
    '9': 'trunks/voip',
    '10': 'routes/inbound',
    '11': 'routes/outbound',
    '12': 'admin/languages',
    '13': 'admin/settings'
  },
  DEVICES_PREV_STEP: 3,
  CONFIGURATIONS_PREV_STEP: 6,
  TRUNKS_PREV_STEP: 7,
  ROUTES_PREV_STEP: 9,
  ADMINS_PREV_STEP: 11,
  STEP_WIZARD: {
    extensions: {
      prev: false,
      next: 'users/groups'
    },
    groups: {
      prev: 'users/extensions',
      next: 'users/profiles'
    },
    profiles: {
      prev: 'users/groups',
      next: 'devices'
    },
    devices: {
      prev: 'users/profiles',
      next: 'devices/inventory'
    },
    inventory: {
      prev: 'users/profiles',
      next: 'devices/models'
    },
    models: {
      prev: 'devices/inventory',
      next: 'configurations'
    },
    configurations: {
      prev: 'devices/models',
      next: 'trunks/physical'
    },
    physical: {
      prev: 'configurations',
      next: 'trunks/voip'
    },
    voip: {
      prev: 'trunks/physical',
      next: 'routes/inbound'
    },
    inbound: {
      prev: 'trunks/voip',
      next: 'routes/outbound'
    },
    outbound: {
      prev: 'routes/inbound',
      next: 'admin/languages'
    },
    languages: {
      prev: 'routes/outbound',
      next: 'admin/settings'
    },
    settings: {
      prev: 'admin/languages',
      next: false,
      last: true
    }
  },
  MAX_TRIES: 6,
  INTERVAL_POLLING: 2000
};

var migrationConfig = {
  INDEX_MAP: {
    "1": "profiles",
    "2": "users",
    "3": "vtrunks",
    "4": "gateptrunks",
    "5": "iax",
    "6": "outroutes",
    "7": "groups",
    "8": "queues",
    "9": "ivr",
    "10": "cqr",
    "11": "recordings",
    "12": "announcements",
    "13": "daynight",
    "14": "tgroupstcond",
    "15": "iroutes",
    "16": "postmig",
    "17": "cdr"
  },
  LABEL_INFO: {
    profiles: {
      route: "/migration/users",
      functions: [
        "cloneOldCTIProfile"
      ],
      prev: false,
      next: "users"
    },
    users: {
      route: "/migration/users",
      functions: [
        "csvimport"
      ],
      prev: "profiles",
      next: "vtrunks"
    },
    vtrunks: {
      route: "/migration/config",
      functions: [
        "copyOldTrunks"
      ],
      prev: "users",
      next: "gateptrunks"
    },
    gateptrunks: {
      route: "/migration/config",
      functions: [
        "getOldGateways"
      ],
      prev: "vtrunks",
      next: "iax"
    },
    iax: {
      route: "/migration/config",
      functions: [
        "migrateIAX"
      ],
      prev: "gateptrunks",
      next: "outroutes"
    },
    outroutes: {
      route: "/migration/config",
      functions: [
        "copyOldOutboundRoutes",
        "migrateRoutesTrunksAssignements"
      ],
      prev: "gateptrunks",
      next: "groups"
    },
    groups: {
      route: "/migration/config",
      functions: [
        "migrateGroups"
      ],
      prev: "outroutes",
      next: "queues"
    },
    queues: {
      route: "/migration/config",
      functions: [
        "migrateQueues"
      ],
      prev: "groups",
      next: "ivr"
    },
    ivr: {
      route: "/migration/config",
      functions: [
        "migrateIVRs"
      ],
      prev: "queues",
      next: "cqr"
    },
    cqr: {
      route: "/migration/config",
      functions: [
        "migrateCQRs"
      ],
      prev: "ivr",
      next: "recordings"
    },
    recordings: {
      route: "/migration/config",
      functions: [
        "migrateRecordings"
      ],
      prev: "cqr",
      next: "announcements"
    },
    announcements: {
      route: "/migration/config",
      functions: [
        "migrateAnnouncements"
      ],
      prev: "recordings",
      next: "daynight"
    },
    daynight: {
      route: "/migration/config",
      functions: [
        "daynight"
      ],
      prev: "announcements",
      next: "tgroupstcond"
    },
    tgroupstcond: {
      route: "/migration/config",
      functions: [
        "migrateTimegroups",
        "migrateTimeconditions"
      ],
      prev: "announcements",
      next: "iroutes"
    },
    iroutes: {
      route: "/migration/config",
      functions: [
        "migrateInboundRoutes"
      ],
      prev: "tgroupstcond",
      next: "postmig"
    },
    postmig: {
      route: "/migration/config",
      functions: [
        "postMigration"
      ],
      prev: "iroutes",
      next: "cdr"
    },
    cdr: {
      route: "/migration/cdr",
      functions: [
        "cdrmigration"
      ],
      prev: "iroutes",
      next: null
    }
  }
}