# spaced blog theme

TODOS:

- Add font files
- Add mobile nav
- Add styling for custom render image template
- Add support for site main header image
- Add support for site main intro text
- Add support for post main image - main site header fallback
- Add support for default post author
- Add support for author per post
- Add support for multiple authors per post
- Add support for author images
- Add support for categories
- Add support for tags
- Add sidebar
- Add search support %like% behaviour
- light-mode/dark-mode cover image

![Intro](https://github.com/Morgscode/hugo-theme-spaced-blog/blob/master/images/cover.png)

A Hugo minimalistic theme for blog sites. With dark mode and a11y out of the box.

Main features:

- Dark mode support
- a11y support

## Getting started

### Installation

Create a new Hugo site:

```bash
$ hugo new site [path]
```

Clone this repository into `themes/` directory:

```bash
$ cd [path]
$ git clone https://github.com/Morgscode/hugo-theme-spaced-blog.git themes/spaced-blog
```

Add this line in the `config.toml` file:

```toml
theme = "spaced-blog"
```

### Configuration

In your `config.toml` file, define the following variables in `params`:

- `author`: Name of the main site author
- `description`: Short description of the main author
- `avatar`: Path of file containing the main site author avatar image
- `menu_item_separator`: Separator between each menu item. HTML allowed (default: " - ")
- `favicon`: Absolute path of your favicon.ico file (default: "/favicon.ico")

To add a menu item, add the following lines in `menu`:

```
[[menu.menu_name]]
  identifier = "item-identifier"
  name = "Item Name"
  url = "/item-slug"
```

[Read Hugo documentations](https://gohugo.io/content-management/menus/#readout) for more informations about menu

## License

This theme is released under the [**MIT**](/LICENSE.md) License.

## Acknowledgements
