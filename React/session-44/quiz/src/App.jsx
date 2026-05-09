import React, { useState } from 'react'
import './App.css'
function App() 


{
  const Questions=[

    {
      QuestionText:'Who is cheif minister of Tamilnadu?',
      AnswerOptions:[
        {answerText:'Joshep Vijay',isCorrect:true},
        { answerText: "Rajdurai", isCorrect: false },
        { answerText: "Narendra Modi", isCorrect: false},
        { answerText: "Deepthi Patel", isCorrect: false },

      ]
    },
     {
        QuestionText: "Who is CEO of Tata?",
        AnswerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Ratan Tata", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Gautam Adani", isCorrect: false },
],
      },
     {
        QuestionText: "Which is the Nation Bird?",
        AnswerOptions: [
        { answerText: "Parrot", isCorrect: false },
        { answerText: "Peacock", isCorrect: true },
        { answerText: "Piegion", isCorrect: false },
        { answerText: "Crow", isCorrect: false },
],
     },
    {
        QuestionText: "How many countries are in the world?",
        AnswerOptions: [
        { answerText: "120", isCorrect: false },
        { answerText: "183", isCorrect: false },
        { answerText: "170", isCorrect: false },
        { answerText: "195", isCorrect: true },
        ],
    }
    
  ]

 const [score,setScore]=useState(0);
 const[currentQuestion,setCurrentQuestion]=useState(0)
const[showscore,setShowscore]=useState(false);

function ButtonClick(isCorrect)
{
    //isCorrect==true  score=1   iscorrect=false score

    if(isCorrect === true)
    {
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1;    //1   //2 //3 

    if(nextQuestion < Questions.length)
    {
      setCurrentQuestion(nextQuestion)
    }
    else{
      setShowscore(true)
    }

}


  return (
   <>
       <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 
       flex items-center justify-center">
       
        <div className="bg-white p-8 rounded-xl shadow-xl w-[400px] text-center">

          <h1 className="text-3xl font-bold mb-6 text-red-700">
                        Quiz App
          </h1>

          {/* showscore===false don't show score or showscore==ture  score visible */}

          {
            showscore ===true ? 
            (
              <h1>You have scored {score} out  of {Questions.length}</h1>
            ) 
            : 
            (
              <div className='Question-section'>

                     <h3 className='text-red-700'>Question {currentQuestion+1} / {Questions.length} </h3>
                      <h2>{Questions[currentQuestion].QuestionText}</h2>

                    <div className="grid gap-3">
                    {Questions[currentQuestion].AnswerOptions.map((a1, index) => (

                        <button
                        key={index}
                        onClick={() =>
                        ButtonClick(a1.isCorrect)
                        }
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg
                         hover:bg-blue-600 transition"
                        >

                        {a1.answerText}

                        </button>

                        ))
                      }


                    </div>


              </div>

             

            )
          }

        </div>
      </div>
   </>
  )
}

export default App


