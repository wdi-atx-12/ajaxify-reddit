# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Ajaxify Reddit

![Reddit HQ](https://cloud.githubusercontent.com/assets/4304660/26000299/00ae5066-36ee-11e7-813b-9a3210f09cd7.gif)

There's currently a little known gem out on the internet called [Reddit](https://www.reddit.com). The developers are currently swamped with new feature requests and need your help. They want to test out the Reddit website as a single page application. They have some starter code but haven't had a chance to go much further than that.

## The Reddit API

Luckily, to access the data for the homepage and other landing pages, all you have to do is append `.json` to the end of the normal URL.

For example:

```
// Homepage URL
https://www.reddit.com/

// JSON data for the homepage
https://www.reddit.com/.json
```

```
// New Post URL
https://www.reddit.com/new/

// JSON data for the 'new' section
https://www.reddit.com/new/.json
```

## Deliverables

- Replicate the list of stories for each section, with the story image, link, and any relevant information
- Allow the user to click the story link or image to go to the actual URL of the story
- For now, **don't** worry about giving users the ability to upvote or downvote the story
- Fork THEN clone this repository to have a unique product you can link to on your personal portfolio.

## Implementation
1. Spend a few moments browsing Reddit to familiarize yourself with how the site works.
2. Draw a quick wireframe of how you would want YOUR page to look displaying multiple posts.

	![](https://cloud.githubusercontent.com/assets/4304660/25999913/7f4425b0-36ec-11e7-82dc-de417ca95dac.png)

3. Label your wireframe components with any relevant tags or special css classes that would dictate how your page interacts with the user (i.e. `.col-xs-4`, `.img-responsive`, `.float-left`, etc.)
4. Run a sanity check to see if you can hit the Reddit API with an `AJAX` `GET` request *( hint: it is very similar to the geoQuakes request )*
- Drill through your JSON to find an image, a title, and a link to the first submission in the array of posts.
- Display that first post information on your web page.  
- Iterate through your json response from the Reddit API and display EVERY post the same as your first post


## Challenges

- Use string literals to create a template that you run your entire JSON response through to create a consistent output.
- Refactor your code to be more object oriented or make use of prototypes
- Now that we've redone the original homepage, let's now come up with our own mind blowing UI using Bootstrap and their data
- The call examples above only give you results for the first page. See if you can Google how to go beyond the first page of results and give them a way to navigate to other pages
