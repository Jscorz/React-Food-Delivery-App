# Meals 2 U | Food Delivery Application

I decided to build a food delivery app with React JS because I thought it would be interesting and have some design elements to practice my skills with React JS instead of vanilla Javascript. Here are some pictures below as well as more info.

**Link to project: [Live-demo]https://meals2u.netlify.app**

---

![screen-gif](./src/assets/ezgif.com-gif-maker.gif)

---

## **How It's Made:**

I worked on building out the design of the site first. I built out the individual pages with React JS and React-Router-Dom to route between them. Then I utilized styled components to write the CSS for each component within that indivdual file at the bottom. This helped to keep the code more organized and easier to locate styling for different parts of the user interface. On the shop page, I initially built out the card components to display restaurants hard-coded in one file, but later refactored it by seperating data to a different file and iterating over the data to display the cards dynamically. I used media queries in plenty of spots to help with the responsiveness so that the site looks good across multiple devices.

---

## **Tech used:**

HTML, CSS, Javascript, React JS, React Router Dom, Styled Components

---

## **Lesson's learned:**

This was a fun site to build with lots of things to be learned design-wise as I built it. I got more familiar with using React Router Dom to switch between pages in the application. I discovered that styled components are very useful in any non-trivial code base, and that helped immensely during the development process.

---

## **Optimizations:**

Initially when I built the design and layout of this application, I hardcoded data for the different restaurant cards in the cards' component file. Before I added more restaurants, I added all the data to a seperate file, which I imported into the card component to iterate over resulting in cleaner code with less overall lines. All of the high quality images for the food have been compressed down quite a bit depending on the original size of the photos to optimize loading times.

---
