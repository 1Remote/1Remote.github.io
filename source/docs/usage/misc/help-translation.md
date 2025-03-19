It would be really awesome to offer **1Remote** in many different languages! So you're really Welcome to translate **1Remote** in your (native) language, but don't worry there are just a few strings.

## How to translate

1. fork and clone
2. open file `glossary.csv` in `Ui\Resources\Languages` by `https://edit-csv.net`.
3. Add a new cloumn for your new language & Fill in the blanks.
4. Run the python script `conver_glossary_to_xaml.bat`, it will analysis the glossary you edited, and fill the blank in it (using Google translate). Then new `.xaml` and `LanguagesList.cs` will be generated.

!!! note

  - You may have to edit or remove the proxy in `glossary_maker.py`
  - Do not edit any `.xaml` / `.cs` files directly, they are auto generated from glossary csv file.

      **See all this below were generated, do not edit any of them.**

      ![image](https://user-images.githubusercontent.com/10143738/179880239-400b87b0-deed-4ab9-b73d-df34994d41c6.png)

5. push the glossary file back:

   1. send the new file to me(veckshawn@gmail.com)

   2. (recommend) Start a new pull requests.

6. Edit this page, add your name :)

See also [Readme.md](https://github.com/1Remote/1Remote/blob/main/Ui/Resources/Languages/readme.md)

## Current contributors

If you'd like to help out, please add your name and how we can contact you to this list. And thank you!

### Arabic

- [ ] ar-DZ
- [ ] ar-SA
- [ ] ...

### Bangla

- [ ] bn-BD
- [ ] bn-IN

### Chinese

- [x] zh-CN (@[Shawn](https://github.com/VShawn))
- [x] zh-TW (@[yrctw](https://github.com/yrctw))
- [ ] zh-HK

### Czech

- [x] cs-CZ (@[p-bo](https://github.com/p-bo))

### Dutch

- [ ] nl-BE
- [ ] nl-NL

### English

- [x] en-US (@[Shawn](https://github.com/VShawn) @[majkinetor](https://github.com/majkinetor) @[luki1412](https://github.com/luki1412))
- [ ] ...

### French

- [x] fr-FR(@Vincent)
- [ ] ...

### Galego

- [x] gl-ES (Hugo Alexandre Perez)

### German

- [x] de-DE (@[NAV-Management](https://github.com/NAV-Management))
- [ ] ...

### Italian

- [ ] it-IT
- [ ] ...

### Japanese

- [x] ja-JP (@[Itagaki](https://github.com/itagagaki))

### Korean

- [ ] ko-KR

### Polish

- [x] pl-Pl (@[Jokerowatowy](https://github.com/Jokerowatowy))

### Portuguese

- [x] pt-BR (@[KernelGM](https://github.com/KernelGM))

### Russian

- [x] ru-RU (@[DeXP](https://github.com/DeXP)) 

### Spanish

- [ ] es-ES
- [ ] es-MX
- [ ] es-AR
- [ ] ...

### Swedish

- [ ] sv-SE

### Ukrainian

- [ ] uk-UA


{% include 'footer.md' %}
