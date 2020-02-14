const tamlData = {
    charMap: {
        'அ':'a','ஆ':'ā','இ':'i','ஈ':'ī','உ':'u','ஊ':'ū',
        'எ':'e','ஏ':'ē','ஐ':'ai','ஒ':'o','ஓ':'ō','ஔ':'au',
        'ஃ':'ḵ',
        'ா':'ā','ி':'i','ீ':'ī','ு':'u','ூ':'ū',
        'ெ':'e','ே':'ē','ை':'ai','ொ':'o','ோ':'ō','ௌ':'au',
        '்':'',
        'க':'k','ச':'c','ட':'ṭ','ற':'ṯ','த':'t','ப':'p',
        'ங':'ṅ','ஞ':'ñ','ண':'ṇ','ன':'ṉ','ந':'n','ம':'m',
        'ய':'y','ர':'r','ல':'ḻ','வ':'v','ழ':'ṛ','ள':'ḷ',
        'ௐ':'Ω','௸':'〃','௹':'₨','𑿩':'#',
        '.':'.',',':',','“':'“','”':'”','?':'?','!':'!',
    },
    vowels: new Map([
        ['a','அ'], ['ā','ஆ'],
        ['i','இ'], ['ī','ஈ'],
        ['u','உ'], ['ū','ஊ'],
        ['e','எ'], ['ē','ஏ'], ['ai','ஐ'],
        ['o','ஒ'], ['ō','ஓ'], ['au','ஔ'],
    ]),
    vowelMarks: new Map([
        ['a',''], ['ā','ா'],
        ['i','ி'], ['ī','ீ'],
        ['u','ு'], ['ū','ூ'],
        ['e','ெ'], ['ē','ே'], ['ai','ை'],
        ['o','ொ'], ['ō','ோ'], ['au','ௌ'],
        ['','்'],
    ]),
    misc: new Map([
        ['Ω','ௐ',], ['₨','௹'], ['〃','௸',], ['#','𑿩',],
    ]),
    modifiers: new Map([['ḵ','ஃ'],]),
    consonants: new Map([
        ['k','க'], ['ṅ','ங'],
        ['c','ச'], ['ñ','ஞ'],
        ['ṭ','ட'], ['ṇ','ண'],
        ['ṯ','ற'], ['ṉ','ன'],
        ['t','த'], ['n','ந'],
        ['p','ப'], ['m','ம'],
        ['y','ய'], ['r','ர'],
        ['ḻ','ல'], ['v','வ'],
        ['ṛ','ழ'], ['ḷ','ள'],
    ]),
    numbers: new Map([
        ['௦',0],
        ['௧',1], ['௨',2], ['௩',3], ['௪',4], ['௫',5], ['௬',6], ['௭',7], ['௮',8], ['௯',9],
        ['௰',10], ['௱',100], ['௲',1000],
        [0,'௦'],
        [1,'௧'], [2,'௨'], [3,'௩'], [4,'௪'], [5,'௫'], [6,'௬'], [7,'௭'], [8,'௮'], [9,'௯'],
        [10,'௰'], [100,'௱'], [1000,'௲'],
    ]),
};

const granData = {
    charMap: {
        '𑌅':'a','𑌆':'ā','𑌇':'i','𑌈':'ī','𑌉':'u','𑌊':'ū','𑌋':'r̥','𑍠':'r̥̄','𑌌':'l̥','𑍡':'l̥̄',
        '𑌏':'ē','𑌐':'ai','𑌓':'ō','𑌔':'au',
        '𑌁':'m̐','𑌂':'ṁ','𑌃':'ḥ',
        '𑌾':'ā','𑌿':'i','𑍀':'ī','𑍁':'u','𑍂':'ū','𑍃':'r̥','𑍄':'r̥̄','𑍢':'l̥','𑍣':'l̥̄',
        '𑍇':'ē','𑍈':'ai','𑍋':'ō','𑍌':'au',
        '𑍍':'',
        '𑌕':'k','𑌖':'kh','𑌗':'g','𑌘':'gh','𑌙':'ṅ',
        '𑌚':'c','𑌛':'ch','𑌜':'j','𑌝':'jh','𑌞':'ñ',
        '𑌟':'ṭ','𑌠':'ṭh','𑌡':'ḍ','𑌢':'ḍh','𑌣':'ṇ',
        '𑌤':'t','𑌥':'th','𑌦':'d','𑌧':'dh','𑌨':'n',
        '𑌪':'p','𑌫':'ph','𑌬':'b','𑌭':'bh','𑌮':'m',
        '𑌯':'y','𑌰':'r','𑌲':'l','𑌵':'v','𑌳':'ḷ',
        '𑌶':'ś','𑌷':'ṣ','𑌸':'s','𑌹':'h',
        '𑍐':'Ω',
    },
    vowels: new Map([
        ['a','𑌅'], ['ā','𑌆'],
        ['i','𑌇'], ['ī','𑌈'],
        ['u','𑌉'], ['ū','𑌊'],
        ['r̥','𑌋'], ['r̥̄','𑍠'],
        ['l̥','𑌌'], ['l̥̄','𑍡'],
        ['ē','𑌏'], ['ai','𑌐'],
        ['ō','𑌓'], ['au','𑌔'],
    ]),
    vowelMarks: new Map([
        ['a',''], ['ā','𑌾'],
        ['i','𑌿'], ['ī','𑍀'],
        ['u','𑍁'], ['ū','𑍂'],
        ['r̥','𑍃'], ['r̥̄','𑍄'],
        ['l̥','𑍢'], ['l̥̄','𑍣'],
        ['ē','𑍇'], ['ai','𑍈'],
        ['ō','𑍋'], ['au','𑍌'],
        ['','𑍍'],
    ]),
    misc: new Map([
        ['Ω','𑍐',],
    ]),
    modifiers: new Map([
        ['m̐','𑌁'], ['ṁ','𑌂'], ['ḥ','𑌃'],
    ]),
    consonants: new Map([
        ['k','𑌕'], ['kh','𑌖'], ['g','𑌗'], ['gh','𑌘'], ['ṅ','𑌙'],
        ['c','𑌚'], ['ch','𑌛'], ['j','𑌜'], ['jh','𑌝'], ['ñ','𑌞'],
        ['ṭ','𑌟'], ['ṭh','𑌠'], ['ḍ','𑌡'], ['ḍh','𑌢'], ['ṇ','𑌣'],
        ['t','𑌤'], ['th','𑌥'], ['d','𑌦'], ['dh','𑌧'], ['n','𑌨'],
        ['p','𑌪'], ['ph','𑌫'], ['b','𑌬'], ['bh','𑌭'], ['m','𑌮'],
        ['y','𑌯'], ['r','𑌰'], ['l','𑌲'], ['v','𑌵'], ['ḷ','𑌳'],
        ['ś','𑌶'], ['ṣ','𑌷'], ['s','𑌸'], ['h','𑌹'],
    ]),
};

const kndaData = {
    charMap: {
        'ಅ':'a','ಆ':'ā','ಇ':'i','ಈ':'ī','ಉ':'u','ಊ':'ū',
        'ಎ':'e','ಏ':'ē','ಐ':'ai','ಒ':'o','ಓ':'ō','ಔ':'au',
        'ಃ':'ḵ',
        'ಾ':'ā','ಿ':'i','ೀ':'ī','ು':'u','ೂ':'ū',
        'ೆ':'e','ೇ':'ē','ೈ':'ai','ೊ':'o','ೋ':'ō','ೌ':'au',
        '್':'',
        'ಕ':'k','ಚ':'c','ಟ':'ṭ','ಱ':'ṯ','ತ':'t','ಪ':'p',
        'ಙ':'ṅ','ಞ':'ñ','ಣ':'ṇ','಴':'ṉ','ನ':'n','ಮ':'m',
        'ಯ':'y','ರ':'r','ಲ':'ḻ','ವ':'v','ೞ':'ṛ','ಳ':'ḷ',
        '.':'.',',':',','“':'“','”':'”','?':'?','!':'!',
    },
    vowels: new Map([
        ['a','ಅ'], ['ā','ಆ'],
        ['i','ಇ'], ['ī','ಈ'],
        ['u','ಉ'], ['ū','ಊ'],
        ['e','ಎ'], ['ē','ಏ'], ['ai','ಐ'],
        ['o','ಒ'], ['ō','ಓ'], ['au','ಔ'],
    ]),
    vowelMarks: new Map([
        ['a',''], ['ā','ಾ'],
        ['i','ಿ'], ['ī','ೀ'],
        ['u','ು'], ['ū','ೂ'],
        ['e','ೆ'], ['ē','ೇ'], ['ai','ೈ'],
        ['o','ೊ'], ['ō','ೋ'], ['au','ೌ'],
        ['','್'],
    ]),
    misc: new Map([
    ]),
    modifiers: new Map([
        ['ḵ','ಃ'],
    ]),
    consonants: new Map([
        ['k','ಕ'], ['ṅ','ಙ'],
        ['c','ಚ'], ['ñ','ಞ'],
        ['ṭ','ಟ'], ['ṇ','ಣ'],
        ['ṯ','ಱ'], ['ṉ','಴'],
        ['t','ತ'], ['n','ನ'],
        ['p','ಪ'], ['m','ಮ'],
        ['y','ಯ'], ['r','ರ'],
        ['ḻ','ಲ'], ['v','ವ'],
        ['ṛ','ೞ'], ['ḷ','ಳ'],
    ]),
    numbers: new Map([
        ['೦',0], ['೧',1], ['೨',2], ['೩',3], ['೪',4],
        ['೫',5], ['೬',6], ['೭',7], ['೮',8], ['೯',9],
        [0,'೦'], [1,'೧'], [2,'೨'], [3,'೩'], [4,'೪'],
        [5,'೫'], [6,'೬'], [7,'೭'], [8,'೮'], [9,'೯'],
    ]),
};

const mlymData = {
    charMap: {
        'അ':'a','ആ':'ā','ഇ':'i','ഈ':'ī','ഉ':'u','ഊ':'ū',
        'എ':'e','ഏ':'ē','ഐ':'ai','ഒ':'o','ഓ':'ō','ഔ':'au',
        'ഃ':'ḵ',
        'ാ':'ā','ി':'i','ീ':'ī','ു':'u','ൂ':'ū',
        'െ':'e','േ':'ē','ൈ':'ai','ൊ':'o','ോ':'ō','ൌ':'au',
        '്':'',
        'ക':'k','ച':'c','ട':'ṭ','റ':'ṯ','ത':'t','പ':'p',
        'ങ':'ṅ','ഞ':'ñ','ണ':'ṇ','ഩ':'ṉ','ന':'n','മ':'m',
        'യ':'y','ര':'r','ല':'ḻ','വ':'v','ഴ':'ṛ','ള':'ḷ',
        '.':'.',',':',','“':'“','”':'”','?':'?','!':'!',
    },
    vowels: new Map([
        ['a','അ'], ['ā','ആ'],
        ['i','ഇ'], ['ī','ഈ'],
        ['u','ഉ'], ['ū','ഊ'],
        ['e','എ'], ['ē','ഏ'], ['ai','ഐ'],
        ['o','ഒ'], ['ō','ഓ'], ['au','ഔ'],
    ]),
    vowelMarks: new Map([
        ['a',''], ['ā','ാ'],
        ['i','ി'], ['ī','ീ'],
        ['u','ു'], ['ū','ൂ'],
        ['e','െ'], ['ē','േ'], ['ai','ൈ'],
        ['o','ൊ'], ['ō','ോ'], ['au','ൌ'],
        ['','്'],
    ]),
    misc: new Map([
    ]),
    modifiers: new Map([
        ['ḵ','ഃ'],
    ]),
    consonants: new Map([
        ['k','ക'], ['ṅ','ങ'],
        ['c','ച'], ['ñ','ഞ'],
        ['ṭ','ട'], ['ṇ','ണ'],
        ['ṯ','റ'], ['ṉ','ഩ'],
        ['t','ത'], ['n','ന'],
        ['p','പ'], ['m','മ'],
        ['y','യ'], ['r','ര'],
        ['ḻ','ല'], ['v','വ'],
        ['ṛ','ഴ'], ['ḷ','ള'],
    ]),
    numbers: new Map([
        ['൦',0],
        ['൧',1], ['൨',2], ['൩',3], ['൪',4], ['൫',5], ['൬',6], ['൭',7], ['൮',8], ['൯',9],
        ['൰',10], ['൱',100], ['൲',1000],
        [0,'൦'],
        [1,'൧'], [2,'൨'], [3,'൩'], [4,'൪'], [5,'൫'], [6,'൬'], [7,'൭'], [8,'൮'], [9,'൯'],
        [10,'൰'], [100,'൱'], [1000,'൲'],
    ]),
};

const teluData = {
    charMap: {
        'అ':'a','ఆ':'ā','ఇ':'i','ఈ':'ī','ఉ':'u','ఊ':'ū',
        'ఎ':'e','ఏ':'ē','ఐ':'ai','ఒ':'o','ఓ':'ō','ఔ':'au',
        'ః':'ḵ',
        'ా':'ā','ి':'i','ీ':'ī','ు':'u','ూ':'ū',
        'ె':'e','ే':'ē','ై':'ai','ొ':'o','ో':'ō','ౌ':'au',
        '్':'',
        'క':'k','చ':'c','ట':'ṭ','ఱ':'ṯ','త':'t','ప':'p',
        'ఙ':'ṅ','ఞ':'ñ','ణ':'ṇ','఩':'ṉ','న':'n','మ':'m',
        'య':'y','ర':'r','ల':'ḻ','వ':'v','ఴ':'ṛ','ళ':'ḷ',
        '.':'.',',':',','“':'“','”':'”','?':'?','!':'!',
    },
    vowels: new Map([
        ['a','అ'], ['ā','ఆ'],
        ['i','ఇ'], ['ī','ఈ'],
        ['u','ఉ'], ['ū','ఊ'],
        ['e','ఎ'], ['ē','ఏ'], ['ai','ఐ'],
        ['o','ఒ'], ['ō','ఓ'], ['au','ఔ'],
    ]),
    vowelMarks: new Map([
        ['a',''], ['ā','ా'],
        ['i','ి'], ['ī','ీ'],
        ['u','ు'], ['ū','ూ'],
        ['e','ె'], ['ē','ే'], ['ai','ై'],
        ['o','ొ'], ['ō','ో'], ['au','ౌ'],
        ['','్'],
    ]),
    misc: new Map([
    ]),
    modifiers: new Map([
        ['ḵ','ః'],
    ]),
    consonants: new Map([
        ['k','క'], ['ṅ','ఙ'],
        ['c','చ'], ['ñ','ఞ'],
        ['ṭ','ట'], ['ṇ','ణ'],
        ['ṯ','ఱ'], ['ṉ','఩'],
        ['t','త'], ['n','న'],
        ['p','ప'], ['m','మ'],
        ['y','య'], ['r','ర'],
        ['ḻ','ల'], ['v','వ'],
        ['ṛ','ఴ'], ['ḷ','ళ'],
    ]),
    numbers: new Map([
        ['౦',0], ['౧',1], ['౨',2], ['౩',3], ['౪',4],
        ['౫',5], ['౬',6], ['౭',7], ['౮',8], ['౯',9],
        [0,'౦'], [1,'౧'], [2,'౨'], [3,'౩'], [4,'౪'],
        [5,'౫'], [6,'౬'], [7,'౭'], [8,'౮'], [9,'౯'],
    ]),
};

const devaData = {
    charMap: {
        'अ':'a','आ':'ā','इ':'i','ई':'ī','उ':'u','ऊ':'ū','ऋ':'r̥','ॠ':'r̥̄','ऌ':'l̥','ॡ':'l̥̄',
        'ए':'ē','ऐ':'ai','ओ':'ō','औ':'au',
        'ँ':'m̐','ं':'ṁ','ः':'ḥ',
        'ा':'ā','ि':'i','ी':'ī','ु':'u','ू':'ū','ृ':'r̥','ॄ':'r̥̄','ॢ':'l̥','ॣ':'l̥̄',
        'े':'ē','ै':'ai','ो':'ō','ौ':'au',
        '्':'',
        'क':'k','ख':'kh','ग':'g','घ':'gh','ङ':'ṅ',
        'च':'c','छ':'ch','ज':'j','झ':'jh','ञ':'ñ',
        'ट':'ṭ','ठ':'ṭh','ड':'ḍ','ढ':'ḍh','ण':'ṇ',
        'त':'t','थ':'th','द':'d','ध':'dh','न':'n',
        'प':'p','फ':'ph','ब':'b','भ':'bh','म':'m',
        'य':'y','र':'r','ल':'l','व':'v','ळ':'ḷ',
        'श':'ś','ष':'ṣ','स':'s','ह':'h',
        'ॐ':'Ω','₹':'₨',
    },
    vowels: new Map([
        ['a','अ'], ['ā','आ'],
        ['i','इ'], ['ī','ई'],
        ['u','उ'], ['ū','ऊ'],
        ['r̥','ऋ'], ['r̥̄','ॠ'],
        ['l̥','ऌ'], ['l̥̄','ॡ'],
        ['ē','ए'], ['ai','ऐ'],
        ['ō','ओ'], ['au','औ'],
    ]),
    vowelMarks: new Map([
        ['a',''], ['ā','ा'],
        ['i','ि'], ['ī','ी'],
        ['u','ु'], ['ū','ू'],
        ['r̥','ृ'], ['r̥̄','ॄ'],
        ['l̥','ॢ'], ['l̥̄','ॣ'],
        ['ē','े'], ['ai','ै'],
        ['ō','ो'], ['au','ौ'],
        ['','्'],
    ]),
    misc: new Map([
        ['Ω','ॐ',], ['₨','₹'],
    ]),
    modifiers: new Map([
        ['m̐','ँ'], ['ṁ','ं'], ['ḥ','ः'],
    ]),
    consonants: new Map([
        ['k','क'], ['kh','ख'], ['g','ग'], ['gh','घ'], ['ṅ','ङ'],
        ['c','च'], ['ch','छ'], ['j','ज'], ['jh','झ'], ['ñ','ञ'],
        ['ṭ','ट'], ['ṭh','ठ'], ['ḍ','ड'], ['ḍh','ढ'], ['ṇ','ण'],
        ['t','त'], ['th','थ'], ['d','द'], ['dh','ध'], ['n','न'],
        ['p','प'], ['ph','फ'], ['b','ब'], ['bh','भ'], ['m','म'],
        ['y','य'], ['r','र'], ['l','ल'], ['v','व'], ['ḷ','ळ'],
        ['ś','श'], ['ṣ','ष'], ['s','स'], ['h','ह'],
    ]),
    numbers: new Map([
        ['०',0], ['१',1], ['२',2], ['३',3], ['४',4],
        ['५',5], ['६',6], ['७',7], ['८',8], ['९',9],
        [0,'०'], [1,'१'], [2,'२'], [3,'३'], [4,'४'],
        [5,'५'], [6,'६'], [7,'७'], [8,'८'], [9,'९'],
    ]),
};

const scriptDataMap = new Map([
    ["deva", devaData],
    ["gran", granData],
    ["knda", kndaData],
    ["mlym", mlymData],
    ["taml", tamlData],
    ["telu", teluData],
]);

export { scriptDataMap };
