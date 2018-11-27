var appConfig = {
  TOTAL_STEP: 11,
  PART1_STEP: 5,
  PART2_STEP: 7,
  PART3_STEP: 9,
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
  INTERVAL_POLLING: 5000
};

var migrationConfig = {
  INDEX_MAP: {
    "1": "profiles",
    "2": "users",
    "3": "vtrunks",
    "4": "gateptrunks",
    "5": "outroutes",
    "6": "groups",
    "7": "queues",
    "8": "ivr",
    "9": "cqr",
    "10": "recordings",
    "11": "announcements",
    "12": "tgroupstcond",
    "13": "iroutes",
    "14": "cdr"
  },
  LABEL_INFO: {
    profiles: {
      route: "migration/users",
      functions: [
        "cloneOldCTIProfile"
      ],
      prev: false,
      next: "users"
    },
    users: {
      route: "migration/users",
      functions: [
        "csvimport"
      ],
      prev: "profiles",
      next: "vtrunks"
    },
    vtrunks: {
      route: "migration/config",
      functions: [
        "copyOldTrunks"
      ],
      prev: "users",
      next: "gateptrunks"
    },
    gateptrunks: {
      route: "migration/config",
      functions: [
        "getOldGateways"
      ],
      prev: "vtrunks",
      next: "outroutes"
    },
    outroutes: {
      route: "migration/config",
      functions: [
        "copyOldOutboundRoutes",
        "migrateRoutesTrunksAssignements"
      ],
      prev: "gateptrunks",
      next: "groups"
    },
    groups: {
      route: "migration/config",
      functions: [
        "migrateGroups"
      ],
      prev: "outroutes",
      next: "queues"
    },
    queues: {
      route: "migration/config",
      functions: [
        "migrateQueues"
      ],
      prev: "groups",
      next: "ivr"
    },
    ivr: {
      route: "migration/config",
      functions: [
        "migrateIVRs"
      ],
      prev: "queues",
      next: "cqr"
    },
    cqr: {
      route: "migration/config",
      functions: [
        "migrateCQRs"
      ],
      prev: "ivr",
      next: "recordings"
    },
    recordings: {
      route: "migration/config",
      functions: [
        "migrateRecordings"
      ],
      prev: "cqr",
      next: "announcements"
    },
    announcements: {
      route: "migration/config",
      functions: [
        "migrateAnnouncements"
      ],
      prev: "recordings",
      next: "tgroupstcond"
    },
    tgroupstcond: {
      route: "migration/config",
      functions: [
        "migrateTimegroups",
        "migrateTimeconditions"
      ],
      prev: "announcements",
      next: "iroutes"
    },
    iroutes: {
      route: "migration/config",
      functions: [
        "migrateInboundRoutes"
      ],
      prev: "tgroupstcond",
      next: "cdr"
    },
    cdr: {
      route: "migration/cdr",
      functions: [
        "cdrmigration"
      ],
      prev: "iroutes",
      next: false
    }
  }
}