// ✦ ETHERION CHAKRA DATA
// Sacred data structure for the seven chakra activation tracks

const chakraData = {
  root: {
    id: 'root',
    name: 'Root Chakra',
    sanskrit: 'Mūlādhāra',
    trackTitle: 'Crimson Ground',
    frequency: '396 Hz',
    color: '#8B0000',
    theme: 'Safety, Stability, Presence',
    description: `You were born into Earth… but never taught how to anchor.

Let the vibration of the root restore your foundations. Deep drums… earth harmonics… safety reawakened.

This frequency grounds your being into the present moment, releasing fear and activating trust in the physical realm. Feel the earth beneath you. You are held. You are home.`,
    soundTexture: 'Deep drums, low harmonic hum, tribal rhythms',
    audioSample: 'assets/audio/root-chakra-sample.mp3',
    audioFull: 'assets/audio/root-chakra-full.mp3',
    image: 'docs/etherion-hero-image.jpg',
    glyphMeaning: 'The Root Glyph carries the sacred geometry of grounding. Four corners for the four elements, anchoring spirit into matter. The spiral at its center represents the awakening kundalini, coiled and ready to rise.',
    resonanceCode: '396',
    duration: '12:00'
  },

  sacral: {
    id: 'sacral',
    name: 'Sacral Chakra',
    sanskrit: 'Svādhiṣṭhāna',
    trackTitle: 'Flow of Firewater',
    frequency: '417 Hz',
    color: '#FF6B35',
    theme: 'Creativity, Sensuality, Flow',
    description: `Water finds its way. Fire transforms.

Together, they birth creation itself. This is the realm of desire, of longing, of the sacred dance between masculine and feminine energies.

Allow the frequency to unlock what has been frozen. Let creativity flow through you like a river of liquid light. You are the artist of your own existence.`,
    soundTexture: 'Flowing water sounds, sensual silk textures, soft percussion',
    audioSample: 'assets/audio/sacral-chakra-sample.mp3',
    audioFull: 'assets/audio/sacral-chakra-full.mp3',
    image: 'docs/etherion-hero-image.jpg',
    glyphMeaning: 'The Sacral Glyph depicts the crescent moon over water—the eternal dance of feminine receptivity and creative power. Its curves represent the womb of creation, where all manifestation begins.',
    resonanceCode: '417',
    duration: '14:30'
  },

  solar: {
    id: 'solar',
    name: 'Solar Plexus Chakra',
    sanskrit: 'Maṇipūra',
    trackTitle: 'Radiant Core',
    frequency: '528 Hz',
    color: '#FFD23F',
    theme: 'Power, Confidence, Transformation',
    description: `The sun within you never set. It was only forgotten.

This is the fire of your personal power, the golden flame that declares: I AM. I exist. I matter. I create.

528 Hz is the frequency of transformation and miracles—the very same vibration that repairs DNA. Let your inner sun blaze with sovereign authority.`,
    soundTexture: 'Solar flares, golden harmonics, uplifting strings',
    audioSample: 'assets/audio/solar-chakra-sample.mp3',
    audioFull: 'assets/audio/solar-chakra-full.mp3',
    image: 'docs/etherion-hero-image.jpg',
    glyphMeaning: 'The Solar Glyph radiates with ten petals, each one a ray of personal power. At its center burns the eternal flame of self-sovereignty—the divine "I AM" made manifest in physical form.',
    resonanceCode: '528',
    duration: '15:00'
  },

  heart: {
    id: 'heart',
    name: 'Heart Chakra',
    sanskrit: 'Anāhata',
    trackTitle: 'Emerald Bloom',
    frequency: '639 Hz',
    color: '#06A77D',
    theme: 'Love, Compassion, Harmony',
    description: `The heart remembers what the mind has forgotten.

In the center of your chest lives a garden—tended by breath, watered by tears, illuminated by joy. This is the bridge between heaven and earth, the meeting point of all that you are.

Open. Soften. Forgive. Love is not something you find—it is what you are.`,
    soundTexture: 'Forest sounds, harmonious strings, gentle chimes',
    audioSample: 'assets/audio/heart-chakra-sample.mp3',
    audioFull: 'assets/audio/heart-chakra-full.mp3',
    image: 'docs/etherion-hero-image.jpg',
    glyphMeaning: 'The Heart Glyph forms two interlocking triangles—the union of ascending and descending energies. Twelve petals bloom around it, representing the twelve dimensions of love made accessible through an open heart.',
    resonanceCode: '639',
    duration: '16:30'
  },

  throat: {
    id: 'throat',
    name: 'Throat Chakra',
    sanskrit: 'Viśuddha',
    trackTitle: 'Voice of the Wind',
    frequency: '741 Hz',
    color: '#4169E1',
    theme: 'Expression, Truth, Communication',
    description: `Your voice is a frequency. Your truth is medicine.

For too long, we have swallowed our words, silenced our songs, muted our essence. This frequency clears the channel so that what is within may be spoken without.

Speak. Sing. Sound. Let your authentic expression ripple through reality. The universe is listening.`,
    soundTexture: 'Wind chimes, ethereal vocals, crystalline tones',
    audioSample: 'assets/audio/throat-chakra-sample.mp3',
    audioFull: 'assets/audio/throat-chakra-full.mp3',
    image: 'docs/etherion-hero-image.jpg',
    glyphMeaning: 'The Throat Glyph spirals outward like sound waves emanating from the center of truth. Sixteen petals represent the sixteen vowel sounds of creation—the building blocks of sacred speech.',
    resonanceCode: '741',
    duration: '13:45'
  },

  thirdEye: {
    id: 'third-eye',
    name: 'Third Eye Chakra',
    sanskrit: 'Ājñā',
    trackTitle: 'Inner Sight',
    frequency: '852 Hz',
    color: '#4B0082',
    theme: 'Intuition, Vision, Clarity',
    description: `You are not blind—you simply forgot to look within.

The third eye sees beyond the veil of illusion. It perceives energy, reads intention, knows truth without explanation. This is the seat of intuition, the portal to higher consciousness.

Close your outer eyes. Activate your inner vision. See with the eye that never blinks.`,
    soundTexture: 'Deep space ambience, cosmic drones, mystical bells',
    audioSample: 'assets/audio/third-eye-chakra-sample.mp3',
    audioFull: 'assets/audio/third-eye-chakra-full.mp3',
    image: 'docs/etherion-hero-image.jpg',
    glyphMeaning: 'The Third Eye Glyph depicts the single point of awareness—the bindu—from which all perception arises. Two petals frame it like wings, representing the balance of logic and intuition.',
    resonanceCode: '852',
    duration: '17:00'
  },

  crown: {
    id: 'crown',
    name: 'Crown Chakra',
    sanskrit: 'Sahasrāra',
    trackTitle: 'Thousand-Petal Star',
    frequency: '963 Hz',
    color: '#9D4EDD',
    theme: 'Unity, Transcendence, Divine Connection',
    description: `You are not separate. You never were.

The crown is the gateway to infinite consciousness—the realization that you are not a drop in the ocean, but the entire ocean in a drop.

963 Hz awakens the frequency of oneness. Dissolve into light. Expand into all that is. Remember: You are divine.`,
    soundTexture: 'Celestial harmonics, angelic voices, pure resonance',
    audioSample: 'assets/audio/crown-chakra-sample.mp3',
    audioFull: 'assets/audio/crown-chakra-full.mp3',
    image: 'docs/etherion-hero-image.jpg',
    glyphMeaning: 'The Crown Glyph blooms with a thousand petals—each one a dimension of consciousness, a pathway to the infinite. At its center shines the void that contains all creation.',
    resonanceCode: '963',
    duration: '18:30'
  }
};

// Chakra order for full sequence playback
const chakraSequence = ['root', 'sacral', 'solar', 'heart', 'throat', 'thirdEye', 'crown'];

// Helper function to get chakra data by ID
function getChakraData(chakraId) {
  return chakraData[chakraId] || null;
}

// Helper function to get next chakra in sequence
function getNextChakra(currentChakraId) {
  const currentIndex = chakraSequence.indexOf(currentChakraId);
  if (currentIndex === -1 || currentIndex === chakraSequence.length - 1) {
    return null;
  }
  return chakraData[chakraSequence[currentIndex + 1]];
}

// Helper function to get previous chakra in sequence
function getPreviousChakra(currentChakraId) {
  const currentIndex = chakraSequence.indexOf(currentChakraId);
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }
  return chakraData[chakraSequence[currentIndex - 1]];
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { chakraData, chakraSequence, getChakraData, getNextChakra, getPreviousChakra };
}
