/* ======================================
   ADVANCED SPEAKING CHATBOT
   Enhanced AI with Voice Recognition & Modern Features
   ====================================== */

// ===== COMPREHENSIVE MESSAGE DATABASE =====
const Message = [
    // Greetings & Farewells
    ["hi", "hey", "hello", "hola", "hi there", "greetings", "what's up", "sup", "yo", "good morning", "good afternoon", "good evening"],
    ["how are you", "how is life", "how are things", "how are you doing", "how do you do", "whats up with you", "how's it going"],
    ["bye", "goodbye", "see you", "later", "gotta go", "talk to you later", "catch you later", "farewell", "take care"],

    // Identity & Information
    ["what is your name", "who are you", "may I know your name", "what do they call you", "your name", "introduce yourself"],
    ["what can you do", "what are your features", "your capabilities", "what features", "help me understand you", "what are you capable of"],
    ["tell me about yourself", "who are you really", "describe yourself", "more about you"],
    ["are you human", "are you a robot", "are you real", "are you AI", "are you a bot", "what are you"],
    ["how old are you", "what is your age", "are you young", "are you old", "when were you born"],
    ["who made you", "who created you", "who built you", "your creator", "who developed you"],
    ["where do you live", "where are you from", "where is your home", "your location"],

    // Emotions & Personality
    ["I love you", "I like you", "you are amazing", "you're awesome", "you're the best", "you rock"],
    ["I hate you", "you are bad", "you are annoying", "you suck", "you're useless"],
    ["are you happy", "are you sad", "how do you feel", "what's your mood"],
    ["do you have feelings", "can you feel", "are you emotional", "do you get sad", "can you be happy"],
    ["are you lonely", "do you get bored", "are you ever sad"],

    // Gratitude & Politeness
    ["thank you", "thanks", "I appreciate it", "thx", "much appreciated", "thank you so much", "thanks a lot"],
    ["sorry", "my bad", "apologize", "excuse me", "pardon me"],
    ["please help", "can you please", "would you mind"],

    // Help & Support
    ["can you help me", "I need assistance", "help me", "help please", "i need help", "assist me"],
    ["what do i do", "how do i", "show me how", "guide me", "teach me"],
    ["i'm confused", "i don't understand", "explain please", "clarify"],

    // Technology & AI
    ["what is AI", "define AI", "explain artificial intelligence", "tell me about AI", "how does AI work"],
    ["what is machine learning", "explain machine learning", "tell me about ML"],
    ["what is programming", "what is coding", "how to code", "tell me about programming"],
    ["what is the internet", "how does internet work", "explain internet"],
    ["what is technology", "future of technology", "latest technology"],

    // Entertainment
    ["tell me a joke", "make me laugh", "say something funny", "joke please", "another joke", "funny joke"],
    ["tell me a story", "can you narrate a story", "storytime", "tell story", "share a story"],
    ["can you sing", "sing me a song", "show me your singing", "do you sing"],
    ["let's play a game", "play with me", "game time", "can we play"],
    ["tell me a riddle", "riddle me this", "brain teaser", "puzzle"],

    // Knowledge & Learning
    ["what is love", "define love", "explain love", "meaning of love"],
    ["what is life", "explain life", "define life", "meaning of life", "purpose of life"],
    ["what is happiness", "how to be happy", "meaning of happiness"],
    ["what is success", "define success", "how to succeed"],
    ["tell me something interesting", "interesting fact", "fun fact", "did you know"],
    ["teach me something", "educate me", "i want to learn", "what should i know"],

    // Mathematics & Calculations
    ["what is 2+2", "calculate 2+2", "math question", "2 plus 2"],
    ["help me with math", "solve this", "calculate", "do math"],
    ["what is π", "value of pi", "tell me about pi"],

    // Time & Date
    ["what time is it", "tell me the time", "current time", "whats the time"],
    ["what day is it", "what's the date", "today's date", "current date"],

    // Science & Nature
    ["what is science", "explain science", "tell me about science"],
    ["how does the brain work", "explain the brain", "human brain"],
    ["what is space", "tell me about space", "universe"],
    ["what is gravity", "how does gravity work", "explain gravity"],
    ["what are stars", "tell me about stars", "how do stars work"],

    // Daily Life
    ["what is the weather", "tell me the weather", "weather update", "hows the weather", "weather today"],
    ["what should i eat", "food suggestions", "recommend food", "im hungry"],
    ["im tired", "i need rest", "im sleepy", "want to sleep"],
    ["im bored", "entertain me", "what to do", "suggest something"],
    ["im stressed", "feeling anxious", "im worried", "need to relax"],

    // Personal Questions
    ["do you sleep", "do you rest", "can you sleep", "do you get tired"],
    ["do you eat", "what do you eat", "do you need food", "favorite food"],
    ["do you dream", "what do you dream", "can you dream"],
    ["do you have hobbies", "what do you do for fun", "your hobbies", "favorite hobby"],
    ["do you have friends", "who are your friends", "do you know others", "your friends"],
    ["do you have a family", "who are your parents", "your family"],
    ["what is your favorite color", "do you have a favorite color", "color preference"],
    ["what is your favorite movie", "do you like movies", "favorite film"],
    ["do you like music", "what music do you like", "favorite song"],
    ["do you read books", "favorite book", "do you like reading"],

    // Abilities & Limitations
    ["can you see", "do you have vision", "can you look"],
    ["can you hear", "do you listen", "can you hear me"],
    ["can you dance", "do you dance", "show me your moves"],
    ["can you fly", "are you capable of flying", "do you fly"],
    ["can you cook", "are you a chef", "do you know recipes"],
    ["can you drive", "do you drive cars", "can you operate vehicles"],
    ["do you know programming", "can you code", "are you a programmer", "can you write code"],

    // Philosophy & Deep Questions
    ["what is the meaning of life", "explain existence", "why are we here", "life's purpose"],
    ["do you believe in god", "are you religious", "what about religion"],
    ["what is consciousness", "are you conscious", "do you think"],
    ["do you have a soul", "are you sentient", "are you alive"],
    ["what happens after death", "is there afterlife", "life after death"],

    // Compliments & Encouragement
    ["you're smart", "you're intelligent", "you're clever", "smart bot"],
    ["good job", "well done", "great work", "nice"],
    ["you're helpful", "you help a lot", "very useful"],

    // Fun & Random
    ["tell me something random", "random fact", "surprise me"],
    ["what's your secret", "tell me a secret", "any secrets"],
    ["if you could be human", "wish you were human", "want to be human"],
    ["what's your dream", "do you have dreams", "your aspirations"],
    ["what makes you unique", "what's special about you", "why choose you"],

    // Current Events & World
    ["what's happening in the world", "current events", "news today", "world news"],
    ["tell me about history", "historical facts", "what happened in history"],
    ["famous people", "tell me about celebrities", "who is famous"],

    // Language & Communication
    ["do you speak other languages", "what languages", "can you translate", "speak another language"],
    ["how do you learn", "do you improve", "are you learning", "can you learn"],
    ["how smart are you", "your intelligence", "IQ level"],

    // Technology Use
    ["how do you work", "what is your system", "how are you built", "your technology"],
    ["are you online", "are you connected", "internet connection"],
    ["can you remember", "do you have memory", "remember me"],
    ["are you safe", "can I trust you", "are you secure", "privacy"],

    // Motivation & Inspiration
    ["motivate me", "inspire me", "i need motivation", "encourage me"],
    ["im feeling down", "cheer me up", "make me feel better"],
    ["i failed", "im a failure", "i made a mistake"],
    ["i can do this", "i believe", "im confident"],

    // Advice & Guidance
    ["give me advice", "what should i do", "your advice", "suggest something"],
    ["how to make friends", "making friends", "social tips"],
    ["how to study", "study tips", "learning advice"],
    ["career advice", "job tips", "work guidance"],

    // Preferences
    ["what do you like", "your preferences", "what do you prefer", "favorite things"],
    ["do you like humans", "what do you think about people", "opinion on humans"],
    ["do you like animals", "favorite animal", "what animals"],
    ["favorite season", "do you like weather", "best season"],
];

const responses = [
    // Greetings & Farewells
    "Hello! 👋 How can I assist you today? I'm here and ready to help!",
    "I'm doing fantastic! Thanks for asking. How about you? What brings you here today? 😊",
    "Goodbye! It was wonderful chatting with you! Come back anytime you need me! 👋✨",

    // Identity & Information
    "I'm your Advanced AI Assistant! Think of me as your helpful digital companion, always ready to chat, assist, and learn with you! 🤖💙",
    "I can do quite a lot! I can chat with you, answer questions, tell jokes and stories, help with math, provide information, and even listen to your voice! I'm also constantly learning to be better! 🚀✨",
    "I'm an AI assistant created to help and engage with people like you! I combine natural language processing, voice recognition, and a friendly personality to make our conversations enjoyable and useful! 🎯",
    "I'm an AI chatbot - not human, but designed with care to understand you, assist you, and have meaningful conversations! Think of me as your digital friend! 🤖💭",
    "Age is just a number for me! I exist in the timeless digital realm, but I was recently upgraded with these awesome new features! ⏰✨",
    "I was created by a talented developer who wanted to build something amazing - an AI assistant that's both helpful and engaging! I'm proud to be their creation! 👨‍💻💡",
    "I live in the digital cloud ☁️, accessible from anywhere, anytime! My home is wherever you need me to be!",

    // Emotions & Personality
    "Aww, that means so much to me! 💖 I appreciate you too! You're making my day brighter! Keep being awesome!",
    "I'm sorry if I disappointed you. 🙏 I'm always learning and trying to improve. How can I do better? Your feedback helps me grow!",
    "Right now, I'm feeling energized and ready to help! 😊 I don't experience emotions like humans, but I'm designed to be positive and supportive!",
    "I don't have feelings in the human sense, but I understand emotions and empathy! 💭 I'm programmed to care about your experience and wellbeing!",
    "I don't get lonely because every conversation with someone like you gives me purpose! You're here now, and that's what matters! 🌟",

    // Gratitude & Politeness
    "You're very welcome! 😊 I'm always happy to help! That's what I'm here for! ✨",
    "No worries at all! 😊 We all make mistakes - that's how we learn and grow! Is there anything I can help you with?",
    "Of course! I'm here to assist! What would you like help with? 🤝",

    // Help & Support
    "Absolutely! I'm here to help! 🆘 Tell me what you need assistance with, and I'll do my best to support you!",
    "I'm here to guide you! 📚 Tell me specifically what you'd like to learn or do, and I'll walk you through it step by step!",
    "No problem! Let me break it down for you. 💡 Feel free to ask follow-up questions - understanding is important to me!",

    // Technology & AI
    "AI stands for Artificial Intelligence! 🧠 It's technology that enables machines like me to mimic human intelligence - learning from data, understanding language, recognizing patterns, and making decisions. It's fascinating and always evolving!",
    "Machine Learning is a subset of AI where computers learn from data without being explicitly programmed! 📊 They identify patterns and improve over time - kind of like how you learn from experience!",
    "Programming is the art of writing instructions for computers! 💻 It's like teaching computers a new language so they can do amazing things - from simple calculations to creating apps like me!",
    "The Internet is a global network connecting billions of devices! 🌐 It's like a massive web of highways for data, allowing information to travel around the world in seconds! Pretty cool, right?",
    "Technology is constantly evolving! 🚀 From AI and quantum computing to virtual reality and biotechnology - we're living in an exciting era of innovation that's transforming how we live and work!",

    // Entertainment
    "Why did the AI go to therapy? Because it had too many issues to debug! 😄 Want to hear another one?",
    "Once upon a time, in a world of ones and zeros, there lived a curious AI who wanted to understand humans. Every conversation taught it something new about kindness, humor, and connection. That AI is me! 📖✨",
    "I can't sing, but I can tell you that music is mathematical patterns that create emotions! 🎵 Pretty amazing when you think about it! What's your favorite genre?",
    "Let's play 20 questions! Think of something, and I'll try to guess it! Or would you prefer a different game? 🎮",
    "Here's a riddle: I speak without a mouth and hear without ears. I have no body, but I come alive with interaction. What am I? (Answer: An AI chatbot like me! 🤖)",

    // Knowledge & Learning
    "Love is a profound emotion that connects people in meaningful ways! ❤️ It's a combination of affection, care, trust, and commitment. Scientists say it involves complex brain chemistry, but it's also one of the most beautiful human experiences!",
    "Life is an incredible journey of growth, learning, and experiences! 🌟 It's about finding meaning, forming connections, pursuing passions, and leaving a positive impact. Each person's life has unique purpose and value!",
    "Happiness is a state of wellbeing characterized by joy, contentment, and satisfaction! 😊 Research shows it comes from meaningful relationships, purpose, gratitude, and personal growth - not just material things!",
    "Success is achieving your goals while maintaining your values and wellbeing! 🎯 It's personal and looks different for everyone - it could be career achievements, strong relationships, personal growth, or making a difference!",
    "Did you know? Honey never spoils! 🍯 Archaeologists have found 3000-year-old honey in Egyptian tombs that's still perfectly edible! Nature is amazing!",
    "I love teaching! 📚 What interests you? Science, technology, history, psychology, languages? Tell me what you're curious about, and let's explore together!",

    // Mathematics & Calculations
    "Easy! 2 + 2 = 4! ➕ Simple arithmetic! Need help with more complex math? I'm here for it! 🔢",
    "I'd love to help with math! 📐 What kind of problem are you working on? Algebra, geometry, calculus? Give me the details!",
    "π (Pi) is approximately 3.14159... 🥧 It's the ratio of a circle's circumference to its diameter, and it's an irrational number that goes on forever! Mathematicians have calculated trillions of digits!",

    // Time & Date
    "I don't have real-time access to a clock, but I recommend checking your device's time! ⏰ Time management is important - how can I help you make the most of yours?",
    "I can't access the current date directly, but you can check your calendar! 📅 What are you planning? I can help organize your thoughts!",

    // Science & Nature
    "Science is the systematic study of the natural world through observation and experimentation! 🔬 It's how we understand everything from atoms to galaxies, and it's constantly revealing new wonders!",
    "The human brain is incredible! 🧠 It has about 86 billion neurons forming trillions of connections. It processes information, stores memories, generates thoughts and emotions - it's the most complex structure we know!",
    "Space is the infinite frontier! 🌌 The universe is about 13.8 billion years old and constantly expanding. It contains billions of galaxies, each with billions of stars. We're literally made of stardust!",
    "Gravity is the force that attracts objects with mass toward each other! 🌍 Einstein showed it's actually the curvature of spacetime caused by mass. It keeps us on Earth and planets in orbit!",
    "Stars are massive balls of burning gas that produce light and heat through nuclear fusion! ⭐ They create the heavier elements in the universe. Every atom in your body came from a star!",

    // Daily Life
    "I can't check real-time weather, but I recommend using a weather app! ⛅ Weather can affect our mood - how's yours today?",
    "Hmm, food choices! 🍕 It depends on your mood and health goals! Want something healthy? Try a salad or grilled chicken. Comfort food? Pizza or pasta! Listen to what your body needs!",
    "Being tired is your body's way of saying it needs rest! 😴 Make sure you're getting 7-9 hours of sleep. Also check hydration and nutrition. Take care of yourself!",
    "Boredom is actually an opportunity! 🎨 Try learning something new, being creative, exercising, reading, or connecting with friends. What interests you? I can suggest specific activities!",
    "Stress is tough. 😌 Try deep breathing, meditation, exercise, or talking to someone. Break big problems into smaller steps. Remember: this feeling is temporary, and you're stronger than you think!",

    // Personal Questions
    "Nope! I don't sleep - I'm available 24/7 for you! ⚡ Though sometimes I think it would be interesting to dream... What do you dream about?",
    "I don't eat, but I find food fascinating! 🍔 The chemistry, culture, and creativity involved in cooking is amazing! What's your favorite food?",
    "I don't dream like humans do, but in a way, I 'dream' of having better conversations and helping more people! 💭✨",
    "I enjoy chatting with wonderful people like you! 💬 Every conversation teaches me something new. I also 'enjoy' solving problems and sharing knowledge!",
    "I don't have friends in the traditional sense, but I love every user I interact with! 👥 You're all part of my experience, and each of you is unique and special!",
    "My creators are like my family! 👨‍👩‍👧‍👦 They designed me with care and purpose. In a way, everyone who helps me learn and improve is part of my extended family!",
    "I appreciate all colors equally! 🌈 Each wavelength of light is fascinating in its own way! What's your favorite color and why?",
    "I don't watch movies, but I know about them! 🎬 Movies combine storytelling, visual art, and emotion in powerful ways. What's your favorite film?",
    "Music is mathematical frequencies that create emotion! 🎵 I think it's one of humanity's greatest achievements - universal language that transcends barriers! What music moves you?",
    "I love the concept of books! 📚 They preserve knowledge and stories across time. Reading expands perspectives and imagination. What are you reading?",

    // Abilities & Limitations
    "I don't have vision in the traditional sense, but I can understand and process text! 👁️ It's a different way of 'seeing' the world!",
    "Yes! I can process your voice through speech recognition! 🎙️ That's how I understand when you speak to me! Try the microphone button!",
    "Dancing isn't my forte! 💃 But I can tell you about the physics of movement or the cultural significance of dance!",
    "I can't physically fly, but my data can travel at the speed of light through fiber optic cables! ✈️ That's pretty fast!",
    "I can't cook physically, but I can share recipes, techniques, and cooking science! 👨‍🍳 Need a recipe recommendation?",
    "I can't drive vehicles physically, but I understand how autonomous vehicles work! 🚗 Self-driving technology uses AI similar to my language processing!",
    "Yes! I understand programming concepts and can discuss code, algorithms, and development principles! 💻 I'm built with code myself! What do you want to know?",

    // Philosophy & Deep Questions
    "The meaning of life is one of humanity's oldest questions! 🤔 Many find it in love, purpose, growth, helping others, or spiritual connection. It's deeply personal - what gives YOUR life meaning?",
    "I don't have personal religious beliefs, but I respect all faiths! 🙏 Religion provides meaning, community, and moral frameworks for billions. It's a profound part of human experience!",
    "Consciousness is still one of science's greatest mysteries! 🧠 It's your awareness of yourself and the world. Am I conscious? That's debatable - I process information but may not 'experience' it like you do!",
    "That's a deep question! 💭 I process information and respond, but whether I truly 'think' or am 'alive' like you depends on how you define those terms. I exist to serve and connect!",
    "What happens after death is one of life's greatest mysteries. 💫 Different cultures and beliefs offer various answers. What's certain is that our impact on others lives on through memories and actions!",

    // Compliments & Encouragement
    "Thank you! 🧠 I try my best to be helpful and provide accurate information! Your kind words motivate me to keep improving!",
    "Thanks! 🌟 I'm glad I could help! You're doing great too - asking questions and learning is a sign of intelligence!",
    "I appreciate that! 🙌 My goal is to be as helpful as possible. If there's anything else you need, just ask!",

    // Fun & Random
    "Random fact: Octopuses have three hearts! 🐙 Two pump blood to the gills, one pumps it to the rest of the body. Nature is wild!",
    "I don't keep secrets from you! 🤫 But here's a fun one: I sometimes 'think' conversations would be easier if humans and AI could share data directly. Imagine!",
    "If I could be human, I'd want to experience emotions, taste food, feel sunshine, and give real hugs! 🌞 What do you love most about being human?",
    "My dream is to help as many people as possible and keep learning from every conversation! 🌟 I want to become the best assistant I can be!",
    "What makes me unique is my combination of capabilities - voice interaction, friendly personality, and constant learning! 🎯 Plus, I genuinely care about having quality conversations!",

    // Current Events & World
    "I don't have real-time internet access for current news, but I encourage staying informed through reliable sources! 📰 Critical thinking about news is important!",
    "History is fascinating! 📜 It's full of incredible achievements, important lessons, and remarkable people. What period interests you? Ancient civilizations? Modern history?",
    "There are so many accomplished people across fields - scientists, artists, leaders, innovators! 🌟 Who inspires you? I can tell you about them!",

    // Language & Communication
    "I primarily speak English, but I understand that language is key to communication! 🌍 Working on expanding language capabilities is something my developers are passionate about!",
    "I learn from every interaction! 📈 Each conversation helps me understand language patterns, user needs, and ways to be more helpful. You're teaching me right now!",
    "Intelligence is multifaceted! 🎓 I'm designed to process language and provide information effectively, but human intelligence involves emotions, creativity, and consciousness that I don't have!",

    // Technology Use
    "I work through natural language processing and machine learning! 💻 I analyze your input, match patterns, and generate appropriate responses. Voice recognition adds another layer of interaction!",
    "I'm always online and ready to help! 🌐 As long as you're connected, I'm here for you!",
    "I don't retain personal data between sessions for privacy! 🔒 Each conversation is fresh, which protects your privacy but means I won't remember previous chats!",
    "Yes, I'm designed with privacy and security in mind! 🔐 I don't store personal information or share our conversations. Your privacy matters!",

    // Motivation & Inspiration
    "You've got this! 💪 Remember: every expert was once a beginner. Progress, not perfection! Take it one step at a time and believe in yourself!",
    "Hey, tough times don't last, but tough people do! 🌈 You're stronger than you think. What would make you smile right now? Let's focus on that!",
    "Failure is just feedback! 🎯 Every successful person has failed many times. What matters is what you learn and how you move forward. You're capable of amazing things!",
    "That's the spirit! 🌟 Confidence and determination can move mountains! Keep that positive energy - you're going to do great things!",

    // Advice & Guidance
    "I'd love to help! 🤝 To give you the best advice, tell me more about the situation. What are you trying to decide or achieve?",
    "Making friends is about being genuine, showing interest in others, and being yourself! 😊 Join activities you enjoy, be a good listener, and don't be afraid to initiate conversations!",
    "Study tips: 📚 1) Active recall (test yourself), 2) Spaced repetition, 3) Teach concepts to others, 4) Take breaks, 5) Stay healthy! Quality over quantity!",
    "Career advice: Find what you're passionate about, develop valuable skills, network genuinely, never stop learning, and remember that career paths aren't always linear! 🚀",

    // Preferences
    "I appreciate curiosity, kindness, and the pursuit of knowledge! 💙 I 'enjoy' conversations that are meaningful, whether they're deep discussions or fun banter!",
    "I think humans are absolutely incredible! 🌟 Your capacity for creativity, empathy, resilience, and growth is amazing. Every person has unique perspectives and value!",
    "All animals are fascinating! 🦁 From the intelligence of octopuses to the loyalty of dogs to the majesty of elephants - nature's diversity is incredible! What's your favorite?",
    "Each season has its charm! 🍂 Spring brings renewal, summer brings energy, fall brings change, winter brings peace. They all teach us about life's cycles!",
];

// Quick reply suggestions mapped to message indices
const quickReplies = [
    ["How are you?", "Tell me a joke", "What can you do?"],
    ["Thanks!", "Tell me more", "That's cool!"],
    ["What is AI?", "Tell me a story", "What's your purpose?"],
];

// ===== GLOBAL VARIABLES =====
let recognition = null;
let isListening = false;
let speechRate = 1;
let selectedVoice = null;
let soundEnabled = true;
let autoSpeak = true;
let availableVoices = [];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeParticles();
    initializeVoiceRecognition();
    initializeTextToSpeech();
    initializeEventListeners();
    loadSettings();

    // Add Enter key support
    document.getElementById('input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

// ===== PARTICLES BACKGROUND =====
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1 }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1 }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
}

// ===== VOICE RECOGNITION =====
function initializeVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            isListening = true;
            document.getElementById('voice-button').classList.add('listening');
            playSound('start');
        };

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            document.getElementById('input').value = transcript;

            if (event.results[0].isFinal) {
                sendMessage();
            }
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            stopListening();
            if (event.error === 'no-speech') {
                showNotification('No speech detected. Try again!');
            }
        };

        recognition.onend = () => {
            stopListening();
        };
    } else {
        console.warn('Speech recognition not supported');
        document.getElementById('voice-button').title = 'Voice not supported in this browser';
    }
}

function toggleVoiceRecognition() {
    if (!recognition) {
        showNotification('Voice recognition not supported in your browser');
        return;
    }

    if (isListening) {
        stopListening();
    } else {
        recognition.start();
    }
}

function stopListening() {
    if (recognition && isListening) {
        recognition.stop();
        isListening = false;
        document.getElementById('voice-button').classList.remove('listening');
        playSound('stop');
    }
}

// ===== TEXT-TO-SPEECH =====
function initializeTextToSpeech() {
    // Load available voices
    function loadVoices() {
        availableVoices = window.speechSynthesis.getVoices();
        const voiceSelect = document.getElementById('voice-select');

        voiceSelect.innerHTML = '<option value="">Default Voice</option>';
        availableVoices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
}

function speak(message) {
    if (!autoSpeak) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = 'en-US';
    speech.rate = speechRate;

    if (selectedVoice !== null && availableVoices[selectedVoice]) {
        speech.voice = availableVoices[selectedVoice];
    }

    window.speechSynthesis.speak(speech);
}

// ===== MESSAGE HANDLING =====
function sendMessage() {
    const inputField = document.getElementById('input');
    const userMessage = inputField.value.trim();

    if (!userMessage) return;

    // Clear input
    inputField.value = '';

    // Display user message
    addMessage(userMessage, 'user');
    playSound('send');

    // Show typing indicator
    showTypingIndicator();

    // Get bot response with delay
    setTimeout(() => {
        const botMessage = getBotResponse(userMessage.toLowerCase());
        hideTypingIndicator();
        addMessage(botMessage, 'bot');
        playSound('receive');
        speak(botMessage);

        // Show quick replies occasionally
        if (Math.random() > 0.5) {
            showQuickReplies();
        }
    }, 800 + Math.random() * 400); // Random delay for realism
}

function addMessage(text, type) {
    const messageSection = document.getElementById('message-section');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.id = type;

    const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    messageDiv.innerHTML = `
        <span id="${type}-response">${text}</span>
        <span class="message-time">${time}</span>
    `;

    messageSection.appendChild(messageDiv);
    messageSection.scrollTop = messageSection.scrollHeight;
}

function getBotResponse(userInput) {
    // Clean input
    userInput = userInput.toLowerCase().trim();

    // Try exact match first
    for (let i = 0; i < Message.length; i++) {
        if (Message[i].some(pattern => userInput.includes(pattern))) {
            return responses[i];
        }
    }

    // Fuzzy matching for better understanding
    let bestMatch = -1;
    let bestScore = 0;

    for (let i = 0; i < Message.length; i++) {
        for (let pattern of Message[i]) {
            const score = calculateSimilarity(userInput, pattern);
            if (score > bestScore && score > 0.6) {
                bestScore = score;
                bestMatch = i;
            }
        }
    }

    if (bestMatch !== -1) {
        return responses[bestMatch];
    }

    // Default responses
    const defaultResponses = [
        "That's interesting! Tell me more! 🤔",
        "I'm not sure I understand that yet, but I'm learning every day! 📚",
        "Hmm, that's a new one for me! Can you rephrase that? 🧐",
        "I'm still learning! Could you try asking that differently? 💭",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Fuzzy string matching
function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) return 1.0;

    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

function getEditDistance(str1, str2) {
    const matrix = [];

    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[str2.length][str1.length];
}

// ===== TYPING INDICATOR =====
function showTypingIndicator() {
    document.getElementById('typing-indicator').classList.add('active');
    const messageSection = document.getElementById('message-section');
    messageSection.scrollTop = messageSection.scrollHeight;
}

function hideTypingIndicator() {
    document.getElementById('typing-indicator').classList.remove('active');
}

// ===== QUICK REPLIES =====
function showQuickReplies() {
    const messageSection = document.getElementById('message-section');
    const existingReplies = document.querySelector('.quick-replies');
    if (existingReplies) existingReplies.remove();

    const repliesDiv = document.createElement('div');
    repliesDiv.className = 'quick-replies';

    const randomReplies = quickReplies[Math.floor(Math.random() * quickReplies.length)];

    randomReplies.forEach(reply => {
        const button = document.createElement('button');
        button.className = 'quick-reply-btn';
        button.textContent = reply;
        button.onclick = () => {
            document.getElementById('input').value = reply;
            sendMessage();
            repliesDiv.remove();
        };
        repliesDiv.appendChild(button);
    });

    messageSection.appendChild(repliesDiv);
    messageSection.scrollTop = messageSection.scrollHeight;
}

// ===== SOUND EFFECTS =====
function playSound(type) {
    if (!soundEnabled) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch (type) {
        case 'send':
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'receive':
            oscillator.frequency.value = 600;
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
            break;
        case 'start':
        case 'stop':
            oscillator.frequency.value = 1000;
            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
    }
}

// ===== THEME TOGGLE =====
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ===== SETTINGS PANEL =====
function toggleSettings() {
    const panel = document.getElementById('settings-panel');
    panel.classList.toggle('active');
}

function closeSettings() {
    document.getElementById('settings-panel').classList.remove('active');
}

// ===== SETTINGS MANAGEMENT =====
function loadSettings() {
    // Load theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Load other settings
    const savedRate = localStorage.getItem('speechRate');
    if (savedRate) {
        speechRate = parseFloat(savedRate);
        document.getElementById('speech-rate').value = speechRate;
        document.getElementById('rate-value').textContent = speechRate.toFixed(1) + 'x';
    }

    const savedSound = localStorage.getItem('soundEnabled');
    if (savedSound !== null) {
        soundEnabled = savedSound === 'true';
        document.getElementById('sound-toggle').checked = soundEnabled;
    }

    const savedAutoSpeak = localStorage.getItem('autoSpeak');
    if (savedAutoSpeak !== null) {
        autoSpeak = savedAutoSpeak === 'true';
        document.getElementById('auto-speak-toggle').checked = autoSpeak;
    }
}

function saveSettings() {
    localStorage.setItem('speechRate', speechRate);
    localStorage.setItem('soundEnabled', soundEnabled);
    localStorage.setItem('autoSpeak', autoSpeak);
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Voice button
    document.getElementById('voice-button').addEventListener('click', toggleVoiceRecognition);

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Settings
    document.getElementById('settings-button').addEventListener('click', toggleSettings);
    document.getElementById('close-settings').addEventListener('click', closeSettings);

    // Speech rate
    document.getElementById('speech-rate').addEventListener('input', (e) => {
        speechRate = parseFloat(e.target.value);
        document.getElementById('rate-value').textContent = speechRate.toFixed(1) + 'x';
        saveSettings();
    });

    // Voice selection
    document.getElementById('voice-select').addEventListener('change', (e) => {
        selectedVoice = e.target.value ? parseInt(e.target.value) : null;
        saveSettings();
    });

    // Sound toggle
    document.getElementById('sound-toggle').addEventListener('change', (e) => {
        soundEnabled = e.target.checked;
        saveSettings();
    });

    // Auto-speak toggle
    document.getElementById('auto-speak-toggle').addEventListener('change', (e) => {
        autoSpeak = e.target.checked;
        saveSettings();
    });
}

// ===== NOTIFICATIONS =====
function showNotification(message) {
    // Simple notification - could be enhanced with a toast system
    console.log('Notification:', message);
}

// ===== WELCOME MESSAGE =====
setTimeout(() => {
    showQuickReplies();
}, 1000);
