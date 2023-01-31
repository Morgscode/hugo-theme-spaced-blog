# spaced theme

TODOS:

- Add mobile nav
- Add support for site main header image
- Add support for site main intro text
- Add support for post - main site header fallback
- Add support for default post author
- Add support for author per post
- Add support for multiple authors per post
- Add support for author images
- Add support for categories
- Add support for tags
- Add sidebar
- Add search support %like% behaviour

![Intro](https://github.com/Morgscode/spaced-hugo-theme/blob/master/images/screenshot.png)

A Hugo minimalistic theme for bloggers

Main features:

## Getting started

### Installation

Create a new Hugo site:

```bash
$ hugo new site [path]
```

Clone this repository into `themes/` directory:

```bash
$ cd [path]
$ git clone https://github.com/Morgscode/spaced-hugo-theme.git themes/spaced
```

Add this line in the `config.toml` file:

```toml
theme = "spaced"
```

### Configuration

In your `config.toml` file, define the following variables in `params`:

- `author`: Name of the author
- `description`: Short description of the author
- `avatar`: Path of file containing the author avatar image
- `menu_item_separator`: Separator between each menu item. HTML allowed (default: " - ")
- `favicon`: Absolute path of your favicon.ico file (default: "/favicon.ico")

To add a menu item, add the following lines in `menu`:

```
[[menu.main]]
  identifier = "home"
  name = "Home"
  url = "/"
```

[Read Hugo documentations](https://gohugo.io/content-management/menus/#readout) for more informations about menu

## License

This theme is released under the [**MIT**](/LICENSE.md) License.

## Acknowledgements
