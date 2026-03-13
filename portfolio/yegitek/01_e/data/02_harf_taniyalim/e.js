const HarfiTaniyalimData = {
    // Defines paths to assets (assets/img/{folderPrefix}/... and assets/audio/{folderPrefix}/...)
    folderPrefix: "01_e/01_e_02_harf_taniyalim",

    // Target characters
    targetCharUpper: "E",
    targetCharLower: "e",

    // Distraction characters
    distractionChars: ['A', 'N', 'İ', 'T', 'L'],

    // Sounds specific to this letter/game
    audio: {
        loopSound: "e.mp3",          // Plays constantly every 8 seconds
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
    title: "E/e Harfini Tanıyalım"
};
