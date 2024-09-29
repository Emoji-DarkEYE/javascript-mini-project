# Countdown Timer

A simple and interactive countdown timer built with HTML, CSS, and JavaScript. This tool allows users to set an event name and date/time, and it will display the time remaining until the event occurs.

## Features

- Input for event name and date/time.
- Countdown timer displaying days, hours, minutes, and seconds.
- Responsive design using Bootstrap.
- User-friendly interface.

## How to Build the Countdown Timer

In this section, I will guide you step by step on how to create the Countdown Timer. Follow these instructions carefully, and you'll have your timer ready in no time!

### Step 1: Setting Up Your Project

1. **Create a New Folder**:
   - Create a new folder on your computer where you want to store your project. You can name it `CountdownTimer`.

2. **Open the Folder**:
   - Open the folder in your preferred code editor (like VSCode, Atom, etc.).

### Step 2: Creating HTML File

1. **Create an HTML File**:
   - Inside the `CountdownTimer` folder, create a new file and name it `index.html`.

2. **Add Basic HTML Structure**:
   - Write the basic HTML structure in `index.html`. This includes the `<!DOCTYPE html>` declaration and the `<html>`, `<head>`, and `<body>` tags.

3. **Include Bootstrap**:
   - In the `<head>` section, include a link to Bootstrap CSS to style your page. You can use the following link:
     ```html
     <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
     ```

4. **Create a Container**:
   - Inside the `<body>`, create a `div` with the class `container` to hold your form and countdown timer.

### Step 3: Building the Form

1. **Add Event Form**:
   - Inside the container, create a form that includes:
     - A text input for the event name.
     - A datetime input for the event date and time.
     - A button to start the timer.

2. **Hide the Countdown Initially**:
   - Below the form, create another `div` for the countdown timer. Initially, this should be hidden. Use the `hidden` class to achieve this.

### Step 4: Adding Countdown Display

1. **Create Countdown Elements**:
   - Inside the countdown `div`, create spans for days, hours, minutes, and seconds, along with small labels (D, H, M, S) for each.

### Step 5: Adding JavaScript Functionality

1. **Create a JavaScript File**:
   - Create a new file in the same folder and name it `script.js`.

2. **Link JavaScript to HTML**:
   - At the end of the `body` tag in `index.html`, link to the `script.js` file:
     ```html
     <script src="script.js"></script>
     ```

3. **Write JavaScript Logic**:
   - Inside `script.js`, write the code to:
     - Select the form and countdown elements.
     - Add an event listener to the start button to:
       - Get the event name and date.
       - Start the countdown when the button is clicked.
     - Create a function to update the countdown every second.

### Step 6: Styling with CSS

1. **Create a CSS File**:
   - Create a new file and name it `styles.css`.

2. **Add Custom Styles**:
   - Inside `styles.css`, write styles to:
     - Set a dark background and white text.
     - Style the countdown display with flexbox for alignment.

### Step 7: Testing Your Timer

1. **Open the HTML File**:
   - Open `index.html` in your web browser.

2. **Enter Event Details**:
   - Fill in the event name and date/time, then click the "Start Timer" button.

3. **Check the Countdown**:
   - Ensure the countdown works and updates correctly. Test with different dates and times.

### Conclusion

Congratulations! You have successfully built your Countdown Timer. Feel free to modify and expand upon it. You can add features like sound alerts, improved styles, or even animations to enhance user experience.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per your requirements.

## Acknowledgements

- **Bootstrap**: A popular front-end framework for building responsive websites.
- **MDN Web Docs**: A valuable resource for learning web development.

## Contact

If you have any questions or need further assistance, feel free to reach out:

- **Your Name**: [Your GitHub Profile](https://github.com/yourusername)
- **Email**: your.email@example.com

---

Happy coding! 🎉
