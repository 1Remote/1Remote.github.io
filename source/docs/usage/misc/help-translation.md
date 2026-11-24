# Help translation

It would be really awesome to offer **1Remote** in many different languages! So you're really welcome to translate **1Remote** into your (native) language, or to fix a mistake in an existing translation. This page explains how the translation files work, how to send us a change, and who has helped so far.

{{appname}} currently ships 16 languages: English, 简体中文, 正體中文, čeština, Deutsch, Español (Argentina), Français, Galego, Italiano, 日本語, 한국어, Polski, Portuguese (pt-BR), Português (pt-PT), Русский and Türkçe. The 16 come from the 16 CSV files in `Ui/Resources/Languages/glossary/`; each one is listed with its contributor below.

## How the translation files work

All user-visible text lives in CSV files in the folder `Ui/Resources/Languages/glossary/` of the [source repository](https://github.com/1Remote/1Remote/tree/main/Ui/Resources/Languages/glossary), one file per language: `en-us.csv` (English), `zh-cn.csv` (Simplified Chinese), `de-de.csv` (German) and so on. English is the template: every other language file has the same rows in the same order.

Each file looks like this:

```text
key;en-us
language_code-ISO;en-US
language_code-google;en
language_name;English (en-US)
Warning;Warning
Error;Error
...
```

- The first column (`key`) identifies a text. Never change it.
- The second column is the text shown in the app. This is what you translate.
- The first 4 rows describe the language itself (its file code, its ISO code such as `ko-KR`, its Google Translate code, and the name shown in the language list).

The `*.xaml` files and `LanguagesList.cs` in the folder `Ui/Resources/Languages/` are **generated** from the CSV files by a script. Do not edit them by hand.

!!! note "CSV rules"
    - The delimiter is a semicolon `;` and the file must be saved with UTF-8 encoding and LF line endings.
    - Do not open the file with Office Excel: it changes the encoding. Use a code editor (VS Code, Notepad++) or a web editor such as <https://edit-csv.net>.
    - To put a semicolon or a line break inside a text, enclose the whole text in double quotation marks. To put a double quotation mark inside the text, write it twice (`""`).
    - A row with an empty second column falls back to Google Translate when the script runs (the result is cached in `glossary_translated_by_google/`). If you are unsure about a term, leave it empty rather than guessing.

## Fix or improve an existing translation

1. Fork and clone the repository.
2. Open the CSV file of your language in `Ui/Resources/Languages/glossary/` and edit the second column of the rows you want to change.
3. Regenerate the resource files: run `conver_glossary_to_xaml.bat` in `Ui/Resources/Languages/` (it needs Python; the first run installs a few packages and may fail, run it again). It updates the `.xaml` file of your language.
4. Commit the CSV file and the regenerated `.xaml` file, then open a pull request.
5. Add your name to the [Current contributors](#current-contributors) list below. Click the pencil icon at the top of this page to edit the page on GitHub.

## Add a new language

1. Fork and clone the repository.
2. Copy `glossary/en-us.csv` and rename the copy with your language code, for example `es-es.csv` for Spanish or `ko-kr.csv` for Korean.
3. Edit the first 4 rows of the new file:

    | Row | Column 2     | Example   | Meaning                                        |
    | --- | ------------- | --------- | ---------------------------------------------- |
    | 1   | `en-us`       | `es-es`   | File name / internal code                      |
    | 2   | `en-US`       | `es-ES`   | ISO language code                              |
    | 3   | `en`          | `es`      | Google Translate code                          |
    | 4   | `English (en-US)` | `Español (es-ES)` | Name shown in the app's language list  |

4. Translate the second column of all the other rows.
5. Run `conver_glossary_to_xaml.bat` in `Ui/Resources/Languages/`. It creates the `.xaml` file of your language and adds the language to `LanguagesList.cs`.
6. Commit the CSV file, the new `.xaml` file and `LanguagesList.cs`, then open a pull request.
7. Add your name to the [Current contributors](#current-contributors) list below (see step 5 of the previous section).

!!! tip
    If the script cannot reach Google Translate from your network, open `glossary_maker.py` (the Python script that `conver_glossary_to_xaml.bat` runs) and adjust the proxy settings of the `Translator(...)` line, as described in [`readme.md`](https://github.com/1Remote/1Remote/blob/main/Ui/Resources/Languages/readme.md).

## Current contributors

Thank you to everyone who translated or reviewed a language!

### Chinese

- [x] zh-CN — @[Shawn](https://github.com/VShawn)
- [x] zh-TW — @[yrctw](https://github.com/yrctw)

### Czech

- [x] cs-CZ — @[p-bo](https://github.com/p-bo)

### English

- [x] en-US — @[Shawn](https://github.com/VShawn), @[majkinetor](https://github.com/majkinetor), @[luki1412](https://github.com/luki1412)

### French

- [x] fr-FR — @Vincent

### Galician

- [x] gl-ES — Hugo Alexandre Perez

### German

- [x] de-DE — Daniel Berg, @[minteral](https://github.com/minteral)

### Italian

- [x] it-IT — @[lfasci](https://github.com/lfasci)

### Japanese

- [x] ja-JP — @[itagagaki](https://github.com/itagagaki)

### Korean

- [x] ko-KR — @[Jadeson87](https://github.com/Jadeson87)

### Polish

- [x] pl-PL — @[Jokerowatowy](https://github.com/Jokerowatowy), @[BestiaPL](https://github.com/BestiaPL)

### Portuguese

- [x] pt-BR — @[KernelGM](https://github.com/KernelGM)
- [x] pt-PT — @[AceVentura](https://github.com/AceVentura)

### Russian

- [x] ru-RU — @[DeXP](https://github.com/DeXP)

### Spanish

- [x] es-AR — @[adssi-local](https://github.com/adssi-local)

### Turkish

- [x] tr-TR — @[vturkman](https://github.com/vturkman)

{% include 'footer.md' %}
