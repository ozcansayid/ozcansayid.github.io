const HarfiTaniyalimData = {
    // Defines paths to assets (assets/img/{folderPrefix}/... and assets/audio/{folderPrefix}/...)
    folderPrefix: "06_k/06_k_02_harf_taniyalim",

    // Target characters
    targetCharUpper: "K",
    targetCharLower: "k",

    // Distraction characters (Grup 2: O, K, U, R, I, M — K hariç)
    distractionChars: ['O', 'A', 'N', 'E', 'T', 'L', 'İ'],

    // Sounds specific to this letter/game
    audio: {
        loopSound: "k.mp3",          // Plays constantly every 8 seconds
        instruction: "instruction.mp3", // The voice line for the "Nasıl Oynanır"

        // Defaults if they exist locally
        correct: "correct.mp3",
        wrong: "wrong.mp3",
        tryAgain: "try_again.mp3",
        congratulations: "congratulations.mp3"
    },

    // Background image
    background: "bg.jpg",

    // Time limit
    durationSeconds: 60,

    // Title 
    title: "K/k Harfini Tanıyalım"
};
