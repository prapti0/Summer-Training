// Create the necessary elements
const container = document.createElement('div');
container.classList.add('quote-container');

const greetingElement = document.createElement('h2');
greetingElement.id = 'greeting';

const quoteElement = document.createElement('h1');
quoteElement.id = 'quote';

const generateBtn = document.createElement('button');
generateBtn.id = 'generate-btn';
generateBtn.textContent = 'Show Quotes';
generateBtn.onclick = generateQuote;

// Append the elements to their parent elements
container.appendChild(greetingElement);
container.appendChild(quoteElement);
container.appendChild(generateBtn);

// Append the container element to the body of the document
document.body.appendChild(container);

// Define the generateQuote function
function generateQuote() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Opportunities don't happen. You create them. - Chris Grosser"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteElement.textContent = quote;
  changeBackgroundColor();

  const currentTime = new Date().getHours();
  let greeting;
  if (currentTime >= 5 && currentTime < 12) {
    greeting = "Let's start our morning with a new quote";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Let's start our afternoon with a new quote";
  } else {
    greeting = "Let's start our evening with a new quote";
  }
  greetingElement.textContent = greeting;


}

// Define the changeBackgroundColor function
function changeBackgroundColor() {
  const colors =["#7FFFD4","#D2691E","#FFF8DC","#006400","#B8860B","#FF69B4","#C71585"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  document.body.style.backgroundColor = color;
}

// Define the getContrastColor function


generateQuote(); // To display a quote, greeting, and button color when the page loads
