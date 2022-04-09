let calc = {
    numbA:  '',
    act: null,
    numbB: '',
}

const numbers = ['0','1','2','3','4','5','6','7','8','9'];

const actions = ['plus','mine','divi','mult'];

$(document).ready(function () {
    console.log(calc);
    $(".vvd").text(0);

    for (let i = 0; i < numbers.length; i++) {
        const e = numbers[i];

        $("#" + e).click(function() {
            console.log("#" + e);
    
            if(!calc.act) {
                calc.numbA += e;
                $(".vvd").text(calc.numbA);}
            else {
                calc.numbB += e;
                $(".vvd").text(calc.numbB);
            }
    
            console.log(calc);
        });
    }

    for (let i = 0; i < actions.length; i++) {
        const e = actions[i];
        $("#" + e).click(function () {
            console.log("#" + e);
    
            calc.act = e;
    
            console.log(calc);
        });
    }
    $("#rvn").click(function () {
        console.log("#rvn");
        let rvn = null
        if(calc.act === 'plus') {
            rvn = Number(calc.numbA) + Number(calc.numbB);
        }
        if(calc.act === 'mine') {
            rvn = Number(calc.numbA) - Number(calc.numbB);
        }
        if(calc.act === 'divi') {
            rvn = Number(calc.numbA) / Number(calc.numbB);
        }
        if(calc.act === 'mult') {
            rvn = Number(calc.numbA) * Number(calc.numbB);
        }
        $(".vvd").text(rvn);
        calc.numbA = '';
        calc.numbB = '';
        calc.act = null;
    });
});
