import test from 'ava'

import { detectLang, detectScript } from '../index'

const inputText = [
  ['This is a test', 'English', 'Latin'],
  ['这是测试。', 'Mandarin', 'Mandarin'],
  ['これはテストです。', 'Japanese', 'Hiragana'],
  ['Esto es una prueba.', 'Spanish', 'Latin'],
  ['Ceci est un test.', 'French', 'Latin'],
  ['이것은 테스트입니다.', 'Korean', 'Hangul'],
  [
    `هذا اختبار.




  `,
    'Arabic',
    'Arabic',
  ],
  ['Isto é um teste.', 'Portuguese', 'Latin'],
]

inputText.forEach(([fixture, match, script]) => {
  test(`${fixture} should match ${match}`, (t) => {
    t.is(detectLang(fixture), match)
  })

  test(`${fixture} should match script ${script}`, (t) => {
    t.is(detectScript(fixture), script)
  })
})
