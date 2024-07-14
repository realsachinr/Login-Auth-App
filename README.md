# React Native Expo Authentication App

This project is a React Native application built using Expo for Android phones. It includes login and signup pages with input validation and a bottom tab navigator that becomes visible upon successful login.

## Features

- **Login and Signup Pages**: Users can register and log in to the app.
- **Input Validation**: Ensures that users provide valid input during registration and login.
- **Bottom Tab Navigator**: Displayed to users upon successful login, providing navigation to different sections of the app.

## Screenshots
![Screenshot_20240714_184345_Expo Go](https://github.com/user-attachments/assets/68aa4825-8be4-4fad-84b3-c735343038e1)
![Screenshot_20240714_184353_Expo Go](https://github.com/user-attachments/assets/fbdc54f6-60c6-432c-b952-14c4fc7080a4)
![Screenshot_20240714_184357_Expo Go](https://github.com/user-attachments/assets/78c9e554-f02d-4acd-9149-04886c203a27)



## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-native-expo-auth-app.git
    cd react-native-expo-auth-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the Expo development server:**
    ```bash
    npx expo start
    ```

4. **Run on Android device/emulator:**
    - Make sure you have an Android device or emulator connected.
    - Press `a` in the terminal to open the app on an Android device/emulator.

## Usage

1. **Launch the app** on your Android device or emulator.
2. **Sign up** for a new account or log in with existing credentials.
3. Upon successful login, you will be navigated to the main app interface with the bottom tab navigator.

## Technologies Used

- **React Native**
- **Expo**
- **React Navigation** for tab navigation
- **Formik** and **Yup** for input validation

## Project Structure

.
├── App.js
├── assets
│ └── ... (images, etc.)
├── components
│ └── ... (reusable components)
├── navigation
│ └── TabNavigator.js
├── screens
│ ├── LoginScreen.js
│ ├── SignupScreen.js
│ └── HomeScreen.js
├── package.json
└── README.md


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, bug fixes, or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
