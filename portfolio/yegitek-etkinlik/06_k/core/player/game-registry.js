/**
 * Game Registry - Oyun tanımları
 * Her oyunun CSS, data klasörü, engine ve intro dosya yollarını tanımlar.
 * Player bu registry'yi kullanarak doğru dosyaları yükler.
 */
window.GAME_REGISTRY = {
    '01_sesi_hissedelim': {
        title: 'Sesi Hissedelim',
        dataFolder: '01_sesi_hissedelim',
        engineFolder: 'sesi_hissedelim',
        css: '../games/sesi_hissedelim/style.css',
        scripts: {
            intro: '../games/sesi_hissedelim/scripts/intro.js',
            engine: '../games/sesi_hissedelim/engine.js'
        },
        needsConfetti: true
    },
    '02_harf_taniyalim': {
        title: 'Harf Tanıyalım',
        dataFolder: '02_harf_taniyalim',
        engineFolder: 'harf_taniyalim',
        css: '../games/harf_taniyalim/style.css',
        scripts: {
            intro: '../games/harf_taniyalim/scripts/intro.js',
            engine: '../games/harf_taniyalim/engine.js'
        },
        needsConfetti: true
    },
    '03_harf_yazalim': {
        title: 'Harf Yazalım',
        dataFolder: '03_harf_yazalim',
        engineFolder: 'harf_yazalim',
        css: '../games/harf_yazalim/style.css',
        scripts: {
            intro: '../games/harf_yazalim/scripts/intro.js',
            engine: '../games/harf_yazalim/engine.js'
        },
        needsConfetti: false
    },
    '04_karda_yazalim': {
        title: 'Karda Yazalım',
        dataFolder: '04_karda_yazalim',
        engineFolder: 'karda_yazalim',
        css: '../games/karda_yazalim/style.css',
        scripts: {
            intro: '../games/karda_yazalim/scripts/intro.js',
            engine: '../games/karda_yazalim/engine.js'
        },
        needsConfetti: false
    },
    '05_hece_sozcuk': {
        title: 'Hece-Sözcük Oluşturalım',
        dataFolder: '05_hece_sozcuk',
        engineFolder: 'hece_sozcuk',
        css: '../games/hece_sozcuk/style.css',
        scripts: {
            intro: '../games/hece_sozcuk/scripts/intro.js',
            engine: '../games/hece_sozcuk/engine.js'
        },
        needsConfetti: true
    },
    '06_sozcuk_olusturma': {
        title: 'Sözcük Oluşturalım',
        dataFolder: '06_sozcuk_olusturma',
        engineFolder: 'sozcuk_olusturma',
        css: '../games/sozcuk_olusturma/style.css',
        scripts: {
            intro: '../games/sozcuk_olusturma/scripts/intro.js',
            engine: '../games/sozcuk_olusturma/engine.js'
        },
        needsConfetti: true
    },
    '07_okuyalim': {
        title: 'Okuyalım',
        dataFolder: '07_okuyalim',
        engineFolder: 'okuyalim',
        css: '../games/okuyalim/style.css',
        scripts: {
            intro: '../games/okuyalim/scripts/intro.js',
            engine: '../games/okuyalim/engine.js'
        },
        needsConfetti: true
    },
    '08_ritmik_okuma': {
        title: 'Ritmik Okuma',
        dataFolder: '08_ritmik_okuma',
        engineFolder: 'ritmik_okuma',
        css: '../games/ritmik_okuma/style.css',
        scripts: {
            intro: '../games/ritmik_okuma/scripts/intro.js',
            engine: '../games/ritmik_okuma/engine.js'
        },
        needsConfetti: true
    },
    '09_sozcugu_okuyalim': {
        title: 'Sözcüğü Okuyalım',
        dataFolder: '09_sozcugu_okuyalim',
        engineFolder: 'sozcugu_okuyalim',
        css: '../games/sozcugu_okuyalim/style.css',
        scripts: {
            intro: '../games/sozcugu_okuyalim/scripts/intro.js',
            engine: '../games/sozcugu_okuyalim/engine.js'
        },
        needsConfetti: true
    },
    '10_cumle_okuyalim': {
        title: 'Cümle Okuyalım',
        dataFolder: '10_cumle_okuyalim',
        engineFolder: 'cumle_okuyalim',
        css: '../games/cumle_okuyalim/style.css',
        scripts: {
            intro: '../games/cumle_okuyalim/scripts/intro.js',
            engine: '../games/cumle_okuyalim/engine.js'
        },
        needsConfetti: true
    }
};

// Ordered list for navigation (prev/next) - full list as fallback
window.GAME_ORDER = [
    '01_sesi_hissedelim',
    '02_harf_taniyalim',
    '03_harf_yazalim',
    '04_karda_yazalim',
    '05_hece_sozcuk',
    '06_sozcuk_olusturma',
    '07_okuyalim',
    '08_ritmik_okuma',
    '09_sozcugu_okuyalim',
    '10_cumle_okuyalim'
];

// Per-letter game order: only games that exist for each letter
// Navigation uses this to skip unavailable games
window.LETTER_GAME_ORDER = {
    'e': [
        '01_sesi_hissedelim', '02_harf_taniyalim', '03_harf_yazalim',
        '04_karda_yazalim', '05_hece_sozcuk', '06_sozcuk_olusturma',
        '07_okuyalim', '08_ritmik_okuma'
    ],
    't': [
        '01_sesi_hissedelim', '02_harf_taniyalim', '03_harf_yazalim',
        '04_karda_yazalim', '05_hece_sozcuk', '06_sozcuk_olusturma',
        '07_okuyalim', '08_ritmik_okuma'
    ],
    'i': [
        '01_sesi_hissedelim', '02_harf_taniyalim', '03_harf_yazalim',
        '04_karda_yazalim', '05_hece_sozcuk', '06_sozcuk_olusturma',
        '07_okuyalim', '08_ritmik_okuma'
    ],
    'l': [
        '01_sesi_hissedelim', '02_harf_taniyalim', '03_harf_yazalim',
        '04_karda_yazalim', '05_hece_sozcuk', '06_sozcuk_olusturma',
        '07_okuyalim', '08_ritmik_okuma'
    ],
    'o': [
        '01_sesi_hissedelim', '02_harf_taniyalim', '03_harf_yazalim',
        '04_karda_yazalim', '05_hece_sozcuk', '06_sozcuk_olusturma',
        '07_okuyalim', '10_cumle_okuyalim'
    ],
    'k': [
        '01_sesi_hissedelim', '02_harf_taniyalim', '03_harf_yazalim',
        '04_karda_yazalim', '05_hece_sozcuk', '06_sozcuk_olusturma',
        '09_sozcugu_okuyalim', '10_cumle_okuyalim'
    ]
};
