import React from 'react';
import './Widgets.css';
// import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="wigets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoOutlinedIcon />
        </div>

        {newsArticle('Why you should use ReactJS', 'Top News - 5264 readers')}
        {newsArticle('Frontend or Backend, what is the difference ?', 'Top News - 3521 readers')}
        {newsArticle('Coronavirus: new updates', 'Top News - 4597 readers')}
        {newsArticle('Elon Musk bought Twitter confirmed', 'Top News - 6416 readers')}
        {newsArticle('Are NFTs a scam ?', 'Top News - 2210 readers')}
        {newsArticle('Best learning resources for junior developers', 'Top News - 3140 readers')}
    </div>
  )
}

export default Widgets;