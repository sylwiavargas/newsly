# Discussion Question: State and Conditional Rendering

## Objective

Your goal is to implement a number of user settings for our application using state to allow users to change the appearance of the application.

### List vs Card View

In `App`, you'll find a button that says "Switch to List View"

When this button is clicked, the view should change from a card view into a list view. The text on the button should also change to "Switch to Card View"

We've provided you with an`ArticleItem` component - inspect its `props` and figure out how to render it in place of `ArticleCard`. In addition, for styling, we've provided `list` and  `cards` CSS classes - find `cards` in `App` and try switching it to `list` to see what it does. How could you make the CSS `className` switch along with state?

Clicking the button again should switch the view back.

### Light vs Dark Mode

In `App`, you'll find a button that says "Switch to Dark Mode"

When this button is clicked, the view should change to a dark theme. The text on the button should also change to "Switch to Light View"

We've provided a CSS class called `dark`. Look through all of the code that's already in place for the `light` className. Try replacing them with `dark` and see how the style of the application changes. Consider how you might allow state to control which style to apply.


### Questions to ask

1. What state will you need? What data types will they hold?
2. Where does state need to be? Which components need access to this data?
3. How can we use state in coordination with conditional rendering to allow the user the control what appears on the page?