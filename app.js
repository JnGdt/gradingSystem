function compute() {
    var quiz = document.getElementById('Prequiz').value
    var standing = document.getElementById('Prestanding').value
    var exam = document.getElementById('Preexam').value

    let PQuiz = parseInt(quiz) * 0.4
    let PStanding = parseInt(standing) * 0.1
    let PExam = parseInt(exam) * 0.5

    let Padd = parseInt(PQuiz) + parseInt(PStanding) + parseInt(PExam)
    let Prelim = parseInt(Padd) * 0.2


    var quiz = document.getElementById('Midquiz').value
    var standing = document.getElementById('Midstanding').value
    var exam = document.getElementById('Midexam').value

    let MQuiz = parseInt(quiz) * 0.4
    let MStanding = parseInt(standing) * 0.1
    let MExam = parseInt(exam) * 0.5

    let Madd = parseInt(MQuiz) + parseInt(MStanding) + parseInt(MExam)
    let Midterm = parseInt(Madd) * 0.2


    var quiz = document.getElementById('Prefquiz').value
    var standing = document.getElementById('Prefstanding').value
    var exam = document.getElementById('Prefexam').value

    let PFQuiz = parseInt(quiz) * 0.4
    let PFStanding = parseInt(standing) * 0.1
    let PFExam = parseInt(exam) * 0.5

    let PFadd = parseInt(PFQuiz) + parseInt(PFStanding) + parseInt(PFExam)
    let Prefinal = parseInt(PFadd) * 0.2


    var quiz = document.getElementById('Fquiz').value
    var standing = document.getElementById('Fstanding').value
    var exam = document.getElementById('Fexam').value

    let FQuiz = parseInt(quiz) * 0.4
    let FStanding = parseInt(standing) * 0.1
    let FExam = parseInt(exam) * 0.5

    let Fadd = parseInt(FQuiz) + parseInt(FStanding) + parseInt(FExam)
    let Final = parseInt(Fadd) * 0.4




    let add = parseInt(Prelim) + parseInt(Midterm) + parseInt(Prefinal) + parseInt(Final)

    alert('your grade ' + add)
}