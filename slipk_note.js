// ฟังก์ชันเพื่อโหลดฟอนต์ (ถ้าไม่มีไฟล์ฟอนต์ในเครื่อง มันจะข้ามไปใช้ฟอนต์มาตรฐานแทน ไม่พังครับ)
function loadFonts() {
    const fonts = [
        //SukhumvitSet
        new FontFace('SukhumvitSetThin', 'url(fonts/SukhumvitSet-Thin.woff)'),
        new FontFace('SukhumvitSetText', 'url(fonts/SukhumvitSet-Text.woff)'),
        new FontFace('SukhumvitSetLight', 'url(fonts/SukhumvitSet-Light.woff)'),
        new FontFace('SukhumvitSetMedium', 'url(fonts/SukhumvitSet-Medium.woff)'),
        new FontFace('SukhumvitSetSemiBold', 'url(fonts/SukhumvitSet-SemiBold.woff)'),
        new FontFace('SukhumvitSetBold', 'url(fonts/SukhumvitSet-Bold.woff)'),
        new FontFace('SukhumvitSetExtraBold', 'url(fonts/SukhumvitSet-Extra%20Bold.woff)'),
        //SFThonburi
        new FontFace('SFThonburiLight', 'url(fonts/SFThonburi.woff)'),
        new FontFace('SFThonburiRegular', 'url(fonts/SFThonburi-Regular.woff)'),
        new FontFace('SFThonburiSemiBold', 'url(fonts/SFThonburi-Semibold.woff)'),
        new FontFace('SFThonburiBold', 'url(fonts/SFThonburi-Bold.woff)'),
        //Kanit
        new FontFace('KanitThin', 'url(fonts/Kanit-Thin.woff)'),
        new FontFace('KanitExtraLight', 'url(fonts/Kanit-ExtraLight.woff)'),
        new FontFace('KanitLight', 'url(fonts/Kanit-Light.woff)'),
        new FontFace('KanitRegular', 'url(fonts/Kanit-Regular.woff)'),
        new FontFace('KanitMedium', 'url(fonts/Kanit-Medium.woff)'),
        new FontFace('KanitSemiBold', 'url(fonts/Kanit-SemiBold.woff)'),
        new FontFace('KanitBold', 'url(fonts/Kanit-Bold.woff)'),
        new FontFace('KanitExtraBold', 'url(fonts/Kanit-ExtraBold.woff)'),
        new FontFace('KanitBlack', 'url(fonts/Kanit-Black.woff)'),
        //Bangkok
        new FontFace('BangkokTime1', 'url(fonts/Bangkok-Time1.woff)'),
        new FontFace('BangkokTime2', 'url(fonts/Bangkok-Time2.woff)'),
        new FontFace('BangkokMoney', 'url(fonts/Bangkok-Money.woff)'),
        new FontFace('BangkokTime', 'url(fonts/Bangkok-Time.woff)'),
        //BangkokMoney
        new FontFace('BangkokMoneyRegular', 'url(fonts/Bangkok-Money-Regular.woff)'),
        new FontFace('BangkokMoneyMedium', 'url(fonts/Bangkok-Money-Medium.woff)'),
        new FontFace('BangkokMoneySemiBold', 'url(fonts/Bangkok-Money-SemiBold.woff)'),
        new FontFace('BangkokMoneyBold', 'url(fonts/Bangkok-Money-Bold.woff)'),
        //TTB-Money
        new FontFace('TTBMoneyRegular', 'url(fonts/TTB-Money-Regular.woff)'),
        new FontFace('TTBMoneyMedium', 'url(fonts/TTB-Money-Medium.woff)'),
        new FontFace('TTBMoneySemiBold', 'url(fonts/TTB-Money-SemiBold.woff)'),
        new FontFace('TTBMoneyBold', 'url(fonts/TTB-Money-Bold.woff)'),
        new FontFace('TTBMoneyExtraBold', 'url(fonts/TTB-Money-ExtraBold.woff)'),
        //THSarabunNew
        new FontFace('THSarabunRegular', 'url(fonts/THSarabun.woff)'),
        new FontFace('THSarabunBold', 'url(fonts/THSarabun-Bold.woff)'),
        new FontFace('THSarabunItalic', 'url(fonts/THSarabun-Italic.woff)'),
        new FontFace('THSarabunBoldItalic', 'url(fonts/THSarabun-BoldItalic.woff)'),
        new FontFace('THSarabunNew', 'url(fonts/THSarabunNew.woff)'),
        new FontFace('THSarabunNewBold', 'url(fonts/THSarabunNew-Bold.woff)'),
        new FontFace('THSarabunNewItalic', 'url(fonts/THSarabunNew-Italic.woff)'),
        new FontFace('THSarabunNewBoldItalic', 'url(fonts/THSarabunNew-BoldItalic.woff)'),
        //other
        new FontFace('DXKrungthaiSemiBold', 'url(fonts/DX-Krungthai-SemiBold.woff)'),
        new FontFace('DXKrungthaiThin', 'url(fonts/DX-Krungthai-Thin.woff)'),
        new FontFace('DXSCB', 'url(fonts/DX-SCB.woff)'),
        new FontFace('DXTTBBold', 'url(fonts/DX-TTB-bold.woff)'),
        new FontFace('DXTTBRegular', 'url(fonts/DX-TTB-regular.woff)'),
        new FontFace('DXKrungthaiBold', 'url(fonts/DX-Krungthai-Bold.woff)'),
        new FontFace('DXKrungthaiMedium', 'url(fonts/DX-Krungthai-Medium.woff)'),
        new FontFace('DXKrungthaiRegular', 'url(fonts/DX-Krungthai-Regular.woff)'),
        new FontFace('TTBMoney', 'url(fonts/TTB%20Money.woff)'),
        new FontFace('CoreSansLight', 'url(fonts/Core-Sans-E-W01-35-Light.woff)'),
        new FontFace('CoreSansBold', 'url(fonts/Core-Sans-N-65-Bold.woff)'),
        new FontFace('THSarabun', 'url(fonts/THSarabun.woff)'),
        //kurious
        new FontFace('kuriousRegular', 'url(fonts/kurious-Regular.woff)'),
        new FontFace('kuriousMedium', 'url(fonts/kurious-medium.woff)'),
        new FontFace('kuriousSemiBold', 'url(fonts/kurious-semibold.woff)'),
        new FontFace('kuriousBold', 'url(fonts/kurious-Bold.woff)')
    ];

    return Promise.all(fonts.map(font => font.load())).then(function(loadedFonts) {
        loadedFonts.forEach(function(font) {
            document.fonts.add(font);
        });
    });
}

window.onload = function() {
    setCurrentDateTime();
    loadFonts().then(function() {
        document.fonts.ready.then(function() {
            updateDisplay(); 
        });
    }).catch(function() {
        updateDisplay();
    });
};

function setCurrentDateTime() {
    const now = new Date();
    const localDateTime = now.toLocaleString('sv-SE', { timeZone: 'Asia/Bangkok', hour12: false });
    const formattedDateTime = localDateTime.replace(' ', 'T');
    document.getElementById('datetime').value = formattedDateTime;
}

function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    let formattedDate = new Date(date).toLocaleDateString('th-TH', options);
    formattedDate = formattedDate.replace(/ /g, ' ').replace(/\./g, '');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const day = formattedDate.split(' ')[0];
    const month = months[new Date(date).getMonth()];
    const year = formattedDate.split(' ')[2];
    return `${day} ${month} ${year}`;
}

function generateUniqueID() {
    const now = new Date(document.getElementById('datetime').value);
    const startDate = new Date("2024-07-24");
    const dayDifference = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const uniqueDay = (15475 + dayDifference).toString().padStart(6, '0');
    const timePart = `${padZero(now.getHours())}${padZero(now.getMinutes())}${padZero(now.getSeconds())}`;
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

    const bank = document.getElementById('bank').value;
    let prefix = "BOR"; 

    if (bank === "MetaAds") {
        const prefixes = ["APM", "BPM", "CPM"];
        prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    } else if (bank === "รหัสพร้อมเพย์" || bank === "พร้อมเพย์วอลเล็ท") {
        const prefixes = ["APP", "BPP", "CPP"];
        prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    } else if (bank === "ธ.กสิกรไทย") {
        const prefixes = ["ATF", "BTF", "CTF"];
        prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    } else {
        const prefixes = ["AOR", "BOR", "COR"];
        prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    }

    return `${uniqueDay}${timePart}${prefix}0${randomPart}`;
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function updateDisplay() {
    const sendername = document.getElementById('sendername').value || '-';
    const senderaccount = document.getElementById('senderaccount').value || '-';
    const receivername = document.getElementById('receivername').value || '-';
    const number2 = document.getElementById('number2').value || '-';

    const receiveraccount = document.getElementById('receiveraccount').value || '-';
    const bank = document.getElementById('bank').value || '-';
    const amount11 = document.getElementById('amount11').value || '-';
    const datetime = document.getElementById('datetime').value || '-';
    const AideMemoire = document.getElementById('AideMemoire').value || '-';
    const selectedImage = document.getElementById('imageSelect').value || '';
    const backgroundSelect = document.getElementById('backgroundSelect').value || '';
    const QRCode = document.getElementById('QRCode').value || '';

    const number2Input = document.getElementById('number2');
    if (bank === 'ทูซีทูพี') {
        number2Input.style.display = ''; 
    } else {
        number2Input.style.display = 'none';
    }

    const isPromptPay   = bank === 'พร้อมเพย์วอลเล็ท';
    const isMetaAds     = bank === 'MetaAds';
    
    let bankLogoUrl = '';
    let bankText = '';
    let receiveraccountPositionY = 681.7;
    let receivernamePositionY = 564.3;

    if (isPromptPay) {     
        receiveraccountPositionY = 624.8;
        receivernamePositionY = 564.3;
        bankText = '';
    } else if (isMetaAds) {     
        receiveraccountPositionY = 624.8;
        receivernamePositionY = 1300.0;
        bankText = '';
    } else {
        bankText = bank;
        receiveraccountPositionY = 681.7;
        receivernamePositionY = 564.3;
    }

    switch (bank) {
        case 'ธ.กสิกรไทย':
            bankText = 'ธ.กสิกรไทย';
            bankLogoUrl = 'image/logo/KBANK.png';
            break;
        case 'ธ.กรุงไทย':
            bankText = 'ธ.กรุงไทย';
            bankLogoUrl = 'image/logo/KTB.png';
            break;
        case 'ธ.กรุงเทพ':
            bankText = 'ธ.กรุงเทพ';
            bankLogoUrl = 'image/logo/BBL1.png';
            break;
        case 'ธ.ไทยพาณิชย์':
            bankText = 'ธ.ไทยพาณิชย์';
            bankLogoUrl = 'image/logo/SCB1.png';
            break;
        case 'ธ.กรุงศรีอยุธยา':
            bankText = 'ธ.กรุงศรีอยุธยา';
            bankLogoUrl = 'image/logo/BAY.png';
            break;
        case 'ธ.ทหารไทยธนชาต':
            bankText = 'ธ.ทหารไทยธนชาต';
            bankLogoUrl = 'image/logo/TTB1.png';
            break;
        case 'ธ.ออมสิน':
            bankText = 'ธ.ออมสิน';
            bankLogoUrl = 'image/logo/O.png';
            break;
        case 'ธ.ก.ส.':
            bankText = 'ธ.ก.ส.';
            bankLogoUrl = 'image/logo/T.png';
            break;
        case 'ธ.อาคารสงเคราะห์':
            bankText = 'ธ.อาคารสงเคราะห์';
            bankLogoUrl = 'image/logo/C.png';
            break;
        case 'ธ.เกียรตินาคินภัทร':
            bankText = 'ธ.เกียรตินาคินภัทร';
            bankLogoUrl = 'image/logo/K.png';
            break;
        case 'ธ.ซีไอเอ็มบี':
            bankText = 'ธ.ซีไอเอ็มบี';
            bankLogoUrl = 'image/logo/CIMB.png';
            break;
        case 'ธ.ยูโอบี':
            bankText = 'ธ.ยูโอบี';
            bankLogoUrl = 'image/logo/UOB.png';
            break;
        case 'ธ.แลนด์ แอนด์ เฮ้าส์':
            bankText = 'ธ.แลนด์ แอนด์ เฮ้าส์';
            bankLogoUrl = 'image/logo/LHBANK.png';
            break;
        case 'ธ.ไอซีบีซี':
            bankText = 'ธ.ไอซีบีซี';
            bankLogoUrl = 'image/logo/ICBC.png';
            break;
        case 'รหัสพร้อมเพย์':
            bankText = 'รหัสพร้อมเพย์';
            bankLogoUrl = 'image/logo/P-KBANK.png';
            break;
        case 'พร้อมเพย์วอลเล็ท':
            bankLogoUrl = 'image/logo/P-KBANK.png';
            break;
        case 'MetaAds':
            bankLogoUrl = 'image/logo/Meta.png';
            break;
        case 'ทูซีทูพี':
            bankLogoUrl = 'image/logo/Ptb-KBANK.png';
            break;
        case 'SCB มณี SHOP':
            bankLogoUrl = 'image/logo/Ptb-KBANK.png';
            break;
    }

    const formattedDate = formatDate(datetime);
    const formattedTime = new Date(datetime).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    let backgroundImageSrc = backgroundSelect;
    if (bank === 'ทูซีทูพี') {
        canvas.width = 823;
        canvas.height = 1200;
    } else if (bank === 'SCB มณี SHOP') {
        canvas.width = 823;
        canvas.height = 1200;
    } else {
        canvas.width = 823;
        canvas.height = 1200;
        backgroundImageSrc = backgroundSelect; 
    }

    const backgroundImage = new Image();
    backgroundImage.src = backgroundImageSrc;
    backgroundImage.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        const bankLogo = new Image();
        bankLogo.src = bankLogoUrl;
        bankLogo.onload = function() {
            ctx.drawImage(bankLogo, 34.2, 515.7, 154, 154); 
            
            drawText(ctx, `${formattedDate}  ${formattedTime} น.`, 67.5, 133.1,37.5, 'kuriousRegular', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);

            if (bank === 'ทูซีทูพี') {
            drawText(ctx, `${sendername}`, 233.5, 265.8,39.3,'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `ธ.กสิกรไทย`, 233.5, 326.0,37.5, 'kuriousRegular', '#545454', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${senderaccount}`, 233.5, 384.0,37.5, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0.25);
            
            drawText(ctx, `ทูซีทูพี (ประเทศไทย)`, 233.5, receivernamePositionY,39.3, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${number2}`, 233.5, 624.8,37.5, 'kuriousRegular', '#545454', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${receiveraccount}`, 233.5,receiveraccountPositionY,37.5, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0.25);
            if (isMetaAds) {
                drawText(ctx, `${receiveraccount}`, 233.5, 681.7,
                        37.5, 'kuriousRegular', '#545454', 'left',
                        1.5, 1, 0, 0, 500, 0.25);
            drawText(ctx, `Meta Ads (KGP)`, 233.5, 564.3,39.3, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
            }
            drawText(ctx, `${generateUniqueID()}`, 449, 865.2,34.63, 'kuriousRegular', '#575757', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `${amount11} บาท`, 449, 980.9,38.44, 'kuriousSemiBold', '#4b4b4b', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `0.00 บาท`, 449, 1098.6,38.44, 'kuriousSemiBold', '#4b4b4b', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `${QRCode}`, 238.9, 599.0,33, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 5, 0, 0, 500, 0);
            
            drawImage(ctx, 'image/logo/KBANK.png', 34.2, 217.5, 154, 154);  
            
            drawText(ctx, `${AideMemoire}`, 204.3, 1173.1,30.23, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0);
            
            } else if (bank === 'SCB มณี SHOP') {
            drawText(ctx, `${sendername}`, 233.5, 265.8,37,'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `ธ.กสิกรไทย`, 233.5, 326.0,36.5, 'kuriousRegular', '#545454', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${senderaccount}`, 233.5, 384.0,36.5, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0.25);
            
            drawText(ctx, `SCB มณี SHOP (${receivername})`, 233.5, receivernamePositionY,37, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${receiveraccount}`, 233.5, 624.8,36.5, 'kuriousRegular', '#545454', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `SCB`, 233.5,receiveraccountPositionY,36.5, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0.25);
            if (isMetaAds) {
                drawText(ctx, `${receiveraccount}`, 233.5, 681.7,
                        37.5, 'kuriousRegular', '#545454', 'left',
                        1.5, 1, 0, 0, 500, 0.25);
            drawText(ctx, `Meta Ads (KGP)`, 233.5, 564.3,39.3, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);

            }
            drawText(ctx, `${generateUniqueID()}`, 449, 865.2,34.63, 'kuriousRegular', '#575757', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `${amount11} บาท`, 449, 980.9,38.44, 'kuriousSemiBold', '#4b4b4b', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `0.00 บาท`, 449, 1098.6,38.44, 'kuriousSemiBold', '#4b4b4b', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `${QRCode}`, 238.9, 599.0,33, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 5, 0, 0, 500, 0);
            
            drawImage(ctx, 'image/logo/KBANK.png', 34.2, 217.5, 154, 154);  
            
            drawText(ctx, `${AideMemoire}`, 204.3, 1173.1,30.23, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0);
            
            } else {

            drawText(ctx, `${sendername}`, 233.5, 265.8,39.3,'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `ธ.กสิกรไทย`, 233.5, 326.0,37.5, 'kuriousRegular', '#545454', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${senderaccount}`, 233.5, 384.0,37.5, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0.25);
            
            drawText(ctx, `${receivername}`, 233.5, receivernamePositionY,39.3, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, bankText, 233.5, 624.8,37.5, 'kuriousRegular', '#545454', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${receiveraccount}`, 233.5,receiveraccountPositionY,37.5, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0.25);
            if (isMetaAds) {
                drawText(ctx, `${receiveraccount}`, 233.5, 681.7,
                        37.5, 'kuriousRegular', '#545454', 'left',
                        1.5, 1, 0, 0, 500, 0.25);
            drawText(ctx, `Meta Ads (KGP)`, 233.5, 564.3,39.3, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 3, 0, 0, 800, 0);

            }
            drawText(ctx, `${generateUniqueID()}`, 449, 865.2,34.63, 'kuriousRegular', '#575757', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `${amount11} บาท`, 449, 980.9,38.44, 'kuriousSemiBold', '#4b4b4b', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `0.00 บาท`, 449, 1098.6,38.44, 'kuriousSemiBold', '#4b4b4b', 'right', 1.5, 3, 0, 0, 500, -1);
            drawText(ctx, `${QRCode}`, 238.9, 599.0,33, 'kuriousSemiBold', '#4e4e4e', 'left', 1.5, 5, 0, 0, 500, 0);
            
            drawImage(ctx, 'image/logo/KBANK.png', 34.2, 217.5, 154, 154);  
            
            drawText(ctx, `${AideMemoire}`, 204.3, 1173.1,30.23, 'kuriousRegular', '#545454', 'left', 1.5, 1, 0, 0, 500, 0);
            
            }
        
          
            if (selectedImage) {
                const customImage = new Image();
                customImage.src = selectedImage;
                customImage.onload = function() {
                    ctx.drawImage(customImage, 0, 0, 823, 1200); 
                }
            }
            
        }
    }
}

function drawText(ctx, text, x, y, fontSize, fontFamily, color, align, lineHeight, maxLines, shadowColor, shadowBlur, maxWidth, letterSpacing) {
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = shadowBlur;

    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        const lines = [];
        let currentLine = '';

        for (let i = 0; i < paragraph.length; i++) {
            const char = paragraph[i];
            const nextChar = i < paragraph.length - 1 ? paragraph[i + 1] : '';
            const isThai = /[\u0E00-\u0E7F]/.test(char);
            const isWhitespace = /\s/.test(char);

            if (isThai && !isWhitespace) {
                const testLine = currentLine + char;
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

                if (testWidth > maxWidth) {
                    lines.push(currentLine.trim());
                    currentLine = char;
                } else {
                    currentLine = testLine;
                }
            } else {
                const testLine = currentLine + char;
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

                if (testWidth > maxWidth) {
                    lines.push(currentLine.trim());
                    currentLine = char;
                } else {
                    currentLine = testLine;
                }
            }
        }

        lines.push(currentLine.trim());

        lines.forEach((line, index) => {
            let currentX = x;
            
            if (align === 'center') {
                currentX = x - (ctx.measureText(line).width / 2) - ((line.length - 1) * letterSpacing) / 2;
            } else if (align === 'right') {
                currentX = x - ctx.measureText(line).width - ((line.length - 1) * letterSpacing);
            }
        
            drawTextLine(ctx, line, currentX, currentY, letterSpacing);
            currentY += lineHeight;
            if (maxLines && index >= maxLines - 1) {
                return;
            }
        });
    });
}

function drawTextLine(ctx, text, x, y, letterSpacing) {
    if (!letterSpacing) {
        ctx.fillText(text, x, y);
        return;
    }

    const characters = text.split('');
    let currentPosition = x;

    characters.forEach((char, index) => {
        const charCode = char.charCodeAt(0);
        const prevChar = index > 0 ? characters[index - 1] : null;
        const prevCharCode = prevChar ? prevChar.charCodeAt(0) : null;

        const isUpperVowel = (charCode >= 0x0E34 && charCode <= 0x0E37);
        const isToneMark = (charCode >= 0x0E48 && charCode <= 0x0E4C);
        const isBeforeVowel = (charCode === 0x0E31);
        const isBelowVowel = (charCode >= 0x0E38 && charCode <= 0x0E3A);

        let yOffset = 0;
        let xOffset = 0;

        if (isUpperVowel) {
            yOffset = -1;
            xOffset = 0;
        }

        if (isToneMark) {
            if (prevChar && ((prevChar.charCodeAt(0) >= 0x0E34 && prevChar.charCodeAt(0) <= 0x0E37) || prevChar.charCodeAt(0) === 0x0E31)) {
                yOffset = -8;
                xOffset = 0;
            } else {
                yOffset = 0;
                xOffset = -7;
            }
        }

        if (isBeforeVowel) {
            yOffset = -1;
            xOffset = 1;
        }

        if (isBelowVowel) {
            yOffset = 0;
            xOffset = -10;
        }

        ctx.fillText(char, currentPosition + xOffset, y + yOffset);

        if (!isToneMark && !isBeforeVowel && !isBelowVowel) {
            currentPosition += ctx.measureText(char).width + letterSpacing;
        } else {
            currentPosition += ctx.measureText(char).width;
        }
    });
}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'canvas_image.png';
    link.click();
}

function drawImage(ctx, imageUrl, x, y, width, height) {
    const image = new Image();
    image.src = imageUrl;
    image.onload = function() {
        ctx.drawImage(image, x, y, width, height);
    };
}