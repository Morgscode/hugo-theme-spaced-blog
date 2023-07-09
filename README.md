# Spaced Blog Theme

A beautifully minimalistic Hugo theme for blogs. With dark mode, page search and a11y out of the box.

TODOS:

- Add author social media icon support
- Add about the author block for single post
- Add support for Github-like `copy to clipboard` for block-level code elements
- Add support for single post author override
- Add support for multiple authors per post
- Add support for lazyloading images

![Intro](https://github.com/Morgscode/hugo-theme-spaced-blog/raw/master/images/cover.png)

Main features:

- Dark mode support
- a11y support
- Page search
- Mobile responsive
- Blog author accreditation
- Configurable colors
- Configurable cover images

## Installation

Create a new Hugo site:

```bash
$ hugo new site [path]
```

Clone this repository into `themes/` directory:

```bash
$ cd [path]
$ git clone https://github.com/Morgscode/hugo-theme-spaced-blog.git themes/spaced-blog
```

Or if you're version controlling your website - you can add it as a submodule

```bash
$ cd [path]
$ git submodule add https://github.com/Morgscode/hugo-theme-spaced-blog.git themes/spaced-blog
```

Add this line in the `config.toml` file:

```toml
theme = "spaced-blog"
```

## Configuration

### Site params

In your `config.toml` file, define the following variables in `params`:

- `description` = This will be the default html meta description for the blog and it's homepage. It can be overridden by setting a description in the front-matter of any page or post.
- `useCover`: wether or not you want to use a cover images for the blog and its posts
- `coverLocation`: The location of the cover file you'd like to use for the blog
- `[[params.author]]`
- `[[params.author]]name`: The name of the primary blog author
- `[[params.author]]description`: The primary blog author's description

To set the blog author's avatar image - place an image named `blog-author.jpg` in your sites `/content/images` folder. 

To add a menu item, add the following lines in `menu`:

```toml
[[menu.menu_name]]
  identifier = "item-identifier"
  name = "Item Name"
  url = "/item-slug"
```

The basic menu structure you'll need for this theme is:

```toml
[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    identifier = "categories"
    name = "Categories"
    url = "/categories"
    weight = 2
  [[menu.main]]
    identifier = "tags"
    name = "Tags"
    url = "/tags"
    weight = 3
```

[Read the Hugo documentation](https://gohugo.io/content-management/menus/#readout) for more informations about menus.

#### Site colors

You can customise the theme colors from your sites config.

```toml
[params.colors]
  black = "#222222"
  white = "#fafafa"
  grey = "#dcdde1"
  red = "#e84118"
  blue = "#00a8ff"
  green = "#4cd137"
  yellow = "#fbc531"
  purple = "#9c88ff"
```

#### Site icon (favicon)

The theme ships with a default site icon (favicon) that is used in the tab in your browser but also the shortcut icon on mobile devices. To use your own favicon, just add it 
to your sites assets directory `/assets/images/favicon.(png|ico)`.

Favicons are best kept with an aspect ratio of `1:1`.

#### Cover images

To use cover images for the blog: set the `useCover` param to `true`.

```toml
[params]
  useCover = true
```

To add a default cover image for your entire blog, name your image `blog-cover.(jpg|png)` and place in `assets/images`.

The `cover-image.html` template uses a cover image hierarchy which goes as: 

1. `cover.(png|jpg)` in `page bundle`.
2. The `coverLocation` page param.
3. The `coverLocation` site param.
4. A `.jpg` image in the site's `assets/images` directory.
5. a `.png` image in the site's `assets/images` directory.

The template use the `coverLocation` params with the `resources.GetMatch` Hugo template funcions which looks in the site's `/assets` directory first and then the theme's `/assets` directory.

#### syntax highlighting

This theme ships with a slightly altered monakai syntax highlighting stylesheet and more or less the default markup highlight configuration. To use it set the `noClasses` param to false in the `markup highlight` config.

```toml
[markup]
  [markup.highlight]
    noClasses = false
```

The theme's base layout pulls in a css stylesheet which is a tiny variation on the `monokai` theme to handle the highlighting styles: `/assets/css/syntax.css`

#### Sidebar 

The theme ships with a sidebar comes with a search form which has %like% behaviour for all of your page names.

To active the sidebar set the `usesidebar` site param to `true` in your `config.toml`

```toml
[params]
  useSidebar = true
```

#### Google analytics, opengraph and twitter cards

Load these in like you would any other Hugo theme with standard support for these tools. 

[Read about Internal templates in Hugo](https://gohugo.io/templates/internal/)

## License

This theme is released under the [**MIT**](https://github.com/Morgscode/hugo-theme-spaced-blog/blob/master/LICENSE) License.
