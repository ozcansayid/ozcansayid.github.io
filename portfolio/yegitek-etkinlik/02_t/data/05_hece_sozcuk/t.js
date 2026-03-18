const HeceSozcukData = {
    folderPrefix: "02_t/02_t_05_hece_sozcuk",
    title: "Hece-Sözcük Oluşturalım",
    demoSyllable: "at",
    audio: {
        instruction: "instruction.mp3",
        correct: "correct.mp3",
        wrong: "wrong.mp3",
        congratulations: "congratulations.mp3"
    },
    levels: [
        { id: 1, audio: 'at.mp3', target: 'at', parts: ['a', 't'], options: ['t', 'a', 'e', 'n'] },
        { id: 2, audio: 'et.mp3', target: 'et', parts: ['e', 't'], options: ['e', 'l', 't', 'a'] },
        { id: 3, audio: 'ta.mp3', target: 'ta', parts: ['t', 'a'], options: ['a', 'e', 't', 'l'] },
        { id: 4, audio: 'te.mp3', target: 'te', parts: ['t', 'e'], options: ['e', 't', 'l', 'a'] },
        { id: 5, audio: 'ata.mp3', target: 'ata', parts: ['a', 'ta'], options: ['at', 'ta', 'a', 'e'] }
    ]
};
