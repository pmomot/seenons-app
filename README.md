# seenons-app

## User Stories
✅ - As a driver, I want to be able to see all the core information relevant to the
stop I am currently at (=name of customer, address, comment, orders (type,
quantity))

✅ - As a driver, I want to be able to call the customer of a stop, if they provided a
  phone number

✅ - As a driver, I want to be able to confirm that I have picked up/dropped off an
  order

⏳ - As a driver, I want to report an issue, if I encounter a problem with an
  order/stop (see issue types) <- didn't implement it, but outlined all the steps to make it work

🆕 - As a driver, I want to be able to adjust the quantity of an order, if the ordered
  quantity varied from what I picked up/dropped off

✅ - As a driver, I want the user interface to be simple, as I am not very computer
  savvy

✅ - As a driver, I want the user interface to give me all the information at a
  glance, as I am used to working in an analogue way (all information on a
  single piece of paper)

✅ - As a driver, I want to feel satisfaction when completing a task, which
  intrinsically motivates me to use the application

## Mockups

See `mockups.jpg` in the root of the project

## Smaller but cool additions

- top menu
  - back button that shows on non-home page routes and brings you back to the home page
  - logout button which can be easily hooked up if needed
- emoji! Add a lively vibe to the app
- Seenons' inspired look
- When user completes orders in the current stop, the `stop` and related `orders` in a local state get `✅ Completed` status
- There's link to the google maps with latitude and longitude to help user find the address
- User cannot submit the information about the stop if it's already has `Pending` or `Completed` status

## Thoughts and process around implementing the app

This is my first time working with both Vue and Tailwind. 
What I like about Vue is that the process of starting up the app was super smooth with CLI, also the main concepts are pretty understandable for the newcomers into the world of Vue.
What I like about the Tailwind is that it saved me from writing the custom css myself in all places except custom background gradient.
It can become a bit convoluted though in the template itself when there are a lot of classes on the element.

In total, I've spent a good working day (8hours) on the assignment, which was cool to me, because of all the new things that I explored.
I've started with thinking about functionality, the app as a whole and drawing some mockups in my notebook.
The vue app initialization and the following steps can be seen in the commits history.


## Bugs
- pages height is 100vh + top bar height which creates vertical scroll - I did the height thingy to be sure that the FullRoundedContainer always stretches to the end of the page 
- emoji in chrome eat empty space between the emoji and the text (safari works fine)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Lints and fixes files
```
yarn lint
```
