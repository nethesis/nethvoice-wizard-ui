var appConfig = {
  TOTAL_STEP: 8,
  PART1_STEP: 4,
  PART2_STEP: 6,
  STEP_MAP: {
    extensions: 1,
    profiles: 2,
    devices: 3,
    configurations: 4,
    physical: 5,
    voip: 6,
    inbound: 7,
    outbound: 8
  },
  STEP_MAP_REVERSE: {
    '0': 'users',
    '1': 'users/extensions',
    '2': 'users/profiles',
    '3': 'users/devices',
    '4': 'users/configurations',
    '5': 'trunks/physical',
    '6': 'trunks/voip',
    '7': 'routes/inbound',
    '8': 'routes/outbound'
  },
  STEP_WIZARD: {
    extensions: {
      prev: false,
      next: 'users/profiles'
    },
    profiles: {
      prev: 'users/extensions',
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
      next: false,
      last: true
    }
  },
  MAX_TRIES: 6,
  INTERVAL_POLLING: 5000
};
