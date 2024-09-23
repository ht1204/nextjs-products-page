# NextJS Products Workstop

Practical workshop about the following topics:
- Check how NextJS App works
- NextJS Dynamic Routing
- Features like `getServerSideProps` and `getStaticProps`: implementation and execution.


**Goal**: Complete the code functionalities to make it work, have fun and enjoy!

## Tech Notes
### For SPA - Dynamic Rendering.
In index page:
- Fetch the data for products.
- Render the list of product cards.

For `ProductCard` component:
- Use conditional rendering for a submit button that has the message *Time Up* when `timerEnded` is zero and must be disabled, otherwise, the button must be enable to be clicked and contains the message *Get Product Details*

Finally, use the NextJS dynamic routing to create a url link for a selected product item `/products/[id]`. In this component, must complete:
- Get the product id from product url link. 
- Fetch the data for correspondent product item.
- Make that *Back to Landing Page* button works and returns to main landing product page.


### For getServerSideProps & getStaticProps
It's recommended to solved above approches before moving forward to server-side rendering, once you achieve it, work on the following refactorization:
In index page:
- Fetch the products list api data using the NextJS specialized function `getStaticProps`.
- Create a prop type like `IndexPageProps` and inject it to `IndexPage` to render the datalist.

For `ProductCard` component:
- Apparently, there are no issues, but the timer behavior can cause issues with this kind of dynamic rendering, consider to use a `suppressHydrationWarning`, research about this property and find how to implement it and exactly where and check by yourself how it works :)

Finally, for page component `/products/[id]`:
- Use `getServerSideProps` to fetch fetch the selected product item, check a concept like `context`, could be helpful to catch the url link id param in SSR, and why not, send an error flag in case of possible fetching issues when the props are returned.

- Consider a `ProductDetailProps` type for injecting to render the selected product data fetched above.

Play and exchange both types of NextJS rendering, feel free to refactor and try custom approaches or make this project grow up for more practicing, just enjoy the journey!

## How to Run
- Run command: `npm i`
- Next, run `npm run dev`

## Proposal Approaches
[Check this](https://lying-guarantee-476.notion.site/Practical-Workshop-1e5abdaa4df940f5ba05d9a49c760fb1?pvs=4), but feel free to create your own approaches, there are not silverbullets :)

## Motivation
Based on [Michael Saenz's products page](https://github.com/MSaenz1011/Assesment-FrontEnd).

