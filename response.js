function TimedReponse(x) {
    $('#main-input').prop("disabled", true);
    $('#main-input').css("background", "grey");
    $('.tgbtns').prop("disabled", true);
    $('.btns').css("background", "grey");
    let index = 0;
    let TimedResponse = setInterval(() => {
        $('#chat-box').append(x.charAt(index));
        index++;
        $('#chat-box').scrollTop($('#chat-box').prop('scrollHeight'));
        if (index === x.length) {
            clearInterval(TimedResponse);
            $('#main-input').prop("disabled", false);
            $('#main-input').css("background", "black");
            $('#main-input').focus();
            $('.tgbtns').prop("disabled", false);
            $('.btns').css("background", "black");
            $('#chat-box').append("<br>");
        }
    }, 1);
}

function unknownResponse() {
    let unknown = [
        "Pasensya na, nguni't hindi ko naitindihan ang iyong sinasabi.",
        "Paumanhin, nguni't hindi ko alam ang iyong sinasabi.",
        "Maaari ka pang magtanong o magsabi ng ibang bagay, nguni't hindi ko naiintindihan yan.",
        "Patawad nguni't hindi ko naiintindihan ang iyong sinasabi.",

        // hugots
        "Kung hindi rin lang siya, ay wag na lang.",
        "Iibig pa ba kahit nasasaktan na?",
        "Kung kailan muntik na maayos ang lahat, saka naman hindi naging maayos.",
        "Maghihintay pa ba kung wala nang hinihintay?",
        "Naniniwala ka ba sa pangalwang pagkakataon?",
        "Bakit kailangang mangyari iyon?",
        "Ang mga nangyayari sayo sa buhay ay maaaring magdala sa iyo kung sino ka ba talaga sa hinaharap.",

        // quotes
        "Ang buhay ay hindi tungkol sa paghihintay sa bagyo na magdaan, kundi tungkol sa pag-aaral kung paano sumayaw sa ulan.",
        "Sa bawat pagsubok, natututo tayong maging matatag; sa bawat tagumpay, natututo tayong maging humble.",
        "Ang pag-ibig ay hindi pagkakakitaan, kundi pagkakataon na magbigay nang walang hinihintay na kapalit.",
        "Sa mundo ng kasinungalingan, ang katotohanan ang pinakamabisang ilaw.",
        "Ang mga pagkakamali ay hindi basehan ng ating halaga, bagkus sila ang pundasyon ng ating pag-unlad.",
        "Ang buhay ay parang paglalakbay sa karagatan; minsan mahinang hampas ng alon, minsan malakas na unos, ngunit sa bawat pag-ikot ng araw, may pag-asa.",
        "Ang pagmamahal ay hindi tungkol sa kung sino ang una mong minahal, kundi kung sino ang huling hindi mo kayang iwanan.",
        "Sa bawat pangarap na ating hinahabol, may kaakibat na sakripisyo at pagsusumikap.",
        "Ang pinakamabisang anting-anting sa buhay ay ang tiwala sa sarili.",
        "Hindi mo kailangang magpatawad para sa kanila, kundi para sa sarili mo.",
        "Ang panahon ay hindi sinusukat sa dami ng oras, kundi sa dami ng mga alaala na ating naililikha.",
        "Ang mga pangarap ay hindi binibigay, kundi inuuna nating abutin.",
        "Ang tunay na tagumpay ay hindi nasusukat sa kayamanan, kundi sa kahandaang magbigay at magmahal.",
        "Minsan, ang pinakamahalagang biyaya ay ang pagkakaroon ng kaunting problema; ito ang nagtuturo sa atin kung paano lumaban at magpatuloy.",
        "Ang buhay ay isang paglalakbay; huwag mong hayaang ang takot ang maging tagapangasiwa.",
        "Ang tunay na kaligayahan ay hindi nanggagaling sa pag-aari, kundi sa pagmamahal at pagtanggap.",
        "Kapag ang pag-ibig ay tunay, hindi ito bumababa sa unang unos, bagkus ito ay lumalakas pa.",
        "Ang pinakamahalagang pag-aari ay hindi pera o ari-arian, kundi ang kapayapaan sa puso at kalinawan sa isipan.",
        "Hindi mo kailangang mapagod sa pagtakbo ng paligid, minsan, kailangan mo lang tumigil at pahalagahan ang momentong meron ka ngayon.",
        "Ang realidad ay hindi palaging kasing-ganda ng ating mga pangarap, ngunit sa pagtanggap sa mga limitasyon, nagsisimula ang tunay na kalayaan."
    ];
    return unknown[random(0, unknown.length - 1)];
}

function setResponse(userInput) {
    const normalizedInput = userInput.replace(/[^a-zA-Z\s]/g, '').toLowerCase().trim();

    for (let key in preTrainedData) {
        let patterns = key.split(',');
        let match = patterns.every(pattern => {
            let alternatives = pattern.split('|');
            return alternatives.some(alternative => normalizedInput.includes(alternative));
        });

        if (match) {
            let responses = preTrainedData[key];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return unknownResponse();
}



