# Jeffrey Hsu's React Component Library

Work in progress to learn about Styled Components, publishing on npm, Storybook, component design, and getting deeper into React.

**Current Elements**

`Button` - Button containing text with 4 themes (primary, secondary, danger, ghost), 3 sizes (small, medium, large), and a flag to disable it.

`MenuItem` - \<a> element containing a text label with 3 sizes (small, medium, large).

`Menu` - Container for `MenuItem` with adjustable width, border width, border color, and border styles (top, bottom, right, left, all).

`Header` - Simulates an <h#> tag without all the padding. You can adjust the font-size with the `size` prop using any size measurement (em, px, etc).

`Icon` - <img> with circular or square frame and various sizes (small, thumbnail, native), mostly used for things like buttons and profile pictures.

`Card` - Container that uses `Icon` and `Header` to display information such as profiles. An example would be the "about the author" sections on Medium.com articles.

`Accordion` - A clickable header that expands into a <div> content. It accepts a size (small, medium, large) and a title (string) prop. Content <div> currently supports a max-height of 300em.
