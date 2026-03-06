// ==================== GAME DATA ====================

// Alphabet data
const alphabetData = {
    'A': { word: 'Apple', emoji: '🍎' },
    'B': { word: 'Ball', emoji: '⚽' },
    'C': { word: 'Cat', emoji: '🐱' },
    'D': { word: 'Dog', emoji: '🐕' },
    'E': { word: 'Elephant', emoji: '🐘' },
    'F': { word: 'Fish', emoji: '🐟' },
    'G': { word: 'Grapes', emoji: '🍇' },
    'H': { word: 'House', emoji: '🏠' },
    'I': { word: 'Ice cream', emoji: '🍦' },
    'J': { word: 'Juice', emoji: '🧃' },
    'K': { word: 'Kite', emoji: '🪁' },
    'L': { word: 'Lion', emoji: '🦁' },
    'M': { word: 'Moon', emoji: '🌙' },
    'N': { word: 'Nest', emoji: '🪺' },
    'O': { word: 'Orange', emoji: '🍊' },
    'P': { word: 'Penguin', emoji: '🐧' },
    'Q': { word: 'Queen', emoji: '👸' },
    'R': { word: 'Rainbow', emoji: '🌈' },
    'S': { word: 'Sun', emoji: '☀️' },
    'T': { word: 'Tree', emoji: '🌳' },
    'U': { word: 'Umbrella', emoji: '☂️' },
    'V': { word: 'Violin', emoji: '🎻' },
    'W': { word: 'Whale', emoji: '🐋' },
    'X': { word: 'Xylophone', emoji: '🎹' },
    'Y': { word: 'Yoyo', emoji: '🪀' },
    'Z': { word: 'Zebra', emoji: '🦓' }
};

// Matching game data - Easy
const matchingWordsEasy = [
    { word: 'CAT', emoji: '🐱' },
    { word: 'DOG', emoji: '🐕' },
    { word: 'FISH', emoji: '🐟' },
    { word: 'BIRD', emoji: '🐦' },
    { word: 'BEAR', emoji: '🐻' },
    { word: 'LION', emoji: '🦁' },
    { word: 'FROG', emoji: '🐸' },
    { word: 'DUCK', emoji: '🦆' },
    { word: 'COW', emoji: '🐄' },
    { word: 'PIG', emoji: '🐷' },
    { word: 'SUN', emoji: '☀️' },
    { word: 'MOON', emoji: '🌙' },
    { word: 'STAR', emoji: '⭐' },
    { word: 'TREE', emoji: '🌳' },
    { word: 'APPLE', emoji: '🍎' },
    { word: 'CAKE', emoji: '🎂' },
    { word: 'BALL', emoji: '⚽' },
    { word: 'BOOK', emoji: '📚' },
    { word: 'CAR', emoji: '🚗' },
    { word: 'HOUSE', emoji: '🏠' }
];

// Matching game data - Medium
const matchingWordsMedium = [
    { word: 'BELL', emoji: '🔔' },
    { word: 'DOOR', emoji: '🚪' },
    { word: 'LAMP', emoji: '💡' },
    { word: 'RING', emoji: '💍' },
    { word: 'SOCK', emoji: '🧦' },
    { word: 'DRUM', emoji: '🥁' },
    { word: 'GIFT', emoji: '🎁' },
    { word: 'BREAD', emoji: '🍞' },
    { word: 'CHEESE', emoji: '🧀' },
    { word: 'MELON', emoji: '🍈' },
    { word: 'PEACH', emoji: '🍑' },
    { word: 'MANGO', emoji: '🥭' },
    { word: 'CARROT', emoji: '🥕' },
    { word: 'PLANET', emoji: '🪐' },
    { word: 'CASTLE', emoji: '🏰' },
    { word: 'GUITAR', emoji: '🎸' },
    { word: 'TROPHY', emoji: '🏆' },
    { word: 'CAMERA', emoji: '📷' },
    { word: 'PUZZLE', emoji: '🧩' },
    { word: 'PARROT', emoji: '🦜' }
];

// Matching game data - Hard
const matchingWordsHard = [
    { word: 'CHICKEN', emoji: '🐔' },
    { word: 'DOLPHIN', emoji: '🐬' },
    { word: 'GORILLA', emoji: '🦍' },
    { word: 'LEOPARD', emoji: '🐆' },
    { word: 'BUFFALO', emoji: '🦬' },
    { word: 'HAMSTER', emoji: '🐹' },
    { word: 'ROOSTER', emoji: '🐓' },
    { word: 'BALLOON', emoji: '🎈' },
    { word: 'COMPASS', emoji: '🧭' },
    { word: 'DIAMOND', emoji: '💎' },
    { word: 'RAINBOW', emoji: '🌈' },
    { word: 'THUNDER', emoji: '⛈️' },
    { word: 'CRYSTAL', emoji: '🔮' },
    { word: 'TRUMPET', emoji: '🎺' },
    { word: 'PANCAKE', emoji: '🥞' },
    { word: 'CUPCAKE', emoji: '🧁' },
    { word: 'POPCORN', emoji: '🍿' },
    { word: 'UNICORN', emoji: '🦄' },
    { word: 'PENGUIN', emoji: '🐧' },
    { word: 'MERMAID', emoji: '🧜' }
];

// Matching game data - Advanced
const matchingWordsAdvanced = [
    { word: 'ELEPHANT', emoji: '🐘' },
    { word: 'GIRAFFE', emoji: '🦒' },
    { word: 'BUTTERFLY', emoji: '🦋' },
    { word: 'CROCODILE', emoji: '🐊' },
    { word: 'KANGAROO', emoji: '🦘' },
    { word: 'FLAMINGO', emoji: '🦩' },
    { word: 'HEDGEHOG', emoji: '🦔' },
    { word: 'SQUIRREL', emoji: '🐿️' },
    { word: 'TELESCOPE', emoji: '🔭' },
    { word: 'HELICOPTER', emoji: '🚁' },
    { word: 'AMBULANCE', emoji: '🚑' },
    { word: 'SKATEBOARD', emoji: '🛹' },
    { word: 'MICROPHONE', emoji: '🎤' },
    { word: 'PINEAPPLE', emoji: '🍍' },
    { word: 'WATERMELON', emoji: '🍉' },
    { word: 'STRAWBERRY', emoji: '🍓' },
    { word: 'HAMBURGER', emoji: '🍔' },
    { word: 'CHOCOLATE', emoji: '🍫' },
    { word: 'ASTRONAUT', emoji: '👨‍🚀' },
    { word: 'FIREFIGHTER', emoji: '👨‍🚒' }
];

// Spelling words - Easy
const spellingWordsEasy = [
    { word: 'CAT', emoji: '🐱', hint: 'A furry pet that says meow!' },
    { word: 'DOG', emoji: '🐕', hint: 'A pet that says woof!' },
    { word: 'SUN', emoji: '☀️', hint: 'It shines bright in the sky!' },
    { word: 'BEE', emoji: '🐝', hint: 'It makes honey!' },
    { word: 'COW', emoji: '🐄', hint: 'It gives us milk!' },
    { word: 'PIG', emoji: '🐷', hint: 'A pink farm animal!' },
    { word: 'HAT', emoji: '🎩', hint: 'You wear it on your head!' },
    { word: 'BUS', emoji: '🚌', hint: 'A big vehicle for many people!' },
    { word: 'CUP', emoji: '☕', hint: 'You drink from it!' },
    { word: 'BED', emoji: '🛏️', hint: 'You sleep on it!' },
    { word: 'RED', emoji: '🔴', hint: 'The color of an apple!' },
    { word: 'EGG', emoji: '🥚', hint: 'Chickens lay these!' },
    { word: 'ANT', emoji: '🐜', hint: 'A tiny insect that works hard!' },
    { word: 'BAT', emoji: '🦇', hint: 'It flies at night!' },
    { word: 'BOX', emoji: '📦', hint: 'You put things inside it!' },
    { word: 'FOX', emoji: '🦊', hint: 'A clever orange animal!' },
    { word: 'HEN', emoji: '🐔', hint: 'A chicken that lays eggs!' },
    { word: 'KEY', emoji: '🔑', hint: 'It opens a lock!' },
    { word: 'PEN', emoji: '🖊️', hint: 'You write with it!' },
    { word: 'ZOO', emoji: '🦁', hint: 'Where animals live!' }
];

// Spelling words - Medium
const spellingWordsMedium = [
    { word: 'FISH', emoji: '🐟', hint: 'It swims in water!' },
    { word: 'BIRD', emoji: '🐦', hint: 'It can fly!' },
    { word: 'TREE', emoji: '🌳', hint: 'It has leaves and branches!' },
    { word: 'FROG', emoji: '🐸', hint: 'It jumps and says ribbit!' },
    { word: 'CAKE', emoji: '🎂', hint: 'A sweet treat for birthdays!' },
    { word: 'BALL', emoji: '⚽', hint: 'Round and you can kick it!' },
    { word: 'BELL', emoji: '🔔', hint: 'It makes a ringing sound!' },
    { word: 'BOOK', emoji: '📖', hint: 'You read stories in it!' },
    { word: 'DUCK', emoji: '🦆', hint: 'It says quack quack!' },
    { word: 'FIRE', emoji: '🔥', hint: 'Hot and orange!' },
    { word: 'GIFT', emoji: '🎁', hint: 'A present for someone!' },
    { word: 'GOAT', emoji: '🐐', hint: 'An animal with horns!' },
    { word: 'GOLD', emoji: '🥇', hint: 'A shiny yellow metal!' },
    { word: 'HAND', emoji: '✋', hint: 'You have five fingers on it!' },
    { word: 'KING', emoji: '🤴', hint: 'He wears a crown!' },
    { word: 'KITE', emoji: '🪁', hint: 'It flies in the wind!' },
    { word: 'LAMP', emoji: '💡', hint: 'It gives you light!' },
    { word: 'LEAF', emoji: '🍃', hint: 'Green and grows on trees!' },
    { word: 'LION', emoji: '🦁', hint: 'King of the jungle!' },
    { word: 'MILK', emoji: '🥛', hint: 'A white drink from cows!' }
];

// Spelling words - Hard
const spellingWordsHard = [
    { word: 'APPLE', emoji: '🍎', hint: 'A red or green fruit!' },
    { word: 'BEACH', emoji: '🏖️', hint: 'Sand and ocean!' },
    { word: 'BREAD', emoji: '🍞', hint: 'You make sandwiches with it!' },
    { word: 'CANDY', emoji: '🍬', hint: 'Sweet and yummy!' },
    { word: 'CHAIR', emoji: '🪑', hint: 'You sit on it!' },
    { word: 'CLOUD', emoji: '☁️', hint: 'White and fluffy in the sky!' },
    { word: 'CROWN', emoji: '👑', hint: 'A king wears it!' },
    { word: 'DRESS', emoji: '👗', hint: 'Girls wear this!' },
    { word: 'FRUIT', emoji: '🍇', hint: 'Healthy and sweet to eat!' },
    { word: 'GRAPE', emoji: '🍇', hint: 'Small purple or green fruit!' },
    { word: 'GRASS', emoji: '🌿', hint: 'Green plants on the ground!' },
    { word: 'HAPPY', emoji: '😊', hint: 'Feeling good and joyful!' },
    { word: 'HEART', emoji: '❤️', hint: 'Symbol of love!' },
    { word: 'HORSE', emoji: '🐴', hint: 'You can ride it!' },
    { word: 'HOUSE', emoji: '🏠', hint: 'Where you live!' },
    { word: 'JUICE', emoji: '🧃', hint: 'A fruity drink!' },
    { word: 'LEMON', emoji: '🍋', hint: 'A sour yellow fruit!' },
    { word: 'MOUSE', emoji: '🐭', hint: 'Small animal that says squeak!' },
    { word: 'OCEAN', emoji: '🌊', hint: 'A big body of water!' },
    { word: 'PIZZA', emoji: '🍕', hint: 'Yummy food with cheese!' }
];

// Spelling words - Advanced
const spellingWordsAdvanced = [
    { word: 'ELEPHANT', emoji: '🐘', hint: 'A huge gray animal with a trunk!' },
    { word: 'GIRAFFE', emoji: '🦒', hint: 'The tallest animal with a long neck!' },
    { word: 'BUTTERFLY', emoji: '🦋', hint: 'A beautiful insect with colorful wings!' },
    { word: 'CROCODILE', emoji: '🐊', hint: 'A large reptile with big teeth!' },
    { word: 'KANGAROO', emoji: '🦘', hint: 'It hops and carries babies in a pouch!' },
    { word: 'FLAMINGO', emoji: '🦩', hint: 'A pink bird that stands on one leg!' },
    { word: 'DINOSAUR', emoji: '🦕', hint: 'A giant reptile from long ago!' },
    { word: 'OCTOPUS', emoji: '🐙', hint: 'A sea creature with eight arms!' },
    { word: 'DOLPHIN', emoji: '🐬', hint: 'A smart, friendly sea mammal!' },
    { word: 'PENGUIN', emoji: '🐧', hint: 'A bird that cannot fly but can swim!' },
    { word: 'TELESCOPE', emoji: '🔭', hint: 'You use it to see stars!' },
    { word: 'HELICOPTER', emoji: '🚁', hint: 'An aircraft with spinning blades!' },
    { word: 'AMBULANCE', emoji: '🚑', hint: 'A vehicle that takes people to hospital!' },
    { word: 'PINEAPPLE', emoji: '🍍', hint: 'A spiky tropical fruit!' },
    { word: 'WATERMELON', emoji: '🍉', hint: 'A big green fruit with red inside!' },
    { word: 'STRAWBERRY', emoji: '🍓', hint: 'A small red berry!' },
    { word: 'CHOCOLATE', emoji: '🍫', hint: 'A sweet brown treat!' },
    { word: 'UMBRELLA', emoji: '☂️', hint: 'It keeps you dry in the rain!' },
    { word: 'COMPUTER', emoji: '💻', hint: 'An electronic machine for work and games!' },
    { word: 'ASTRONAUT', emoji: '👨‍🚀', hint: 'Someone who travels to space!' }
];

// Counting items
const countingItems = [
    { emoji: '🍎', name: 'apples' },
    { emoji: '🌟', name: 'stars' },
    { emoji: '🐱', name: 'cats' },
    { emoji: '🐕', name: 'dogs' },
    { emoji: '🎈', name: 'balloons' },
    { emoji: '🍕', name: 'pizzas' },
    { emoji: '🦋', name: 'butterflies' },
    { emoji: '🌸', name: 'flowers' },
    { emoji: '🐟', name: 'fish' },
    { emoji: '🍪', name: 'cookies' },
    { emoji: '🚗', name: 'cars' },
    { emoji: '🎁', name: 'gifts' },
    { emoji: '🍌', name: 'bananas' },
    { emoji: '🐰', name: 'bunnies' },
    { emoji: '⚽', name: 'balls' }
];

// Maths emojis
const mathsEmojis = ['🍎', '🌟', '🎈', '🐱', '🌸', '🍪', '⚽', '🦋', '🍕', '🎁', '🍌', '🐶', '🌺', '🍩', '🐰'];

// Shape data
const shapeData = [
    { name: 'circle', emoji: '🔴', sides: 0 },
    { name: 'triangle', emoji: '🔺', sides: 3 },
    { name: 'square', emoji: '🟦', sides: 4 },
    { name: 'rectangle', emoji: '🟩', sides: 4 },
    { name: 'star', emoji: '⭐', sides: 5 },
    { name: 'heart', emoji: '❤️', sides: 0 },
    { name: 'diamond', emoji: '🔷', sides: 4 }
];

// Stories
const stories = [
    {
        title: 'The Little Star ⭐',
        pages: [
            { illustration: '⭐', text: 'Once upon a time, there was a little <span class="highlight" onclick="speakWord(\'star\')">star</span> in the sky.' },
            { illustration: '🌙', text: 'The star was friends with the <span class="highlight" onclick="speakWord(\'moon\')">moon</span>.' },
            { illustration: '☁️', text: 'One night, a big <span class="highlight" onclick="speakWord(\'cloud\')">cloud</span> came.' },
            { illustration: '😢', text: 'The little star was <span class="highlight" onclick="speakWord(\'sad\')">sad</span> because no one could see it.' },
            { illustration: '💨', text: 'The <span class="highlight" onclick="speakWord(\'wind\')">wind</span> blew the cloud away!' },
            { illustration: '✨', text: 'Now the star shines <span class="highlight" onclick="speakWord(\'bright\')">bright</span> for everyone! The End!' }
        ]
    },
    {
        title: 'The Happy Cat 🐱',
        pages: [
            { illustration: '🐱', text: 'There was a <span class="highlight" onclick="speakWord(\'cat\')">cat</span> named Whiskers.' },
            { illustration: '🏠', text: 'Whiskers lived in a cozy <span class="highlight" onclick="speakWord(\'house\')">house</span>.' },
            { illustration: '🐟', text: 'He loved to eat <span class="highlight" onclick="speakWord(\'fish\')">fish</span> for dinner.' },
            { illustration: '☀️', text: 'One sunny day, he went to play in the <span class="highlight" onclick="speakWord(\'garden\')">garden</span>.' },
            { illustration: '🦋', text: 'He saw a pretty <span class="highlight" onclick="speakWord(\'butterfly\')">butterfly</span>!' },
            { illustration: '😸', text: 'Whiskers was very <span class="highlight" onclick="speakWord(\'happy\')">happy</span>! The End!' }
        ]
    },
    {
        title: 'The Magic Garden 🌸',
        pages: [
            { illustration: '🌱', text: 'Lucy planted a tiny <span class="highlight" onclick="speakWord(\'seed\')">seed</span>.' },
            { illustration: '💧', text: 'She gave it <span class="highlight" onclick="speakWord(\'water\')">water</span> every day.' },
            { illustration: '☀️', text: 'The <span class="highlight" onclick="speakWord(\'sun\')">sun</span> helped it grow.' },
            { illustration: '🌿', text: 'A green <span class="highlight" onclick="speakWord(\'plant\')">plant</span> started to grow!' },
            { illustration: '🌸', text: 'It became a beautiful <span class="highlight" onclick="speakWord(\'flower\')">flower</span>!' },
            { illustration: '🌈', text: 'Lucy\'s garden was <span class="highlight" onclick="speakWord(\'magical\')">magical</span>! The End!' }
        ]
    },
    {
        title: 'Rainbow Colors 🌈',
        pages: [
            { illustration: '🌧️', text: 'After the <span class="highlight" onclick="speakWord(\'rain\')">rain</span>, something magical happened.' },
            { illustration: '🔴', text: 'First came <span class="highlight" onclick="speakWord(\'red\')">red</span>, like an apple!' },
            { illustration: '🟠', text: 'Then <span class="highlight" onclick="speakWord(\'orange\')">orange</span>, like a pumpkin!' },
            { illustration: '🟡', text: 'Next was <span class="highlight" onclick="speakWord(\'yellow\')">yellow</span>, like the sun!' },
            { illustration: '🟢', text: '<span class="highlight" onclick="speakWord(\'Green\')">Green</span> like the grass came next!' },
            { illustration: '🔵', text: 'Then <span class="highlight" onclick="speakWord(\'blue\')">blue</span> like the sky!' },
            { illustration: '🟣', text: 'And <span class="highlight" onclick="speakWord(\'purple\')">purple</span> like grapes!' },
            { illustration: '🌈', text: 'A beautiful <span class="highlight" onclick="speakWord(\'rainbow\')">rainbow</span> appeared! The End!' }
        ]
    },
    {
        title: 'Ocean Adventure 🌊',
        pages: [
            { illustration: '🐠', text: 'Finn was a little <span class="highlight" onclick="speakWord(\'fish\')">fish</span> in the big ocean.' },
            { illustration: '🐚', text: 'He found a pretty <span class="highlight" onclick="speakWord(\'shell\')">shell</span> on the sand.' },
            { illustration: '🐙', text: 'He met a friendly <span class="highlight" onclick="speakWord(\'octopus\')">octopus</span>.' },
            { illustration: '🐢', text: 'A wise old <span class="highlight" onclick="speakWord(\'turtle\')">turtle</span> said hello.' },
            { illustration: '🐋', text: 'A big <span class="highlight" onclick="speakWord(\'whale\')">whale</span> swam by!' },
            { illustration: '🏠', text: 'Finn swam <span class="highlight" onclick="speakWord(\'home\')">home</span> happy! The End!' }
        ]
    }
];

// Sentence data
const sentenceData = {
    animals: [
        { sentence: 'The cat is fluffy.', illustration: '🐱', blank: 'fluffy' },
        { sentence: 'The dog runs fast.', illustration: '🐕', blank: 'fast' },
        { sentence: 'The bird can fly.', illustration: '🐦', blank: 'fly' },
        { sentence: 'The fish swims in water.', illustration: '🐟', blank: 'swims' },
        { sentence: 'The lion is strong.', illustration: '🦁', blank: 'strong' }
    ],
    family: [
        { sentence: 'Mom is kind.', illustration: '👩', blank: 'kind' },
        { sentence: 'Dad is tall.', illustration: '👨', blank: 'tall' },
        { sentence: 'My sister plays games.', illustration: '👧', blank: 'plays' },
        { sentence: 'Grandma bakes cookies.', illustration: '👵', blank: 'bakes' },
        { sentence: 'We love our family.', illustration: '👨‍👩‍👧‍👦', blank: 'love' }
    ],
    food: [
        { sentence: 'The apple is red.', illustration: '🍎', blank: 'red' },
        { sentence: 'I like pizza.', illustration: '🍕', blank: 'pizza' },
        { sentence: 'Cake is sweet.', illustration: '🎂', blank: 'sweet' },
        { sentence: 'Milk is white.', illustration: '🥛', blank: 'white' },
        { sentence: 'Bananas are yellow.', illustration: '🍌', blank: 'yellow' }
    ],
    nature: [
        { sentence: 'The sun is bright.', illustration: '☀️', blank: 'bright' },
        { sentence: 'Trees are green.', illustration: '🌳', blank: 'green' },
        { sentence: 'Flowers smell nice.', illustration: '🌸', blank: 'nice' },
        { sentence: 'The sky is blue.', illustration: '🌤️', blank: 'blue' },
        { sentence: 'Rain falls down.', illustration: '🌧️', blank: 'down' }
    ],
    actions: [
        { sentence: 'I can jump high.', illustration: '🏃', blank: 'jump' },
        { sentence: 'She reads books.', illustration: '📚', blank: 'reads' },
        { sentence: 'We sing songs.', illustration: '🎵', blank: 'sing' },
        { sentence: 'He draws pictures.', illustration: '🎨', blank: 'draws' },
        { sentence: 'They dance happily.', illustration: '💃', blank: 'dance' }
    ],
    colors: [
        { sentence: 'The sky is blue.', illustration: '🔵', blank: 'blue' },
        { sentence: 'Grass is green.', illustration: '🟢', blank: 'green' },
        { sentence: 'The sun is yellow.', illustration: '🟡', blank: 'yellow' },
        { sentence: 'Roses are red.', illustration: '🔴', blank: 'red' },
        { sentence: 'Grapes are purple.', illustration: '🟣', blank: 'purple' }
    ]
};

// Export all data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        alphabetData,
        matchingWordsEasy,
        matchingWordsMedium,
        matchingWordsHard,
        matchingWordsAdvanced,
        spellingWordsEasy,
        spellingWordsMedium,
        spellingWordsHard,
        spellingWordsAdvanced,
        countingItems,
        mathsEmojis,
        shapeData,
        stories,
        sentenceData
    };
}
