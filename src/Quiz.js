import React, { Component } from 'react'

import quizData from  './quiz_data.json'


class Quiz extends Component {

    constructor(props){

        super(props);
        this.state= {quiz_position: 1};
    }

    render() {

        return (
            <div className="QuizQuestion">
                 <p>{quizData.quiz_questions[0].instruction_text}</p>
            </div>
        )
    }
}


export default Quiz;