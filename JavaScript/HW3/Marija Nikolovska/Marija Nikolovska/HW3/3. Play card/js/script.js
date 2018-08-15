function validCard(c) {
    c = prompt();
    switch (c) {
        case '2': console.log("yes");
            break;
        case '3': console.log("yes");
            break;
        case '4': console.log("yes");
            break;
        case '5': console.log("yes");
            break;
        case '6': console.log("yes");
            break;
        case '7': console.log("yes");
            break;
        case '8': console.log("yes");
            break;
        case '9': console.log("yes");
            break;
        case '10': console.log("yes");
            break;
        case 'J': console.log("yes");
            break;
        case 'Q': console.log("yes");
            break;
        case 'K': console.log("yes");
            break;
        case 'A': console.log("yes");
            break;
        default: console.log("no");
    }
}
validCard();

/*
Toa e toa sto se barase, isto tak mozis malce da go skratis kodot na sledniov nacin:

case '2':
case '3':
case '4':
case '5':
case '6':
case '7':
case '8':
case '9':
case '10':
case 'J':
case 'Q':
case 'K':
case 'A': 
    console.log("yes");
    break;
default: console.log("no");

Sekogas koga ke dojdis do moment kaj sto povtoruvas kod sto veke si go napisala nekade pomisli deka toa moze nekako da se reiskoristi

*/