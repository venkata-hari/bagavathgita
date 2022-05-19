const express=require('express')
const bg=express.Router()
bg.get('',async(req,res)=>{
  res.render('bg',{
    temp:[
      {"name":"1.అర్జున విషాద యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter1","href":"/Chapter1"},
      {"name":"2.సాంఖ్య యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter2","href":"/Chapter2"},
      {"name":"3.కర్మ యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter3","href":"/Chapter3"},
      {"name":"4.జ్ఞాన, కర్మ, సన్న్యాస యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter4","href":"/Chapter4"},
      {"name":"5.కర్మ సన్యాస యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter5","href":"/Chapter5"},
      {"name":"6.ధ్యాన యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter6","href":"/Chapter6"},
      {"name":"7.జ్ఞాన విజ్ఞాన యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter7","href":"/Chapter7"},
      {"name":"8.అక్షర బ్రహ్మ యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter8","href":"/Chapter8"},
      {"name":"9.రాజ విద్యా యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter9","href":"/Chapter9"},
      {"name":"10.విభూతి యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter10","href":"/Chapter10"},
      {"name":"11.విశ్వరూపసందర్శన యోగం","id":"Open","id2":"Description","href2":"/te_chapters#Chapter11","href":"/Chapter11"},
      {"name":"12.భక్తి యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter12","href":"/Chapter12"},
      {"name":"13.క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter13","href":"/Chapter13"},
      {"name":"14.గుణత్రయ విభాగ యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter14","href":"/Chapter14"},
      {"name":"15.పురుషోత్తమ యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter15","href":"/Chapter15"},
      {"name":"16.దైవాసుర సంపద్విభాగ యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter16","href":"/Chapter16"},
      {"name":"17.శ్రద్ధా త్రయ విభాగ యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter17","href":"/Chapter17"},
      {"name":"18.మోక్ష సన్యాస యోగము","id":"Open","id2":"Description","href2":"/te_chapters#Chapter18","href":"/Chapter18"}]


})
})
module.exports=bg;
