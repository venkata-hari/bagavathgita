const express=require('express')
const Router5=express.Router()
Router5.get('',async(req,res)=>{
  res.render('chapter5',{
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
        "id": "#1",
        "value": "1",
        "name":"అర్జున ఉవాచ ।\nసన్న్యాసం కర్మణాం కృష్ణ పునర్యోగం చ శంససి ।\nయఛ్చ్రేయ ఏతయోరేకం తన్మే బ్రూహి సునిశ్చితమ్ ।। 1 ।।",
        "meaning": "అర్జున ఉవాచ — అర్జునుడు పలికెను;\nసన్న్యాసం — సన్యాసము;\nకర్మణాం — కర్మల యొక్క;\nకృష్ణ — శ్రీ కృష్ణ;\nపునః — మరల;\nయోగం — కర్మ యోగ గురించి;\nచ — మరియు;\nశంససి — ప్రశంసించావు;\nయత్ — ఏదైతే;\nశ్రేయః — ఎక్కువ శ్రేయస్కరమో;\nఏతయో — ఈ రెంటిలో;\nఏకం — ఒకటి;\nతత్ — అది;\nమే — నాకు;\nబ్రూహి — దయచేసి చెప్పుము;\nసు-నిశ్చితమ్ — నిర్ణయాత్మకముగా.",
        "tran": "BG 5.1:అర్జునుడు అన్నాడు : ఓ శ్రీ కృష్ణా, నీవు కర్మ సన్యాసమును (పనులను త్యజించుట) ప్రశంసించావు మరియు కర్మ యోగమును (భక్తితో పనిచేయుట) కూడా చేయమన్నావు. ఈ రెంటిలో ఏది శ్రేయస్కరమో ఖచ్చితముగా తేల్చి చెప్పుము.",

      },
      {
        "id": "#2",
        "value": "2",
        "name":"శ్రీ భగవానువాచ ।\nసన్యాసః కర్మయోగశ్చ నిఃశ్రేయసకరావుభౌ ।\nతయోస్తు కర్మసంన్యాసాత్కర్మయోగో విశిష్యతే ।। 2 ।।",
        "meaning": "శ్రీ భగవానువాచ — భగవంతుడు ఇలా పలికెను;\nసన్యాసః — సన్యాసము;\nకర్మ-యోగః — భక్తితో పని చేయటము;\nచ — మరియు;\nనిఃశ్రేయస-కరౌ — అత్యున్నత లక్ష్యం వైపు తీసుకెళ్లును;\nఉభౌ — రెండూ;\nతయో — ఈ రెంటిలో;\nతు — కానీ;\nకర్మ-సన్యాసాత్ — కర్మ సన్యాసము కంటే;\nకర్మ-యోగః — భక్తి తో పనిచేయటం;\nవిషిశ్యతే — ఉన్నతమైనది.",
        "tran": "BG 5.2:భగవానుడు పలికెను: కర్మ సన్యాస (పనులను త్యజించుట) మార్గము మరియు కర్మ యోగ (భక్తి తో పనిచేయుట) మార్గము రెండూ సర్వోన్నత లక్ష్యం వైపు దారి తీస్తాయి. కానీ, కర్మ యోగము అనేది కర్మ సన్యాసము కంటే శ్రేష్ఠమైనది.",

      },
      {
        "id": "#3",
        "value": "3",
        "name":"జ్ఞేయః స నిత్యసంన్యాసీ యో న ద్వేష్టి న కాంక్షతి ।\nనిర్ద్వందో హి మహాబాహో సుఖం బంధాత్ప్రముచ్యతే ।। 3 ।।",
        "meaning": "జ్ఞేయః — పరిగణించవలెను;\nసః — అతను;\nనిత్య — ఎల్లప్పుడూ;\nసంన్యాసీ — సన్యాస దీక్ష ను ఆచరిస్తూ;\nయః — ఎవరైతే;\nన, ద్వేష్టి — దేనినీ ద్వేషింపక;\nన, కాంక్షతి — దేనినీ ఆశించక;\nనిర్ద్వంద్వః — అన్ని ద్వందములకు అతీతంగా;\nహి — నిజముగా;\nమహా-బాహో — గొప్ప బాహువులు కలవాడా;\nసుఖం — సునాయాసముగానే;\nబంధాత్ — బంధము నుండి;\nప్రముచ్యతే — విముక్తి చేయబడును.",
        "tran": "BG 5.3:దేనినీ ద్వేషింపక, దేనినీ ఆశించక ఉన్న కర్మ యోగులను నిత్య సన్యాసులుగా తెలుసుకొనవలెను. అన్ని రకాల ద్వందములకు అతీతంగా ఉండి, వారు భౌతిక బంధాల నుండి సునాయాసముగా విముక్తులవుతారు.",

      },
      {
        "id": "#4",
        "value":"4",
        "name":"సాంఖ్యయోగౌ పృథగ్బాలాః ప్రవదంతి న పండితాః ।\nఏకమప్యాస్థితః సమ్యక్ ఉభయోర్విందతే ఫలమ్ ।। 4 ।।",
        "meaning": "సాంఖ్య — కర్మ సన్యాసము;\nయోగౌ — కర్మ యోగము;\nపృథక్ — వేరువేరు;\nబాలాః — అవివేకులు;\nప్రవదంతి, న — అనరు;\nపండితాః — పండితులు;\nఏకం — ఒక్క దానిలో;\nఅపి — అయినా;\nఆస్థితః — స్థితులై ఉండి;\nసమ్యక్ — సంపూర్ణముగా;\nఉభయో — రెంటి యొక్క;\nవిందతే — పొందుతారు;\nఫలం — ఫలమును.",
        "tran": "BG 5.4:అజ్ఞానులు మాత్రమే సాంఖ్యము (కర్మలను త్యజించుట లేదా కర్మ సన్యాసము) మరియు కర్మ యోగము (భక్తి తో పని చేయటము) భిన్నమైనవి అని చెప్తారు. ఈ రెంటిలో ఏ ఒక్క మార్గమును అవలంబించినా ఈ రెండింటి ఫలమును పొందవచ్చు అని యదార్థముగా తెలిసినవారు చెప్తారు.",

      },
      {
        "id": "#5",
        "value": "5",
        "name":"యత్సాంఖ్యై: ప్రాప్యతే స్థానం తద్యోగైరపి గమ్యతే ।\nఏకం సాఖ్యం చ యోగం చ యః పశ్యతి స పశ్యతి ।। 5 ।।",
        "meaning": "యత్ — ఏదైతే;\nసాంఖ్యైః — కర్మ సన్యాసము ద్వారా;\nప్రాప్యతే — పొందబడునో;\nస్థానం — స్థానము;\nతత్ — అది;\nయోగైః — భక్తితో పని చేయటం ద్వారా;\nఆపి — కూడా;\nగమ్యతే — పొందవచ్చు;\nఏకం — ఒకటే;\nసాంఖ్యం — కర్మ సన్యాసము;\nచ — మరియు;\nయోగం — కర్మ యోగము;\nచ — మరియు;\nయః — ఎవరైతే;\nపశ్యతి — చూస్తారో;\nసః — ఆ వ్యకి;\nపశ్యతి — నిజముగా చూచినట్టు.",
        "tran": "BG 5.5:కర్మ సన్యాసము ద్వారా పొందగలిగే అత్యున్నత స్థితిని భక్తి తో కర్మలను ఆచరించటం ద్వారా కూడా పొందవచ్చు. కాబట్టి, కర్మ సన్యాసము మరియు కర్మ యోగము ఒక్కటే అని చూసినవాడే నిజముగా ఉన్నదున్నట్టుగా చూసినట్టు.",

      },
      {
        "id": "#6",
        "value": "6",
        "name":"సంన్యాసస్తు మహాబాహో దుఃఖమాప్తుమయోగతః ।\nయోగయుక్తో మునిర్బ్రహ్మా నచిరేణాధిగచ్ఛతి ।। 6 ।।",
        "meaning": "సన్యాసః — సన్యాసము;\nతు — కానీ;\nమహా-బాహో — గొప్ప బాహువులు కలవాడా;\nదుఃఖమ్ — దుఃఖము;\nఆప్తుమ్ — పొందును;\nఅయోగతః — కర్మ యోగము లేకుండా;\nయోగ-యుక్తః — కర్మ యోగములో ప్రవీణుడు;\nమునిః — ముని;\nబ్రహ్మ — బ్రహ్మన్;\nన చిరేణ — త్వరితముగా ;\nఅధిగచ్ఛతి — చేరును.",
        "tran": "BG 5.6:భక్తి యుక్తముగా పని చేయకుండా (కర్మ యోగము) పరిపూర్ణ కర్మ సన్యాసము ను చేరుకొనుట చాలా కష్టము, ఓ గొప్ప బాహువులు కలవాడా, కానీ, కర్మ యోగములో నిష్ణాతుడైన ముని శీఘ్రముగా పరమాత్మ ను పొందును.",

      },
      {
        "id": "#7",
        "value": "7",
        "name":"యోగయుక్తో విశుద్ధాత్మా విజితాత్మా జితేంద్రియః ।\nసర్వభూతాత్మభూతాత్మా కుర్వన్నపి న లిప్యతే ।। 7 ।।",
        "meaning": "యోగ-యుక్తః — మనస్సు ద్వారా భగవంతునితో ఏకమై;\nవిశుద్ధ-ఆత్మా — పవిత్రమైన బుద్ధి తో;\nవిజిత-ఆత్మా — మనస్సుని జయించినవారు;\nజిత-ఇంద్రియః — ఇంద్రియములను జయించినవారు;\nసర్వ-భూత-ఆత్మ-భూత-ఆత్మా — అన్ని ఆత్మల పరమాత్మ ను ప్రతి ప్రాణిలో దర్శిస్తూ;\nకుర్వన్ — (కర్మలను) చేస్తూ;\nఅపి — కూడా;\nన, లిప్యతే — చిక్కుకొనరు.",
        "tran": "BG 5.7:పరిశుద్ధ మైన అంతఃకరణ కలిగి, ఇంద్రియ-మనస్సులను నియంత్రణ చేసే కర్మ యోగులు, ప్రతి ప్రాణిలో ఆత్మల పరమాత్మను దర్శిస్తారు. అన్ని రకాల పనులు చేస్తూనే ఉన్నా వారు కర్మబంధాలలో లో చిక్కుకోరు.",

      },
      {
        "id": "#8",
        "value": "8",
        "name":"నైవ కించిత్ కరోమీతి యుక్తో మన్యేత తత్త్వవిత్\nపశ్యన్ శృణ్వన్ స్పృశన్ జిఘ్రన్నశ్నన్ గచ్ఛన్ స్వపన్ శ్వసన్ ।। 8 ।।",
        "meaning": "న — కాదు/లేదు;\nఏవ — నిజముగా;\nకించిత్ — ఏ కొంచము కూడా;\nకరోమి — నేను చేస్తున్నాను;\nఇతి — అని;\nయుక్తః — కర్మ యోగములో స్థితులైన వారు;\nమన్యేత — భావించును;\nతత్త్వ-విత్ — సత్యమును ఎరిగినవాడు;\nపశ్యన్ — చూచుతూ;\nశృణ్వన్ — వినుచూ;\nస్పృశన్ — స్పర్శిస్తూ;\nజిఘ్రన్ — వాసన చూస్తూ;\nఅశ్నన్ — తినుచూ;\nగచ్ఛన్ — కదులుతూ;\nస్వపన్ — నిద్రపోతూ;\nశ్వసన్ — శ్వాస తీసుకుంటూ;\n",
        "tran": "BG 5.8-9:కర్మ యోగములో ధృఢ సంకల్పంతో స్థితులై ఉన్న వారు - చూస్తున్నప్పుడూ, వింటున్నప్పుడూ, స్పృశిస్తున్నప్పుడు, వాసన చూస్తున్నప్పుడూ, కదులుతున్నప్పుడూ, నిద్రిస్తున్నప్పుడూ, శ్వాస క్రియలప్పుడూ, మాట్లాడుతున్నప్పుడూ, విసర్జిస్తున్నప్పుడూ, తీసుకుంటున్నప్పుడూ, కన్నులు తెరుస్తున్నప్పుడూ, మూస్తున్నప్పుడూ - చేసేది నేను కాదు అన్ని ఎల్లప్పుడూ భావింతురు. ప్రాకృతిక ఇంద్రియములే వాటి వాటి విషయములలో కదులుతున్నట్లు, దివ్య ఆధ్యాత్మిక జ్ఞానం తో గ్రహిస్తారు.",

      },
      {
        "id": "#9",
        "value": "9",
        "name":"ప్రలపన్ విసృజన్ గృహ్ణన్నున్మిషన్ నిమిషన్నపి ।\nఇంద్రియాణీంద్రియార్థేషు వర్తంత ఇతి ధారయన్ ।। 9 ।।",
        "meaning": "ప్రలపన్ — మాట్లాడుతూ;\nవిసృజన్ — త్యజిస్తూ;\nగృహ్ణన్ — స్వీకరిస్తూ;\nఉన్మిషన్ — కనులను తెరుస్తూ;\nనిమిషన్ — కనులు మూస్తూ;\nఅపి — అయినా;\nఇంద్రియాణి — ఇంద్రియములు;\nఇంద్రియార్థేషు — ఇంద్రియ విషయముల తో;\nవర్తంత — కదులుతున్నాయి;\nఇతి — ఈ విధంగా;\nధారయన్ — భావించును.",
        "tran": "BG 5.8-9:కర్మ యోగములో ధృఢ సంకల్పంతో స్థితులై ఉన్న వారు - చూస్తున్నప్పుడూ, వింటున్నప్పుడూ, స్పృశిస్తున్నప్పుడు, వాసన చూస్తున్నప్పుడూ, కదులుతున్నప్పుడూ, నిద్రిస్తున్నప్పుడూ, శ్వాస క్రియలప్పుడూ, మాట్లాడుతున్నప్పుడూ, విసర్జిస్తున్నప్పుడూ, తీసుకుంటున్నప్పుడూ, కన్నులు తెరుస్తున్నప్పుడూ, మూస్తున్నప్పుడూ - చేసేది నేను కాదు అన్ని ఎల్లప్పుడూ భావింతురు. ప్రాకృతిక ఇంద్రియములే వాటి వాటి విషయములలో కదులుతున్నట్లు, దివ్య ఆధ్యాత్మిక జ్ఞానం తో గ్రహిస్తారు.",

      },
      {
        "id": "#10",
        "value": "10",
        "name":"బ్రహ్మణ్యాధాయ కర్మాణి సంగం త్యక్త్వా కరోతి యః ।\nలిప్యతే న స పాపేన పద్మపత్రమివాంభసా ।। 10 ।।",
        "meaning": "బ్రహ్మణి — భగవంతునుకి;\nఆధాయ — సమర్పిస్తూ;\nకర్మాణి — సర్వ కర్మలు;\nసంగం — మమకారం/అనుబంధం;\nత్యక్త్వా — త్యజించి;\nకరోతి — చేస్తారో;\nయః — ఎవరైతే;\nలిప్యతే, న — అంటదు (ప్రభావితులు కారు);\nసః — ఆ వ్యక్తి;\nపాపేన — పాపము చేత;\nపద్మ-పత్రమ్ — తామర ఆకు;\nఇవ — లాగా;\nఅంభసా — నీటి చేత.",
        "tran": "BG 5.10:సమస్త మమకార ఆసక్తులు త్యజించి, భగవంతునికే తమ అన్ని కర్మలు అంకితం చేసేవారు, తామరాకు నీటిచే తడి అవ్వనట్టు, పాపముచే తాకబడరు.",

      },
      {
        "id": "#11",
        "value": "11",
        "name":"కాయేన మనసా బుద్ధ్యా కేవలైరింద్రియైరపి ।\nయోగినః కర్మ కుర్వంతి సంగం త్యక్త్వాత్మశుద్ధయే ।। 11 ।।",
        "meaning": "కాయేన — శరీరంతో;\nమనసా — మనస్సుతో;\nబుద్ధ్యా — బుద్ధి తో;\nకేవలైః — కేవలము;\nఇంద్రియైః — ఇంద్రియములతో;\nఅపి — కూడా;\nయోగినః — యోగులు;\nకర్మ — కర్మలు;\nకుర్వంతి — చేయుదురు;\nసంగం — సంగము (మమకార ఆసక్తులు);\nత్యక్త్వా — విడిచిపెట్టి;\nఆత్మ— ఆత్మ;\nశుద్ధయే — శుద్ధి కొరకు.",
        "tran": "BG 5.11:యోగులు, మమకారాసక్తిని విడిచిపెట్టి, కేవలం ఆత్మ శుద్ధి కోసం మాత్రమే, శరీరము, మనస్సు, ఇంద్రియములు, మనస్సు లతో కర్మలను ఆచరిస్తూ ఉంటారు.",

      },
      {
        "id": "#12",
        "value": "12",
        "name":"యుక్తః కర్మఫలం త్యక్త్వా శాంతిమాప్నోతి నైష్ఠికీమ్ ।\nఅయుక్తః కామకారేణ ఫలే సక్తో నిబధ్యతే ।। 12 ।।",
        "meaning": "యుక్తః — అంతఃకరణ లో భగవంతునితో ఏకమై ఉన్నవాడు;\nకర్మ-ఫలం — అన్ని పనుల ఫలితములను, ఫలములను;\nత్యక్త్వా — త్యజించి;\nశాంతిం — శాంతి;\nఆప్నోతి — పొందును;\nనైష్ఠికీమ్ — శాశ్వతమైన;\nఅయుక్తః — భగవంతునితో ఏకమై లేని వాడు;\nకామ-కారేణ — కోరికల చే ప్రభావితుడై;\nఫలే — ఫలముల యందు;\nసక్తః — ఆసక్తి/మమకారంతో;\nనిబధ్యతే — చిక్కుకొనును.",
        "tran": "BG 5.12:అన్ని క్రియాకలాపముల ఫలములను భగవంతునికే అర్పితము చేసి, కర్మ యోగులు శాశ్వతమైన శాంతిని పొందుతారు. అదే సమయంలో, తమ కామముచే (కోరికలచే) ప్రేరేపింపబడి, స్వార్థ ప్రయోజనం కోసం పని చేసే వారు, కర్మ బంధములలో చిక్కుకుంటారు ఎందుకంటే వారు కర్మ ఫలములపై ఆసక్తి కలిగి ఉంటారు.",

      },
      {
        "id": "#13",
        "value": "13",
        "name":"సర్వకర్మాణి మనసా సన్న్యస్యాస్తే సుఖం వశీ ।\nనవద్వారే పురే దేహీ నైవ కుర్వన్న కారయన్ ।। 13 ।।",
        "meaning": "సర్వ — సమస్తమైన;\nకర్మాణి — కర్మలు;\nమనసా — మనస్సు చే;\nసన్న్యస్య — త్యజించి;\nఅస్తే — ఉండును;\nసుఖం — సుఖముగా;\nవశీ — ఆత్మ నిగ్రహం కలవారు;\nనవ-ద్వారే — తొమ్మిది ద్వారములు కల;\nపురే — నగరములో;\nదేహీ — దేహములొఉన్న జీవాత్మ;\nన — కాదు;\nఏవ — నిజముగా;\nకుర్వన్ — చేయునది;\nన — కాదు;\nకారయన్ — కారణము కాదు.",
        "tran": "BG 5.13:ఆత్మ నిగ్రహము, వైరాగ్యము ఉన్న జీవాత్మలు, తాము దేనికీ కర్త కాదని, దేనికీ కారణము కాదని తెలుసుకొని ఈ యొక్క తొమ్మిది ద్వారములు కల నగరములో సంతోషంగా ఉంటారు.",

      },
      {
        "id": "#14",
        "value": "14",
        "name":"న కర్తృత్వం న కర్మాణి లోకస్య సృజతి ప్రభుః ।\nన కర్మఫలసంయోగం స్వభావస్తు ప్రవర్తతే ।। 14 ।।",
        "meaning": "న — కాదు;\nకర్తృత్వం — కర్తుత్వ భావన;\n(చేసేది నేనే అన్న అహంకారము);\nన — కాదు;\nకర్మాణి — కర్మలు;\nలోకస్య — జనుల యొక్క;\nసృజతి — సృష్టించును;\nప్రభుః — భగవంతుడు;\nన — కాదు;\nకర్మ-ఫల — కర్మ ఫలముల;\nసంయోగం — కలయిక;\nస్వభావః — వ్యక్తి యొక్క స్వభావము;\nతు — కానీ;\nప్రవర్తతే — ప్రవర్తిల్లును.",
        "tran": "BG 5.14:కర్తుత్వ భావన కానీ, కర్మల స్వభావం కానీ భగవంతునిచే సృష్టించబడవు. కర్మ ఫలములను సృష్టించేది కూడా ఆయన కాదు. భౌతిక ప్రకృతి గుణములే వీటన్నిటిని ప్రవర్తిల్లచేయును.",

      },
      {
        "id": "#15",
        "value": "15",
        "name":"నాదత్తే కస్యచిత్పాపం న చైవ సుకృతం విభుః ।\nఅజ్ఞానేనావృతం జ్ఞానం తేన ముహ్యంతి జంతవః ।। 15 ।।",
        "meaning": "న, ఆదత్తే — స్వీకరించడు;\nకస్యచిత్ — ఏ ఒక్కని యొక్క;\nపాపం — పాపము;\nన — కాదు;\nచ — మరియు;\nఏవ — తప్పకుండా;\nసు-కృతం — పుణ్య కర్మలను;\nవిభుః — సర్వవ్యాపియైన భగవంతుడు;\nఅజ్ఞానేన — అజ్ఞానముచే;\nఆవృతం — ఆవరింపబడి;\nజ్ఞానం — వివేకము/జ్ఞానము;\nతేన — దాని చే;\nముహ్యంతి — మోహితులై భ్రమ కు లోనగుచున్నారు;\nజంతవః — ప్రాణులు.",
        "tran": "BG 5.15:సర్వాంతర్యామి అయిన భగవంతుడు, ఏ ఒక్కని పాపపు లేదా పుణ్య కర్మల యందు కూడా పాలు పంచుకోడు. జీవుల వివేకము అజ్ఞానముచే కప్పబడిపోవటం వలన వారు భ్రమకు లోనగుతున్నారు.",

      },
      {
        "id": "#16",
        "value": "16",
        "name":"జ్ఞానేన తు తదజ్ఞానం యేషాం నాశితమాత్మనః ।\nతేషామాదిత్యవత్ జ్ఞానం ప్రకాశయతి తత్పరమ్ ।। 16 ।।",
        "meaning": "జ్ఞానేన — దివ్య ఆధ్యాత్మిక జ్ఞానము చే;\nతు — కానీ;\nతత్ — అది;\nఅజ్ఞానం — అజ్ఞానము;\nయేషాం — ఎవరిదైతే;\nనాశితమ్ — నాశనం చేయబడునో;\nఆత్మనః — ఆత్మ యొక్క;\nతేషామ్ — వారికి;\nఆదిత్య-వత్ — సూర్యుని వలె;\nజ్ఞానం — జ్ఞానము;\nప్రకాశయతి — ప్రకాశించును;\nతత్ — అది;\nపరమ్ — పరమాత్మ తత్వము.",
        "tran": "BG 5.16:కానీ, ఎవరికైతే దివ్య ఆధ్యాత్మిక జ్ఞానముచే, ఆత్మ పట్ల అజ్ఞానం నాశనం చేయబడునో, వారికి, సూర్యుడు పగటి పూట అన్నింటినీ ప్రకాశింపచేసినట్టు, ఆ జ్ఞానము వారికి పరమాత్మను ప్రకాశింపచేయును.",

      },
      {
        "id": "#17",
        "value": "17",
        "name":"తద్బుద్ధయస్తదాత్మానః తన్నిష్ఠాస్తత్పరాయణాః ।\nగచ్ఛంత్యపునరావృత్తిం జ్ఞాననిర్ధూతకల్మషాః ।। 17 ।।",
        "meaning": "తత్-బుద్ధయః — బుద్ధి ఈశ్వర పరం అయినవారు;\nతత్-ఆత్మనః — హృదయము (మనస్సు, బుద్ధి) భగవంతుని యందే నిమగ్నమైన వారు;\nతత్-నిష్ఠాః — భగవంతుని యందే ధృఢ విశ్వాసం కలవారు;\nతత్-పరాయణాః — భగవంతుడే తమ ఆశ్రయము, లక్ష్యము అని శ్రమించు వారు;\nగచ్చంతి — చేరెదరు;\nఅపునః-ఆవృత్తిం — తిరిగి రాని;\nజ్ఞాన — జ్ఞానముచే;\nనిర్ధూత — నిర్మూలించబడి;\nకల్మషాః — పాపములు.",
        "tran": "BG 5.17:తమ బుద్ధి భగవంతుని యందే స్థితులైనవారు, సంపూర్ణముగా భగవంతుని యందే నిమగ్నమైన వారు, ఆయనే పరమ లక్ష్యమని ధృఢ విశ్వాసం కలవారు - వారి పాపములు జ్ఞాన కిరణాలచే నిర్మూలింపబడి, త్వరిత గతిన, మరలా తిరిగిరాని స్థితిని పొందుతారు.",

      },
      {
        "id": "#18",
        "value": "18",
        "name":"విద్యావినయసంపన్నే బ్రాహ్మణే గవి హస్తిని ।\nశుని చైవ శ్వపాకే చ పండితాః సమదర్శినః ।। 18 ।।",
        "meaning": "విద్యా — దివ్య ఆధ్యాత్మిక జ్ఞానము;\nవినయ — వినయము;\nసంపన్నే — కలిగి ఉన్న వారు;\nబ్రాహ్మణే — ఓ బ్రాహ్మణుడు;\nగవి — ఓ ఆవు;\nహస్తిని — ఓ ఏనుగు;\nశుని — ఓ కుక్క;\nచ — మరియు;\nఏవ — ఖచ్చితంగా;\nశ్వ-పాకే — ఓ చండాలుడు;\nచ — మరియు;\nపండితాః — పండితులు;\nసమ-దర్శినః — ఒకే దృష్టితో చూస్తారు.",
        "tran": "BG 5.18:నిజమైన పండితులు, దివ్య జ్ఞాన చక్షువులతో - ఓ బ్రాహ్మణుడిని, ఓ ఆవుని, ఓ ఏనుగుని, ఓ కుక్కని, ఓ చండాలుడిని సమ-దృష్టితో చూస్తారు.",

      },
      {
        "id": "#19",
        "value": "19",
        "name":"ఇహైవ తైర్జితః సర్గో యేషాం సామ్యే స్థితం మనః ।\nనిర్దోషం హి సమం బ్రహ్మ తస్మాద్ బ్రహ్మణి తే స్థితాః ।। 19 ।।",
        "meaning": "ఇహ-ఏవ — ఈ జన్మ లోనే;\nతైః — వారిచే;\nజితః — జయింపబడును;\nసర్గః — సృష్టి (జగత్తు);\nయేషాం — ఎవరైతే;\nసామ్యే — సమభావము నందు;\nస్థితం — ఉందురో;\nమనః — మనస్సు;\nనిర్దోషం — దోషరహితమై;\nహి — నిజముగా;\nసమం — సమ దృష్టి యందు;\nబ్రహ్మ — భగవంతుడు;\nతస్మాత్ — కాబట్టి ;\nబ్రహ్మణి — పరమ సత్యము నందు;\nతే — వారు;\nస్థితాః — స్థితులై ఉందురు.",
        "tran": "BG 5.19:సమదృష్టి యందు సంపూర్ణ మనస్సుతో స్థితులైనవారు, ఈ జన్మ లోనే జన్మ-మరణ చక్రమును జయిస్తారు. వారు భగవంతుని యొక్క దోషరహిత గుణములను కలిగిఉంటారు కాబట్టి పరమ సత్యము నందే స్థితులై ఉంటారు.",

      },
      {
        "id": "#20",
        "value": "20",
        "name":"న ప్రహృష్యేత్ ప్రియం ప్రాప్య నోద్విజేత్ ప్రాప్య చాప్రియమ్ ।\nస్థిరబుద్ధిరసమ్మూఢో బ్రహ్మవిద్ బ్రహ్మణి స్థితః ।। 20 ।।",
        "meaning": "న, ప్రహృష్యేత్ — పొంగిపోరు;\nప్రియం — ప్రియమైనది;\nప్రాప్య — పొందినప్పుడు;\nన, ఉద్విజేత్ — కలత నొందరు;\nప్రాప్య — పొందినప్పుడు;\nచ — మరియు;\nఅప్రియం — అప్రియమైనది;\nస్థిర-బుద్ధిః — నిశ్చలమైన బుద్ధి;\nఅసమ్మూఢాః — ధృఢం గా ఉండి (భ్రమకు లోనుకాక);\nబ్రహ్మ-విత్ — దివ్య జ్ఞానము పై గట్టి అవగాహాన తో;\nబ్రహ్మణి — భగవంతుని యందు;\nస్థితః — స్థితులై.",
        "tran": "BG 5.20:భగవంతుని యందే స్థితులై, దివ్య ఆధ్యాత్మిక జ్ఞానము నందు ధృడమైన అవగాహన కలిగి ఉండి మరియు భ్రమకు లోనుకాకుండా ఉన్నవారు, ప్రియమైనవి జరిగితే/లభిస్తే పొంగిపోరు లేదా ఏవేని అప్రియమైనవి జరిగితే క్రుంగిపోరు.",

      },
      {
        "id": "#21",
        "value": "21",
        "name":"బాహ్యస్పర్శేష్వసక్తాత్మా విందత్యాత్మని యత్సుఖమ్ ।\nస బ్రహ్మయోగయుక్తాత్మా సుఖమక్షయమశ్నుతే ।। 21 ।।",
        "meaning": "బాహ్య-స్పర్శేషు — బాహ్యమైన ఇంద్రియ సుఖము;\nఅసక్త-ఆత్మా — ఆసక్తి/మమకారం లేని వారు;\nవిందతి — తెలుసుకుంటారు;\nఆత్మని — ఆత్మ యందే;\nయత్ — ఏదైతే;\nసుఖమ్ — ఆనందము;\nసః — ఆ వ్యక్తి;\nబ్రహ్మ-యోగ-యుక్త-ఆత్మా — యోగం ద్వారా భగవంతునితో ఐక్యమై;\nసుఖం — సుఖము;\nఅక్షయం — తరిగిపోని;\nఅశ్నుతే — అనుభవించును.",
        "tran": "BG 5.21:బాహ్యమైన ఇంద్రియ సుఖాలపై మమకారాసక్తులు లేనివాడు, ఆత్మ యందే దివ్యానందాన్ని అనుభవిస్తాడు. యోగం ద్వారా భగవంతునితో ఐక్యమై, అంతులేని ఆనందాన్ని అనుభవిస్తారు.",

      },
      {
        "id": "#22",
        "value": "22",
        "name":"యే హి సంస్పర్శజా భోగా దుఃఖయోనయ ఏవ తే ।\nఆద్యంతవంతః కౌంతేయ న తేషు రమతే బుధః ।। 22 ।।",
        "meaning": "యే — ఏదైతే;\nహి — నిజముగా;\nసంస్పర్శ-జాః — ఇంద్రియ వస్తు-విషయముల సంపర్కం చే జనించిన;\nభోగాః — భోగములు;\nదుఃఖా — దుఖములు;\nయోనయః — మూలము;\nఏవ — నిజముగా;\nతే — వారు;\nఆద్య-అంతవంతః — మొదలు మరియు తుది కలిగిన;\nకౌంతేయ — అర్జునా, కుంతీ పుత్రుడా;\nన — ఎప్పటికీ కాదు;\nతేషు — వాటిలో;\nరమతే — రమించరు;\nబుధః — తెలివైనవారు.",
        "tran": "BG 5.22:ఇంద్రియ వస్తు-విషయ సంపర్కం వలన కలిగే భోగాలు, ప్రాపంచిక మనస్తత్వం ఉన్నవారికి ఆనందదాయకంగా అనిపించినా, అవి యథార్థముగా దుఃఖ హేతువులే. ఓ కుంతీ పుత్రుడా, ఇటువంటి సుఖాలకు ఒక ఆది-అంతం (మొదలు-చివర) ఉంటాయి, కాబట్టి జ్ఞానులు వీటి యందు రమించరు.",

      },
      {
        "id": "#23",
        "value": "23",
        "name":"శక్నోతీహైవ యః సోఢుం ప్రాక్శరీర విమోక్షణాత్ ।\nకామక్రోధోద్భవం వేగం స యుక్తః స సుఖీ నరః ।। 23 ।।",
        "meaning": "శక్నోతి — చేయగలడు;\nఇహ ఏవ — ఈ ప్రస్తుత శరీరం లోనే;\nయః — ఎవరైతే;\nసోఢుమ్ — నిగ్రహించి/తట్టుకోని;\nప్రాక్ — పూర్వమే;\nశరీర — శరీరము;\nవిమోక్షణాత్ — త్యజించుట;\nకామ — కోరిక;\nక్రోధ — కోపము;\nఉద్భవం — (నుండి) జనించిన;\nవేగం — ఉద్వేగమును;\nసః — ఆ వ్యక్తి;\nయుక్తః — యోగి;\nసః — ఆ వ్యక్తి;\nసుఖీ — సంతోషము కల;\nనరః — మనిషి.",
        "tran": "BG 5.23:ఈ శరీరమును విడిచి పెట్టక ముందే ఎవరైతే కామ-క్రోధ శక్తులను నియంత్రణ చేయగలరో వారు యోగులు మరియు వారు మాత్రమే నిజమైన సుఖసంతోషములు గలవారు.",

      },
      {
        "id": "#24",
        "value": "24",
        "name":"యోఽoతః సుఖోఽoతరారామః తథాంతర్జ్యోతిరేవ యః ।\nస యోగీ బ్రహ్మనిర్వాణం బ్రహ్మభూతోఽధిగచ్ఛతి ।। 24 ।।",
        "meaning": "యః — ఎవరైతే;\nఅంతః-సుఖాః — అంతరాత్మ యందు సుఖముగా ఉన్నవాడు;\nఅంతః-ఆరామః — తనయందే రమిస్తూ;\nతథా — అట్లే;\nఅంతః-జ్యోతి: — ఆంతరంగిక వెలుగు చే ప్రకాశిస్తూ;\nఏవ — నిజముగా;\nయః — ఎవరైతే;\nసః — వారు;\nయోగీ — యోగి;\nబ్రహ్మ-నిర్వాణం — భౌతిక జగత్తు నుండి విముక్తిని;\nబ్రహ్మ-భూతః — భగవంతుని తో ఏకమై;\nఅధిగచ్ఛతి — పొందును.",
        "tran": "BG 5.24:ఎవరైతే తమలో తాము ఆనందంగా (రమిస్తూ) ఉంటారో, లోనున్న పరమాత్మ యొక్క ఆనందాన్ని ఆస్వాదిస్తూ ఉండి, అంతర్గత జ్ఞాన వెలుగు చే ప్రకాశిస్తూ ఉంటారో, అటువంటి యోగులు, భగవంతునితో ఏకమై, భౌతిక ప్రాపంచిక అస్తిత్వము నుండి విముక్తులవుతారు.",

      },
      {
        "id": "#25",
        "value": "25",
        "name":"లభంతే బ్రహ్మనిర్వాణమ్ ఋషయః క్షీణకల్మషాః ।\nఛిన్నద్వైధా యతాత్మానః సర్వభూతహితే రతాః ।। 25 ।।",
        "meaning": "లభంతే — లభించును;\nబ్రహ్మ-నిర్వాణమ్ — భౌతిక జగత్తు నుండి విముక్తి;\nఋషయః — పవిత్రమైన వ్యక్తులు;\nక్షీణ-కల్మషాః — పాపములన్ని నాశనం అయినవారు;\nఛిన్న — నిర్మూలింపబడి;\nద్వైధాః — సందేహములు;\nయత-ఆత్మానః — ఎవరి మనస్సులు నిగ్రహింపబడినవో;\nసర్వ-భూత — సమస్త ప్రాణుల కోసము;\nహితే — సంక్షేమం కోసం;\nరతాః — పరితపించేవారు.",
        "tran": "BG 5.25:ఎవరి పాపములు నశించినవో, ఎవరి సందేహములన్నీ నిర్మూలింపబడినవో, ఎవరి మనస్సులు నియమబద్ధమైనవో, ఎవరైతే సమస్త ప్రాణుల సంక్షేమం కోసం నిమగ్నమవుతారో, అట్టి పవిత్రమైన వ్యక్తులు భౌతిక జగత్తు నుండి విముక్తి పొంది, భగవంతుడిని పొందుతారు.",

      },
      {
        "id": "#26",
        "value": "26",
        "name":"కామక్రోధవియుక్తానాం యతీనాం యతచేతసామ్ ।\nఅభితో బ్రహ్మనిర్వాణం వర్తతే విదితాత్మనామ్ ।। 26 ।।",
        "meaning": "కామ — కోరికలు;\nక్రోధ — కోపము;\nవియుక్తానం — విముక్తులైన వారు;\nయతీనాం — సాధువులు;\nయత-చేతసాం — ఆత్మజ్ఞానం పొంది, మనస్సుని నిగ్రహించిన వారు;\nఅభితః — అన్ని దిక్కులలో ;\nబ్రహ్మ — ఆధ్యాత్మిక;\nనిర్వాణం — భౌతిక అస్తిత్వం నుండి విముక్తి;\nవర్తతే — ఉండును;\nవిదిత-ఆత్మానం — ఆత్మ జ్ఞానం తెలుసుకున్నవారు.",
        "tran": "BG 5.26:నిరంతర ప్రయాస ద్వారా కామ-క్రోధముల నుండి బయట పడిన వారు, మనస్సుని నిగ్రహించిన వారు, ఆత్మ-జ్ఞానం లో ఉన్నవారు అయినటువంటి సన్యాసులకు ఇహ పర లోకాలలో భౌతిక అస్థిత్వం నుండి విముక్తి లభిస్తుంది.",

      },
      {
        "id": "#27",
        "value": "27",
        "name":"స్పర్శాన్ కృత్వా బహిర్బాహ్యాన్ చక్షుశ్చైవాంతరే భ్రువోః ।\nప్రాణాపానౌ సమౌ కృత్వా నాసాభ్యంతరచారిణౌ ।। 27 ।।",
        "meaning": "స్పర్శాన్ — ఇంద్రియ స్పర్శ సంపర్కం చే;\nకృత్వా — నిలిపి;\nబహిః — బయట;\nబాహ్యాన్ — బాహ్యమైన;\nచక్షుః — కళ్ళు;\nచ — మరియు;\nఏవ — తప్పకుండా;\nఅంతరే — మధ్యలో;\nభ్రువోః — కనుబొమల యొక్క;\nప్రాణ-అపానౌ — లోనికి వచ్చే, బయటకు వెళ్ళే గాలిని;(ప్రాణ-అపాన వాయువులను);\nసమౌ — సమానముగా;\nకృత్వా — నిలిపి;\nనాస-అభ్యంతర — నాసికా రంధ్రములలో;\nచారిణౌ — కదులుతున్న;\n",
        "tran": "BG 5.27:అన్నిబాహ్యమైన భోగ విషయముల తలంపులను త్యజించి, దృష్టి కను బొమల మధ్యే కేంద్రీకరించి, నాసికా రంధ్రములలో లోనికి వచ్చే, బయటకు వెళ్ళే గాలిని సమముగా నిలిపి, ఈ విధంగా ఇంద్రియములు, మనస్సు, బుద్ధిని నిగ్రహించి, కామ-క్రోధ-భయ రహితుడైన ముని సర్వదా మోక్ష స్థితి యందే వసించును.",

      },
      {
        "id": "#28",
        "value": "28",
        "name":"యతేంద్రియమనోబుద్ధిః మునిర్మోక్షపరాయణః ।\nవిగతేఛ్చాభయక్రోధో యః సదా ముక్త ఏవ సః ।। 28 ।।",
        "meaning": "యత — నియంత్రించి;\nఇంద్రియ — ఇంద్రియములు;\nమనః — మనస్సు;\nబుద్ధిః — బుద్ధి;\nమునిః — మునులు;\nమోక్ష — మోక్షము;\nపరాయణః — పరాయణులై;\nవిగత — త్యజించి;\nఇఛ్చా — కోరికలు;\nభయ — భయము;\nక్రోధః — కోపము;\nయః — ఎవరైతే;\nసదా — ఎల్లప్పుడూ;\nముక్తః — ముక్తి నొంది;\nఏవ — నిజముగా;\nసః — ఆ వ్యక్తి.",
        "tran": "BG 5.28:అన్నిబాహ్యమైన భోగ విషయముల తలంపులను త్యజించి, దృష్టి కను బొమల మధ్యే కేంద్రీకరించి, నాసికా రంధ్రములలో లోనికి వచ్చే, బయటకు వెళ్ళే గాలిని సమముగా నిలిపి, ఈ విధంగా ఇంద్రియములు, మనస్సు, బుద్ధిని నిగ్రహించి, కామ-క్రోధ-భయ రహితుడైన ముని సర్వదా మోక్ష స్థితి యందే వసించును.",

      },
      {
        "id": "#29",
        "value": "29",
        "name":"భోక్తారం యజ్ఞతపసాం సర్వలోకమహేశ్వరమ్ ।\nసుహృదం సర్వభూతానాం జ్ఞాత్వా మాం శాంతిమృచ్ఛతి ।। 29 ।।",
        "meaning": "భోక్తారం — భోక్త;\nయజ్ఞ — యజ్ఞములు;\nతపసాం — తపస్సులు;\nసర్వ-లోక — సమస్త లోకముల యొక్క;\nమహేశ్వరమ్ — సర్వోన్నత ప్రభువు;\nసు-హృదం — నిస్వార్ధ మిత్రుడు;\nసర్వ — సమస్త;\nభూతానాం — ప్రాణుల యొక్క;\nజ్ఞాత్వా — తెలుసుకొన్న పిదప;\nమాం — నన్ను (శ్రీ కృష్ణ పరమాత్మ);\nశాంతిం — శాంతి;\nఋచ్ఛతి — పొందును.",
        "tran": "BG 5.29:సమస్త యజ్ఞములకు, తపస్సులకు భోక్తని నేనే అని, సమస్త లోకములకు అధిపతిని అని మరియు సర్వ ప్రాణుల యొక్క నిస్వార్థ మిత్రుడను అని తెలుసుకొనిన పిదప, నా భక్తుడు శాంతిని పొందును.",

      }]

})
})
module.exports=Router5;
