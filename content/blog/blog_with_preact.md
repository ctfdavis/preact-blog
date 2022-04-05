---
title: Writing my Blog in Preact
date: 2022-04-05
update: 2022-04-05
tags: 'Blog, Preact, Sharing'
---
I rewrote my blog in Preact. Here's what I have learned.

For those interested, the repo for this blog is public [on Github](https://github.com/ctfdavis/preact-blog).

## Why Preact

I have rewritten my blog more than a couple times by now.
In the previous two rewrites, I used Angular and Next.js.
While I love those frameworks and find them very effective at building projects that scale well, I wonder if there's a more minimal setup for my blog.

So then I began my little research. I have heard good things about Svelte, but I don't think I am that interested in learning another front-end library/framework for now.

Then, I discovered [Preact](https://preactjs.com). It's a smaller alternative to React. At only 3.5 kB big, I would really want to give it a shot. Hence, I started rewriting my blog in Preact.

## Lessons Learned

TLDR: Though Preact is well-documented, it is certainly not _perfect_. Due to a smaller community, there's little support for some issues. 
For example, prerendering pages with data does not work in development mode.
This was quite a big issue for me while developing this blog.

Also, the examples available are limited. There's only a handful of templates available, and most of them are in JavaScript rather than in TypeScript.
Speaking of which, there's a lack of TypeScript support for some internal packages, like the `@preact/prerender-data-provider` package for prerendering pages with data.

However, if you can live with those drawbacks, Preact is actually a little beast. Preact is just like React, so there's little to no learning curve for a React developer to come and pick it up.
Also, Preact is _really, really_ tiny. As long as you don't install some heavy 3rd party libraries, the build should be super lightweight. Chances are that your Preact website will be a breeze to load.

## Summary

I love Preact for what it does.
While it has some deficiencies compared to the bigger guys like Next.js, I really enjoy using a library this small. 
I think it's awesome for a smaller project. For a bigger, function-rich web application, I would probably stick with a framework like Next.js for now.
