#![deny(clippy::all)]

use napi_derive::napi;
use whatlang::{ 
  detect_lang as detect_lang_vendor,
  detect_script as detect_script_vendor
};


#[napi(js_name = "detectLang")]
pub fn detect_lang(input: String, iso_6393: Option<bool>) -> &'static str {
  let lang = detect_lang_vendor(&input).unwrap();

  match iso_6393 {
      Some(v) => if v { lang.code() } else { lang.eng_name() },
      None => lang.eng_name()
  }
}

#[napi(js_name = "detectScript")]
pub fn detect_script(input: String) -> String {
  let script = detect_script_vendor(&input).unwrap();

  script.name().to_owned()
}