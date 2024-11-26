const express = require('express');
const router = express.Router();

router.get("/firstpage1",function(req,res,next){
    res.render('login');
});

router.get("/firstpage",function(req,res,next){
    res.render('pageone');
});

router.get("/realfor",function(req,res,next)
{   
    var hm = parseFloat(req.query.txt4)
    var em = parseFloat(req.query.txt5)
    var mm = parseFloat(req.query.txt6)
    var pm = parseFloat(req.query.txt7)
    var cm = parseFloat(req.query.txt8)
    var csm = parseFloat(req.query.txt9)

    var total = parseFloat(hm+em+mm+pm+cm+csm)


    if(req.query.gender=='Male')
    {
        
        var sp= 'Ma.'
        var fp= 'S/O'
    }
    else
    {
        
        var sp= 'Ms.'
        var fp= 'D/O'
    }
    
    var outcome=''

    if(hm>=35 && em>=35 && mm>=35 && pm>=35 && cm>=35 && csm>=35)
    {
        var outcome='PASS'
    }
    else
    {
        var outcome='FAIL'
    }


    
    
    // var marks = [hm,em,mm,pm,cm,csm]
    
    
        // {
        //     var grade1;

        //     if(hm>=90 && hm< 100 )
        //          grade1='A'
            
        //     else if(hm>=70 && hm< 90)
        //          grade1='B'
            
        //     else if(hm>=50 && hm< 70)
        //          grade1='C'
            
        //     else if(hm>=33 && hm< 50)
        //          grade1='D'
            
        //     else if(hm<33)
        //          grade1='FAIL'
            
        // }
        // {
        //     var grade2;

        //     if(em>=90 && em< 100 )
        //          grade2='A'
            
        //     else if(em>=70 && em< 90)
        //          grade2='B'
            
        //     else if(em>=50 && em< 70)
        //          grade2='C'
            
        //     else if(em>=33 && em< 50)
        //          grade2='D'
            
        //     else if(em<33)
        //          grade2='FAIL'
            
        // }
        // {
        //     var grade3;

        //     if(mm>=90 && mm< 100 )
        //         grade3='A'
            
        //     else if(mm>=70 && mm< 90)
        //         grade3='B'
            
        //     else if(mm>=50 && mm< 70)
        //         grade3='C'
            
        //     else if(mm>=33 && mm< 50)
        //         grade3='D'
            
        //     else if(mm<33)
        //         grade3='FAIL'
            
        // }
        // {
        //     var grade4;

        //     if(pm>=90 && pm< 100 )
        //         grade4='A'
            
        //     else if(pm>=70 && pm< 90)
        //         grade4='B'
            
        //     else if(pm>=50 && pm< 70)
        //         grade4='C'
            
        //     else if(pm>=33 && pm< 50)
        //         grade4='D'
            
        //     else if(pm<33)
        //         grade4='FAIL'
            
        // }
        // {
        //     var grade5;

        //     if(cm>=90 && cm< 100 )
        //         grade5='A'
            
        //     else if(cm>=70 && cm< 90)
        //         grade5='B'
            
        //     else if(cm>=50 && cm< 70)
        //         grade5='C'
            
        //     else if(cm>=33 && cm< 50)
        //         grade5='D'
            
        //     else if(cm<33)
        //         grade5='FAIL'
            
        // }
        // {
        //     var grade6;

        //     if(csm>=90 && csm< 100 )
        //         grade6='A'
            
        //     else if(csm>=70 && csm< 90)
        //         grade6='B'
            
        //     else if(csm>=50 && csm< 70)
        //         grade6='C'
            
        //     else if(csm>=33 && csm< 50)
        //         grade6='D'
            
        //     else if(csm<33)
        //         grade6='FAIL'
            
        // }
        let grade = [];
        marks = [hm,em,mm,pm,cm,csm]

        for(i=0;i<=6;i++)
        {
            if(marks[i]>=90 && marks[i]<= 100 )
                grade[i]='A'
            
            else if(marks[i]>=70 && marks[i]< 90)
                grade[i]='B'
            
            else if(marks[i]>=50 && marks[i]< 70)
                grade[i]='C'
            
            else if(marks[i]>=33 && marks[i]< 50)
                grade[i]='D'
            
            else if(marks[i]<33)
                grade[i]='FAIL'
            
        }











       var percentage = total/600*100

       


       
    
    
    //    grade1:grade1,grade2:grade2,grade3:grade3,grade4:grade4,grade5:grade5,grade6:grade6,
    
    
    res.render('pagetwo',{detail:req.query,sp:sp,fp:fp,total:total,outcome:outcome,percentage:percentage,grade:grade});

});

module.exports = router;


