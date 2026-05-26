export const challengePool = [

  'BLINK',

  'TURN_LEFT',

  'TURN_RIGHT',

  'SMILE'
]

export function generateChallenge() {

  const randomIndex =
    Math.floor(Math.random() * challengePool.length)

  return challengePool[randomIndex]
}