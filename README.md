## 💻 Multi-Step Form  
**[Live Demo](https://669106f345e0f11a5a4f236d--loquacious-crumble-64e07f.netlify.app/)**
**[Code in sahil-garg Branch] (https://github.com/SahilPB11/multi_step_form/tree/sahil-garg)**

This project demonstrates a user-friendly multi-step form built with React and various powerful libraries.  The form guides users through a series of steps to gather information and provides a confirmation page upon submission.

### 🛠️ Technologies Used
  * **React** -  A JavaScript library for building user interfaces. 
  * **React Router DOM** -  A library for routing between different components in React applications. 
  * **React Hook Form** - A library for managing form inputs and validation.
  * **lodash.debounce** -  A utility for debouncing functions, used to improve the user experience by limiting the frequency of form validation checks.
  * **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
  * **Vite** - A fast development server and build tool for modern web applications. 
  * **Jest** - A JavaScript testing framework.
  * **ESLint** -  A code linter that helps enforce consistent code style and find potential errors. 


### ✨ Key Features
* **Multi-step Navigation:** The form is split into multiple steps, allowing users to complete the form in a more manageable way. 
* **Form Validation:**  Form inputs are validated using React Hook Form, providing immediate feedback to the user.
* **State Management:** Form data is managed and persisted using local storage, ensuring data is preserved even after the user closes the browser.
* **Confirmation Page:** A confirmation page displays all submitted information, providing the user with a clear view of their entries.
* **Error Handling:**  Error messages are displayed to the user, providing guidance on correcting invalid input.
* **Responsive Design:** The form is designed to be responsive, working well on different screen sizes.

### 🏃‍♀️ How It Works
1. **Step 1: Personal Information:** Collects user's name, email, and phone number. 
2. **Step 2: Address Information:** Collects user's address details (address line 1, address line 2, city, state, zip code).
3. **Step 3: Confirmation:**  Displays all the information entered by the user.
4. **Submission:** A simulated delay is used to mimic a real-world API call to simulate form submission.  The application then navigates to a confirmation page. 

### 📁 Project Structure

```
multi_step_form/
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── Step1.js
│   │   ├── Step2.js
│   │   ├── Step3.js
│   │   ├── MultiStepForm.js
│   │   ├── ConfirmationPage.js
│   │   └── Button.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   └── index.css
└── index.html
```

### 🚀 Getting Started
1. **Clone the repository:**
    ```bash
    git clone (https://github.com/SahilPB11/multi_step_form.git)
    ```
2. **Install dependencies:**
    ```bash
    cd multi_step_form
    npm install
    ```
3. **Start the development server:**
    ```bash
    npm run dev
    ```
4.  **Access the application:** 
    Open http://localhost:5173 in your browser.

### 🧪 Testing
* **Run tests:**
    ```bash
    npm run test
    ```

### 🎉 Contributions
Contributions are welcome! Feel free to fork the repository and submit pull requests.

Let me know if you have any questions or suggestions. 
