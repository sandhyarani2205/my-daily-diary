// @ts-nocheck
import React from 'react';
import './text-area-diary.styles.scss'


class TextAreaDiary extends React.Component {
constructor(){
    super();
}

handleChange(event) {
    console.log(event.target.value);
  }

render(){
    return(
     <div className='text-area'>
        <label>
            <textarea rows='10' placeholder={this.props.children} onChange={this.handleChange} />
        </label>
    </div>
    );
}

}



export default TextAreaDiary;
