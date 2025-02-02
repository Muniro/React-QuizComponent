import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    render() {
        return (
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                  {this.props.quiz_question.answer_options.map( (answer) =>{
                    <QuizQuestionButton button_text={answer} />

                  })}
                

              </ul>
            </section>
          </main>
        )
    }
}

export default QuizQuestion;