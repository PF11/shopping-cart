import React, { Component } from 'react';
import TrekIcon from 'react-icons';
import TropicIcon from 'react-icons';
import ClubIcon from 'react-icons';

const getProgress = (total,goal) => {
    return Math.floor((total/goal)*100) + '%';
}

const getProgressBarWidth = (width) => {
    return {width};
}

export const TripsCount = ({total, tropic, trek, club, goal=15}) => (
 <div className="trips-count">
 <div className="content">
 <div className="total"><h1>{total}</h1>trips</div>
 <div className="tropic"><h1>{tropic}</h1>tropic</div>
 <div className="trek"><h1>{trek}</h1>trek</div>
 <div className="club"><h1>{club}</h1>club</div>
 <div className="goal"><div className="progress" stytle={getProgressBarWidth(getProgress(total,goal))}></div>{getProgress(total,goal)}</div>
 </div>
     </div>
)