# First API React App

This application is a React-based project that uses the Rick and Morty API to display information about characters from the show. The app fetches data from the API and presents each character with details like name, status, species, gender, and origin. When a character is clicked, a modal appears, providing unique facts about that character. Here’s a breakdown of the main components and features:

1. **App Component**: This component fetches character data from the API using Axios and displays the list of characters.
2. **Character Component**: Each character is represented as a clickable card. When clicked, it triggers a modal with additional details.
3. **Modal Component**: Displays character-specific facts. It can be closed by clicking outside the modal or pressing the "Escape" key.

This project demonstrates API integration, state management in React, and the use of modals for enhancing user interaction.
