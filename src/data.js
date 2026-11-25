export const DATA = {
  id: 'dsh-anemia',
  name: '贫血',
  prefix: 'anemia',
  label: '贫血',
  defaultEeriness: 2,
  gain: 0.3,
  flareChance: 0.26,
  flareGain: 20,
  triggerWeight: 0.95,
  flareWeight: 0.9,
  reliefs: [
    { id: 'sit', label: '坐下来歇一会儿', relief: 22, minutes: 30, calm: 8 },
    { id: 'eat', label: '吃点东西', relief: 16, minutes: 40, calm: 6 },
    { id: 'slowdown', label: '慢慢起身', relief: 12, minutes: 25, calm: 4 },
  ],
  body: {
    stiff: '蹲下再站起来，眼前白了一下，得扶着墙。',
    ache: '一直有点乏，爬两层楼就喘；说话到后半句气不够，得换一次气。',
    flare: '眼前发黑，耳朵里嗡一声；得坐下低头缓一会儿才敢动。',
  },
  voice: {
    base: '句子允许在中段换一口气（用逗号断开）；别说自己「虚」，也别报血色素。',
    flare: '允许先坐下再说、允许一句话只说完前半截；不要描述脸色。',
  },
}
