var appConfig = {
  TOTAL_STEP: 10,
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
    settings: 10
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
    '10': 'admin/settings'
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
      next: 'admin/settings'
    },
    settings: {
      prev: 'routes/outbound',
      next: false,
      last: true
    }
  },
  MAX_TRIES: 6,
  INTERVAL_POLLING: 5000
};
