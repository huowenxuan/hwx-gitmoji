// @flow
// import chalk from 'chalk'
// import fetch from 'node-fetch'
import ora from 'ora'

import cache from './emojisCache'

export const GITMOJIS_URL =
  'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json'

const getEmojis = (skipCache: boolean = false) => {
  if (cache.isAvailable() && !skipCache) return cache.getEmojis()

  // const spinner = ora('Fetching the emoji list').start()

  // return fetch(GITMOJIS_URL)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const emojis = data.gitmojis
  //
  //     cache.createEmojis(emojis)
  //     spinner.succeed('Gitmojis fetched successfully')
  //
  //     return emojis
  //   })
  //   .catch((error) => {
  //     spinner.fail(`Error: ${error}`)
  //   })
  const emojis = json.gitmojis
  cache.createEmojis(emojis)
  return Promise.resolve(emojis)
}

export default getEmojis

let json = {
  gitmojis: [
    {
      emoji: '🎨',
      entity: '&#x1f3a8;',
      code: ':art:',
      description: '改进代码结构/代码格式',
      name: 'art'
    },
    {
      emoji: '⚡️',
      entity: '&#x26a1;',
      code: ':zap:',
      description: '提升性能',
      name: 'zap'
    },
    {
      emoji: '🔥',
      entity: '&#x1f525;',
      code: ':fire:',
      description: '移除代码或文件',
      name: 'fire'
    },
    {
      emoji: '🐛',
      entity: '&#x1f41b;',
      code: ':bug:',
      description: '修复 bug',
      name: 'bug'
    },
    {
      emoji: '🚑',
      entity: '&#128657;',
      code: ':ambulance:',
      description: '重要补丁',
      name: 'ambulance'
    },
    {
      emoji: '✨',
      entity: '&#x2728;',
      code: ':sparkles:',
      description: '引入新功能',
      name: 'sparkles'
    },
    {
      emoji: '📝',
      entity: '&#x1f4dd;',
      code: ':pencil:',
      description: '撰写文档',
      name: 'pencil'
    },
    {
      emoji: '🚀',
      entity: '&#x1f680;',
      code: ':rocket:',
      description: '部署功能',
      name: 'rocket'
    },
    {
      emoji: '💄',
      entity: '&#ff99cc;',
      code: ':lipstick:',
      description: '更新 UI 和样式文件',
      name: 'lipstick'
    },
    {
      emoji: '🎉',
      entity: '&#127881;',
      code: ':tada:',
      description: '初次提交',
      name: 'tada'
    },
    {
      emoji: '✅',
      entity: '&#x2705;',
      code: ':white_check_mark:',
      description: '增加测试',
      name: 'white-check-mark'
    },
    {
      emoji: '🔒',
      entity: '&#x1f512;',
      code: ':lock:',
      description: '修复安全问题',
      name: 'lock'
    },
    {
      emoji: '🍎',
      entity: '&#x1f34e;',
      code: ':apple:',
      description: '修复 macOS 下的问题',
      name: 'apple'
    },
    {
      emoji: '🐧',
      entity: '&#x1f427;',
      code: ':penguin:',
      description: '修复 Linux 下的问题',
      name: 'penguin'
    },
    {
      emoji: '🏁',
      entity: '&#x1f3c1;',
      code: ':checkered_flag:',
      description: '修复 Windows 下的问题',
      name: 'checkered-flag'
    },
    {
      emoji: '🤖',
      entity: '&#129302;',
      code: ':robot:',
      description: '修复 Android 下的问题',
      name: 'robot'
    },
    {
      emoji: '🍏',
      entity: '&#127823;',
      code: ':green_apple:',
      description: '修复 iOS 下的问题',
      name: 'green-apple'
    },
    {
      emoji: '🔖',
      entity: '&#x1f516;',
      code: ':bookmark:',
      description: '发行/版本标签',
      name: 'bookmark'
    },
    {
      emoji: '🚨',
      entity: '&#x1f6a8;',
      code: ':rotating_light:',
      description: '移除 linter 警告',
      name: 'rotating-light'
    },
    {
      emoji: '🚧',
      entity: '&#x1f6a7;',
      code: ':construction:',
      description: '工作进行中',
      name: 'construction'
    },
    {
      emoji: '💚',
      entity: '&#x1f49a;',
      code: ':green_heart:',
      description: '修复 CI 构建问题',
      name: 'green-heart'
    },
    {
      emoji: '⬇️',
      entity: '⬇️',
      code: ':arrow_down:',
      description: '降级依赖',
      name: 'arrow-down'
    },
    {
      emoji: '⬆️',
      entity: '⬆️',
      code: ':arrow_up:',
      description: '升级依赖',
      name: 'arrow-up'
    },
    {
      emoji: '📌',
      entity: '&#x1F4CC;',
      code: ':pushpin:',
      description: '将依赖项固定到特定的版本',
      name: 'pushpin'
    },
    {
      emoji: '👷',
      entity: '&#x1f477;',
      code: ':construction_worker:',
      description: '添加 CI 构建系统',
      name: 'construction-worker'
    },
    {
      emoji: '📈',
      code: ':chart_with_upwards_trend:',
      description: '添加分析或跟踪代码',
      name: 'chart-with-upwards-trend'
    },
    {
      emoji: '♻️',
      entity: '&#x2672;',
      code: ':recycle:',
      description: 'Refactoring code.',
      name: 'recycle'
    },
    {
      emoji: '🐳',
      entity: '&#x1f433;',
      code: ':whale:',
      description: 'Docker 相关工作',
      name: 'whale'
    },
    {
      emoji: '➕',
      entity: '&#10133;',
      code: ':heavy_plus_sign:',
      description: '增加一个依赖',
      name: 'heavy-plus-sign'
    },
    {
      emoji: '➖',
      entity: '&#10134;',
      code: ':heavy_minus_sign:',
      description: '减少一个依赖',
      name: 'heavy-minus-sign'
    },
    {
      emoji: '🔧',
      entity: '&#x1f527;',
      code: ':wrench:',
      description: '修改配置文件',
      name: 'wrench'
    },
    {
      emoji: '🌐',
      entity: '&#127760;',
      code: ':globe_with_meridians:',
      description: '国际化与本地化',
      name: 'globe-with-meridians'
    },
    {
      emoji: '✏️',
      entity: '&#59161;',
      code: ':pencil2:',
      description: '修复 typos',
      name: 'pencil'
    },
    {
      emoji: '💩',
      entity: '&#58613;',
      code: ':poop:',
      description: 'Writing bad code that needs to be improved.',
      name: 'poop'
    },
    {
      emoji: '⏪',
      entity: '&#9194;',
      code: ':rewind:',
      description: '回退代码',
      name: 'rewind'
    },
    {
      emoji: '🔀',
      entity: '&#128256;',
      code: ':twisted_rightwards_arrows:',
      description: '合并分支',
      name: 'twisted-rightwards-arrows'
    },
    {
      emoji: '📦',
      entity: '&#1F4E6;',
      code: ':package:',
      description: 'Updating compiled files or packages.',
      name: 'package'
    },
    {
      emoji: '👽',
      entity: '&#1F47D;',
      code: '::',
      description: '由于外部API更改而更新代码',
      name: 'alien'
    },
    {
      emoji: '🚚',
      entity: '&#1F69A;',
      code: ':truck:',
      description: '移动或重命名文件',
      name: 'truck'
    },
    {
      emoji: '📄',
      entity: '&#1F4C4;',
      code: ':page_facing_up:',
      description: '添加或更新 license',
      name: 'page-facing-up'
    },
    {
      emoji: '💥',
      entity: '&#x1f4a5;',
      code: ':boom:',
      description: 'Introducing breaking changes.',
      name: 'boom'
    },
    {
      emoji: '🍱',
      entity: '&#1F371',
      code: ':bento:',
      description: 'Adding or updating assets.',
      name: 'bento'
    },
    {
      emoji: '👌',
      entity: '&#x1f44c;',
      code: ':ok_hand:',
      description: 'Updating code due to code review changes.',
      name: 'ok-hand'
    },
    {
      emoji: '♿️',
      entity: '&#9855;',
      code: ':wheelchair:',
      description: 'Improving accessibility.',
      name: 'wheelchair'
    },
    {
      emoji: '💡',
      entity: '&#128161;',
      code: ':bulb:',
      description: 'Documenting source code.',
      name: 'bulb'
    },
    {
      emoji: '🍻',
      entity: '&#x1f37b;',
      code: ':beers:',
      description: 'Writing code drunkenly.',
      name: 'beers'
    },
    {
      emoji: '💬',
      entity: '&#128172;',
      code: ':speech_balloon:',
      description: 'Updating text and literals.',
      name: 'speech-balloon'
    },
    {
      emoji: '🗃',
      entity: '&#128451;',
      code: ':card_file_box:',
      description: 'Performing database related changes.',
      name: 'card-file-box'
    },
    {
      emoji: '🔊',
      entity: '&#128266;',
      code: ':loud_sound:',
      description: 'Adding logs.',
      name: 'loud-sound'
    },
    {
      emoji: '🔇',
      entity: '&#128263;',
      code: ':mute:',
      description: 'Removing logs.',
      name: 'mute'
    },
    {
      emoji: '👥',
      entity: '&#128101;',
      code: ':busts_in_silhouette:',
      description: 'Adding contributor(s).',
      name: 'busts-in-silhouette'
    },
    {
      emoji: '🚸',
      entity: '&#128696;',
      code: ':children_crossing:',
      description: 'Improving user experience / usability.',
      name: 'children-crossing'
    },
    {
      emoji: '🏗',
      entity: '&#1f3d7;',
      code: ':building_construction:',
      description: 'Making architectural changes.',
      name: 'building-construction'
    },
    {
      emoji: '📱',
      entity: '&#128241;',
      code: ':iphone:',
      description: 'Working on responsive design.',
      name: 'iphone'
    },
    {
      emoji: '🤡',
      entity: '&#129313;',
      code: ':clown_face:',
      description: 'Mocking things.',
      name: 'clown-face'
    },
    {
      emoji: '🥚',
      entity: '&#129370;',
      code: ':egg:',
      description: 'Adding an easter egg.',
      name: 'egg'
    },
    {
      emoji: '🙈',
      entity: '&#8bdfe7;',
      code: ':see_no_evil:',
      description: 'Adding or updating a .gitignore file',
      name: 'see-no-evil'
    },
    {
      emoji: '📸',
      entity: '&#128248;',
      code: ':camera_flash:',
      description: 'Adding or updating snapshots',
      name: 'camera-flash'
    },
    {
      emoji: '⚗',
      entity: '&#128248;',
      code: ':alembic:',
      description: 'Experimenting new things',
      name: 'alembic'
    },
    {
      emoji: '🔍',
      entity: '&#128269;',
      code: ':mag:',
      description: 'Improving SEO',
      name: 'mag'
    },
    {
      emoji: '☸️',
      entity: '&#9784;',
      code: ':wheel_of_dharma:',
      description: 'Work about Kubernetes',
      name: 'wheel-of-dharma'
    },
    {
      emoji: '🏷️',
      entity: '&#127991;',
      code: ':label:',
      description: 'Adding or updating types (Flow, TypeScript)',
      name: 'label'
    },
    {
      emoji: '🌱',
      entity: '&#127793;',
      code: ':seedling:',
      description: 'Adding or updating seed files',
      name: 'seedling'
    },
    {
      emoji: '🚩',
      entity: '&#x1F6A9;',
      code: ':triangular_flag_on_post:',
      description: 'Adding, updating, or removing feature flags',
      name: 'triangular-flag-on-post'
    },
    {
      emoji: '🥅',
      entity: '&#x1F945;',
      code: ':goal_net:',
      description: 'Catching errors',
      name: 'goal-net'
    },
    {
      emoji: '💫',
      entity: '&#x1f4ab;',
      code: ':dizzy:',
      description: 'Adding or updating animations and transitions',
      name: 'animation'
    }
  ]
}
