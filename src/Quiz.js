import React, { Component } from 'react';
import QuizEnd from './QuizEnd';
import QuizQuestion from './QuizQuestion';

let quizData = require( './quiz_data.json');
class Quiz extends Component {

    constructor(props){

        super(props);
        this.state= {quiz_position: 1};
    }

    render() {

        const isQuizEnd = (this.state.quiz_position-1) ==  quizData.quiz_questions.length;
        let quizNext;
        
        if (isQuizEnd)
        {
            quizNext= <QuizEnd />
        }
        else{
            quizNext = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />
        }
        return (
            <div>
                <div className="QuizQuestion">
                   
                    {quizNext}
                      
                </div>
            </div>
        )
    }
}


export default Quiz;