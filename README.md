# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React State Management Lab

## About
- Welcome to Reactville, a constantly evolving virtual metropolis. Let’s build this digital town together, one component at a time.

- Reactville is on high alert! As bizarre rumors turn into chilling reality, the city council has called for immediate action to safeguard the town and its inhabitants - against a looming zombie apocalypse!

- Your mission is to strategically assemble a survival team, handpicking members from the city’s diverse population, each bringing their unique skills and quirks. As the city’s newly appointed Survival Strategist, you will manage your team’s skills, resources, and stats.

- In this lab, you’ll utilize React’s state management to add and remove team members, track essential resources, and monitor your team’s overall readiness. This isn’t just about surviving; it’s about making dynamic UI updates and understanding the inner workings of React state through a fun and engaging simulation.

**Zombie Fighters Image (of what I'm creating)**
![ZombieFighters](./public/Zombie_Fighters.png)

## Exercise Overview
- Welcome to the React State Management Lab! In this lab, we’ll interact with state to better understand how to manage it in a React application. Your task is to assemble a team of characters to survive a zombie apocalypse. You will:

- Add characters to your team from a given list.
- Remove characters from your team.
- Display the team’s total cost, strength, and agility.

## Exercise
Follow these steps to complete the exercise. Keep all your code in the App.jsx file for this exercise.

### Step 1
1. Create a new state variable named team and set the initial state to an empty array [].

### Step 2
2. Create a new state variable named money and set the initial state to 100.

### Step 3
3. Create a new state variable named zombieFighters and set the initial state to the following array of objects: (Array of objects supplied by General Assembly).

### Step 4
4. Display the list of zombieFighters by mapping the array into the UI of App.jsx.

- (We’ve provided some helpful CSS, assuming you use ul and li elements.)
- Each character should have an **image**, **name**, **price**, **strength**, and **agility**.
- Each character’s UI should also have an **Add** button to add them to your team.

### Step 5
5. Display the current value of money in the UI.

### Step 6
6. Create a function named **handleAddFighter()**. It should accept a fighter object as an argument. This function will be triggered when you click the **Add** button for any character in the **zombieFighters** list.

- When you click Add on a character, this function should add the selected character’s object to the existing team state array. This is how you build your team.

- You’ll also need to remove the character from the **zombieFighters** state so they can’t be added again. To do this, you’ll need to determine which character needs to be removed. Notice how each fighter has a unique **id**. Maybe you could use that to help you decide which one needs to be removed.

- Once the character to be removed is identified, the **zombieFighters** state should be updated to exclude this character. This can be achieved by creating a new array that filters out the selected character. Once you have the new array, use it to set the **zombieFighters** state.

- Each character comes with a **price**. Upon adding a character to your team, subtract the character’s **price** from your current **money** value. Think of it as spending money to recruit a team member.

- Before adding a character to the team, check if you have enough money to afford them. If your money is less than the character’s price, you shouldn’t be able to add them. In such cases, log a message to the console, such as **"Not enough money"**.

### Step 7
7. Now that you can add characters to your team let’s focus on displaying and managing them within your application’s interface.

- First, verify if your team array has any characters in it. If the **team** array length is 0, display **Pick some team members!** in the UI.

- If there are characters in your team, display each one in the UI. For each character in the team array, show their **name, image, price, strength, and agility**. Follow the same pattern you used to display the array of all characters.

### Step 8
8. Display the team’s total strength: In this step, you’ll create a variable to keep track of the total strength of your team and display it in the UI.

- Create a regular variable named **totalStrength**. This does not need to be a state variable.
- Calculate the total strength of the team and assign it to the **totalStrength** variable. This calculation should sum up the strength values of all characters currently on the team!
- Show the value of totalStrength in the UI. If the team array is empty, **totalStrength** should be 0.

**Why doesn’t totalStrength need to be a state variable? Recall that every time a component is re-rendered in React, the code in that component re-runs. When the component re-renders, we can calculate the total strength of the team based on the data from the team state at that time.**

**If the team state changes, a re-render will be triggered, and totalStrength will be recalculated with the new team data.**

**Put another way, the only reason to create state variables is to use them to trigger re-renders or persist data between re-renders. Creating unneeded state variables only serves to add unnecessary complications.**

**With this in mind, what value are we holding in state now that could also be a regular variable? You don’t need to refactor your existing code to remove it from state - just identifying it is valuable.**

9. Display the team’s total agility: Create a variable for the total agility of your team and display this value in the UI.

### Step 9
- Create a variable named **totalAgility**. Just like with **totalStrength**, this should not be a state variable.

- Just like with strength, calculate the total agility of the team and assign it to the **totalAgility** variable. This should be the sum of the team members’ agility values.

- The value of **totalAgility** should be displayed in the UI. As with strength, if your team is empty, **totalAgility** will be **0**.

### Step 10
10. Add a **Remove** button to each of the characters on your team. This button, when clicked, should call a handler function to remove the character from your team.

### Step 11
11. Create a function named **handleRemoveFighter()**. It should accept a fighter object as an argument. This handler function is key to managing your team. This function enables you to remove characters and adjust your total **money**.

- This function will be executed when you click the **Remove** button for a character in your team.

- In the function, determine which character needs to be removed based on user interaction (This will look very similar to what you did in the **handleAddFighter()** function).

- Once the character to be removed is identified, the **team** state should be updated to exclude this character. This can be achieved by creating a new array that filters out the selected character. Once you have the new array, use it to set the **team** state.

- The character that was removed from the **team** state should be added to the **zombieFighters** array.

- Increase the **money** state by the price of the removed character, effectively refunding the cost to your budget.

- Ensure that the UI reflects the removal of the character from your team. This includes updates to the total strength and agility displays, as well as the available money.

## Hints
- You should never change state directly. If you need to make a copy of an array, you can use the syntax **const copyArray = [...sourceArray]**.

- You can use any method you’d like to get the total strength and agility of the team - the array’s **reduce()** method may be handy here, but any loop that will find the sum of these attributes will work.

- Optionally, if you want to add some polish to the app, you could replace the placeholder images with character images. An AI assistant may be helpful in this task.

- Optionally, you could also make it so a message displays in the browser when there isn’t enough budget to add a team member.

