const burenJson = `{
      "customer": {
            "firstname": "МАГСАРЖАВ",
            "lastname": "БАТАА",
            "address": null,
            "registerno": "ПД88040279",
            "familyname": null,
            "nationality": null
        },
        "count": 2,
        "pdf": null,
        "liveStockDetail": null,
        "liveStocks": null,
        "inquiry": {
            "CITIZEN_MAIN": [
                {
                    "ROWNUM": 1,
                    "AA_ORGCODE": null,
                    "AA_LOANCODE": null,
                    "LASTNAME": "БАТАА",
                    "CUSTOMERNAME": "МАГСАРЖАВ",
                    "REGISTERNO": "ПД88040279",
                    "LOANTYPE": "Зээл",
                    "CURRENCYCODE": "MNT",
                    "ADVAMOUNT": 30000000,
                    "EXPDATE": "2023-04-04",
                    "STARTEDDATE": "2013-08-29",
                    "PAID_DATE": "2023-04-04",
                    "INTERESTINPREC": 8.0,
                    "BALANCE": 0.0,
                    "LOANCLASS": "Хэвийн",
                    "SUBMRTNAME": [
                        "Орон сууц",
                        "Гэр ахуйн эд хогшил"
                    ],
                    "STATEREGISTERNO": [
                        "Ү220456998",
                        "ПД88040279"
                    ],
                    "ORGNAME": null,
                    "DESCRIPTION": null,
                    "COREGISTERNO": null,
                    "COLASTNAME": null,
                    "COFIRSTNAME": null,
                    "COSTATEREGISTERNO": null,
                    "RELATION_TYPE": "MAIN",
                    "SUBMRT": [
                        {
                            "NAME": "Орон сууц",
                            "NUMBER": "Ү220456998"
                        },
                        {
                            "NAME": "Гэр ахуйн эд хогшил",
                            "NUMBER": "ПД88040279"
                        }
                    ],
                    "HAS_CORELATION": null,
                    "LOAN_CLASS_CHANGED": null
                },
                {
                    "ROWNUM": 2,
                    "AA_ORGCODE": null,
                    "AA_LOANCODE": null,
                    "LASTNAME": "БАТАА",
                    "CUSTOMERNAME": "МАГСАРЖАВ",
                    "REGISTERNO": "ПД88040279",
                    "LOANTYPE": "Зээл",
                    "CURRENCYCODE": "MNT",
                    "ADVAMOUNT": 1800000.0,
                    "EXPDATE": "2024-09-08",
                    "STARTEDDATE": "2024-05-08",
                    "PAID_DATE": null,
                    "INTERESTINPREC": null,
                    "BALANCE": 1800000.0,
                    "LOANCLASS": "Хэвийн",
                    "SUBMRTNAME": [],
                    "STATEREGISTERNO": [],
                    "ORGNAME": null,
                    "DESCRIPTION": null,
                    "COREGISTERNO": null,
                    "COLASTNAME": null,
                    "COFIRSTNAME": null,
                    "COSTATEREGISTERNO": null,
                    "RELATION_TYPE": "MAIN",
                    "SUBMRT": [],
                    "HAS_CORELATION": null,
                    "LOAN_CLASS_CHANGED": null
                }
            ]
        },
        "histories": [
            {
                "requester": "Рэнтпэй финанс ББСБ",
                "requestedDate": "2024-05-27 12: 39: 55",
                "purpose": "LOAN_CHECK"
            },
            {
                "requester": "Рэнтпэй финанс ББСБ",
                "requestedDate": "2024-05-24 16: 21: 25",
                "purpose": "LOAN_CHECK"
            },
            {
                "requester": "Худалдаа хөгжлийн банк",
                "requestedDate": "2024-05-15 11: 35: 24",
                "purpose": "NEW_LOAN"
            }
        ],
        "xypResultCode": null,
        "groupedPurposes": [
            {
                "purposeCode": 100,
                "count": 5,
                "purpose": "NEW_LOAN",
                "description": "Шинэ зээлийн судалгаа"
            },
            {
                "purposeCode": 200,
                "count": 3,
                "purpose": "LOAN_CHECK",
                "description": "Явц хяналтын судалгаа"
            }
        ],
        "creditInformation": {
            "creditSummary": {
                "outstandingLoans": {
                    "badLoanCount": 0,
                    "normalLoanCount": 1,
                    "overdueLoanCount": 0,
                    "loanCount": 1,
                    "totalAmount": 1800000.0
                },
                "closedLoans": {
                    "badLoanCount": 0,
                    "normalLoanCount": 1,
                    "overdueLoanCount": 0,
                    "loanCount": 1,
                    "totalAmount": 30000000
                },
                "relLoans": {
                    "badLoanCount": 0,
                    "normalLoanCount": 0,
                    "overdueLoanCount": 0,
                    "loanCount": 0,
                    "totalAmount": 0
                }
            },
            "outstandingByCreditors": {
                "summaryByCreditors": [
                    {
                        "creditorName": "OTHER",
                        "loanCount": 1,
                        "outStandingTotalBalance": 1800000.0,
                        "outStandingTotalAmount": 1800000.0,
                        "creditorAddress": null,
                        "creditorPhoneNum": null
                    }
                ],
                "sumOutstandingLoanCount": 1,
                "sumOutstandingTotalAmount": 1800000.0,
                "sumOutstandingTotalBalance": 1800000.0,
                "repaymentPercentage": 0.0
            }
        },
        "totalLivestock": null
}`;

// Дан систем рүү хүсэлт илгээхдээ огноог сүүлийн 3 сарын дата ирдэг байхаар тохируулна
// Жишээлбэл өнөөдөр 2024.02 сар байг, тэгвэл 2023 оны болон 2024 оны мэдээллийг 2ланг татхаар хүсэлтээ илгээнэ гэсэ үг
const danJson = `{
    "list": [
        {
            "isPaid": 0,
            "orgName": "",
            "orgId": "",
            "salaryAmount": 3084438,
            "salaryFee": 740265,
            "year": 2024,
            "month": 5
        },
        {
            "isPaid": 1,
            "orgName": "",
            "orgId": "",
            "salaryAmount": 2000000,
            "salaryFee": 420000,
            "year": 2024,
            "month": 4
        },
        {
            "isPaid": 1,
            "orgName": "",
            "orgId": "",
            "salaryAmount": 3084438,
            "salaryFee": 740265,
            "year": 2024,
            "month": 4
        },
        {
            "isPaid": 1,
            "orgName": "",
            "orgId": "",
            "salaryAmount": 3084438,
            "salaryFee": 740265,
            "year": 2024,
            "month": 3
        },
        {
            "isPaid": 1,
            "orgName": "",
            "orgId": "",
            "salaryAmount": 2000000,
            "salaryFee": 420000,
            "year": 2024,
            "month": 3
        },
        {
            "isPaid": 1,
            "orgName": "",
            "orgId": "",
            "salaryAmount": 84700,
            "salaryFee": 19311,
            "year": 2024,
            "month": 3
        },
        {
            "isPaid": 1,
            "orgName": "",
            "orgId": "",
            "salaryAmount": 2000000,
            "salaryFee": 420000,
            "year": 2024,
            "month": 2
        },
        {
            "isPaid": 1,
            "orgName": "",
            "orgId": "",
            "salaryAmount": 3112938,
            "salaryFee": 747105,
            "year": 2024,
            "month": 2
        }
    ]
}`;

const RESPONSE_MESSAGE = [
    "Чанаргүй зээлийн түүхтэй",
    "Сард төлөх нийт зээл орлогоосоо давсан",
    "Амжилттай",
]; //Системээс буцаах мессеж

const INTEREST_RATE = 0.02; // Зээлийн сарын дундаж хүү болох 2%
const TOP4_BANK = ["Хаан банк", "Голомт банк", "ХХБ", "Төрийн банк"]; // Энэ 4 нэр яг ийм фоматаар ирэхгүй болов уу, ирсэн өгөгдлийг харж байгаад зөв болгоорой
const LAST_MONTH_SALARY = 3; // Сарын дундаж цалинг бодохдоо сүүлийн хэдэн сарын НДШ ашиглах вэ гэсэн үг

const AGE_BONUS_TRESHOLD = 23; //Бонус оноо тооцох насны босго
const PHONE_BONUS_A = ["8888", "9911", "8811"]; //2 оноо авах утасны дугаарууд
const PHONE_BONUS_B = [
    "9900",
    "9901",
    "9902",
    "9903",
    "9904",
    "9905",
    "9906",
    "9907",
    "9908",
    "9909",
    "9910",
    "9917",
    "9919",
]; // 1 оноо авах утасны дугаарууд

const POINT_PER_PAYMENT = 0.2; // Нэг амжилттай түрээс төлөлтөд харгалзах оноо
const BONUS_PER_POINT = 50000; // Нэг бонус оноонд харгалзах мөнгөн дүн

const LOAN_K = [0.0, 0.6, 0.7, 0.8, 1.0]; // Зээлийн муу түүхэнд харгалзах үржүүлэх коэффициент
const LIVING_COST = 0.7; // Сарын гар дээр авдаг цалингаас амжиргааны зардал хасах хувь - 30%

// Бонус оноо тооцох функц
function calcBonusPoint(registerNo, phoneNo, top4, rentpayCount) {
    genderBonus = 0;
    ageBonus = 0;
    phoneBonus = 0;
    top4Bonus = 0;
    rpBonus = 0;

    // Хүйсэнд оноо тооцох
    gender = registerNo.charAt(8);
    if (parseInt(gender, 10) % 2 == 0) {
        genderBonus = 1;
    }

    // Насанд оноо тооцох
    bDayStr = registerNo.slice(2, 8);
    if (parseInt(bDayStr.slice(0, 2), 10) < 10) {
        m = bDayStr.slice(2, 3);
        month = "0";
        if (m == "3") {
            month = "1";
        }
        month = month + bDayStr.slice(3, 4);
        bDayStr =
            "20" + bDayStr.slice(0, 2) + "-" + month + "-" + bDayStr.slice(4, 6);
    } else {
        bDayStr =
            "19" +
            bDayStr.slice(0, 2) +
            "-" +
            bDayStr.slice(2, 4) +
            "-" +
            bDayStr.slice(4, 6);
    }

    birthDate = new Date(bDayStr);
    today = new Date();
    age = today.getFullYear() - birthDate.getFullYear();
    mDif = today.getMonth() - birthDate.getMonth();
    if (mDif < 0 || (mDif === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age >= AGE_BONUS_TRESHOLD) {
        ageBonus = 1;
    }

    //Утасны дугаарт оноо тооцох
    if (PHONE_BONUS_A.indexOf(phoneNo.slice(0, 4)) > -1) {
        phoneBonus = 2;
    } else if (PHONE_BONUS_B.indexOf(phoneNo.slice(0, 4)) > -1) {
        phoneBonus = 1;
    }

    //Топ 4 банкнаас зээлдэгчид оноо тооцох
    if (top4) {
        top4Bonus = 2;
    }

    //Рэнтпэй-ийн хэрэглэгчийн түрээс амжилттай төлсөн тоонд оноо тооцох
    rpBonus = Math.min(4.0, rentpayCount * POINT_PER_PAYMENT); //Энэ бонус оноо хамгийн ихдээ 4 байна

    res = [genderBonus, ageBonus, phoneBonus, top4Bonus, rpBonus];
    //console.log(res);

    return res;
}

//Бонус оноонд харгалзах мөнгөн дүн тооцох функц
function calcBonusAmount(bonusPoint) {
    totalBonus = bonusPoint.reduce((partialSum, a) => partialSum + a, 0);
    return BONUS_PER_POINT * totalBonus;
}

//Муу зээлийн түүхэнд харгалзах үржих коэффициент тооцох функц
function calcKIndex(data) {
    K_INDEX = 4;
    RES_MSG_INDEX = 2;

    for (i = 0; i < data.length; i++) {
        if (
            data[i]["LOANTYPE"] == "Зээл" ||
            data[i]["LOANTYPE"] == "Зээлийн шугам"
        ) {
            if (data[i]["LOANCLASS"] != "Хэвийн") {
                if (data[i]["BALANCE"] > 0) {
                    K_INDEX = 0;
                    RES_MSG_INDEX = 0;
                    break;
                } else {
                    paidDate = new Date(data[i]["PAID_DATE"]);
                    today = new Date();
                    duration = today.getFullYear() - paidDate.getFullYear();
                    if (duration <= 3) {
                        K_INDEX = 0;
                        RES_MSG_INDEX = 0;
                        break;
                    } else if (duration == 4) {
                        K_INDEX = Math.min(1, K_INDEX);
                    } else if (duration == 5) {
                        K_INDEX = Math.min(2, K_INDEX);
                    } else if (duration == 6) {
                        K_INDEX = Math.min(3, K_INDEX);
                    } else {
                        K_INDEX = Math.min(4, K_INDEX);
                    }
                }
            }
        }
    }

    return [K_INDEX, RES_MSG_INDEX];
}

//Зээлэндээ сард төлж буй нийт дүнг тооцох функц
function calcLoanAmount(data) {
    amount = 0;
    top4 = false;
    for (i = 0; i < data.length; i++) {
        if (data[i]["LOANTYPE"] == "Зээл" && data[i]["PAID_DATE"] == null) {
            expDate = new Date(data[i]["EXPDATE"]);
            startDate = new Date(data[i]["STARTEDDATE"]);

            yDif = expDate.getFullYear() - startDate.getFullYear();
            mDif = expDate.getMonth() - startDate.getMonth();
            remMonth = yDif * 12 + mDif;
            //console.log(remMonth + " " + startDate + " " + expDate);
            if (remMonth > 0) {
                amount += data[i]["ADVAMOUNT"] * (1 + INTEREST_RATE * remMonth) / remMonth;
            }

        }

        if (
            data[i]["LOANTYPE"] == "Зээл" &&
            TOP4_BANK.indexOf(data[i]["ORGNAME"]) > -1
        ) {
            top4 = true;
        }
    }
    return [Math.ceil(amount), top4];
}

//Сарын цэвэр орлого тооцох функц
function calcNetIncome(data) {
    netSalary = 0;

    today = new Date();
    ty = today.getFullYear();
    tm = today.getMonth();
    td = today.getDate();

    lm_year = new Array(LAST_MONTH_SALARY);
    lm_month = new Array(LAST_MONTH_SALARY);


    //Сүүлийн сарын НДШ 7-ноос өмнө бол шивэгдээгүй байдаг
    if (td < 7) {
        if (tm > 0) {
            tm = tm - 1;
        } else {
            tm = 11;
            ty = ty - 1;
        }
    }

    //Сүүлийн LAST_MONTH_SALARY сарыг онтой нь хамт тооцох давталт, JS дээр сар 1-с биш, 0-с эхэлдэг
    for (i = 0; i < LAST_MONTH_SALARY; i++) {
        if (tm - (i + 1) < 0) {
            lm_month[i] = tm - i + 12;
            lm_year[i] = ty - 1;
        } else {
            lm_month[i] = tm - i;
            lm_year[i] = ty;
        }
    }


    for (i = 0; i < data.length; i++) {
        for (j = 0; j < LAST_MONTH_SALARY; j++) {
            if (data[i]["year"] == lm_year[j] && data[i]["month"] == lm_month[j]) {
                netSalary += data[i]["salaryAmount"] - data[i]["salaryFee"];
                break;
            }
        }
    }

    return Math.ceil(netSalary / LAST_MONTH_SALARY * LIVING_COST);
}

/*Хэрэглэгчийн эрх тооцох үндсэн функц
Оролт
-----------------
registerNo: Хэрэглэгчийн регистрийн дугаар
phoneNo: Хэрэглэгчийн утасны дугаар,
rentpayCount: Манайхаар байр түрээслэхдээ сарын түрээс амжилттай (алдангигүйгээр) төлсөн тоо
buren: Burenscore-с ирж буй JSON
ndsh: Дан-с ирж буй НДШ-ийн JSON
 
Гаралт
-----------------
Манайхаас тогтоосон эрх - Мөнгөн дүн
Системээс буцаах мессеж - Текст
*/
function calcMain(registerNo, phoneNo, rentpayCount, buren, ndsh) {
    C = calcKIndex(buren);

    if (C[1] == 0) {
        return [0, RESPONSE_MESSAGE[0]];
    }

    A = calcNetIncome(ndsh);
    B = calcLoanAmount(buren);

    //console.log(A + " " + B[0] + " " + B[1]);

    if (A - B[0] < 0) {
        return [0, RESPONSE_MESSAGE[1]];
    }

    D = calcBonusPoint(registerNo, phoneNo, B[1], rentpayCount);
    E = calcBonusAmount(D);


    T = (A - B[0]) * LOAN_K[C[0]] + E;

    return [Math.ceil(T), RESPONSE_MESSAGE[2]];
}

//Бүрэнгээс ирэх ЗМС-ийн дата
obj = JSON.parse(burenJson);
buren = obj["inquiry"]["CITIZEN_MAIN"];

//Дангаас ирэх НДШ дата
obj = JSON.parse(danJson);
ndsh = obj["list"];

//Жишээ хүн 1
p1 = calcMain("ПД88040279", "88605408", 3, buren, ndsh);
console.log(p1);
