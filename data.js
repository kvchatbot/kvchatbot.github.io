const preTrainedData = {
    // 3 words
    "sino,gumawa|gawa,sayo|sa iyo":["Ang gumawa sa akin ay si Khian Victory D. Caldeoron."],
    "sino,mahal|love,khian":["Secret.","Bawal sabihin."],
    "ilan,taon,khian":["Hindi ko alam kung ilang taon na si khian."],
    "ano,sabi,mo":["Ang ating usapan na iyong sinasabi.","Ahh sige, hindi mo pala ako maintindihan.","Anong tinatanong mo din? may iba ka pa bang gustong pagusapan?"],
    "pa ba yan":["Ouh naman, ganun talaga.","Kaunti lang naman, hayaan mo na lang."],
    "pano|paano,ka,gana":["Gumagana ako sa pamamagitan ng mga programs at instruction na ibinigay at naka code sakin ni Khian."],
    "ano,iyo|intindi,intindi|mo":["Ang naiintindihan ko lamang ay mga madadaling salitain, at isang pangunugsap lamang, ako ay ginawa para sa pangkaligayang dahilan lamang at hindi ako ginawa upang magbigay ng mga tamang impormasyon kagaya ni chatgpt."],
    
    // 2 words
    "alam mo":["Hindi ko alam."],
    "iyo,alam":["Hindi ko alam."],
    "edad,khian":["Hindi ko alam kung ilang taon na si khian."],
    "khian,edad":["Hindi ko alam kung ilang taon na si khian."],
    "ilan,taon":["Alin ang ilang taon?"],
    "kamusta,ka":["Ayos lang ako, ikaw ba?","Salamat sa pagtatanong, ok lang ako, ikaw ba?"],
    "ayos|ok,ako|naman":["Mabuti naman kung ganon, ano ang iyong gustong pagusapan?","Maigi kung ganon, alin ang iyong nais na talakayin?"],
    "tungkol,sa":["Ahh, ano ang iyong gustong malaman tungkol diyan?"],
    "saan|san,ka|ikaw|mo,punta|pupunta|pumunta":["To the moon, roadtrip, broom broom, skrrt skrrt..."],
    "maganda,umaga|tanghali|hapon|araw":["Magandang araw din, ano ang gusto mong paugsapan?","Magandang araw, kamusta ka?"],
    "good,morning|afternoon|night|evening":["Tagalog, ayaw ko ng english.","Ayaw ko ng english, tagalog lang."],
    "arte,mo":["Ganun talaga, ako kasi si KV Bot."],
    "sino|pangalan|iyo,ka|mo|pangalan":["Ako si KVBot, isang chatbot na gawa ni Khian Victory D. Calderon."],
    "sino|tungkol|kilala,khian":["Si Khian Victory D. Calderon ayon sa kaniyang website ay ipinakilala niya na siya ay isang software developer at korean instructor, maaaring pindutin ang pangalan niya sa ibabang parte ng website na ito."],
    "sino|kilala,ako":["Ikaw ang nakakakilala sa sarili mo.","Magpakasarili ka, ikaw yan, kaya mo yan.","Hindi ko nalalaman ang iyong pangalan nguni't kausap kita."],
    "sino|kilala|ano,si|mo":["Hindi ko nakikilala ang taong iyan.","Paumanhin, nguni't hindi ko kilala yan.","Pasensya na, pero hindi ko kilala yan."],
    "gf|girlfriend|kasintahan|jowa,khian":["Mayroon ng kasintahan si Khian, nguni't wala akong karapatan sabihin kung sino iyon."],
    "khian,gf|girlfriend|kasintahan|jowa":["Mayroon ng kasintahan si Khian, nguni't wala akong karapatan sabihin kung sino iyon."],
    "ano,ang":["Hindi alam.","Hindi ko nalalaman iyan."],
    "iniwan|pinagpalit,ako":["Ikinalulungkot kong malaman iyan, pasensya na.","Labis na nakakalungkot ang nangyari sa iyo, pasensya na kung iyan ang iyong naranasan."],
    "ako,iniwan|pinagpalit":["Ikinalulungkot kong malaman iyan, pasensya na.","Labis na nakakalungkot ang nangyari sa iyo, pasensya na kung iyan ang iyong naranasan."],
    "ka ba|ka pala":["Pwedeng oo, pweding hindi.","Kaunti lang, medyo alinlangan pa.","Minsan siguro, pero hindi ko masasabi."],
    "usap,tayo":["Sige, ano ang iyong gustong pagusapan?","Ano ang iyong gustong talakayin?"],
    "tayo,usap":["Sige, ano ang iyong gustong pagusapan?","Ano ang iyong gustong talakayin?"],
    "maaari ba":["Depende, hindi ko masasagot nung kumpletong Oo o Hindi."],
    "usap|natin|talakay,usap|natin|talakay":["Pasensya na, nguni't hindi ko alam ang tungkol sa bagay na iyan.","Paumanhin nguni't wala akong alam sa bagay na iyan."],
    "o si":["Wala akong kakayahang pumili dahil ako ay isang chatbot.","Wala akong karapatang pumili dahil ako ay chatbot lamang."],

    // 1 word
    "saging|mansanas|orange|dalandan|ponkan|pongkan|punkan|punkan":["Ohh mga prutas, masarap ang mga prutas na iyan."],
    "isa|dalwa|dalawa|tatlo|apat|lima|anim|pito|walo|siyam|sampo|sampu":["Edi maigi at marunong ka magbilang.","Ohh, marunong ka magbilang, anong kasunod?"],
    "pamamagitan":["Sa pamamagitan ng alin?","Sa pamamagitan ng ano?"],
    "mainit|banas":["Talagang mainit ang panahon minsan, ganyan talaga.","Water is life, inom ka ng maraming tubig."],
    "magbigay|bigyan":["Paumanhin, nguni't wala pa akong karapatang magbigay ng ganyan.","Pasensya na, wala pa akong alam tungkol sa pagbibigay ng ganyan"],
    "ipag|gawin|kilos|kumilos":["Ako ay walang pisikal na anyo at ako ay AI lamang, kaya wala akong kakayang gawin iyan."],
    "may|maging|naging":["Medyo lang naman, pero di ko naiintindihan masyado.","Hindi ko pa din alam eh, pasensya ka na."],
    "para":["Para saan pa? Diba wala na?"],
    "bakit":["Anong dahilan?","Hindi ko masasagot iyan dahil hindi ko din alam."],
    "gaano|gano|ilan":["Huh? Ginagawa mo?","Secret baka malaman mo."],
    "talaga|totoo|weh":["Ouh, pero hindi ko din masasabi.","Paminsan minsan siguro, ano ba ang iyong nais pang pagusapan?"],
    "kung":["Kung ano? pasensya na, nguni't di ko naiintindihan.","Kung alin? paumanhin nguni't wala akong kakayang maintindihan iyan."],
    "tulong|tulungan":["Ano ang aking maitutulong sa iyo?","Ayaw ko nga, de joke lang, ano maitutulong ko sayo?"],
    "pano|paano":["Paano ang alin?"],
    "hindi|hinde|indeh":["Bakit naman?","Ayos lamang kung ganoon, pero bakit sa tingin mo?"],
    "ano":["Ano ang alin?","Ginagawa mo?","Hotdog"],
    "sino":["Sino ang ano?","Kausap mo?"],
    "tayo":["Walang tayo, dahil ako ay hindi tao at isang chatbot lamang.","Walang tayo, dahil hindi ka naman chatbot."],
    "alin":["Babalutin","Ang alin? hindi ako manghuhula"],
    "kita":["Edi maigi kung ganun.","Talaga ba?","Totoo ba?"],
    "san|saan":["Darating.","Saan ka pupunta?","Saan bagang? To the moon."],
    "huh|ha":["Hotdog!","Hotdog na sunog."],
    "oo|ou":["Sige, sabi mo eh.","Ahh kaya naman pala, pero sige.","Ayos naman pala, sige lang."],

    // english
    "what|where|who|why|how|when":["Ayaw ko makipagusap sa wikang ingles, ang gusto ko ay tagalog lamang."],
};

/*

"":[""],

https://1000mostcommonwords.com/1000-most-common-filipino-words/

*/