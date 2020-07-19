// @ts-nocheck
import React from 'react';
import './create-diary.styles.scss'
import TextAreaDiary from './text-area/text-area-diary.component';

class DiaryCreation extends React.Component {
    constructor() {
        super();
    }

    render() {
        const labelNames = ['Summary', 'Learnings', 'Coninue To Do', 'Stop to do'];
        return (
            <div className='my-day-wrapper'>
                <form>
                {labelNames.map(function (name, index) {
                    return <TextAreaDiary key={index}>{name}</TextAreaDiary>;
                })}
                <input className='btn-submit' type="submit" value="Create my day" />
                </form>
            </div>
        )
    }
}

export default DiaryCreation;
