
# Avsar

Avsar is an AI-powered interview simulator bot that helps job seekers practice and prepare for interviews. It is a voice-based application that simulates real-world job interviews and provides feedback to the user on their responses.

Avasr uses natural language processing (NLP) to analyze the user's responses and provide feedback on which keywords can be used to enhance the Interview experience.

Users can interact with Avsar using voice commands and responses, making the experience more realistic and engaging. The bot can ask a variety of interview questions related to the user's desired job role, industry, and level of experience, ensuring that the user is well-prepared for a wide range of interview scenarios.

Overall, Avsar provides a convenient and effective way for job seekers to practice and improve their interview skills, giving them a better chance of success in their job search.




## Architecture of Code
The frontend, built with React.js, handles the presentation layer of the application, including the user interface and user interaction. This could include things like buttons, forms, and other visual components that the user can interact with.

The backend, built with Python and Flask, is responsible for handling the business logic of the application, including data processing, computation, and communication with other services.

Within the Flask file, there is a function named run-script which is responsible for running the backend of the application. This function may contain various libraries and modules to perform different tasks.

In this case, the backend uses PyAudio and SpeechRecognition to capture voice input from the user. The input is then converted to text using Pyttsx3, a Python library for speech synthesis.

The text is then analyzed using Natural Language Processing (NLP) techniques to identify keywords that could enhance the answer. This could involve identifying topics, entities, or sentiment within the text, and using this information to provide a more relevant response.

Used Firebase to provide sign in with google feature to enhance the user experience

Overall, the architecture of the code you described involves a frontend-backend separation of concerns, with the frontend handling user interaction and the backend handling data processing and computation. The backend also employs various libraries and modules to perform different tasks, including PyAudio, SpeechRecognition, Pyttsx3, and NLP techniques.
