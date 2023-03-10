const express=require('express')
const Router7=express.Router()
Router7.get('',async(req,res)=>{
  res.render('chapter7',{
    header:[{"href":"Chapter1","value":"1"},
    {"href":"Chapter2","value":"2"},
    {"href":"Chapter3","value":"3"},
    {"href":"Chapter4","value":"4"},
    {"href":"Chapter5","value":"5"},
    {"href":"Chapter6","value":"6"},
    {"href":"Chapter7","value":"7"},
    {"href":"Chapter8","value":"8"},
    {"href":"Chapter9","value":"9"},
    {"href":"Chapter10","value":"10"},
    {"href":"Chapter11","value":"11"},
    {"href":"Chapter12","value":"12"},
    {"href":"Chapter13","value":"13"},
    {"href":"Chapter14","value":"14"},
    {"href":"Chapter15","value":"15"},
    {"href":"Chapter16","value":"16"},
    {"href":"Chapter17","value":"17"},
    {"href":"Chapter18","value":"18"}],
    temp:[

 {
   "id":"#1","value":"1","name":"శ్రీ భగవానువాచ ।\nమయ్యాసక్తమనాః పార్థ యోగం యుంజన్ మదాశ్రయః ।\nఅసంశయం సమగ్రం మాం యథా జ్ఞాస్యసి తచ్ఛృణు ।। 1 ।।",
   "meaning": "శ్రీ భగవాన్ ఉవాచ — భగవంతుడు ఇలా పలికెను;\nమయి — నా పట్ల;\nఆసక్త-మనాః — ఆసక్తి కలిగిన మనస్సు తో;\nపార్థ — అర్జున ప్రిథ పుత్రుడా;\nయోగం — భక్తి యోగము;\nయుంజన్ — అభ్యాసము చేస్తూ;\nమత్-ఆశ్రయః — నన్ను శరణుజొచ్చి ;\nఅసంశయం — సందేహము లేకుండా;\nసమగ్రం — పూర్తిగా;\nమాం — నన్ను;\nయథా — ఎట్లా;\nజ్ఞాస్యసి — నీవు తెలుసుకొనగలవో;\nతత్ — అది;\nశృణు — వినుము.",
   "tran": "BG 7.1: భగవంతుడు పలికెను : ఓ అర్జునా నాయందు మాత్రమే మనస్సు నిలిపి భక్తి యోగ అభ్యాసము ద్వారా నాకు శరణాగతి చేసి నీవు ఎట్లయితే నన్ను సంపూర్ణముగా సందేహానికి తావు లేకుండా తెలుసుకొనగలవో ఇప్పుడు వినుము."
 },

 {
   "id":"#2","value":"2","name":"జ్ఞానం తేఽహం సవిజ్ఞానమిదం వక్ష్యామ్యశేషతః ।\nయత్ జ్ఞాత్వా నేహ భూయోఽన్యత్ జ్ఞాతవ్యమ్ అవశిష్యతే ।। 2 ।।",
   "meaning": "జ్ఞానం — జ్ఞానము;\nతే — నీకు;\nఅహం — నేను;\nస — తో;\nవిజ్ఞానం — విజ్ఞానము;\nఇదం — ఇది;\nవక్ష్యామి — తెలియ చెప్పెదను;\nఅశేషతః — సంపూర్ణముగా;\nయత్ — ఏదైతే;\nజ్ఞాత్వా — తెలుసుకున్న పిదప;\nన — ఉండదు;\nఇహ — ఈ లోకంలో;\nభూయః — మరింక;\nఅన్యత్ — వేరే ఏది;\nజ్ఞాతవ్యం — తెలుసుకోవలసినది;\nఅవశిష్యతే — మిగులును.",
   "tran": "BG 7.2: ఏ జ్ఞానాన్ని విజ్ఞానాన్ని తెలుసుకున్న పిదప ఇంకా ఏమీ తెలుసుకోవటానికి ఈ లోకంలో మిగిలి ఉండదో దానిని నేను నీకు సంపూర్ణముగా తెలియచేస్తాను."
 },

 {
   "id":"#3","value":"3","name":"మనుష్యాణాం సహస్రేషు కశ్చిద్యతతి సిద్ధయే ।\nయతతామపి సిద్ధానాం కశ్చిన్మాం వేత్తి తత్త్వతః ।। 3 ।।",
   "meaning": "మనుష్యాణాం — మనుష్యులలో;\nసహస్రేషు — వేల మందిలో;\nకశ్చిత్ — ఎవరో ఒకరు;\nయతతి — పరిశ్రమిస్తారు;\nసిద్ధయే — పరిపూర్ణ సిద్ధి కొరకు;\nయతతామ్ — ఈ ప్రయత్నించేవారిలో;\nఅపి — కూడా;\nసిద్ధానాం — పరిపూర్ణ సిద్ది సాధించినవారిలో;\nకశ్చిత్ — ఎవరో ఒకరు;\nమాం — నన్ను;\nవేత్తి — తెలుసుకోనును;\nతత్త్వతః — యదార్ధముగా.",
   "tran": "BG 7.3: వేల మందిలో ఏ ఒక్కరో పరిపూర్ణ సిద్ది కోసం ప్రయత్నిస్తారు;\nమరియు పరిపూర్ణ సిద్ది సాధించిన వారిలో ఎవరో ఒకరు మాత్రమే నన్ను యదార్థముగా తెలుసుకుంటారు."
 },

 {
   "id":"#4","value":"4","name":"భూమిరాపోఽనలో వాయుః ఖం మనో బుద్ధిరేవ చ ।\nఅహంకార ఇతీయం మే భిన్నా ప్రకృతిరష్టధా ।। 4 ।।",
   "meaning": "భూమి — భూమి (నేల);\nఆపః — నీరు;\nఅనలః — అగ్ని;\nవాయుః — గాలి;\nఖం — ఆకాశం (ఖాళీ స్థలము);\nమనః — మనస్సు;\nబుద్ధిః — బుద్ధి;\nఏవ — నిజముగా;\nచ — మరియు;\nఅహంకారః — అహంకారము;\nఇతి — ఇవి;\nయం — ఇవన్నీ;\nమే — నా యొక్క;\nభిన్నా — వివిధములైన;\nప్రకృతిః — భౌతిక ప్రాకృతిక శక్తి;\nఅష్టధా — ఎనిమిది రకములు.",
   "tran": "BG 7.4: భూమి నీరు అగ్ని వాయువు ఆకాశము మనస్సు బుద్ధి మరియు అహంకారము - ఇవి నా భౌతిక ప్రాకృతిక శక్తి యొక్క ఎనిమిది అంగములు."
 },
 {
   "id":"#5","value":"5","name":"అపరేయమితస్త్వన్యాం ప్రకృతిం విద్ధి మే పరామ్ ।\nజీవభూతాం మహాబాహో యయేదం ధార్యతే జగత్ ।। 5 ।।",
   "meaning": "అపరా — నీచమైన;\nఇయం — ఈ యొక్క;\nఇతః — దీనికంటే;\nతు — కానీ;\nఅన్యాం — వేరైన;\nప్రకృతిం — శక్తి;\nవిద్ధి — తెలుసుకొనుము;\nమే — నా యొక్క;\nపరామ్ — ఉన్నతమైనది;\nజీవ-భూతం — ప్రాణులు;\nమహా-బాహో — గొప్ప బాహువులు కలవాడా;\nయయా — ఎవరిచే;\nఇదం — ఈ యొక్క;\nధార్యతే — ఆధారము;\nజగత్ — భౌతిక జగత్తు.",
   "tran": "BG 7.5: ఇది నాయొక్క తక్కువ స్థాయి శక్తి. కానీ దానికి అతీతంగా ఓ గొప్ప బాహువులు కలవాడా అర్జునా నాకు ఒక ఉన్నతమైన శక్తి ఉంది. అదే జీవ-ఆత్మ శక్తి ఇది ఈ జగత్తు యందు ఉన్న జీవరాశులకు మూలాధారమైన జీవాత్మలను కలిగి ఉంటుంది."
 },
 {
   "id":"#6","value":"6","name":"ఏతద్యోనీని భూతాని సర్వాణీత్యుపధారయ ।\nఅహం కృత్స్నస్య జగతః ప్రభవః ప్రలయస్తథా ।। 6 ।।",
   "meaning": "ఏతత్ యోనీని — ఈ రెండు (శక్తులు) మూలాధారము;\nభూతాని — ప్రాణులు;\nసర్వాణి — సమస్త;\nఇతి — అది;\nఉపధారయ — తెలుసుకొనుము;\nఅహం — నేను;\nకృత్స్నస్య — సమస్త;\nజగతః — సృష్టి (జగత్తు);\nప్రభవః — ఉత్పత్తిస్థానము;\nప్రలయ — లయము;\nతథా — కూడా.",
   "tran": "BG 7.6: సమస్త జీవ రాశులు నా యొక్క ఈ రెండు శక్తుల ద్వారానే వ్యక్తమవుతాయి అని తెలుసుకొనుము. నేనే ఈ సమస్త సృష్టికి మూల ఉత్పతిస్థానము మరియు నా లోనికే ఇది అంతా లయమై పోతుంది."
 },
 {
   "id":"#7","value":"7","name":"మత్తః పరతరం నాన్యత్ కించిదస్తి ధనంజయ ।\nమయి సర్వమిదం ప్రోతం సూత్రే మణిగణా ఇవ ।। 7 ।।",
   "meaning": "మత్తః — నా కంటే;\nపరతరం — ఉన్నతమైనది;\nన అన్యత్ కించిత్ అస్తి — వేరైనది ఏదియునూ లేదు;\nధనంజయ — అర్జునా ధనమును జయించే వాడా;\nమయి — నా యందే;\nసర్వం — సమస్తము;\nఇదం — మనకు కనిపించే ఇవి;\nప్రోతం — ఆధారపడి (దూర్చబడి) ఉన్నవి ;\nసూత్రే — దారం పై;\nమణి-గణాః — పూసలు;\nఇవ — లాగా.",
   "tran": "BG 7.7: నా కంటే ఉన్నతమైనది ఏదీ లేదు ఓ అర్జునా. పూసలన్నీ దారము పై గుచ్చి ఉన్నట్టు సమస్తమూ నా యందే ఆధారపడి ఉన్నవి."
 },
 {
   "id":"#8","value":"8","name":"రసోఽహమప్సు కౌంతేయ ప్రభాస్మి శశిసూర్యయోః ।\nప్రణవః సర్వవేదేషు శబ్దః ఖే పౌరుషం నృషు ।। 8 ।।",
   "meaning": "రసః — రుచి;\nఅహం — నేను;\nఅప్సు — నీటిలో;\nకౌంతేయ — అర్జునా కుంతీ పుత్రుడా;\nప్రభా — తేజస్సు;\nఅస్మి — నేను;\nశశి-సూర్యయోః — సూర్య చంద్రులలో;\nప్రణవః — పవిత్రమైన 'ఓం' కారము;\nసర్వ — సమస్త;\nవేదేషు — వేదములు;\nశబ్దః — శబ్దము;\nఖే — ఆకాశంలో;\nపౌరుషం — సామర్ధ్యము;\nనృషు — మనుష్యులలో.",
   "tran": "BG 7.8: నీటి యందు రుచిని నేను ఓ కుంతీ పుత్రుడా మరియు సూర్య చంద్రుల యొక్క తేజస్సుని నేను. వేదములలో నేను పవిత్ర 'ఓం' కారమును (ప్రణవము);\nఆకాశములో శబ్దమును మరియు మనుష్యులలో వారి సామర్ధ్యమును."
 },
 {
   "id":"#9","value":"9","name":"పుణ్యో గంధః పృథివ్యాం చ తేజశ్చాస్మి విభావసౌ ।\nజీవనం సర్వభూతేషు తపశ్చాస్మి తపస్విషు ।। 9 ।।",
   "meaning": "పుణ్యః — స్వచ్ఛమైన;\nగంధ: — సువాసన;\nపృథివ్యాం — భూమి యొక్క;\nచ — మరియు;\nతేజః — తేజస్సు;\nచ — మరియు;\nఅస్మి — నేను;\nవిభావసౌ — అగ్నిలో;\nజీవనం — ప్రాణ శక్తి;\nసర్వ — అన్నిటిలో;\nభూతేషు — ప్రాణులు;\nతపః — తపస్సు;\nచ — మరియు;\nఅస్మి — నేను;\nతపస్విషు — తపస్విలలో.",
   "tran": "BG 7.9: భూమి యొక్క స్వచ్చమైన వాసన ను నేను మరియు అగ్ని లోని తేజస్సును నేనే. సమస్త ప్రాణులలో జీవశక్తిని నేనే మరియు తాపసులలో తపస్సును నేనే."
 },
 {
   "id":"#10","value":"10","name":"బీజం మాం సర్వభూతానాం విద్ధి పార్థ సనాతనమ్ ।\nబుద్ధిర్బుద్ధిమతామస్మి తేజస్తేజస్వినామహమ్ ।। 10 ।।",
   "meaning": "బీజం — విత్తనము;\nమాం — నేను;\nసర్వ-భూతానాం — సమస్త ప్రాణులకు;\nవిద్ధి — తెలుసుకొనుము;\nపార్థ — అర్జునా ప్రిథ పుత్రుడా;\nసనాతనమ్ — నిత్య శాశ్వతమైన;\nబుద్ధిః — బుద్ధి;\nబుద్ధి-మతాం — తెలివైనవారిలో (బుద్దిమంతులలో);\nఅస్మి — నేను;\nతేజః — తేజస్సు;\nతేజస్వినామ్ — తేజోవంతులలో;\nఅహమ్ — నేను.",
   "tran": "BG 7.10: ఓ అర్జునా సమస్త ప్రాణులకూ సనాతనమైన మూల బీజము నేనే అని తెలుసుకొనుము. ప్రజ్ఞావంతులలో ప్రజ్ఞను నేనే తేజోవంతులలో తేజస్సుని నేనే."
 },
 {
   "id":"#11","value":"11","name":"బలం బలవతాం చాహం కామరాగవివర్జితమ్ ।\nధర్మావిరుద్ధో భూతేషు కామోఽస్మి భరతర్షభ ।। 11 ।।",
   "meaning": "బలం — బలము;\nబల-వతాం — బలవంతులలో;\nచ — మరియు;\nఅహం — నేను;\nకామ — కోరిక;\nరాగ — మోహము;\nవివర్జితమ్ — లేకుండా;\nధర్మ-అవిరుద్దః — ధర్మ విరుద్ధము కాని;\nభూతేషు — సర్వ భూతములలో;\nకామః — లైంగిక క్రియలు;\nఅస్మి — నేను;\nభరత-ఋషభ — అర్జునా భరతులలో శ్రేష్టుడా.",
   "tran": "BG 7.11: భరత వంశీయులలో శ్రేష్టుడా బలవంతులలో కామరాగరహితమైన బలము నేను. ధర్మ విరుద్ధము కాని లైంగిక క్రియలను నేనే."
 },

 {
   "id":"#12","value":"12","name":"యే చైవ సాత్త్వికా భావా రాజసాస్తామసాశ్చ యే।\nమత్త ఏవేతి తాన్విద్ధి న త్వహం తేషు తే మయి ।। 12 ।।",
   "meaning": "యే — ఏదైతే;\nచ — మరియు;\nఏవ — నిజముగా;\nసాత్త్వికాః — సత్త్వము;\nభావాః — భౌతిక అస్తిత్వంలో ఉన్న దశలు;\nరాజసాః — రజస్సు;\nతామసాః — తమస్సు;\nచ — మరియు;\nయే — ఏదైనా;\nమత్తః — నా నుండి;\nఏవ — నిజముగా;\nఇతి — ఈ విధముగా;\nతాన్ — అవి;\nవిద్ధి — తెలుసుకొనుము;\nన — లేదు;\nతు — కానీ;\nఅహం — నేను;\nతేషు — వాటిలో;\nతే — అవి;\nమయి — నా యందు.",
   "tran": "BG 7.12: భౌతిక ప్రకృతి యొక్క త్రిగుణములు – సత్త్వము రజస్సు తమస్సు – నా శక్తి వల్లనే వ్యక్తమయినాయి. అవి నా యందే ఉన్నాయి కానీ నేను వాటికి అతీతుడను."
 },
 {
   "id":"#13","value":"13","name":"త్రిభిర్గుణమయైర్భావైరేభిః సర్వమిదం జగత్ ।\nమోహితం నాభిజానాతి మామేభ్యః పరమవ్యయమ్ ।। 13 ।।",
   "meaning": "త్రిభిః — మూడింటి;\nగుణ-మయైః — ప్రకృతి గుణముల తో కూడియున్న;\nభావైః — దశలు;\nఏభిః — ఇవి అన్ని;\nసర్వం — సర్వము;\nఇదం — ఈ యొక్క;\nజగత్ — జగత్తు;\nమోహితం — మోహామునకు గురై;\nన అభిజానాతి — తెలుసుకొనలేక;\nమాం — నన్ను;\nఏభ్యః — ఈ;\nపరం — సర్వోన్నత;\nఅవ్యయం — అనశ్వరమైన/నిత్యమైన.",
   "tran": "BG 7.13: మాయ యొక్క త్రిగుణములచే భ్రమకు లోనై (మోహితులై) ఈ లోకంలోని జనులు అనశ్వరమైన మరియు సనాతనమైన నా గురించి తెలుసుకోలేకున్నారు."
 },

 {
   "id":"#14","value":"14","name":"దైవీ హ్యేషా గుణమయీ మమ మాయా దురత్యయా ।\nమామేవ యే ప్రపద్యంతే మాయామేతాం తరంతి తే ।। 14 ।।",
   "meaning": "దైవీ — దివ్యమైన;\nహి — నిజముగా;\nఏషా — ఈ యొక్క;\nగుణ-మయీ — ప్రకృతి త్రి గుణములతో కూడిన;\nమమ — నా యొక్క;\nమాయా — మాయ భగవంతుని శక్తులలో ఒకటి;\nభగవత్ ప్రాప్తి పొందటానికి ఇంకా అర్హత సాధించని ఆత్మల నుండి భగవంతుని నిజమైన స్వభావాన్ని దాచి ఉంచునది;\nదురత్యయా — అధిగమించటానికి చాలా కష్టతరమైనది;\nమాం — నాకు;\nఏవ — ఖచ్చితంగా;\nయే — ఎవరైతే;\nప్రపద్యంతే — శరణాగతి చేసెదరో;\nమాయాం ఏతాం — ఈ మాయ;\nతరంతి — దాటిపోవురు;\nతే — వారు.",
   "tran": "BG 7.14: ప్రకృతి త్రిగుణాత్మకమైన నా దైవీ శక్తి 'మాయ' అధిగమించుటకు చాలా కష్టతరమైనది. కానీ నాకు శరణాగతి చేసిన వారు దానిని సునాయాసముగా దాటిపోగలరు."
 },
 {
   "id":"#15","value":"15","name":"న మాం దుష్కృతినో మూఢాః ప్రపద్యంతే నరాధమాః ।\nమాయయాపహృతజ్ఞానా ఆసురం భావమాశ్రితాః ।। 15 ।।",
   "meaning": "న — కాదు;\nమాం — నాకు;\nదుష్కృతినః — పాపపు పనులు చేసేవారు;\nమూఢాః — మూఢులు;\nప్రపధ్యంతే — శరణాగతి చేసెదరు;\nనర-అధమాః — సోమరితనంతో తన నిమ్న స్థాయి స్వభావాన్ని అనుసరించే వాడు;\n(అధములు);\nమాయయా — భగవంతుని భౌతిక శక్తి చే;\nఅపహృత జ్ఞానాః — మోహము/భ్రమకు లోనైన బుద్ధి తో;\nఆసురం — ఆసుర (రాక్షస);\nభావం — స్వభావము;\nఆశ్రితాః — ఆశ్రయించెదరు.",
   "tran": "BG 7.15: నాలుగు రకాల మనుష్యులు నాకు శరణాగతి చేయరు - జ్ఞానము లేని వారు నన్ను తెలుసుకునే సామర్ధ్యం ఉన్నా సోమరితనం తో తమ నిమ్న స్థాయి స్వభావాన్ని అనుసరించేవారు బుద్ధి భ్రమకు గురైనవారు ఆసురీ ప్రవుత్తి కలవారు."
 },
 {
   "id":"#16","value":"16","name":"చతుర్విధా భజంతే మాం జనాః సుకృతినోఽర్జున ।\nఆర్తో జిజ్ఞాసురర్థార్థీ జ్ఞానీ చ భరతర్షభ ।। 16 ।।",
   "meaning": "చతుః-విధా — నాలుగు రకాల;\nభజంతే — భజింతురు;\nమాం — నన్ను;\nజనాః — జనులు;\nసు-కృతినః — ధర్మ పరాయణులు;\nఅర్జున — అర్జునా;\nఆర్తః — ఆపద/దుఃఖం లో ఉన్నవారు;\nజిజ్ఞాసుః — జ్ఞానాన్ని అన్వేషించేవారు;\nఅర్థ-అర్థీ — భౌతిక సంపత్తి ఆశించేవారు;\nజ్ఞానీ — జ్ఞానములో స్థితులై ఉన్నవారు;\nచ — మరియు;\nభరత-రిషభ — భరత వంశీయులలో శ్రేష్టుడా.",
   "tran": "BG 7.16: ఓ భరతులలో శ్రేష్టుడా నాలుగు రకాలైన ధర్మ-పరాయణులు నా పట్ల భక్తి తో నిమగ్నమవుతారు – ఆపదలో ఉన్నవారు జ్ఞాన సముపార్జన కోసం ప్రయత్నించేవారు ప్రాపంచిక వస్తువుల సంపాదన కోసం చూసేవారు మరియు జ్ఞానము నందు స్థితులై ఉన్న వారు."
 },
 {
   "id":"#17","value":"17","name":"తేషాం జ్ఞానీ నిత్యయుక్త ఏకభక్తిర్విశిష్యతే ।\nప్రియో హి జ్ఞానినోఽత్యర్థమహం స చ మమ ప్రియః ।। 17 ।।",
   "meaning": "తేషాం — వీరందరిలో;\nజ్ఞానీ — జ్ఞానములో స్థితమై ఉన్నవారు;\nనిత్య-యుక్తః — ఎల్లప్పుడూ దృఢ సంకల్పంతో;\nఏక — అనన్యముగా;\nభక్తిః — భక్తి;\nవిశిష్యతే — శ్రేష్ఠమైన;\nప్రియః — ప్రియమైన;\nహి — ఖచ్చితంగా;\nజ్ఞానినః — జ్ఞానములో స్థితమైనవారు;\nఅత్యర్థం — గొప్పగా;\nఅహం — నేను;\nసః — అతను;\nచ — మరియు;\nమమ — నాకు;\nప్రియః — ప్రియమైన వాడు.",
   "tran": "BG 7.17: వీరందరిలో కెల్లా జ్ఞానం తో నన్ను పూజించే వారు మరియు నా పట్ల ధృడ సంకల్పముతో మరియు అనన్య భక్తితో ఉన్నవారిని అందరి కంటే శ్రేష్ఠమైన వారిగా పరిగణిస్తాను. నేను వారికి ప్రియమైనవాడిని మరియు వారు నాకు ప్రియమైనవారు."
 },
 {
   "id":"#18","value":"18","name":"ఉదారాః సర్వ ఏవైతే జ్ఞానీ త్వాత్మైవ మే మతమ్ ।\nఆస్థితః స హి యుక్తాత్మా మామేవానుత్తమాం గతిమ్ ।। 18 ।।",
   "meaning": "ఉదారాః — ఉదారులు (మహనీయులు);\nసర్వే — వీరందరూ;\nఏవ — నిజముగా;\nఏతే — వీరు;\nజ్ఞానీ — జ్ఞానులు;\nతు — కానీ;\nఆత్మా-ఏవ — స్వయముగా నేనే;\nమే — నా యొక్క;\nమతం — అభిప్రాయము;\nఆస్థితః — స్థితుడై ఉండి;\nసః — ఆ వ్యక్తి;\nహి — ఖచ్చితంగా;\nయుక్త-ఆత్మా — ఏకీకృత మైనవారు;\nమాం — నా యందు;\nఏవ — నిజముగా;\nఅనుత్తమాం — సర్వోన్నత;\nగతిం — లక్ష్యము.",
   "tran": "BG 7.18: నా యందు భక్తితో ఉన్నవారందరూ నిజముగా ఉత్తములే. కానీ జ్ఞానముతో ధృడ నిశ్చయముతో ఉండి బుద్ధి నా యందు ఐక్యమై కేవలం నన్ను మాత్రమే వారి పరమ లక్ష్యం గా కలిగిఉన్నవారు స్వయంగా నా స్వరూపమే అని నేను పరిగణిస్తాను."
 },
 {
   "id":"#19","value":"19","name":"బహూనాం జన్మనామంతే జ్ఞానవాన్ మాం ప్రపద్యతే ।\nవాసుదేవః సర్వమితి స మహాత్మా సుదుర్లభః ।। 19 ।।",
   "meaning": "బహూనాం — అనేకమైన;\nజన్మనాం — జన్మలు;\nఅంతే — తరువాత;\nజ్ఞాన-వాన్ — జ్ఞాన వంతులు;\nమాం — నాకు;\nప్రపద్యతే — శరణాగతి చేస్తారు;\nవాసుదేవః — శ్రీ కృష్ణుడు వసుదేవుని కుమారుడు;\nసర్వం — సర్వమూ;\nఇతి — అది;\nస — అటువంటి;\nమహా-ఆత్మా — మహాత్ముడు;\nసు-దుర్లభః — ఏంతో అరుదు.",
   "tran": "BG 7.19: ఎన్నో జన్మల ఆధ్యాత్మిక సాధన తరువాత జ్ఞాన సంపన్నుడు ఉన్నదంతా నేనే (వాసుదేవుడే) అని తెలుసుకొని నాకు శరణాగతి చేస్తాడు. అటువంటి మహాత్ముడు నిజముగా చాలా అరుదు."
 },
 {
   "id":"#20","value":"20","name":"కామైస్తైస్తైర్హృతజ్ఞానాః ప్రపద్యంతేఽన్యదేవతాః ।\nతం తం నియమమాస్థాయ ప్రకృత్యా నియతాః స్వయా ।। 20 ।।",
   "meaning": "కామైః — ప్రాపంచిక కోరికలతో;\nతైః తైః — ఎన్నెన్నో;\nహృత-జ్ఞానః — జ్ఞానము కొట్టుకొని పోయినవారు;\nప్రపద్యంతే — శరణాగతి చేసెదరు;\nఅన్య — ఇతర;\nదేవతాః — దేవతలకు;\nతం తం — వారి వారి ఆయా;\nనియమం — నియమములు;\nఆస్థాయ — పాటిస్తూ;\nప్రకృత్యా — స్వభావము చే;\nనియతాః — నియంత్రించబడి;\nస్వయా — వారి యొక్క స్వీయ.",
   "tran": "BG 7.20: భౌతిక ప్రాపంచిక కోరికలతో జ్ఞానం కొట్టుకొని పోయినవారు అన్య దేవతలకు శరణాగతి చేస్తారు. వారి స్వీయ స్వభావాన్ని అనుసరిస్తూ అన్య దేవతలను ఆరాధిస్తారు;\nఆయా దేవతలను ప్రసన్నం చేసుకోవటానికి ఆయా కర్మ కాండలను ఆచరిస్తారు."
 },
 {
   "id":"#21","value":"21","name":"యో యో యాం యాం తనుం భక్తః శ్రద్ధయార్చితుమిచ్ఛతి ।\nతస్య తస్యాచలాం శ్రద్ధాం తామేవ విదధామ్యహమ్ ।। 21 ।।",
   "meaning": "యః యః — ఎవరెవరైతే;\nయాం యాం — ఏ ఏ;\nతనుం — రూపంలో;\nభక్త — భక్తుడు;\nశ్రద్ధయా — విశ్వాసము తో;\nఅర్చితుం — పూజించాలని;\nఇచ్ఛతి — కోరుతారో;\nతస్య తస్య — వానికి;\nఅచలాం — ధృడమైన;\nశ్రద్ధాం — నమ్మకం;\nతాం — దానిలో;\nఏవ — ఖచ్చితంగా;\nవిదధామి — అనుగ్రహించెదను;\nఅహం — నేను.",
   "tran": "BG 7.21: భక్తుడు విశ్వాసంతో ఏ ఏ దేవతా స్వరూపాన్ని ఆరాధించాలని కోరుకుంటాడో ఆ భక్తుడికి ఆయా స్వరూపం మీదనే శ్రద్ధ నిలబడేటట్టు చేస్తాను."
 },
 {
   "id":"#22","value":"22","name":"స తయా శ్రద్ధయా యుక్తః తస్యారాధనమీహతే ।\nలభతే చ తతః కామాన్మయైవ విహితాన్హి తాన్ ।। 22 ।।",
   "meaning": "స — అతడు;\nతయా — ఆ యొక్క;\nశ్రద్ధయా — శ్రద్ధతో;\nయుక్తః — అనుగ్రహింపబడి;\nతస్య — వారి యొక్క;\nఆరాధనమ్ — ఆరాధన;\nఇహతే — నిమగ్నమవ్వటానికి ప్రయత్నిస్తూ;\nలభతే — పొందును;\nచ — మరియు;\nతతః — దాని నుండి;\nకామాన్ — కోరికలు;\nమయా — నా చేత;\nఏవ — మాత్రమే;\nవిహితాన్ — అనుగ్రహింపబడి;\nహి — ఖచ్చితముగా;\nతాన్ — వారు.",
   "tran": "BG 7.22: శ్రద్ధా విశ్వాసము కలిగి ఉన్న ఆ భక్తుడు ఆ దేవతనే ఆరాధించును మరియు కోరుకున్న సామాగ్రిని పొందును. కానీ నిజానికి ఆ ప్రయోజనాలని సమకూర్చి పెట్టేది నేనే."
 },
 {
   "id":"#23","value":"23","name":"అంతవత్తు ఫలం తేషాం తద్భవత్యల్పమేధసామ్ ।\nదేవాన్ దేవయజో యాంతి మద్భక్తా యాంతి మామపి ।। 23 ।।",
   "meaning": "అంత-వత్ — నశించిపొయెడి;\nతు — కానీ;\nఫలం — ఫలము;\nతేషాం — వారిచే;\nతత్ — అది;\nభవతి — ఉండును;\nఅల్ప-మేధాసాం — తెలివి తక్కువ వారు;\nదేవాన్ — దేవతలకు;\nదేవ-యజః — దేవతలను ఆరాధించేవారు;\nయాంతి — వెళ్ళెదరు;\nమత్ — నా యొక్క ;\nభక్తాః — భక్తులు;\nయాంతి — వెళ్ళెదరు;\nమాం — నా దగ్గరకు;\nఅపి — కానీ.",
   "tran": "BG 7.23: కానీ ఈ అల్ప-జ్ఞానము కలిగిన జనులు పొందే ఫలము తాత్కాలికమైనది. దేవతలను ఆరాధించే వారు ఆయా దేవతల లోకానికి వెళతారు అదే సమయంలో నా భక్తులు మాత్రం నన్నే చేరుకుంటారు."
 },
 {
   "id":"#24","value":"24","name":"అవ్యక్తం వ్యక్తిమాపన్నం మన్యంతే మామబుద్ధయః ।\nపరం భావమజానంతో మమావ్యయమనుత్తమమ్ ।। 24 ।।",
   "meaning": "అవ్యక్తం — రూపము లేకుండా ఉండి;\nవ్యక్తిమ్ — ఒక వ్యక్తిత్వాన్ని కలిగి;\nఆపన్నం — పొంది;\nమన్యంతే — అనుకుంటారు;\nమామ్ —నన్ను;\nఅబుద్ధయః — తెలివి తక్కువ వారు;\nపరం — సర్వోన్నత;\nభావమ్ — స్వభావము;\nఅజానంతః — అర్థం చేసుకోకుండా;\nమమ — నా యొక్క;\nఅవ్యయమ్ — తరిగిపోనిది;\nఅనుత్తమమ్ — సర్వోత్కృష్టమైన.",
   "tran": "BG 7.24: పరమేశ్వరుడైన నన్ను శ్రీ కృష్ణుడిని - ఒకప్పుడు నిరాకార అవ్యక్తముగా ఉండి ఇప్పుడు ఒక రూపాన్ని తీసుకున్నానని అల్ప జ్ఞానము కలవారు అనుకుంటారు. అక్షరమైన సర్వోత్కృష్టమైన ఈ నాయొక్క సాకార రూపాన్ని వారు అర్థం చేసుకోలేకున్నారు."
 },
 {
   "id":"#25","value":"25","name":"నాహం ప్రకాశః సర్వస్య యోగమాయాసమావృతః ।\nమూఢోఽయం నాభిజానాతి లోకో మామజమవ్యయమ్ ।। 25 ।।",
   "meaning": "న-అహం-ప్రకాశః — నేను కనిపించను;\nసర్వస్య — అందరికీ;\nయోగ-మాయా — భగవంతుని మహోన్నత (దివ్య) శక్తి;\nసమావృతః — కప్పివేసి;\nమూఢః — మూర్ఖులు;\nఅయం — ఈ యొక్క;\nన — కాదు;\nఅభిజానాతి — తెలుసుకోవటం;\nలోకః — జనులు;\nమాం — నన్ను;\nఅజమ్ — పుట్టుకలేని వాడను;\nఅవ్యయం — మార్పుచెందని.",
   "tran": "BG 7.25: నా యోగమాయా శక్తి ద్వారా కప్పబడి ఉన్న నేను అందరికీ వ్యక్తమవ్వను. కాబట్టి జ్ఞానము లేని వారు నేను పుట్టుక లేని వాడినని మరియు మార్పుచెందని వాడినని తెలుసుకోలేరు."
 },
 {
   "id":"#26","value":"26","name":"వేదాహం సమతీతాని వర్తమానాని చార్జున ।\nభవిష్యాణి చ భూతాని మాం తు వేద న కశ్చన ।। 26 ।।",
   "meaning": "వేద — తెలుసును;\nఅహం — నేను (నాకు);\nసమతీతాని — జరిగిపోయిన (భూతకాలం);\nవర్తమానాని — ప్రస్తుతం జరుగుతున్న (వర్తమాన కాలం);\nచ — మరియు;\nఅర్జున — అర్జునా;\nభవిష్యాణి — జరగబోయే (భవిష్యత్ కాలం);\nచ — మరియు;\nభూతాని — సమస్త ప్రాణులు;\nమాం — నన్ను;\nతు — కానీ;\nవేద — తెలుసుకొనుట;\nన కశ్చన — ఎవరూ లేరు.",
   "tran": "BG 7.26: అర్జునా! నాకు భూత వర్తమాన భవిష్యత్తు అంతా తెలుసు మరియు సమస్త ప్రాణులు అన్నీ తెలుసు;\nకానీ నేను ఎవరికీ తెలియదు."
 },
 {
   "id":"#27","value":"27","name":"ఇచ్ఛాద్వేషసముత్థేన ద్వందమోహేన భారత ।\nసర్వభూతాని సమ్మోహం సర్గే యాంతి పరంతప ।। 27 ।।",
   "meaning": "ఇచ్ఛా— ఇష్టము (కోరిక);\nద్వేషా — ద్వేషము;\nసముత్థేన — ఉద్భవించును;\nద్వంద్వ — ద్వంద్వముల;\nమోహేన — భ్రాంతి నుండి;\nభారత — అర్జునా ఓ భరత వంశస్తుడా;\nసర్వ — అన్నీ;\nభూతాని — ప్రాణులు;\nసమ్మోహం — మోహము(భ్రమ) లోనికి;\nసర్గే — పుట్టుక నుండి;\nయాంతి — ప్రవేశించెదరు;\nపరంతప — శత్రువులను జయించేవాడా.",
   "tran": "BG 7.27: ఓ భరత వంశస్తుడా - రాగ ద్వేషములనే ద్వందములు మోహము (భ్రాంతి) నుండే పుట్టుచున్నవి. ఓ శత్రువులను జయించేవాడా ఈ భౌతిక జగత్తులో ఉన్న ప్రతి ప్రాణి కూడా పుట్టుక నుండే వీటిచే భ్రమింపజేయ బడుచున్నది."
 },
 {
   "id":"#28","value":"28","name":"యేషాం త్వంతగతం పాపం జనానాం పుణ్యకర్మణామ్ ।\nతే ద్వంద్వమోహనిర్ముక్తా భజంతే మాం దృఢవ్రతాః ।। 28 ।।",
   "meaning": "యేషాం — ఎవరివైతే;\nతు — కానీ;\nఅంత-గతం — పూర్తిగా నశించిపోయి;\nపాపం — పాపములు;\nజనానాం — జనులకు;\nపుణ్య కర్మణాం — పుణ్య కార్యములు;\nతే — వారు;\nద్వంద్వ — ద్వంద్వముల;\nమోహ — మాయ;\nనిర్ముక్తః — విముక్తి నొంది;\nభజంతే — పూజింతురు;\nమాం — నన్ను;\nదృఢ-వ్రతాః — ధృఢ సంకల్పముతో.",
   "tran": "BG 7.28: పుణ్య కార్యములు ఆచరించుటచే ఎవరి పాపములు అయితే పూర్తిగా నశించిపోయినవో వారు ఈ ద్వంద్వముల మోహము నుండి విముక్తి పొందుతారు. అటువంటి వారు నన్ను ధృడ సంకల్పము తో పూజిస్తారు."
 },
 {
   "id":"#29","value":"29","name":"జరామరణమోక్షాయ మామాశ్రిత్య యతంతి యే ।\nతే బ్రహ్మ తద్విదుః కృత్స్నమధ్యాత్మం కర్మ చాఖిలమ్ ।। 29 ।।",
   "meaning": "జరా — ముసలితనము నుండి;\nమరణ — మరియు మృత్యువు;\nమోక్షాయ — విముక్తి కోసము;\nమాం — నన్ను;\nఆశ్రిత్య — ఆశ్రయించినవారు;\nయతంతి — పరిశ్రమించెదరు;\nయే — ఎవరైతే;\nతే — వారు;\nబ్రహ్మ — బ్రహ్మన్;\nతత్ — అది;\nవిదుః — తెలుసుకొనుట;\nకృత్స్నం — సర్వమూ;\nఅధ్యాత్మం — ఆత్మ (తమని తాము);\nకర్మ — కర్మ;\nచ — మరియు;\nఅఖిలం — సమస్తము.",
   "tran": "BG 7.29: ముసలితనము మరియు మరణము నుండి విముక్తి పొందటానికి పరిశ్రమిస్తూ నన్ను ఆశ్రయించిన వారు బ్రహ్మంను తమ ఆత్మ తత్త్వమును సమస్త కర్మ క్షేత్రమును తెలుసుకుంటారు."
 },
 {
   "id":"#30","value":"30","name":"సాధిభూతాధిదైవం మాం సాధియజ్ఞం చ యే విదుః ।\nప్రయాణకాలేఽపి చ మాం తే విదుర్యుక్తచేతసః ।। 30 ।।",
   "meaning": "స-అధిభూత — సమస్త పదార్థ క్షేత్రానికీ పాలకుడు;\nఅధిదైవం — దేవతల పరిపాలకుడు;\nమాం — నాకు;\nస-అధియజ్ఞం — సర్వ యజ్ఞములకు ఈశ్వరుడు;\nచ — మరియు;\nయే — ఎవరైతే;\nవిదుః — తెలుసుకుంటారో;\nప్రయాణ — మరణ;\nకాలే — సమయంలో;\nఅపి — కూడా;\nచ — మరియు;\nమాం — నన్ను;\nతే — వారు;\nవిదుః — తెలుసుకుంటారు;\nయుక్త-చేతసః — నా యందే స్థితమై ఉండి.",
   "tran": "BG 7.30: సమస్త అధిభూత (పదార్థ క్షేత్రము) అధిదైవ (దేవతలు) మరియు అధియజ్ఞము (యజ్ఞములకు ఈశ్వరుడు) లకు అధిపతిని నేనే అని తెలుసుకున్న జ్ఞానోదయమయిన జీవాత్మలు మరణ సమయంలో కూడా పూర్తిగా నా యందే స్థితమై ఉంటారు."
 }
]

})
})
module.exports=Router7;
