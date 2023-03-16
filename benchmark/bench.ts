import b from 'benny'
import LanguageDetect from 'languagedetect'
import { detectLang } from '../index'

const input = `If loaders are the workhorse for file transformations (preprocessing)`

async function run() {
  await b.suite(
    'detect language',

    b.add('LanguageDetect', () => {
      const lngDetector = new LanguageDetect()

      lngDetector.detect(input)
    }),

    b.add('whatlang', () => {
      detectLang(input)
    }),

    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
