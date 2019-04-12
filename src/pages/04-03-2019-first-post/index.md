---
path: "/first-post"
date: "03-04-2019"
title: "Framework Paralysis."
tags: ['tech','coding','frameworks']
excerpt: "How to choose a framework for your next project, if required."
---

Have you ever been stuck on days trying to begin a project trying to figure out what framework to use? (if any) Whenever we ask for help, we’re always greeted with the answer “It depends on the situation”. But what does that really mean? We’re students with deadlines to meet (somewhat). I want to run you through the process of quickly selecting one, if required.

<br/><br/>

For those of you unfamiliar, a framework is sort a supporting tool you use to ease your work.
The most popular ones for web are the plethora of CSS frameworks, React, Vue, Express (for the backend), Django; and the list goes on and on.
I intended my first article to solely be about the architecture of my website, but decided that it would be more important to cover this instead, simply because my website task is a subset of this topic.

<br/>


### So, what's the catch? 
In computing today, emphasis is largely placed on data. If you are great at figuring out data flow for a large application, you’re guaranteed to ace your projects. As such, whenever you undertake an application, your first instinct should always be to sketch out how you’re going to contain your data.

Let’s take this website for example. I began by asking myself a few questions:

* Is this website computationally heavy, or is it more of content?
* Do I want a framework to do my job for me?
* How do I want to handle my data?
* Am I required to bother about further optimization?

<br/>

Let’s answer these step by step.

### Figuring out my website requirements

To answer question one, it is clear that this project is solely reliant on content. There will be no backend/database requirement in the near future. However, I do not want each of my blog posts to be a bunch of HTML files, that’d be a violation of the DRY principle and horribly inefficient.

The solution here is Static Site Rendering (SSR). A popular term in the web-dev sphere today, this is essentially a way in which you describe a template for your content, and data comes in from elsewhere. There a bunch of popular ones, namely Hugo, Jekyll and if you’re familiar with React, then Gatsby comes to mind.

### Choosing a framework

I have personally chosen to go with [Gatsby](https://www.gatsbyjs.org/) for this website. The concept is simple. Tomorrow, when I want to write a new post, I do not have to think of the overhead of writing some HTML all over again, or worrying about managing a backend. Gatsby provides me with all the tools to automate this problem. My only focus is on the article I’m writing.

### Choosing my source of data

The third step is to figure out how to handle my data. I have an endless number of options, a headless CMS (such as headless Wordpress), markdown, Contentful, or just writing my own script to get my API up.
I chose to go with markdown files. Gatsby works blazing fast, so the only potential bottleneck could be my API failing me. At the cost of re-deploying everytime I make a new post, I save myself having to worry about speed all that much. The difference is not too large, but it’s always worth optimizing. More about this methodology can be read [here](https://jamstack.org/).

### Further optimization techniques

And for the final question, am I required to optimize my build files? JavaScript is notorious for leaving a large trail. Your build files’ size is definitely something you can bring down. You have to remember that a framework is generally heavy, it's got a lot of stuff you probably do not want. That is precisely why pruning/trimming becomes all the more important.
<br/>

Many frameworks these days come with multiple flags that you can set when setting up a skeleton project using their CLI, which allows you to opt-out of several options they provide. A common one is opting out of unit testing modules, API-only mode etc. It is vital to gather your project requirements first and plan for this accordingly.
<br/>

Moreover, you can always work on compressing your images for different screen sizes, for me personally that always seems to increase load speed by 30-40%.
[Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) is something you should always consider using to check for optimization. It covers everything I’ve mentioned above, and more. 

### When not to choose a framework:

There’s a popular saying, “if you have a hammer, everything looks like a nail”. 
Once you learn a particular tool or framework, there is tendency to overuse it, and this is rampant in the software engineering field. We are all subject to our own personal bias.
However, if it results in poor optimization or difficulty in working with a team (if your team members are not able to grasp said framework), then you should consider making a switch, or dropping the idea of one. Remember, we invented these as tools to help us out, they are not meant to dictate the course of our project.




