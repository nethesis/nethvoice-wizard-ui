var appConfig = {
  TOTAL_STEP: 7,
  PART1_STEP: 3,
  PART2_STEP: 5,
  STEP_MAP: {
    extensions: 1,
    devices: 2,
    configurations: 3,
    physical: 4,
    voip: 5,
    inbound: 6,
    outbound: 7
  },
  STEP_MAP_REVERSE: {
    '1': 'users/extensions',
    '2': 'users/devices',
    '3': 'users/configurations',
    '4': 'trunks/physical',
    '5': 'trunks/voip',
    '6': 'routes/inbound',
    '7': 'routes/outbound'
  },
  STEP_WIZARD: {
    extensions: {
      prev: false,
      next: 'users/devices'
    },
    devices: {
      prev: 'users/extensions',
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
