---
slug: server-rendered-css
title: "Meetup 9: CSS for server rendered React components without Node.js (continued)"
authors: [prometheansacrifice]
---

We continued the development of our [Dream](https://aantron.github.io/dream/) powered Server Side rendered React components (without node.js) with [styled-ppx](https://styled-ppx.vercel.app/)

### `styled-ppx` working only on Client side

[Commit](https://github.com/ReasonOCamlIndia/dream-web-server-sessions/commit/8b334495768f6beed22d6002a51a297b07dbf032)

We used Melange compiler to compile Reason to JS, which is fed to webpack.

### Making sure it works on server side.

[Commit](https://github.com/ReasonOCamlIndia/dream-web-server-sessions/commit/0dc5e22a62d16460d89c03031d1b1ac509f11a23)

We use `CssJs.render_style_tag()` to generated server side rendered CSS to inject into the `style` tag.

### Dynamic CSS props

[Commit](https://github.com/ReasonOCamlIndia/dream-web-server-sessions/commit/7fe9493cd01d2dc5d0f79cada3ec486d70c7623f)

This was uncharted territory. Thankfully, [@davesnx](https://x.com/davesnx) had given a heads-up! The CSS rendering, `render_style_tag` must be called only after React components are rendered. 

Join us on Discord if you'd like to learn more about this.

---

We contributed some documentation too! You can find the pull request [here](https://github.com/davesnx/styled-ppx/pull/480)

## Next Meetup
We learn how to use a Router for this very same server
Learn more about it [here](/upcoming-meetups/#writing-a-router-for-the-server-rendered-react-components-without-nodejs)

## Stay in touch with us 

Twitter: https://x.com/ReasonBangalore

Discord: https://discord.com/invite/Ytr36fRC4C

