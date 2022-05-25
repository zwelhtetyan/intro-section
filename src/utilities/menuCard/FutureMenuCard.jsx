import React from 'react';
import todoIcon from '../../images/icon-todo.svg';
import calendarIcon from '../../images/icon-calendar.svg';
import reminderIcon from '../../images/icon-reminders.svg';
import planningIcon from '../../images/icon-planning.svg';
import { FutureMenuCardContainer } from './MenuCard.style';

const FutureMenuCard = ({ menuToggler }) => {
    return (
        <FutureMenuCardContainer>
            <p onClick={menuToggler}>
                <img src={todoIcon} alt='' /> TodoList
            </p>
            <p onClick={menuToggler}>
                <img src={calendarIcon} alt='' /> Calendar
            </p>
            <p onClick={menuToggler}>
                <img src={reminderIcon} alt='' /> Reminders
            </p>
            <p onClick={menuToggler}>
                <img src={planningIcon} alt='' /> Planning
            </p>
        </FutureMenuCardContainer>
    );
};

export default FutureMenuCard;
