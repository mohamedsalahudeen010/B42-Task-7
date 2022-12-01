//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02:initiate a request
request.open("GET","https://restcountries.com/v3.1/all");
//step 03 :sending the request
request.send();
//step 04 : once the data successfully loaded from the server
request.onload=function(){
  var res=request.response;
  var result=JSON.parse(res)
  console.log(result)
  result.forEach(Element=>console.log(`country name: ${Element.name.common} | capital: ${Element.capital} | flag: ${Element.flags.png} |`));
  }

  /* RESULT:
foreach.js:10 country name: Mauritania | capital: Nouakchott | flag: https://flagcdn.com/w320/mr.png |
foreach.js:10 country name: Aruba | capital: Oranjestad | flag: https://flagcdn.com/w320/aw.png |
foreach.js:10 country name: Argentina | capital: Buenos Aires | flag: https://flagcdn.com/w320/ar.png |
foreach.js:10 country name: Sweden | capital: Stockholm | flag: https://flagcdn.com/w320/se.png |
foreach.js:10 country name: Maldives | capital: Malé | flag: https://flagcdn.com/w320/mv.png |
foreach.js:10 country name: Mexico | capital: Mexico City | flag: https://flagcdn.com/w320/mx.png |
foreach.js:10 country name: New Zealand | capital: Wellington | flag: https://flagcdn.com/w320/nz.png |
foreach.js:10 country name: Ecuador | capital: Quito | flag: https://flagcdn.com/w320/ec.png |
foreach.js:10 country name: Wallis and Futuna | capital: Mata-Utu | flag: https://flagcdn.com/w320/wf.png |
foreach.js:10 country name: Åland Islands | capital: Mariehamn | flag: https://flagcdn.com/w320/ax.png |
foreach.js:10 country name: Montenegro | capital: Podgorica | flag: https://flagcdn.com/w320/me.png |
foreach.js:10 country name: Pakistan | capital: Islamabad | flag: https://flagcdn.com/w320/pk.png |
foreach.js:10 country name: Pitcairn Islands | capital: Adamstown | flag: https://flagcdn.com/w320/pn.png |
foreach.js:10 country name: Zambia | capital: Lusaka | flag: https://flagcdn.com/w320/zm.png |
foreach.js:10 country name: Seychelles | capital: Victoria | flag: https://flagcdn.com/w320/sc.png |
foreach.js:10 country name: Malaysia | capital: Kuala Lumpur | flag: https://flagcdn.com/w320/my.png |
foreach.js:10 country name: Norway | capital: Oslo | flag: https://flagcdn.com/w320/no.png |
foreach.js:10 country name: Uzbekistan | capital: Tashkent | flag: https://flagcdn.com/w320/uz.png |
foreach.js:10 country name: Vanuatu | capital: Port Vila | flag: https://flagcdn.com/w320/vu.png |
foreach.js:10 country name: French Southern and Antarctic Lands | capital: Port-aux-Français | flag: https://flagcdn.com/w320/tf.png |
foreach.js:10 country name: Christmas Island | capital: Flying Fish Cove | flag: https://flagcdn.com/w320/cx.png |
foreach.js:10 country name: Singapore | capital: Singapore | flag: https://flagcdn.com/w320/sg.png |
foreach.js:10 country name: Suriname | capital: Paramaribo | flag: https://flagcdn.com/w320/sr.png |
foreach.js:10 country name: Western Sahara | capital: El Aaiún | flag: https://flagcdn.com/w320/eh.png |
foreach.js:10 country name: Saint Martin | capital: Marigot | flag: https://flagcdn.com/w320/mf.png |
foreach.js:10 country name: Costa Rica | capital: San José | flag: https://flagcdn.com/w320/cr.png |
foreach.js:10 country name: Heard Island and McDonald Islands | capital: undefined | flag: https://flagcdn.com/w320/hm.png |
foreach.js:10 country name: Ireland | capital: Dublin | flag: https://flagcdn.com/w320/ie.png |
foreach.js:10 country name: Antarctica | capital: undefined | flag: https://flagcdn.com/w320/aq.png |
foreach.js:10 country name: Australia | capital: Canberra | flag: https://flagcdn.com/w320/au.png |
foreach.js:10 country name: Libya | capital: Tripoli | flag: https://flagcdn.com/w320/ly.png |
foreach.js:10 country name: Qatar | capital: Doha | flag: https://flagcdn.com/w320/qa.png |
foreach.js:10 country name: Greenland | capital: Nuuk | flag: https://flagcdn.com/w320/gl.png |
foreach.js:10 country name: Mauritius | capital: Port Louis | flag: https://flagcdn.com/w320/mu.png |
foreach.js:10 country name: Kazakhstan | capital: Nur-Sultan | flag: https://flagcdn.com/w320/kz.png |
foreach.js:10 country name: British Indian Ocean Territory | capital: Diego Garcia | flag: https://flagcdn.com/w320/io.png |
foreach.js:10 country name: Albania | capital: Tirana | flag: https://flagcdn.com/w320/al.png |
foreach.js:10 country name: Bahrain | capital: Manama | flag: https://flagcdn.com/w320/bh.png |
foreach.js:10 country name: Papua New Guinea | capital: Port Moresby | flag: https://flagcdn.com/w320/pg.png |
foreach.js:10 country name: Burundi | capital: Gitega | flag: https://flagcdn.com/w320/bi.png |
foreach.js:10 country name: India | capital: New Delhi | flag: https://flagcdn.com/w320/in.png |
foreach.js:10 country name: Uruguay | capital: Montevideo | flag: https://flagcdn.com/w320/uy.png |
foreach.js:10 country name: Saint Lucia | capital: Castries | flag: https://flagcdn.com/w320/lc.png |
foreach.js:10 country name: Barbados | capital: Bridgetown | flag: https://flagcdn.com/w320/bb.png |
foreach.js:10 country name: New Caledonia | capital: Nouméa | flag: https://flagcdn.com/w320/nc.png |
foreach.js:10 country name: Latvia | capital: Riga | flag: https://flagcdn.com/w320/lv.png |
foreach.js:10 country name: Estonia | capital: Tallinn | flag: https://flagcdn.com/w320/ee.png |
foreach.js:10 country name: Niue | capital: Alofi | flag: https://flagcdn.com/w320/nu.png |
foreach.js:10 country name: Saint Barthélemy | capital: Gustavia | flag: https://flagcdn.com/w320/bl.png |
foreach.js:10 country name: Puerto Rico | capital: San Juan | flag: https://flagcdn.com/w320/pr.png |
foreach.js:10 country name: Grenada | capital: St. George's | flag: https://flagcdn.com/w320/gd.png |
foreach.js:10 country name: Macau | capital: undefined | flag: https://flagcdn.com/w320/mo.png |
foreach.js:10 country name: Cyprus | capital: Nicosia | flag: https://flagcdn.com/w320/cy.png |
foreach.js:10 country name: Isle of Man | capital: Douglas | flag: https://flagcdn.com/w320/im.png |
foreach.js:10 country name: Greece | capital: Athens | flag: https://flagcdn.com/w320/gr.png |
foreach.js:10 country name: Syria | capital: Damascus | flag: https://flagcdn.com/w320/sy.png |
foreach.js:10 country name: Lithuania | capital: Vilnius | flag: https://flagcdn.com/w320/lt.png |
foreach.js:10 country name: Curaçao | capital: Willemstad | flag: https://flagcdn.com/w320/cw.png |
foreach.js:10 country name: Dominica | capital: Roseau | flag: https://flagcdn.com/w320/dm.png |
foreach.js:10 country name: Niger | capital: Niamey | flag: https://flagcdn.com/w320/ne.png |
foreach.js:10 country name: Kyrgyzstan | capital: Bishkek | flag: https://flagcdn.com/w320/kg.png |
foreach.js:10 country name: Trinidad and Tobago | capital: Port of Spain | flag: https://flagcdn.com/w320/tt.png |
foreach.js:10 country name: Togo | capital: Lomé | flag: https://flagcdn.com/w320/tg.png |
foreach.js:10 country name: Palestine | capital: Ramallah,Jerusalem | flag: https://flagcdn.com/w320/ps.png |
foreach.js:10 country name: Madagascar | capital: Antananarivo | flag: https://flagcdn.com/w320/mg.png |
foreach.js:10 country name: Croatia | capital: Zagreb | flag: https://flagcdn.com/w320/hr.png |
foreach.js:10 country name: Faroe Islands | capital: Tórshavn | flag: https://flagcdn.com/w320/fo.png |
foreach.js:10 country name: Haiti | capital: Port-au-Prince | flag: https://flagcdn.com/w320/ht.png |
foreach.js:10 country name: Montserrat | capital: Plymouth | flag: https://flagcdn.com/w320/ms.png |
foreach.js:10 country name: Cook Islands | capital: Avarua | flag: https://flagcdn.com/w320/ck.png |
foreach.js:10 country name: Timor-Leste | capital: Dili | flag: https://flagcdn.com/w320/tl.png |
foreach.js:10 country name: Martinique | capital: Fort-de-France | flag: https://flagcdn.com/w320/mq.png |
foreach.js:10 country name: Cuba | capital: Havana | flag: https://flagcdn.com/w320/cu.png |
foreach.js:10 country name: Taiwan | capital: Taipei | flag: https://flagcdn.com/w320/tw.png |
foreach.js:10 country name: Eswatini | capital: Mbabane | flag: https://flagcdn.com/w320/sz.png |
foreach.js:10 country name: Ukraine | capital: Kyiv | flag: https://flagcdn.com/w320/ua.png |
foreach.js:10 country name: Bermuda | capital: Hamilton | flag: https://flagcdn.com/w320/bm.png |
foreach.js:10 country name: South Korea | capital: Seoul | flag: https://flagcdn.com/w320/kr.png |
foreach.js:10 country name: Peru | capital: Lima | flag: https://flagcdn.com/w320/pe.png |
foreach.js:10 country name: Iraq | capital: Baghdad | flag: https://flagcdn.com/w320/iq.png |
foreach.js:10 country name: Moldova | capital: Chișinău | flag: https://flagcdn.com/w320/md.png |
foreach.js:10 country name: San Marino | capital: City of San Marino | flag: https://flagcdn.com/w320/sm.png |
foreach.js:10 country name: Venezuela | capital: Caracas | flag: https://flagcdn.com/w320/ve.png |
foreach.js:10 country name: Guyana | capital: Georgetown | flag: https://flagcdn.com/w320/gy.png |
foreach.js:10 country name: Cayman Islands | capital: George Town | flag: https://flagcdn.com/w320/ky.png |
foreach.js:10 country name: Cambodia | capital: Phnom Penh | flag: https://flagcdn.com/w320/kh.png |
foreach.js:10 country name: Cocos (Keeling) Islands | capital: West Island | flag: https://flagcdn.com/w320/cc.png |
foreach.js:10 country name: Malta | capital: Valletta | flag: https://flagcdn.com/w320/mt.png |
foreach.js:10 country name: Sri Lanka | capital: Sri Jayawardenepura Kotte | flag: https://flagcdn.com/w320/lk.png |
foreach.js:10 country name: Israel | capital: Jerusalem | flag: https://flagcdn.com/w320/il.png |
foreach.js:10 country name: Sudan | capital: Khartoum | flag: https://flagcdn.com/w320/sd.png |
foreach.js:10 country name: United States Virgin Islands | capital: Charlotte Amalie | flag: https://flagcdn.com/w320/vi.png |
foreach.js:10 country name: Eritrea | capital: Asmara | flag: https://flagcdn.com/w320/er.png |
foreach.js:10 country name: Mali | capital: Bamako | flag: https://flagcdn.com/w320/ml.png |
foreach.js:10 country name: Somalia | capital: Mogadishu | flag: https://flagcdn.com/w320/so.png |
foreach.js:10 country name: Norfolk Island | capital: Kingston | flag: https://flagcdn.com/w320/nf.png |
foreach.js:10 country name: Comoros | capital: Moroni | flag: https://flagcdn.com/w320/km.png |
foreach.js:10 country name: Nicaragua | capital: Managua | flag: https://flagcdn.com/w320/ni.png |
foreach.js:10 country name: Russia | capital: Moscow | flag: https://flagcdn.com/w320/ru.png |
foreach.js:10 country name: Uganda | capital: Kampala | flag: https://flagcdn.com/w320/ug.png |
foreach.js:10 country name: Nauru | capital: Yaren | flag: https://flagcdn.com/w320/nr.png |
foreach.js:10 country name: Switzerland | capital: Bern | flag: https://flagcdn.com/w320/ch.png |
foreach.js:10 country name: Portugal | capital: Lisbon | flag: https://flagcdn.com/w320/pt.png |
foreach.js:10 country name: Tajikistan | capital: Dushanbe | flag: https://flagcdn.com/w320/tj.png |
foreach.js:10 country name: South Sudan | capital: Juba | flag: https://flagcdn.com/w320/ss.png |
foreach.js:10 country name: Bouvet Island | capital: undefined | flag: https://flagcdn.com/w320/bv.png |
foreach.js:10 country name: Micronesia | capital: Palikir | flag: https://flagcdn.com/w320/fm.png |
foreach.js:10 country name: American Samoa | capital: Pago Pago | flag: https://flagcdn.com/w320/as.png |
foreach.js:10 country name: Czechia | capital: Prague | flag: https://flagcdn.com/w320/cz.png |
foreach.js:10 country name: Botswana | capital: Gaborone | flag: https://flagcdn.com/w320/bw.png |
foreach.js:10 country name: Tunisia | capital: Tunis | flag: https://flagcdn.com/w320/tn.png |
foreach.js:10 country name: Anguilla | capital: The Valley | flag: https://flagcdn.com/w320/ai.png |
foreach.js:10 country name: Guinea-Bissau | capital: Bissau | flag: https://flagcdn.com/w320/gw.png |
foreach.js:10 country name: Slovakia | capital: Bratislava | flag: https://flagcdn.com/w320/sk.png |
foreach.js:10 country name: Marshall Islands | capital: Majuro | flag: https://flagcdn.com/w320/mh.png |
foreach.js:10 country name: Algeria | capital: Algiers | flag: https://flagcdn.com/w320/dz.png |
foreach.js:10 country name: Jamaica | capital: Kingston | flag: https://flagcdn.com/w320/jm.png |
foreach.js:10 country name: Mozambique | capital: Maputo | flag: https://flagcdn.com/w320/mz.png |
foreach.js:10 country name: Spain | capital: Madrid | flag: https://flagcdn.com/w320/es.png |
foreach.js:10 country name: Honduras | capital: Tegucigalpa | flag: https://flagcdn.com/w320/hn.png |
foreach.js:10 country name: Netherlands | capital: Amsterdam | flag: https://flagcdn.com/w320/nl.png |
foreach.js:10 country name: South Africa | capital: Pretoria,Bloemfontein,Cape Town | flag: https://flagcdn.com/w320/za.png |
foreach.js:10 country name: Azerbaijan | capital: Baku | flag: https://flagcdn.com/w320/az.png |
foreach.js:10 country name: North Macedonia | capital: Skopje | flag: https://flagcdn.com/w320/mk.png |
foreach.js:10 country name: Gambia | capital: Banjul | flag: https://flagcdn.com/w320/gm.png |
foreach.js:10 country name: Liberia | capital: Monrovia | flag: https://flagcdn.com/w320/lr.png |
foreach.js:10 country name: Luxembourg | capital: Luxembourg | flag: https://flagcdn.com/w320/lu.png |
foreach.js:10 country name: Cape Verde | capital: Praia | flag: https://flagcdn.com/w320/cv.png |
foreach.js:10 country name: Bahamas | capital: Nassau | flag: https://flagcdn.com/w320/bs.png |
foreach.js:10 country name: Georgia | capital: Tbilisi | flag: https://flagcdn.com/w320/ge.png |
foreach.js:10 country name: Kiribati | capital: South Tarawa | flag: https://flagcdn.com/w320/ki.png |
foreach.js:10 country name: Tanzania | capital: Dodoma | flag: https://flagcdn.com/w320/tz.png |
foreach.js:10 country name: China | capital: Beijing | flag: https://flagcdn.com/w320/cn.png |
​ country name: Guatemala | capital: Guatemala City | flag: https://flagcdn.com/w320/gt.png |
​ country name: São Tomé and Príncipe | capital: São Tomé | flag: https://flagcdn.com/w320/st.png |
​ country name: Germany | capital: Berlin | flag: https://flagcdn.com/w320/de.png |
​ country name: Sierra Leone | capital: Freetown | flag: https://flagcdn.com/w320/sl.png |
​ country name: Chad | capital: N'Djamena | flag: https://flagcdn.com/w320/td.png |
​ country name: United Kingdom | capital: London | flag: https://flagcdn.com/w320/gb.png |
​ country name: Slovenia | capital: Ljubljana | flag: https://flagcdn.com/w320/si.png |
​ country name: Thailand | capital: Bangkok | flag: https://flagcdn.com/w320/th.png |
​ country name: Indonesia | capital: Jakarta | flag: https://flagcdn.com/w320/id.png |
​ country name: Northern Mariana Islands | capital: Saipan | flag: https://flagcdn.com/w320/mp.png |
​ country name: Guam | capital: Hagåtña | flag: https://flagcdn.com/w320/gu.png |
​ country name: Finland | capital: Helsinki | flag: https://flagcdn.com/w320/fi.png |
​ country name: Mayotte | capital: Mamoudzou | flag: https://flagcdn.com/w320/yt.png |
​ country name: Gibraltar | capital: Gibraltar | flag: https://flagcdn.com/w320/gi.png |
​ country name: Turkmenistan | capital: Ashgabat | flag: https://flagcdn.com/w320/tm.png |
​ country name: Kosovo | capital: Pristina | flag: https://flagcdn.com/w320/xk.png |
​ country name: Ivory Coast | capital: Yamoussoukro | flag: https://flagcdn.com/w320/ci.png |
​ country name: Morocco | capital: Rabat | flag: https://flagcdn.com/w320/ma.png |
​ country name: Dominican Republic | capital: Santo Domingo | flag: https://flagcdn.com/w320/do.png |
​ country name: Ghana | capital: Accra | flag: https://flagcdn.com/w320/gh.png |
​ country name: Vatican City | capital: Vatican City | flag: https://flagcdn.com/w320/va.png |
​ country name: Jersey | capital: Saint Helier | flag: https://flagcdn.com/w320/je.png |
​ country name: Turkey | capital: Ankara | flag: https://flagcdn.com/w320/tr.png |
​ country name: Tuvalu | capital: Funafuti | flag: https://flagcdn.com/w320/tv.png |
​ country name: Iran | capital: Tehran | flag: https://flagcdn.com/w320/ir.png |
​ country name: Egypt | capital: Cairo | flag: https://flagcdn.com/w320/eg.png |
​ country name: Denmark | capital: Copenhagen | flag: https://flagcdn.com/w320/dk.png |
​ country name: Kenya | capital: Nairobi | flag: https://flagcdn.com/w320/ke.png |
​ country name: Bulgaria | capital: Sofia | flag: https://flagcdn.com/w320/bg.png |
​ country name: Zimbabwe | capital: Harare | flag: https://flagcdn.com/w320/zw.png |
​ country name: Angola | capital: Luanda | flag: https://flagcdn.com/w320/ao.png |
​ country name: Nigeria | capital: Abuja | flag: https://flagcdn.com/w320/ng.png |
​ country name: Poland | capital: Warsaw | flag: https://flagcdn.com/w320/pl.png |
​ country name: Senegal | capital: Dakar | flag: https://flagcdn.com/w320/sn.png |
​ country name: Saint Helena, Ascension and Tristan da Cunha | capital: Jamestown | flag: https://flagcdn.com/w320/sh.png |
​ country name: Lebanon | capital: Beirut | flag: https://flagcdn.com/w320/lb.png |
​ country name: Samoa | capital: Apia | flag: https://flagcdn.com/w320/ws.png |
​ country name: Philippines | capital: Manila | flag: https://flagcdn.com/w320/ph.png |
​ country name: Guernsey | capital: St. Peter Port | flag: https://flagcdn.com/w320/gg.png |
​ country name: El Salvador | capital: San Salvador | flag: https://flagcdn.com/w320/sv.png |
​ country name: Kuwait | capital: Kuwait City | flag: https://flagcdn.com/w320/kw.png |
​ country name: Tonga | capital: Nuku'alofa | flag: https://flagcdn.com/w320/to.png |
​ country name: Oman | capital: Muscat | flag: https://flagcdn.com/w320/om.png |
​ country name: Afghanistan | capital: Kabul | flag: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png |
​ country name: Saint Kitts and Nevis | capital: Basseterre | flag: https://flagcdn.com/w320/kn.png |
​ country name: Central African Republic | capital: Bangui | flag: https://flagcdn.com/w320/cf.png |
​ country name: Serbia | capital: Belgrade | flag: https://flagcdn.com/w320/rs.png |
​ country name: Armenia | capital: Yerevan | flag: https://flagcdn.com/w320/am.png |
​ country name: Bangladesh | capital: Dhaka | flag: https://flagcdn.com/w320/bd.png |
​ country name: Laos | capital: Vientiane | flag: https://flagcdn.com/w320/la.png |
​ country name: Chile | capital: Santiago | flag: https://flagcdn.com/w320/cl.png |
​ country name: French Polynesia | capital: Papeetē | flag: https://flagcdn.com/w320/pf.png |
​ country name: Panama | capital: Panama City | flag: https://flagcdn.com/w320/pa.png |
​ country name: United States | capital: Washington, D.C. | flag: https://flagcdn.com/w320/us.png |
​ country name: Nepal | capital: Kathmandu | flag: https://flagcdn.com/w320/np.png |
​ country name: Myanmar | capital: Naypyidaw | flag: https://flagcdn.com/w320/mm.png |
​ country name: Falkland Islands | capital: Stanley | flag: https://flagcdn.com/w320/fk.png |
​ country name: Hungary | capital: Budapest | flag: https://flagcdn.com/w320/hu.png |
foreach.js:10 country name: Palau | capital: Ngerulmud | flag: https://flagcdn.com/w320/pw.png |
foreach.js:10 country name: Equatorial Guinea | capital: Malabo | flag: https://flagcdn.com/w320/gq.png |
foreach.js:10 country name: Guinea | capital: Conakry | flag: https://flagcdn.com/w320/gn.png |
foreach.js:10 country name: United Arab Emirates | capital: Abu Dhabi | flag: https://flagcdn.com/w320/ae.png |
foreach.js:10 country name: Turks and Caicos Islands | capital: Cockburn Town | flag: https://flagcdn.com/w320/tc.png |
foreach.js:10 country name: British Virgin Islands | capital: Road Town | flag: https://flagcdn.com/w320/vg.png |
foreach.js:10 country name: Liechtenstein | capital: Vaduz | flag: https://flagcdn.com/w320/li.png |
foreach.js:10 country name: Bosnia and Herzegovina | capital: Sarajevo | flag: https://flagcdn.com/w320/ba.png |
foreach.js:10 country name: Malawi | capital: Lilongwe | flag: https://flagcdn.com/w320/mw.png |
foreach.js:10 country name: Bhutan | capital: Thimphu | flag: https://flagcdn.com/w320/bt.png |
foreach.js:10 country name: Cameroon | capital: Yaoundé | flag: https://flagcdn.com/w320/cm.png |
foreach.js:10 country name: Andorra | capital: Andorra la Vella | flag: https://flagcdn.com/w320/ad.png |
foreach.js:10 country name: Guadeloupe | capital: Basse-Terre | flag: https://flagcdn.com/w320/gp.png |
foreach.js:10 country name: Republic of the Congo | capital: Brazzaville | flag: https://flagcdn.com/w320/cg.png |
foreach.js:10 country name: Réunion | capital: Saint-Denis | flag: https://flagcdn.com/w320/re.png |
foreach.js:10 country name: Burkina Faso | capital: Ouagadougou | flag: https://flagcdn.com/w320/bf.png |
foreach.js:10 country name: Jordan | capital: Amman | flag: https://flagcdn.com/w320/jo.png |
foreach.js:10 country name: DR Congo | capital: Kinshasa | flag: https://flagcdn.com/w320/cd.png |
foreach.js:10 country name: Tokelau | capital: Fakaofo | flag: https://flagcdn.com/w320/tk.png |
foreach.js:10 country name: Vietnam | capital: Hanoi | flag: https://flagcdn.com/w320/vn.png |
foreach.js:10 country name: Sint Maarten | capital: Philipsburg | flag: https://flagcdn.com/w320/sx.png |
foreach.js:10 country name: Belgium | capital: Brussels | flag: https://flagcdn.com/w320/be.png |
foreach.js:10 country name: United States Minor Outlying Islands | capital: Washington DC | flag: https://flagcdn.com/w320/um.png |
foreach.js:10 country name: Brazil | capital: Brasília | flag: https://flagcdn.com/w320/br.png |
foreach.js:10 country name: Belize | capital: Belmopan | flag: https://flagcdn.com/w320/bz.png |
foreach.js:10 country name: Antigua and Barbuda | capital: Saint John's | flag: https://flagcdn.com/w320/ag.png |
foreach.js:10 country name: Paraguay | capital: Asunción | flag: https://flagcdn.com/w320/py.png |
foreach.js:10 country name: Benin | capital: Porto-Novo | flag: https://flagcdn.com/w320/bj.png |
foreach.js:10 country name: Brunei | capital: Bandar Seri Begawan | flag: https://flagcdn.com/w320/bn.png |
foreach.js:10 country name: Bolivia | capital: Sucre | flag: https://flagcdn.com/w320/bo.png |
foreach.js:10 country name: Djibouti | capital: Djibouti | flag: https://flagcdn.com/w320/dj.png |
foreach.js:10 country name: French Guiana | capital: Cayenne | flag: https://flagcdn.com/w320/gf.png |
foreach.js:10 country name: Canada | capital: Ottawa | flag: https://flagcdn.com/w320/ca.png |
foreach.js:10 country name: Saint Pierre and Miquelon | capital: Saint-Pierre | flag: https://flagcdn.com/w320/pm.png |
foreach.js:10 country name: Japan | capital: Tokyo | flag: https://flagcdn.com/w320/jp.png |
foreach.js:10 country name: Rwanda | capital: Kigali | flag: https://flagcdn.com/w320/rw.png |
foreach.js:10 country name: Saint Vincent and the Grenadines | capital: Kingstown | flag: https://flagcdn.com/w320/vc.png |
foreach.js:10 country name: Iceland | capital: Reykjavik | flag: https://flagcdn.com/w320/is.png |
foreach.js:10 country name: Belarus | capital: Minsk | flag: https://flagcdn.com/w320/by.png |
foreach.js:10 country name: Hong Kong | capital: City of Victoria | flag: https://flagcdn.com/w320/hk.png |
foreach.js:10 country name: Lesotho | capital: Maseru | flag: https://flagcdn.com/w320/ls.png |
foreach.js:10 country name: Fiji | capital: Suva | flag: https://flagcdn.com/w320/fj.png |
foreach.js:10 country name: Austria | capital: Vienna | flag: https://flagcdn.com/w320/at.png |
foreach.js:10 country name: Colombia | capital: Bogotá | flag: https://flagcdn.com/w320/co.png |
foreach.js:10 country name: Gabon | capital: Libreville | flag: https://flagcdn.com/w320/ga.png |
foreach.js:10 country name: Saudi Arabia | capital: Riyadh | flag: https://flagcdn.com/w320/sa.png |
foreach.js:10 country name: South Georgia | capital: King Edward Point | flag: https://flagcdn.com/w320/gs.png |
foreach.js:10 country name: Ethiopia | capital: Addis Ababa | flag: https://flagcdn.com/w320/et.png |
foreach.js:10 country name: Caribbean Netherlands | capital: Kralendijk | flag: https://flagcdn.com/w320/bq.png |
foreach.js:10 country name: Monaco | capital: Monaco | flag: https://flagcdn.com/w320/mc.png |
foreach.js:10 country name: North Korea | capital: Pyongyang | flag: https://flagcdn.com/w320/kp.png |
foreach.js:10 country name: Italy | capital: Rome | flag: https://flagcdn.com/w320/it.png |
foreach.js:10 country name: Namibia | capital: Windhoek | flag: https://flagcdn.com/w320/na.png |
foreach.js:10 country name: Mongolia | capital: Ulan Bator | flag: https://flagcdn.com/w320/mn.png |
foreach.js:10 country name: Solomon Islands | capital: Honiara | flag: https://flagcdn.com/w320/sb.png |
foreach.js:10 country name: Yemen | capital: Sana'a | flag: https://flagcdn.com/w320/ye.png |
foreach.js:10 country name: Romania | capital: Bucharest | flag: https://flagcdn.com/w320/ro.png |
foreach.js:10 country name: Svalbard and Jan Mayen | capital: Longyearbyen | flag: https://flagcdn.com/w320/sj.png |
foreach.js:10 country name: France | capital: Paris | flag: https://flagcdn.com/w320/fr.png |
  */